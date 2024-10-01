This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## lolDex

npx create-next-app@latest
yarn
yarn dev

- **TypeScript**: 타입 안전성을 위해 사용합니다.
- **ESLint**: 코드 품질과 일관성을 유지하기 위해 사용합니다.
- **Tailwind CSS**: 빠르고 쉽게 스타일링을 하기 위해 사용합니다.
- **src/** 디렉토리 사용: 프로젝트 구조를 깔끔하게 유지하기 위해 사용합니다.
- **App Router 사용**: Next.js의 새로운 라우팅 시스템으로, 폴더 구조 기반의 라우팅을 지원합니다.
- **커스텀 import alias**: `@/*`로 설정하여 절대 경로 임포트를 쉽게 할 수 있습니다.

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
