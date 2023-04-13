# wanted-pre-onboarding-frontend

<img width="1437" alt="스크린샷 2023-04-14 오전 3 53 01" src="https://user-images.githubusercontent.com/85747667/231855983-5a756473-cffa-495d-aebd-438f3924c110.png">

원티드 프리온보딩 4월 프론트엔드 인턴쉽 사전 과제 입니다.

[🔗 배포 페이지](https://jiminkim-dev.github.io/wanted-pre-onboarding-frontend/)

```
아이디: test1234@test.net
비밀번호: test1234
```

## 0. 목차

---

- [1. 프로젝트 실행 방법](#1-프로젝트-실행-방법)
  - [새로운 폴더에 설치](#새로운-폴더에-설치)
  - [현재 폴더에 설치](#현재-폴더에-설치)
- [2. 기능 구현](#2-기능-구현)
  - [:: 1. 로그인 회원가입](#1-로그인-회원가입)
  - [:: 2. TODO LIST](#2-todo-list)
- [3. 그 외](#3-그-외)
  - [사용한 라이브러리](#사용한-라이브러리)
  - [폴더 구조](#폴더-구조)
  - [TroubleShooting](#troubleshooting)

## 1. 프로젝트 실행 방법

---

### 새로운 폴더에 설치

```
git clone https://github.com/JiminKim-dev/wanted-pre-onboarding-frontend.git
cd wanted-pre-onboarding-frontend
npm install
npm start
```

### 현재 폴더에 설치

```
git clone https://github.com/JiminKim-dev/wanted-pre-onboarding-frontend.git .
npm install
npm start
```

## 2. 기능 구현

---

### :: 1. 로그인 회원가입

![화면 기록 2023-04-14 오전 2 50 09](https://user-images.githubusercontent.com/85747667/231845073-2e792ddc-838d-4371-ac2d-6a6a7605350b.gif)

- [x] Assignment 1: 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
  - [x] 이메일 조건: @ 포함, 비밀번호 조건: 8자 이상
  - [x] 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 disabled 속성을 부여해주세요
- [x] Assignment 2: 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동해주세요
- [x] Assignment 3: 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동해주세요
  - [x] 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  - [x] 응답받은 JWT는 로컬 스토리지에 저장해주세요

![화면 기록 2023-04-14 오전 3 06 06](https://user-images.githubusercontent.com/85747667/231846599-3722bf51-01a9-4774-a1b6-5acf9248c6eb.gif)

- [x] Assignment 4: 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
  - [x] 로컬 스토리지에 토큰이 있는 상태로 /signin 또는 /signup 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요
  - [x] 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 /signin 경로로 리다이렉트 시켜주세요

### :: 2. TODO LIST

![화면 기록 2023-04-14 오전 3 15 57](https://user-images.githubusercontent.com/85747667/231848336-fe65ebeb-ec37-4c70-8fd8-aeca8dedd6a8.gif)

- [x] Assignment 5: /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
  - [x] 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
- [x] Assignment 6: 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
  - [x] 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요
  - [x] TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다.
- [x] Assignment 7: TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.

![화면 기록 2023-04-14 오전 3 17 38](https://user-images.githubusercontent.com/85747667/231848898-9961f260-50c5-4909-8b7a-eb31df42e8c8.gif)

- [x] Assignment 8: TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요
- [x] Assignment 9: 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요
- [x] Assignment 10: 투두 리스트의 수정 기능을 구현해주세요
  - [x] TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록 해주세요
  - [x] 수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다.
  - [x] 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요
  - [x] 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되게 해주세요
  - [x] 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 해주세요
  - [x] 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 해주세요

## 3. 그 외

---

### 사용한 라이브러리

- TypeScript
- React Router
- Axios
- Tailwind CSS
- Craco - 절대경로 설정을 위해 설치했습니다.
- gh-pages - github pages 배포를 위해 설치했습니다.

### 폴더 구조

```
src
 ┣ api // api 요청 로직과 관리
 ┣ components // 재사용 가능한 컴포넌트 관리
 ┣ constants // 여러곳에서 사용하는 상수 관리
 ┣ context // 전역 상태관리를 위한 context 관리
 ┣ hooks // 재사용 가능한 custom hooks 관리
 ┣ pages // 각 route 별 페이지 관리
 ┣ router // route 정의
 ┣ types // 여러곳에서 사용하는 타입 관리

```

### TroubleShooting

프로젝트 구현시 생겼던 문제와 해결과정을 Wiki에 작성했습니다.

- [TypeScript 추가 설치시 다른 라이브러리가 설치되지 않는 현상](<https://github.com/JiminKim-dev/wanted-pre-onboarding-frontend/wiki/Typescript-%EC%B6%94%EA%B0%80-%EC%84%A4%EC%B9%98%EC%8B%9C-%EB%8B%A4%EB%A5%B8-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC%EA%B0%80-%EC%84%A4%EC%B9%98%EB%90%98%EC%A7%80-%EC%95%8A%EB%8A%94-%ED%98%84%EC%83%81-(%ED%95%B4%EA%B2%B0)>)
- [Github Pages로 배포시 router와 관련된 에러](https://github.com/JiminKim-dev/wanted-pre-onboarding-frontend/wiki/%08Github-Pages%EB%A1%9C-%EB%B0%B0%ED%8F%AC%EC%8B%9C-router%EC%99%80-%EA%B4%80%EB%A0%A8%EB%90%9C-%EC%97%90%EB%9F%AC)
- [AuthLoader가 무한로딩 되는 현상](https://github.com/JiminKim-dev/wanted-pre-onboarding-frontend/wiki/AuthLoader%EA%B0%80-%EB%AC%B4%ED%95%9C%EB%A1%9C%EB%94%A9-%EB%90%98%EB%8A%94-%ED%98%84%EC%83%81)
