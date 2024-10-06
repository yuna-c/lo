# lolDex: Riot API를 활용한 리그 오브 레전드 정보 앱

[Next.js](https://nextjs.org)와 Riot API를 활용하여 리그 오브 레전드의 챔피언 정보를 조회하고 무료 챔피언 로테이션 등을 제공하는 웹 애플리케이션
<br> 이 프로젝트는 Next.js와 TypeScript를 사용하여 개발되었으며, 사용자가 리그 오브 레전드와 관련된 정보를 쉽게 얻을 수 있도록 하는 것을 목표

## 목차

- [시작하기](#시작하기)
- [기능](#기능)
- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [학습 자료](#학습-자료)
- [트러블 슈팅](#트러블-슈팅)

## 시작하기

npx create-next-app@latest
yarn
yarn dev

- **TypeScript**: 타입 안전성을 위해 사용
- **ESLint**: 코드 품질과 일관성을 유지하기 위해 사용
- **Tailwind CSS**: 빠르고 쉽게 스타일링을 하기 위해 사용
- **src/** 디렉토리 사용: 프로젝트 구조를 깔끔하게 유지하기 위해 사용
- **App Router 사용**: Next.js의 새로운 라우팅 시스템으로, 폴더 구조 기반의 라우팅을 지원
- **커스텀 import alias**: `@/*`로 설정하여 절대 경로 임포트를 쉽게 가능

```bash
What is your project named? my-app
Would you like to use TypeScript? Yes
Would you like to use ESLint? Yes/No
Would you like to use Tailwind CSS? Yes
Would you like to use `src/` directory? Yes
Would you like to use App Router? (recommended) Yes
Would you like to customize the default import alias (@/*)? Yes
What import alias would you like configured? @/*
```

## 기능

- 챔피언 정보 조회: 모든 리그 오브 레전드 챔피언 정보 확인
- 챔피언 로테이션: 현재 무료로 플레이 가능한 챔피언 로테이션을 확인
- 챔피언 상세 보기: 각 챔피언의 상세 정보, 스킬, 스킨 등을 확인
- 다크 모드: 사용자의 편의를 위해 다크 모드를 지원

## 기술 스택

프레임워크: Next.js (App Router 사용)
언어: TypeScript
스타일링: Tailwind CSS
상태 관리: Zustand
API: Riot Games API
아이콘: Lucide React
폰트: Pretendard

## 프로젝트 구조

```
lol-dex
├─ public
│  ├─ etcs
│  ├─ fonts
│  ├─ icons
│  └─ images
├─ src
│  ├─ app
│  │  ├─ (info)
│  │  │  ├─ champions
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ [id]
│  │  │  │     ├─ Detail.tsx
│  │  │  │     └─ page.tsx
│  │  │  ├─ error.tsx
│  │  │  ├─ items
│  │  │  │  └─ page.tsx
│  │  │  ├─ layout.tsx
│  │  │  └─ rotation
│  │  │     └─ page.tsx
│  │  ├─ api
│  │  │  └─ rotation
│  │  │     └─ route.ts
│  │  ├─ global-error.tsx
│  │  ├─ layout.tsx
│  │  ├─ loading.tsx
│  │  ├─ not-found.tsx
│  │  └─ page.tsx
│  ├─ components
│  │  ├─ champions
│  │  │  ├─ CardItems.tsx
│  │  │  └─ ModalItems.tsx
│  │  ├─ layout
│  │  │  ├─ DarkMode.tsx
│  │  │  ├─ Footer.tsx
│  │  │  ├─ Header.tsx
│  │  │  ├─ Nav.tsx
│  │  │  └─ ScrollTop.tsx
│  │  ├─ shared
│  │  │  ├─ CarouselItems.tsx
│  │  │  ├─ ReusableCard.tsx
│  │  │  └─ ReusableModal.tsx
│  │  └─ ui
│  │     ├─ button.tsx
│  │     ├─ card.tsx
│  │     ├─ carousel.tsx
│  │     ├─ dialog.tsx
│  │     ├─ input.tsx
│  │     ├─ label.tsx
│  │     └─ select.tsx
│  ├─ lib
│  │  ├─ constants
│  │  │  └─ constants.ts
│  │  ├─ providers
│  │  │  └─ RQProvider.tsx
│  │  ├─ stores
│  │  │  ├─ useDarkStore.ts
│  │  │  ├─ useScrollStore.ts
│  │  │  └─ useStateStore.ts
│  │  ├─ types
│  │  │  ├─ Champion.ts
│  │  │  ├─ Item.ts
│  │  │  └─ Rotation.ts
│  │  └─ utils
│  │     ├─ className.ts
│  │     ├─ rotateApi.ts
│  │     └─ serverApi.ts
│  └─ styles
│     ├─ detail.css
│     └─ globals.css
├─ .eslintrc.json
├─ next.config.mjs
├─ tailwind.config.ts
└─ README.md

```

## 학습 자료

- 프로젝트: Next.js와 TypeScript에 대한 학습을 목적

Next.js Documentation - Next.js의 기능과 API에 대해 학습
Learn Next.js - Next.js에 대한 상호작용 학습 자료
Riot Games API Documentation - Riot API에 대한 정보

## 트러블 슈팅

1. 환경 변수 설정 문제

문제: NEXT*PUBLIC* 접두사가 누락되어 클라이언트에서 환경 변수를 불러올 수 없었습니다.
해결: NEXT*PUBLIC*을 추가하여 클라이언트 측에서 API 키에 접근할 수 있도록 수정했습니다.

```
const apiUrl = process.env.NEXT_PUBLIC_RIOT_API_URL;
const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;

if (!apiKey) {
  return NextResponse.json(
    { error: "API 요청 중 에러가 발생" },
    { status: 500 }
  );
}
```

2. API 호출 문제

문제: 챔피언 로테이션 데이터를 Riot API에서 가져올 때, 잘못된 API 키나 누락된 환경 변수로 인해 403 Forbidden 에러가 발생했습니다.
해결: 환경 변수를 올바르게 설정하고 접근 가능한 상태로 변경했습니다.

```
const fetchChampionRotation = async () => {
  try {
    const response = await fetch(`${apiUrl}/lol/platform/v3/champion-rotations?api_key=${apiKey}`);
    if (!response.ok) {
      throw new Error("Failed to fetch champion rotation");
    }
    const data = await response.json();
    // 이후 로직 처리
  } catch (error) {
    console.error("API 요청 실패:", error);
  }
};

```

3. 캐싱 및 데이터 유효성 문제

문제: Riot API 데이터를 /api/rotation에서 가져올 때, no-store fetch 설정으로 인해 Dynamic server usage 오류와 캐싱 문제가 발생했습니다.
해결: revalidate: 86400 옵션을 추가하여 하루마다 데이터를 갱신하도록 설정했습니다.

```
import { NextResponse } from 'next/server';
import { Rotation } from '@/lib/types/Rotation';
import { rotateApiUrl } from '@/lib/constants/constants';

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY as string;

  if (!apiKey) {
    return NextResponse.json({ error: 'API 요청 중 에러가 발생' }, { status: 500 });
  }

  try {
    const res = await fetch(rotateApiUrl, {
      method: 'GET',
      headers: {
        'X-Riot-Token': apiKey,
      },
      next: {
        revalidate: 86400, // 하루마다 데이터를 갱신
      },
    });

    if (!res.ok) {
      throw new Error(`API 요청 실패: 상태 코드 ${res.status}`);
    }

    const data: Rotation[] = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('데이터 패치 중 에러가 발생 했어요!', error);
    return NextResponse.json({ error: '챔피언 정보를 가지고 오는데 실패 했어요!' }, { status: 500 });
  }
}
```

4. Dynamic Server Usage 에러

문제: Riot API의 no-store fetch 요청으로 인해 Dynamic server usage와 관련된 오류가 발생했습니다.
해결: 데이터 캐싱 설정을 통해 데이터를 매번 갱신하지 않도록 하고, 유효성 갱신을 통해 해결 방안을 모색했습니다.

```
// Riot API 호출 시 캐싱 설정
const res = await fetch(rotateApiUrl, {
  method: 'GET',
  headers: {
    'X-Riot-Token': apiKey,
  },
  next: {
    revalidate: 86400, // 캐싱 유효성을 하루로 설정
  },
});
```

5. CSR(Client-Side Rendering) 방식 문제

문제: 초기 CSR 방식으로 데이터를 불러올 때 로딩 상태가 계속 유지되거나 API 호출 실패 시 에러 처리가 제대로 되지 않았습니다.
해결: TanStack Query를 사용하여 로딩 및 에러 상태 관리를 간소화하고, 초기 데이터를 안정적으로 가져올 수 있도록 개선했습니다.

```
import { useQuery } from '@tanstack/react-query';
import { getChampionRotation } from '@/lib/utils/rotateApi';

const { data, isLoading, error, refetch } = useQuery({
  queryKey: ['championRotation'],
  queryFn: getChampionRotation,
  retry: false,
  refetchOnWindowFocus: false,
  staleTime: 1000 * 60 * 5,
});

if (isLoading) {
  return <div>로딩 중...</div>;
}

if (error) {
  return <div>에러가 발생했습니다. 다시 시도해주세요.</div>;
}
```

6. 에러 처리 개선

문제: 서버와 클라이언트 양쪽 모두에서 에러 처리가 제대로 이루어지지 않아 사용자 경험이 좋지 않았습니다.
해결: 에러를 명확히 처리하고, 사용자에게 적절한 안내 메시지를 제공하도록 수정했습니다.

```
try {
  const res = await fetch(rotateApiUrl, {
    method: 'GET',
    headers: {
      'X-Riot-Token': apiKey,
    },
  });

  if (!res.ok) {
    throw new Error(`API 요청 실패: 상태 코드 ${res.status}`);
  }

  const data = await res.json();
  return NextResponse.json(data);
} catch (error) {
  console.error('데이터 패치 중 에러가 발생 했어요!', error);
  return NextResponse.json({ error: '챔피언 정보를 가지고 오는데 실패 했어요!' }, { status: 500 });
}
```

7. SSR(Server-Side Rendering) 검토

문제: 초기 데이터를 로드할 때 빈 화면이 보이는 문제를 방지하기 위해 SSR을 검토했습니다.
해결: SSR을 사용하여 초기 데이터를 서버 측에서 미리 로드하고 페이지에 전달하여 사용자 경험을 향상시켰습니다.
클라이언트-서버 간 CORS 문제 및 포트 충돌

문제: 로컬 개발 환경에서 CORS 정책으로 인해 Riot API 데이터를 불러오는 데 실패하거나, 포트 충돌(EADDRINUSE) 문제가 발생했습니다.
해결: CORS 문제를 해결하기 위해 로컬 프록시 서버를 설정하거나, Vercel 환경으로 배포하여 테스트했습니다.
