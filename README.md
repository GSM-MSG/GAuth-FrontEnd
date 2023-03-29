# Gauth
Gauth는 학교 Oauth 서비스로, 교내 프로젝트나 서비스를 만들 때 필요한 학생들의 정보를 쉽게 얻을 수 있으며 사용자는 로그인 및 회원가입을 간편하게 진행할 수 있습니다.

## Description
교내 프로젝트나 서비스가 생길 때마다 학생들의 정보를 각각의 DB에 담아서 사용하면 매우 불필요하다고 생각했습니다.
따라서 교내에 Oauth를 도입하면 손쉽게 학생들의 정보를 조회할 수 있어 용이하고 
학생들은 이용하려는 서비스마다 계정을 새로 생성하지 않아도 하나의 Gauth 계정으로 간편하게 로그인하면 되므로 편리합니다.

## How to Clone?
```
 git clone https://github.com/GSM-MSG/GAUTH-frontend.git
```

## How to use?
### Gauth 서비스
1. Gauth 서비스에서 회원가입, 로그인을 진행합니다.
2. sidebar에서 서비스 등록 탭을 눌러 서비스 등록 페이지로 이동합니다.
3. 서비스 등록 페이지에서 {서비스 이름, redirectURI, 서비스 사이트 URL}을 입력하여 서비스를 등록합니다.
### Oauth
1. [https://gauth.com/login?client_id=(clientID)&redirect_uri=(redirectURI)](https://gauth.com/login?client_id=(clientID)&redirect_uri=(redirectURI)) 에 유저가 접속합니다. (OAuth 로그인 페이지)
2. 로그인 성공 시 정보주는 동의를 받고 (redirectURI)?code=(code) 로 리다이렉트됩니다.
3. 리다이렉트된 곳(클라이언트 서버)에서 받은 코드를 써서 [https://server.gauth.com/](https://server.gauth.com/user) 에 POST method로 body에 code, clientId, clientSecret을 담아서 보내면 유저정보를 받을 수 있습니다 
<br>

자세한 설명은 [여기](https://gauth.co.kr/instruction)를 참고하세요

## Contributing
- 버그 제보: [이슈 트래커](https://github.com/GSM-MSG/GAUTH-frontend/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc)에 제보할 버그를 작성합니다.
- 기능 제안: [이슈 트래커](https://github.com/GSM-MSG/GAUTH-frontend/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc)에 제안하고 싶은 기능을 작성합니다.
- 코드 기여: GitHub에서 코드를 Fork하고, Pull Request를 보냅니다.

## Node Version
### Dependencies
> [@babel/core"](https://yarnpkg.com/package/@babel/core) ^7.21.0 <br>
[@emotion/babel-plugin](https://yarnpkg.com/package/@emotion/babel-plugin) ^11.10.6 <br>
[@emotion/css](https://yarnpkg.com/package/@emotion/css) ^11.10.6 <br>
[@emotion/react](https://yarnpkg.com/package/@emotion/react) ^11.10.6 <br>
[@emotion/styled](https://yarnpkg.com/package/@emotion/styled) ^11.10.6 <br>
[axios](https://yarnpkg.com/package/axios) ^1.3.4 <br>
[next](https://yarnpkg.com/package/next) ^13.2.3 <br>
[react](https://yarnpkg.com/package/react) ^18.2.0 <br>
[react-dom](https://yarnpkg.com/package/react-dom) ^18.2.0 <br>
[react-hook-form](https://yarnpkg.com/package/react-hook-form) ^7.43.5 <br>
[react-notion](https://yarnpkg.com/package/react-notion) ^0.10.0 <br>
[react-toastify](https://yarnpkg.com/package/react-toastify) ^9.1.1 <br>
[react-wavify](https://yarnpkg.com/package/react-wavify) ^1.7.0 <br>
[recoil](https://yarnpkg.com/package/recoil) ^0.7.7 <br>
### DevDependencies
> #### @types/node ^18.14.6
> #### @types/react ^18.0.28
> #### @types/react-dom ^18.0.11
> #### eslint ^8.35.0
> #### eslint-config-next ^13.2.3
> #### typescript ^4.9.5
> #### yarn-upgrade-all ^0.7.2
