// Next.js에서는 이 파일을 app/providers.jsx라고 부릅니다.
'use client'

// QueryClientProvider는 내부적으로 useContext를 사용하기 때문에 맨 위에 'use client'를 추가해야 합니다.
import { isServer, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// QueryClient 인스턴스를 생성하는 함수입니다.
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // SSR(서버 사이드 렌더링)에서는 보통 staleTime(데이터 신선도 유지 시간)을
        // 0보다 큰 값으로 설정해, 클라이언트에서 바로 재요청하는 것을 방지하고자 합니다.
        staleTime: 60 * 1000
      }
    }
  })
}

let browserQueryClient: QueryClient | undefined = undefined

// QueryClient 인스턴스를 가져오는 함수입니다.
function getQueryClient() {
  if (isServer) {
    // 서버: 항상 새로운 QueryClient를 생성합니다.
    return makeQueryClient()
  } else {
    // 브라우저: 만약 QueryClient가 없다면 새로운 인스턴스를 생성합니다.
    // 이는 React가 초기 렌더링 동안 suspend(일시 중단)할 경우 새로운 클라이언트를 계속 만드는 것을 방지하기 위함입니다.
    // 만약 QueryClient 생성 아래에 suspense boundary가 있다면 이 코드가 필요하지 않을 수도 있습니다.
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}

// children이 어떻게 동작하는지 설명:
// children은 클라이언트 컴포넌트 안에서 서버 컴포넌트 트리를 받아옵니다. 이를 통해 해당 부분만 클라이언트 컴포넌트로 작동하게 됩니다.
// children에 포함된 경우, 다시 그 컴포넌트 안에서 'use client' 선언 전까지는 서버 컴포넌트로 작동하게 됩니다.
export default function Providers({ children }: { children: React.ReactNode }) {
  // 참고: suspense boundary(서스펜스 경계)가 이 코드와 suspend될 수 있는 코드 사이에 없다면,
  //       QueryClient를 초기화할 때 useState 사용을 피하세요.
  //       React가 초기 렌더링 중에 suspend되고 경계가 없는 경우 클라이언트를 폐기해버리기 때문입니다.
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
