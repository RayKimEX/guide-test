하이브리드 채팅상담 [깃플](https://gitple.io)

# iOS Swift 연동 가이드

[ios-sdk common](ios-sdk-common.md ':include')

## 깃플 서비스 추가

깃플 기능을 사용하기 위해서는 파일 상단에 다음과 같이 import를 해야합니다.

```swift
import GitpleSDK
```

#### 서비스 초기화

깃플의 기능을 사용하기 위해서는 "앱코드"가 필요합니다.

?> 앱코드는 [워크스페이스](https://workspace.gitple.io)에 로그인 후에 "**설정 > 연동**" 메뉴에서 "앱코드" 부분의 코드를 복사
![Meta](assets/images/sdk_app_code_copy.png)

앱코드 복사후에 `AppDelegate:didFinishLaunchingWithOptions` 에서 초기화 함수를 호출합니다.

- `AppDelegate.swift`
```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    ...
    Gitple.initialize(appCode: GITPLE_APPCODE)
    ...
}
```

#### 깃플 서비스 실행

깃플 서비스를 실행할 `ViewController`에서 `viewDidLoad` 함수안에서 서비스 설정 및 `GitpleDelegate`를 설정하고 깃플 실행 함수를 호출하면 됩니다.

- `ViewController`

`ViewController.swift`의 `viewDidLoad` 메소드에서 `GitpleDelegate`를 설정하고 `Gitple.launch()`를 호출해서 깃플을 실행합니다.

```swift
import GitpleSDK

class ViewController: UIViewController {
  override func viewDidLoad() {
    Gitple.delegate = self                       // GitpleDelegate 설정
    Gitple.config().setHideHeader(isHide: true); // 깃플 내부 헤더를 Hide로 설정
  }

  // gitple start button
  @objc func onChatStartButtonClicked() {
    Gitple.launch()                              // 깃플 실행
  }
}
```

`ViewController`의 확장에 `GitpleDelegate` 프로토콜을 추가합니다. 그리고 `onViewLaunched` 메소드안에서는 깃플이 실행되면서 필요한 네이게이션 타이틀과 종료 버튼을 추가합니다.

```swift
extension ViewController : GitpleDelegate {
  func onViewLaunched(sender: GitpleViewController) {
    self.gitpleViewController = sender
    
    self.gitpleViewController!.navigationItem.title = "채팅 서비스";
    
    let newBackButton = UIBarButtonItem(title: "닫기", style: UIBarButtonItemStyle.done, target: self, action: #selector(ViewController.closeGitple))
    self.gitpleViewController!.navigationItem.rightBarButtonItem = newBackButton;
  }
  
  @objc func closeGitple(sender: UIBarButtonItem) {
      self.navigationController!.dismiss(animated: true, completion: nil)
  }
}

```

#### 로그인 사용자 설정

깃플을 초기화 이후에 앱의 프로세스에 따라서 사용자 로그인 후에 다음과 같이 깃플 사용자를 설정합니다.

```swift
Gitple.user().setId(id: "iosswiftuser01")
             .setEmail(email: "iosswiftuser01@gitple")
             .setName(name: "iosswiftuser01")
             .setPhone(phone: "0000000000")
             .setMeta(key: "company", value: "gitple")
             .setMeta(key: "order", value: "gitple")
        
```

#### 로그인하지 않은 사용자 설정
- `Gitple:user`의 값을 설정하지 않고 `Gitple:launch` 를 실행하면 기본 필수 입력 필드인 `email`을 입력 받아서 상담을 시작할 수 있습니다. (["**설정 > 채팅앱**" 메뉴에서 설정 변경](ws-settings-inapp.md))

- 이전에 설정된 `Gitple:user` 값이 있다면 `Gitple:user:reset`으로 설정을 초기화할 수 있습니다.

```swift
Gitple.user().reset()
```

#### 읽지 않은 메세지 갯수 확인

읽지 않은 메세지 갯수의 확인은 로그인된 사용자만 지원하는 기능입니다.

`ViewController : GitpleDelegate`의 확장에 `onUnreadCount` 메소드를 추가합니다. 그리고 `Gitple.unreadCount()`를 실행하면 읽지 않은 메세지의 갯수를 추가한 메소드에서 확인 가능합니다.

```swift
  ...
  Gitple.unreadCount()
  ...

extension ViewController : GitpleDelegate {
  func onUnreadCount(count: Int) {
    print("onUnreadCount count: \(count)")
  }
}

```

#### 사용자 언어 설정

상담 화면에서 사용할 사용자 언어를 설정합니다.

?> 설정 가능한 언어는 워크스페이스의 "**설정 > 앱 관리**" 에서 "채팅앱 지원 언어"에 설정된 언어로만 변경됩니다. 

```swift
  Gitple.config().setUserLang(lang: "en") // 상담화면의 언어를 영어로 설정
```


아직 계정이 없으시다구요? [무료 회원 가입](https://workspace.gitple.io/#/register)

---

© Gitple Inc. All Rights Reserved.
