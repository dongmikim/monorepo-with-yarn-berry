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
