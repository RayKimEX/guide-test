Hybrid Chatting [Gitple](https://gitple.io/en)

# iOS Objective-C link guide

[ios-sdk common](ios-sdk-common.md ':include')

## Adding the Gitple service

To use Gitple functions, the import directive should be used at the top of the file.

```objectivec
#import <GitpleSDK/GitpleSDK-Swift.h>
```

#### Service initialization

The `App code` is required to use Gitple functions.

?> For `App code`, log into [Worksapce](https://workspace.gitple.io) and select the "**Settings > Integrations**"menu and copy the code at the “App code” section at the top.

![Meta](assets/images/sdk_app_code_copy.png)

Call the initialization function at `AppDelegate:didFinishLaunchingWithOptions` after copying the App code.

- `AppDelegate.m`

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    ...
    [Gitple initializeWithAppCode:GITPLE_APPCODE];
    ....
}
```

####  Running the Gitple service

Set the service in the `viewDidLoad` function and set `GitpleDelegate` in the `ViewController` to run the Gitple service and call the Gitple execution function.


- `ViewController`

Expand the class in `ViewController.m` and inherit `GitpleDelegate`, and then add the `GitpleViewController` variable.
```objectivec
#import <GitpleSDK/GitpleSDK-Swift.h>

@interface ViewController () <GitpleDelegate> {
    GitpleViewController* _gitpleViewController;
}
...
@property (nonatomic, retain) GitpleViewController *gitpleViewController;
...
@end
```

Set Gitple setDelegate in `viewDidLoad` at the `ViewController.m` implementation section and execute Gitple by invoking the `Gitple launch` method.

```objectivec
@implementation ViewController
...
@synthesize gitpleViewController;

- (void)viewDidLoad {
    [super viewDidLoad];
    
    [Gitple setDelegate:self];                            // GitpleDelegate 설정
    (void)[[Gitple config] setHideHeaderWithIsHide:true]; // Hide Gitple header
}

- (IBAction)startChatButton:(id)sender {
    [Gitple launch];                                      // Run Gitple
}
...
@end

```

Add the navigation title and End button that are needed when Gitple runs to the `GitpleDelegate:onViewLaunchedWithSender` method.
```objectivec
- (void)onViewLaunchedWithSender:(GitpleViewController * _Nonnull)sender {
    self.gitpleViewController = sender;
    
    self.gitpleViewController.navigationItem.title = @"Chatting";
    
    UIBarButtonItem *item = [[UIBarButtonItem alloc] initWithTitle:@"Close" style:UIBarButtonItemStyleDone target:self action:@selector(closeGitple:)];

    self.gitpleViewController.navigationItem.rightBarButtonItem = item;
}

- (void)closeGitple:(UIBarButtonItem*)sender {    
    [[self navigationController] dismissViewControllerAnimated:true completion:nil];
}
```


####  Setting the log-in user

Log in as a user according to the process of the App after initializing Gitple and then, set the Gitple user as follows.

```objectivec
GitpleUser *gitpleUser = [Gitple user];
    
(void)[gitpleUser setIdWithId:@"iosobjcuser01"];
(void)[gitpleUser setEmailWithEmail:@"iosobjcuser01@gitple"];
(void)[gitpleUser setNameWithName:@"iosobjcuser01"];
(void)[gitpleUser setPhoneWithPhone:@"0000000000"];
(void)[gitpleUser setMetaWithKey:@"company" value:@"gitple"];
(void)[gitpleUser setMetaWithKey:@"order" value:@"gitple"];
```

#### Settign the non log-in user
- If you execute `Gitple:launch` without setting the value in `Gitple:user`, you can start chatting by receiving the email, which is the default mandatory input field.  ([Change setting in ("**Settings > Chat App**" menu)](http://guide.gitple.io/#/en/howto?id=settings-gt-chat-app))

- •	If there is a `Gitple.user` value that was set before, you can reset the setting using `Gitple:user:reset`.

```objectivec
GitpleUser *gitpleUser = [Gitple user];
[gitpleUser reset];
```

#### Check the number of unread messages

The function of checking the number of unread messages is supported for the log-in user only.

Add the `onUnreadCountWithCount` method in the class that extended `GitpleDelegate`. And, the number of unread messages can be checked at the added method, if the `[Gitple unreadCount]` is executed.
```objectivec
  ...
  [Gitple unreadCount];
  ...

- (void)onUnreadCountWithCount:(NSInteger)count {
    NSLog(@"onUnreadCount cunt:%i", (int)count);
}
```

#### Setting the user language 

Set the user language to use on the consultation screen.

?> You can set the language that is set in “Chatting App supported language” attribute of the "**Setting > Apps**” menu in the workspace.

```objectivec
  (void)[[Gitple config] setUserLangWithLang:@"en"]; // Change language
```


Don’t you have an account yet? [Free membership](https://workspace.gitple.io/#/register/en)

---

© Gitple Inc. All Rights Reserved.
