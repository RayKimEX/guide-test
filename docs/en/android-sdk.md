Hybrid Chatting [Gitple](https://gitple.io)

# Android link guide

A guide to link the Gitple to Android.

Android `API 15` or later can be supported. You can find sample codes in the following  Github page.

> Sample code: [https://github.com/gitple/gitple-android-sdk](https://github.com/gitple/gitple-android-sdk)

## Project setting

Adds the Android SDK library to the Android project.

- Downloads the Android SDK library and adds it to the Android project app/libs.

?> [Download the Android SDK library](/assets/android/libs/gitple-android-sdk-v1.1.4.aar ":ignore")

- Add the `libs` folder to `build.gradle` in the App as a dependency repository. 
  
```build.gradle
repositories {
  flatDir {
    dirs 'libs'
  }
}
```

- Add the Gitple library to `build.gradle` in the App as dependency.

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

The Gitple library is dependent upon the above library. You can add the library that is not used by the running project as follows.
```build.gradle
dependencies {
  compile 'com.google.code.gson:gson:2.2.4'
  compile 'com.squareup.retrofit2:retrofit:2.3.0'
  compile 'com.squareup.retrofit2:converter-gson:2.3.0'
}
```



## Service initialization

- To initialize Gitple in the Android App, call `Gitple.initialize()` in `onCreate()` of `Application`.
- You can change the chatting service environment (welcome message, theme, setting the non log-in user, etc.) in "**Settings > Chat App**"  of the workspace.

```java
public class MyApplication extends Application {
    
    @Override
    public void onCreate() {
        super.onCreate();

        // Initialize Gitple chatting
        Gitple.initialize(this, "your app code");

        // If the Gitple chatting screen doesn’t display the header menu .
        Gitple.config().setHideHeader(true);
    }
  }
}
```


> If there is no application that was used by the Android App before, add anapplication in the manifest file as follows.

```xml
<application
    android:name=".MyApplication">
</application>
```

?> To input the App code, copy and paste the code in the "**App code**" attribute at the top of the "**Settings**" > "**Integrations**” menu 
   after logging into the workspace.

![Meta](assets/images/sdk_app_code_copy.png)

##  Setting the log-in user

- Set the user information of the log-in user using Gitple.user().

```java
if (loggined) {
  Gitple.user().setId("user id")
              .setName("user name")
              .setMeta("City", "Seoul");
} else {
  Gitple.user().reset(); // This function must be called when logging out. Initializes the user information.
}
```


## Setting the non log-in user

- If you execute `Gitple.launch()` without setting the value in Gitple.user(), you can start chatting by receiving the `email`, which is the default mandatory input field. 
  ["**Settings**" > "**Chat App**" Changing settings in the menu]
(http://guide.gitple.io/#/howto?id=%ec%84%9c%eb%b9%84%ec%8a%a4-%ec%84%a4%ec%a0%95-gt-%ec%b1%84%ed%8c%85%ec%95%b1)
- If there is a value that was set in Gitple.user() before, you can reset the setting using Gitple.user().Reset().


## Starting a Gitple chat

- Conduct chatting activities using `Gitple.launch()` after service initialization and user setup.

```java
  public void selectedGitpleMenu() {
    Gitple.launch();
  }
```


## APIs

### Installation APIs

Initializes and runs the chatting service, and checks the unread message.

##### initialize(Context context, String appCode)
  - This function must be called to initialize the service using `onCreate()` in the Android `application`.
  - For `appCode`, copy the "**Settings**" > "**Integrations**” > “**App code**” attribute value on the agent workspace screen and use it as a parameter.
  - *return* : void

##### launcher(Context context)
  - Perform chatting service activities.
  - Call when running the consultation service in the Android App.
  - *return* : void

##### unreadCount(GitpleCallback callback)
  - Checks the number of messages that the user has not read.
  - *return* : void
  - **Error codes** are defined in `Gitple.Error`.
  
| Error codes | Description            |
| :------- |:---------------|
| Gitple.Error.NOT_INITIALIZE    | Occur when Gitple.initialize() is not executed. |
| Gitple.Error.APPCODE_UNDEFINED | Occur when the App code is not defined.                 |
| Gitple.Error.USER_UNDEFINED    | Occur when the App code is not defined.           |
| Gitple.Error.HTTP_RESPONSE_FAILED | Occur when the App code is invalid or the users is not registered.  |
| Gitple.Error.HTTP_FAILED       | Occur when network connection fails.  |

  ```java
  Gitple.unreadCount(new GitpleCallback<Number>() {
        @Override
        public void onSuccess(Number data) {
            Log.v(TAG, "unreadCount Callback onSuccess. data=" + data);
            // Displays the message that has not been read by the user, if any.
        }

        @Override
        public void onError(Gitple.Error errorCode) {
            Log.v(TAG, "unreadCount Callback onError. code=" + errorCode);
        }
    });
  ```
  

### Configuration APIs

An API needed to initialize the chatting service that sets the value in Gitple.config().

```java
Gitple.config().setHideHeader(true);
```

##### setHideHeader(boolean isHideHeader)
  - If set to `true`, the header menu will not be not displayed on the consultation screen.
  - If not set, the header menu will be displayed.
  - *return* : Gitple.config() instance

##### setUserLang(String lang)
  - If `lang` is set, the language of the consultation screen will be changed.
  - *return* : Gitple.config() instance

?> You can set the language that is set in `Chatting App supported languages` attribute of the "**Settings**" > "**Apps**” menu in the workspace. 
  

### User APIs

A log-in user setting PI, which saves the value in `Gitple.user()`.

```java
Gitple.user().setId("user id")
             .setName("user name")
```

##### setId(String id)
  - A user identifier. Set with the unique value of the user in the service. It is recommended to use a unique value that cannot guess the log-in information for security         reasons, such as the UUID and numbers. **(Required)**
    - The ID should be composed of numbers, alphabets (lower case), and special characters ('.', '@')
    - Special characters cannot be used for the first and last character
    - Up to 50 characters are allowed.

  - *return* : Gitple.user() instance

##### setName(String name)
  - Sets the user name. (Optional)
  - *return* : Gitple.user() instance

##### setEmail(String email)
  - Sets the user e-mail. (Optional)
  - *return* : Gitple.user() instance

##### setPhone(String phone)
  - Sets the user phone number. (Optional)
  - *return* : Gitple.user() instance

##### setGroup(String group)
  - Sets the user group. (Optional)
  - `Group` is the user classification value and is used to assign a specific agent.
  - *return* : Gitple.user() instance

##### setMeta(String key, String value)
  - Sets the additional information of the user. (Optional)
  - The meta information can be added as occasion demands.
  - *return* : Gitple.user() instance

```java
Gitple.user().setId("user id")
             .setMeta("City", "Seoul")
             .setMeta("Companry", "Gitple")
             .setMata("Address", "Seoul, ...")
             .setMeta("Order Number", "xxxx-xxxx-xxxxx")
```


##### reset()
  - Initializes all previously set user information.
  - `reset()` must be called when the user logs out.
  - *return* : void

### Push settings
[Push SDK](en/push.md)

Don’t you have an account yet? [ Free membership ](https://workspace.gitple.io/#/register/en)

---

© Gitple Inc. All Rights Reserved.
