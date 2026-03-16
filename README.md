# CIJ Academy Website

세부 CIJ 어학원 웹사이트 - Next.js 프로젝트

## 실행 방법

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행
npm run dev

# 3. 브라우저에서 열기
# http://localhost:3000
```

## 폴더 구조

```
cebu-cij-website/
├── components/          # 공통 컴포넌트 (Layout, Navbar, Footer, PageHeader)
├── pages/
│   ├── index.js         # 홈페이지
│   ├── about/           # About Us (Greeting, History, Why Choose CIJ)
│   ├── programs/        # Programs (ESL, IELTS, TOEIC, Business) - 임의 텍스트
│   ├── levels/          # Levels (Kinder, Junior A/B/C, Adult)
│   └── registration/    # Registration (How to Register, School Rules)
├── public/
│   └── images/          # 이미지 폴더 (나중에 추가)
└── styles/
    └── globals.css      # 전역 스타일
```

## 이미지 교체

`public/images/` 폴더에 이미지를 넣고 각 페이지에서 `<img src="/images/파일명.jpg" />` 형태로 사용하면 됩니다.

## 텍스트 수정

각 페이지 파일(`.js`)을 열어 텍스트를 직접 수정하시면 됩니다.
Programs 페이지는 `pages/programs/[slug].js` 파일에서 `programData` 객체를 수정하세요.
