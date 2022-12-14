# 🍒 yarn berry로 모노레포 환경 구성하기

## yarn 버전 확인

workspace CLI가 더 잘 되어있는 3버전으로 사용하기 (current stable: v3.3)

```
// 버전 확인
yarn -v

// 버전 바꾸기
yarn set version 4
yarn set version stable
```

## workspace 생성하기

### 디렉토리 생성하고 루트 초기화

서비스가 들어간 app폴더와 참조될 컴포넌트가 들어갈 packages/ui 만들기

- apps/web
- packages/ui/src

```
yarn init -w
```

### 루트에서 초기화

루트에서 초기화하면 패키지에 packages는 자동으로 추가된다.
`app/*` 경로만 별도로 추가한다.

```
{
  "name": "monorepo-with-yarn-berry",
  "packageManager": "yarn@3.3.0",
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*"
  ]
}
```

### next-app 프로젝트 생성

서비스가 이루어질 폴더에 명령어 실행

```
cd apps
yarn create next-app 프로젝트명
```

package.json에서 name을 `@dongmikim/web`으로 수정  
_@를 붙이는 이유는 패키지가 많아지면 구분을 위한 prefix_

```
{
  "name": "@dongmikim/web",
  ...
}
```

apps가 아닌 루트 위치로 돌아가서 상태를 갱신한다.
그러면 `.pnp.cjs`에 수정한 내용이 업데이트된 것을 확인할 수 있다.

```
cd ..
yarn
```

## 타입스크립트 에러 해결

`apps/web/pages/index.tsx`을 열어보면 타입스크립트 에러가 발생한다.  
yarn berry는 모듈을 불러오는 방식이 npm과 다르기 때문이다.

```
yarn add -D typescript
yarn dlx @yarnpkg/sdks vscode
```

### 그래도 해결되지 않는 타입스크립트 에러

typescript 버전을 4.9.4에서 **4.9.3**으로 다운하고,  
다시 워크스페이스 타입스크립트 버전을 세팅하고 vscode를 재부팅하니 정상 작동한다.

## 공통 패키지 생성

```
cd packages/ui

yarn init
yarn add -D typescript
```

위에서 했던 것처럼 package.json에서 name을 수정
