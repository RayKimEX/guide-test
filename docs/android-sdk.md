하이브리드 채팅상담 [깃플](https://gitple.io)

# 안드로이드 연동 가이드

깃플을 안드로이드에 연동하는 가이드입니다. 
안드로이드 `API 15`이상을 지원하고 샘플코드는 다음 Github 페이지에서 확인 가능합니다.

> 샘플코드: [https://github.com/gitple/gitple-android-sdk](https://github.com/gitple/gitple-android-sdk)

## 프로젝트 설정

안드로이드 프로젝트에 안드로이드 SDK 라이브러리를 추가합니다.

- 안드로이드 SDK 라이브러리를 다운로드 받아서 안드로이드 프로젝트 `app/libs`에 추가합니다.

?> [안드로이드 SDK 라이브러리 다운로드](/assets/android/libs/gitple-android-sdk-v1.1.4.aar ":ignore")

- `libs` 폴더를 앱의 `build.gradle`에 dependency repository로 추가

```build.gradle
repositories {
  flatDir {
    dirs 'libs'
  }
}
```

- 깃플 라이브러리를 앱의 `build.gradle`에 dependency로 추가

```build.gradle
dependencies {
  compile(name:'gitple-android-sdk-v1.1.2', ext:'aar')
}
```

## Dependency Graph
```bash
 +--- com.android.support:appcompat-v7:25.3.1 (*)
 +--- com.squareup.retrofit2:retrofit:2.3.0
 +--- com.squareup.retrofit2:converter-gson:2.3.0
 \--- com.google.code.gson:gson:2.2.4
```

깃플 라이브러리는 위에 라이브러리에 의존성이 있습니다. 실행하는 프로젝트에서 사용하지 않는 라이브러리는 다음과 같이 추가해 추가하시면 됩니다.
```build.gradle
dependencies {
  compile 'com.google.code.gson:gson:2.2.4'
  compile 'com.squareup.retrofit2:retrofit:2.3.0'
  compile 'com.squareup.retrofit2:converter-gson:2.3.0'
}
```



## 서비스 초기화

- 안드로이드 앱에서 깃플의 초기화는 `Application`의 `onCreate()` 내에서 `Gitple.initialize()`를 호출합니다.
- 상담 서비스 환경(소개문구, 테마, 로그인 하지 않은 사용자 설정 등)은 워크스페이스의 "**설정 > 채팅앱**" 에서 변경이 가능합니다.

```java
public class MyApplication extends Application {
    
    @Override
    public void onCreate() {
        super.onCreate();

        // 깃플 상담 초기화
        Gitple.initialize(this, "your app code");

        // 깃플 상담 화면에서 헤더메뉴를 표시하지 않을 경우
        Gitple.config().setHideHeader(true);
    }
  }
}
```


> 안드로이드 앱에서 기존에 사용하던 `Application`이 없다면 manifest 파일에 다음과 같이 `Application`을 추가하면 됩니다.

```xml
<application
    android:name=".MyApplication">
</application>
```

?> 앱코드는 워크스페이스에 로그인 후에 "**설정 > 연동**" 메뉴에서 앱코드 속성의 코드를 복사해서 입력합니다.
![Meta](assets/images/android-sdk/sdk_app_code_copy.png)

## 로그인 사용자 설정

- 로그인 사용자는 `Gitple.user()`에 사용자 정보를 설정합니다.

```java
if (loggined) {
  Gitple.user().setId("user id")
              .setName("user name")
              .setMeta("City", "Seoul");
} else {
  Gitple.user().reset(); // 로그아웃시 반드시 호출해야 합니다. 사용자 정보를 초기화합니다.
}
```


## 로그인 하지 않은 사용자 설정

- `Gitple.user()`의 값을 설정하지 않고 `Gitple.launch()` 를 실행하면 기본 필수 입력 필드인 `email`을 입력 받아서 상담을 시작할 수 있습니다. (["**설정 > 채팅앱**" 메뉴에서 설정 변경](ws-settings-inapp.md))
- 이전에 설정된 `Gitple.user()` 값이 있다면 `Gitple.user().reset()`으로 설정을 초기화할 수 있습니다.


## 깃플 채팅 시작하기

- 서비스 초기화와 사용자 설정 후에 `Gitple.launch()`를 통해 상담 activity를 실행합니다.

```java
  public void selectedGitpleMenu() {
    Gitple.launch();
  }
```


## APIs

### Installation APIs

상담 서비스를 초기화, 실행 및 읽지 않은 메세지등을 확인합니다.


##### initialize(Context context, String appCode)
  - 안드로이드 `Application`의 `onCreate()`에서 서비스 초기화를 위해서 반드시 호출해야 합니다.
  - `appCode`는 상담사 워크스페이스 화면의 "**설정 > 연동**" > "앱코드" 속성의 값을 복사해서 파라미터로 사용합니다.
  - *return* : void

##### launcher(Context context)
  - 상담 서비스 activity를 실행합니다.
  - 안드로이드 앱에서 상담 서비스를 실행할 경우 호출합니다.
  - *return* : void

##### unreadCount(GitpleCallback callback)
  - 사용자가 읽지 않은 메세지의 갯수를 확인합니다.
  - *return* : void
  - **Error Code** 는 `Gitple.Error`에 정의 되어 있습니다.
  
| 오류 코드 | 설명            |
| :------- |:---------------|
| Gitple.Error.NOT_INITIALIZE    | Gitple.initialize()를 실행하지 않았을 경우 발생   |
| Gitple.Error.APPCODE_UNDEFINED | 앱코드가 정의 되지 않았을 경우 발생                 |
| Gitple.Error.USER_UNDEFINED    | 사용자 아이디가 정의 되지 않았을 경우 발생           |
| Gitple.Error.HTTP_RESPONSE_FAILED | 앱코드가 유효하지 않거나 사용자 등록이 되지 않았을 경우 발생  |
| Gitple.Error.HTTP_FAILED       | 네트워크 연결 오류시 발생  |

  ```java
  Gitple.unreadCount(new GitpleCallback<Number>() {
        @Override
        public void onSuccess(Number data) {
            Log.v(TAG, "unreadCount Callback onSuccess. data=" + data);
            // 사용자가 읽지 않은 메세지가 있을 경우 화면에 표시
        }

        @Override
        public void onError(Gitple.Error errorCode) {
            Log.v(TAG, "unreadCount Callback onError. code=" + errorCode);
        }
    });
  ```
  

### Configuration APIs

상담 서비스 초기화에 필요한 환경 설정 API로 `Gitple.config()`에 값을 설정합니다.

```java
Gitple.config().setHideHeader(true);
```

##### setHideHeader(boolean isHideHeader)
  - `true`로 설정하면 상담 화면에서 헤더 메뉴를 보여주지 않습니다.
  - 설정하지 않으면 헤더 메뉴가 보이게 됩니다.
  - *return* : Gitple.config() instance

##### setUserLang(String lang)
  - `lang`을 설정하면 상담화면의 언어를 변경합니다.
  - *return* : Gitple.config() instance

?> 설정 가능한 언어는 워크스페이스의 "**설정 > 앱 관리**" 에서 `채팅앱 지원 언어`에 설정된 언어로만 변경됩니다. 
  

### User APIs

로그인 사용자 설정 API로 `Gitple.user()`에 값을 설정합니다.

```java
Gitple.user().setId("user id")
             .setName("user name")
```

##### setId(String id)
  - 사용자 식별자로 서비스 내에서 사용자의 고유한 값으로 설정합니다. 보안을 위해 UUID, 숫자 등의 로그인정보를 유추할 수 없는 고유값을 권장합니다.  **(필수)**
    - 숫자, 알파벳(소문자), 특수문자('.', '@')으로 구성
    - 처음과 마지막은 특수문자를 사용할 수 없음
    - 최대 50자까지 허용
  - *return* : Gitple.user() instance

##### setName(String name)
  - 사용자 이름을 설정합니다. (옵션)
  - *return* : Gitple.user() instance

##### setEmail(String email)
  - 사용자 이메일을 설정합니다. (옵션)
  - *return* : Gitple.user() instance

##### setPhone(String phone)
  - 사용자 전화번호를 설정합니다. (옵션)
  - *return* : Gitple.user() instance

##### setGroup(String group)
  - 사용자 그룹을 설정합니다. (옵션)
  - `그룹`은 사용자의 구분값으로 특정 상담사 배정에 사용 합니다.
  - *return* : Gitple.user() instance

##### setMeta(String key, String value)
  - 사용자의 추가 정보를 설정합니다. (옵션)
  - 메타 정보는 필요에 따라서 추가 가능합니다.
  - *return* : Gitple.user() instance

```java
Gitple.user().setId("user id")
             .setMeta("City", "Seoul")
             .setMeta("Companry", "Gitple")
             .setMata("Address", "Seoul, ...")
             .setMeta("Order Number", "xxxx-xxxx-xxxxx")
```


##### reset()
  - 이전에 설정된 사용자 정보 전체를 초기화 합니다.
  - 사용자가 로그아웃할 경우는 반드시 `reset()`을 호출해야 합니다.
  - *return* : void

### 푸시 설정
[Push SDK 바로가기](./push.md)

아직 계정이 없으시다구요? [무료 회원 가입](https://workspace.gitple.io/#/register)

---

© Gitple Inc. All Rights Reserved.
