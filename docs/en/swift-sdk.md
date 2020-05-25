Hybrid Chatting [Gitple](https://gitple.io/en)

# iOS Swift link guide

[ios-sdk common](ios-sdk-common.md ':include')

## Adding the Gitple service

To use Gitple functions, the import directive should be used at the top of the file.

```swift
import GitpleSDK
```

#### Service initialization

The "App code" is required to use Gitple functions.

?> For App code, log into the [workspace](https://workspace.gitple.io) and select the "**Settings > Integrations**"menu and copy the code at the “App code” section at the top. ![Meta](assets/images/sdk_app_code_copy.png)
Call the initialization function at `AppDelegate:didFinishLaunchingWithOptions` after copying the App code.

- `AppDelegate.swift`
```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    ...
    Gitple.initialize(appCode: GITPLE_APPCODE)
    ...
}
```

#### Running the Gitple service

Set the service in the `viewDidLoad` function and set `GitpleDelegate` in the `ViewController` to run the Gitple service and call the Gitple execution function.

- `ViewController`

In the `viewDidLoad` method of` ViewController.swift`, set the `GitpleDelegate` and call the `Gitple.launch()` to execute.

```swift
import GitpleSDK

class ViewController: UIViewController {
  override func viewDidLoad() {
    Gitple.delegate = self                       // Set GitpleDelegate.
    Gitple.config().setHideHeader(isHide: true); // Set the header inside Gitple to Hide
  }

  // gitple start button
  @objc func onChatStartButtonClicked() {
    Gitple.launch()                              // Execute Gitple
  }
}
```

Add the `GitpleDelegate` protocol to `ViewController` extension. And, add the navigation title and End button that are needed when Gitple runs to the `onViewLaunched method`.

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

#### Setting the log-in user

Log in as a user according to the process of the App after initializing Gitple and then, set the Gitple user as follows.

```swift
Gitple.user().setId(id: "iosswiftuser01")
             .setEmail(email: "iosswiftuser01@gitple")
             .setName(name: "iosswiftuser01")
             .setPhone(phone: "0000000000")
             .setMeta(key: "company", value: "gitple")
             .setMeta(key: "order", value: "gitple")
        
```

#### Setting the non log-in user
- If you execute `Gitple:launch` without setting the value in `Gitple:user`, you can start consultation by receiving the email, which is the default mandatory input field. ( [Changing settings in "**Settings> Chat App**" menu](http://guide.gitple.io/#/en/howto?id=settings-gt-chat-app))


- If there is a `Gitple.user` value that was set before, you can reset the setting using `Gitple:user:reset`.

```swift
Gitple.user().reset()        
```

#### Check the number of unread messages

The function of checking the number of unread messages is supported for the log-in user only.

Add the `onUnreadCount` method to `ViewController: GitpleDelegate` extension. And, the number of unread messages can be checked at the added method, if the `Gitple.unreadCount()` is executed.

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

#### Setting the user language

Set the user language to use on the chat screen.

?> You can set the language that is set in “Chatting App Supported Languages ” of the "**Setting > Apps**” menu in the workspace. 

```swift
  Gitple.config().setUserLang(lang: "en") // Sets the chat screen language to English.
```


Don’t you have an account yet? [Free membership](https://workspace.gitple.io/#/register/en)

---

© Gitple Inc. All Rights Reserved.
