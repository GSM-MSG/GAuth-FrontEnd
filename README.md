# Gauth

## Description
Gauth는 교내 계정 통합 서비스로, Gauth에서 회원가입/로그인 후 Oauth를 이용할 서비스를 등록하고, 등록된 서비스는 Oauth를 통한 로그인을 사용할 수 있다.
학생 또는 학교 대상으로 서비스가 생길 때마다 학생들의 정보를 각 서비스의 DB에 담아 놓으면 매우 비효율적이다. 따라서 학교 안에서 사용할 수 있는 Oauth를 도입하면 하나의 DB에 학생들의 정보를 담을 수 있어서 용이하고 학생들은 이용하려는 서비스마다 일일이 회원가입 할 필요없이 등록한 Gauth 계정으로 간편하게 로그인하면 되므로 편리하다.

## How to Clone?
```
 git clone https://github.com/GSM-MSG/GAUTH-frontend.git
```

## How to use?
### Gauth 서비스
1. Gauth 서비스에서 회원가입, 로그인을 진행한다.
2. sidebar에서 서비스 등록 탭을 눌러 서비스 등록 페이지로 이동한다.
3. 서비스 등록 페이지에서 {서비스 이름, redirectURI, 서비스 사이트 URL}을 입력하여 서비스를 등록한다.
### Oauth
1. [https://gauth.com/login?client_id=(clientID)&redirect_uri=(redirectURI)](https://gauth.com/login?client_id=(clientID)&redirect_uri=(redirectURI)) 에 유저가 접속한다. → OAuth 로그인 페이지
2. 로그인 성공 시 정보주는 동의를 받고 (redirectURI)?code=(code) 로 리다이렉트된다.
3. 리다이렉트된 곳(클라이언트 서버)에서 받은 코드를 써서 [https://server.gauth.com/](https://server.gauth.com/user) 에 POST method로 body에 code, clientId, clientSecret을 담아서 보내면 유저정보를 받을 수 있다

## Node Version
### Dependencies
> [@emotion/babel-plugin](https://yarnpkg.com/package/@emotion/babel-plugin) 18.7.14 <br>
[@emotion/css](https://yarnpkg.com/package/@emotion/css) ^11.10.0 <br>
[@emotion/react](https://yarnpkg.com/package/@emotion/react) ^11.10.4 <br>
[@emotion/styled](https://yarnpkg.com/package/@emotion/styled) ^11.10.4 <br>
[axios](https://yarnpkg.com/package/axios) ^0.27.2 <br>
[next](https://yarnpkg.com/package/next) 12.2.5 <br>
[react](https://yarnpkg.com/package/react) 18.2.0 <br>
[react-dom](https://yarnpkg.com/package/react-dom) 18.2.0 <br>
[react-wavify](https://www.npmjs.com/package/react-wavify) ^1.6.1 <br>
[recoil](https://yarnpkg.com/package/recoil) ^0.7.6 <br>
### DevDependencies
> #### @types/node 18.7.14
> #### @types/react 18.0.18
> #### @types/react-dom 18.0.6
> #### eslint 8.23.0
> #### eslint-config-next 12.2.5
> #### typescript 4.8.2
