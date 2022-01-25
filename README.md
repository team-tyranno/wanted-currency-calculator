<div id="top"></div>

<!-- PROJECT SHIELDS -->
<div align='center'>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=blue"/>
</div>


<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">1주차 과제 - 와이어바알리/레드브릭</h3>

  <p align="center">
    <a href="https://currencylayer.com/">currencylayer</a>에서 제공하는 환율 정보를 이용한 환율 계산기입니다
    <br />
    <br />
    <a href="https://hungry-meitner-18800a.netlify.app"><strong>배포 링크</strong></a>
  </p>
</div>

<br>

<br>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#팀원-소개">팀원 소개</a></li> 
    <li><a href="#과제-소개">과제 소개</a></li>
    <li><a href="#구현한-기능">구현한 기능</a></li>
    <li>
      <a href="#설치-및-실행">설치 및 실행
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#프로젝트-구조">프로젝트 </a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<br>
<br>

<!--팀원 소개-->
## 팀원 소개

<table align="center">
<tr>
<td align="center"><a href="https://github.com/gml9812"><img src="https://avatars.githubusercontent.com/u/28294925?v=4" width="150px" /></a></td>
<td align="center"><a href="https://github.com/seoysauce"><img src="https://avatars.githubusercontent.com/u/65898861?v=4" width="150px" /></a></td>
<td align="center"><a href="https://github.com/Yummy-sk"><img src="https://avatars.githubusercontent.com/u/60822846?v=4" width="150px" /></a></td>
<td align="center"><a href="https://github.com/jambottle"><img src="https://avatars.githubusercontent.com/u/72926450?v=4" width="150px" /></a></td>

</tr>
<tr>
<td align="center"><b>👑 윤희준 (팀장)</b></td>
<td align="center"><b>정서영</b></td>
<td align="center"><b>염상권</b></td>
<td align="center"><b>김재원</b></td>
</tr>
<tr>
<td align="center"><b>2번 환율 계산기 개발</b></td>
<td align="center"><b>2번 환율 계산기 개발</b></td>
<td align="center"><b>1번 환율 계산기 개발</b></td>
<td align="center"><b>1번 환율 계산기 개발</b></td>
</tr>
</table>

<br>
<hr>
<br>

<!-- 과제 소개 -->
## 과제 소개

currencylayer에서 제공하는 API를 사용해 만든 환율 계산기입니다. 

- 1번 환율계산기 

![calc1]()

- 2번 환율계산기

![calc2]()

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

<!-- 구현한 기능 -->
## 구현한 기능

- [x] 상단 버튼을 클릭해 환율 계산기의 종류를 교체할 수 있다.
- [x] 사이트에 접속할 시 localStorage를 확인해, localStorage에 환율 정보가 저장되어 있지 않거나 localStorage를 마지막으로 갱신한 시간으로부터 24시간 이상이 지났다면 API에 요청을 보내 환율 정보를 갱신하고 localStorage에 저장한다. 
- [x] 1번 환율 계산기 구현
  - [x] 한국(KRW), 일본(JPY), 필리핀(PHP) 중 하나의 수취국가를 select box로 선택할 수 있다.
  - [x] 수취국가를 선택하면 해당 국가의 통화와 달러(USD) 사이의 환율이 표시된다.
  - [x] 올바른 송금액(0~10000 사이의 숫자)을 입력하고 submit 버튼을 누르면 수취금액이 표시된다.
  - [x] 수취금액은 소수점 아래 2번째 자리까지, 3자리마다 콤마를 찍은 형식으로 표기된다. 
  - [x] 올바르지 않은 송금액을 입력하고 submit 버튼을 누르면 “송금액이 바르지 않습니다" 라는 에러 메시지가 하단에 표시된다.
- [x] 2번 환율 계산기 구현
  - [x] 1000 이상의 숫자가 입력될 경우 자동적으로 "1,000"으로 변경된다. 
  - [x] 숫자 이외의 입력(알파벳, '-', '+' ...)은 처리되지 않는다.
  - [x] 드롭다운 메뉴로 가지고 있는 통화의 종류를, 탭으로 바꿀 통화의 종류를 지정할 수 있다.
  - [x] 드롭다운 메뉴에서 선택한 통화를 제외한 통화들만이 탭에 나타난다. 
  - [x] 숫자 입력, 드롭다운 메뉴 클릭, 탭 클릭을 할 경우 변경될 통화의 종류와 환전 금액이 하단에 표기된다.
  - [x] 환전 금액은 소수점 아래 2번째 자리까지, 3자리마다 콤마를 찍은 형식으로 표기된다.

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

<!-- 설치 및 실행 -->
## 설치 및 실행

### Prerequisites

1. npm
  ```sh
  npm install npm@latest -g
  ```
2. https://currencylayer.com/ 에 가입한 후 access key를 발급받아 root에 다음과 같이 .env파일을 추가한다.
  ```
  REACT_APP_API_END_POINT=http://api.currencylayer.com/live
  REACT_APP_API_ACCESS_KEY=YOUR_ACCESS_KEY
  ```



### Installation

1. Repo를 clone한다
   ```sh
   git clone https://github.com/gml9812/wanted-frontend-pre-on-boarding-mission.git
   ```
2. NPM pakage들을 설치한다
   ```sh
   npm install
   ```
3. localhost에서 프로젝트를 실행한다
   ```sh
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
