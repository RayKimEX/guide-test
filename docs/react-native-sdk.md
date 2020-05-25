하이브리드 채팅상담 [깃플](https://gitple.io)

# React Native 연동 가이드

## 설치

React Native 프로젝트에서 깃플 SDK 패키지를 설치합니다.

```bash
npm i -S react-native-gitple-sdk
```

설치 후에 라이브러리를 링크시켜줍니다.
```bash
react-native link react-native-gitple-sdk
```

## 권한 설정

파일 업로드를 위해서는 iOS와 Android에 대해서 각각 권한을 추가해야 합니다.

#### iOS

`info.plist` 파일에 다음 권한을 추가합니다.

```
NSPhotoLibraryUsageDescription
NSCameraUsageDescription
NSMicrophoneUsageDescription
```

#### Android

`AndroidManifest.xml` 파일에 다음 권한을 추가합니다.

```
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.CAMERA"/>
```

## 채팅 상담 시작

프로젝트에서 `react-native-gitple-sdk` 패키지를 임포트하고 발급 받은 앱코드를 이용하여 깃플 모듈을 초기화 합니다.(`Gitple.initialize("{app code}");`)

그리고 `GitpleView`를 실행할 Component를 만들고 실행하면 됩니다.

- `hideHeader`(옵션) : `true`로 설정하면 깃플 상담의 헤더 메뉴를 보이지 않도록 합니다. (default : `false`)

```javascript
import { Gitple, GitpleView } from 'react-native-gitple-sdk';

export default class App extends Component {

  constructor(props) {
    super(props);
  
    // Gitple 초기화
    Gitple.initialize("{app code}");
  }
}
 
class GitpleChat extends React.Component {
  constructor() {

  }

  render() {
    let hideHeader = true;
    // 채팅 상담 시작
    return (
      <GitpleView 
        hideHeader={hideHeader}
      />
    );
  }
}
```

#### 앱코드 

앱코드는 [워크스페이스](https://workspace.gitple.io)에 로그인 후에 "**설정 > 연동**" 메뉴에서 "앱코드" 속성의 코드를 복사해서 붙어넣기 한다.
![Meta](assets/images/sdk_app_code_copy.png)


## 로그인 사용자

로그인 사용로 사용할 경우는 다음과 같이 깃플초기화 후에 `Gitple.setUser()`함수를 이용하면 됩니다.

```javascript
  // Gitple 초기화
  Gitple.initialize("{app code}");

  // 사용자 로그인
  let userInfo = {....};
  Gitple.setUser(userInfo).then(() => {
    // 로그인 사용자 설정 완료
  }).catch((error) => {
    console.warn('Gitple setUser failed. error:', error);
  });

  // 사용자 로그아웃: 사용자 데이터를 초기화 합니다.
  Gitple.resetUser().then(() => {
    // 로그아웃 사용자 설정 완료
  }).catch((error) => {
    console.warn('Gitple reset failed. error:', error);
  });
```

#### 로그인 사용자 필드

| 항목 | 타입            | 세부 설명|
| :------- |:---------------:| :----------------------------|
| id       | String(required)  | 상담고객 구분 ID: 서비스내 상담고객의 고유값. 로그인아이디, 이메일주소등도 가능하지만 유추할 수 없는 UUID, 숫자 등을 권장함. (숫자, 알파벳 소문자, '.', '@'으로 구성, 처음과 마지막은 특수문자를 사용할 수 없음, 최대 50자까지 허용) |
| name     | String(option)  | 상담고객 이름                    |
| email    | String(option)  | 상담고객 이메일                   |
| phone    | String(option)  | 상담고객 전화번호                 |
| meta     | Object(option)  | 기본 필드 이외에 필요한 추가 정보를 상담 화면에서 표시해야 할 경우 사용하는 필드. `{'company':'gitple', 'city': 'seoul'}` |

#### 로그인 오류 코드
`setUser`, `resetUser`에서 리턴하는 오류 코드는 Error 타입으로 name 필드(스트링)의 정의 값은 다음과 같습니다.

| 항목                  | 세부 설명                                     |
| :-------------------:| :-------------------------------------------|
| APPCODE_UNDEFINED    | 앱코드로 `Gitple.initialzie`를 호출하지 않았을 경우 |
| USER_UNDEFINED       | 사용자 정보가 없거나 사용자에 `id`가 없을 경우         |

## 읽지 않은 메세지 확인

`Gitple.unreadCount()`는 로그인 사용자로 사용할 경우 읽지 않은 메세지의 갯수를 확인하는 함수입니다. 

반드시 깃플 초기화, 사용자 설정 후에 사용해야 합니다.


```javascript
  // Gitple 초기화
  Gitple.initialize("{app code}");

  // 사용자 로그인
  let userInfo = {....};
  Gitple.setUser(userInfo).then(() => {
    // 사용자의 읽지 않은 메세지 확인
    Gitple.unreadCount().then((count) => {
      console.info('Unread count :', count);
    }).catch((error) => {
      console.warn('Gitple get unreadCount failed. error:', error);
    });
  }).catch((error) => {
    console.warn('Gitple setUser failed. error:', error);
  });

```

#### 로그인 오류 코드
`unreadCount`에서 리턴하는 오류 코드는 Error 타입으로 name 필드(스트링)의 정의 값은 다음과 같습니다.

| 항목                  | 세부 설명                                         |
| :-------------------:| :-----------------------------------------------|
| APPCODE_UNDEFINED    | 앱코드로 `Gitple.initialzie`를 호출하지 않았을 경우    |
| USER_UNDEFINED       | 사용자 정보가 없거나 사용자에 `id`가 없을 경우           |
| HTTP_FAILED           | 네트워크 이상 또는 서버 이상으로 값을 가져오지 못했을 경우   |


## GitpleView props 설정

#### 상담 화면 헤더 설정

`hideHeader`: 깃플 상담화면에 기본 제공되는 헤더 메뉴를 보이지 않도록 설정합니다. 기본값을 `false`입니다.

```javascript
import { Gitple, GitpleView } from 'react-native-gitple-sdk';
 
class GitpleChat extends React.Component {
  render() {
    return (
      <GitpleView 
        hideHeader={ true }
      />
    );
  }
}
```

#### 상담 언어 설정

`userLang`: 깃플 상담의 언어를 설정합니다. 설정하지 않으면 사용자 시스템의 언어으로 설정됩니다.

?> 설정 가능한 언어는 워크스페이스의 `**설정 > 앱 관리**" 에서 "채팅앱 지원 언어"에 설정된 언어로만 변경됩니다. 


```javascript
import { Gitple, GitpleView } from 'react-native-gitple-sdk';
 
class GitpleChat extends React.Component {
  render() {
    return (
      <GitpleView 
        userLang={ 'en' }
      />
    );
  }
}
```

## 푸시 설정
[Push SDK 바로가기](./push.md)

아직 계정이 없으시다구요? [무료 회원 가입](https://workspace.gitple.io/#/register)

---

© Gitple Inc. All Rights Reserved.
