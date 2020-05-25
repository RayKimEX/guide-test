Hybrid Chatting [Gitple](https://gitple.io/en)

# React Native link guide
 
## Installation

Install the Gitple SDK package in the React Native project.

```bash
npm i -S react-native-gitple-sdk
```

Link the library after installation. 
```bash
react-native link react-native-gitple-sdk
```

## Rights assignment

To upload files, you need to add permissions to both iOS and Android.

#### iOS

Add the following permissions to the `info.plist` file.

```
NSPhotoLibraryUsageDescription
NSCameraUsageDescription
NSMicrophoneUsageDescription
```

#### Android

Add the following permissions to the `AndroidManifest.xml` file.

```
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.CAMERA"/>
```

## Starting chat

Import the `react-native-gitple-sdk` package into the project and initialize the Gitple module using the issued App code. (`Gitple.initialize("{app code}");`)
Then, create and execute a component to run `GitpleView`.


- `hideHeader` (optional): If set to `true`, the header menu of the Gitple consultation will not be shown. (default : `false`)

```javascript
import { Gitple, GitpleView } from 'react-native-gitple-sdk';

export default class App extends Component {

  constructor(props) {
    super(props);
  
    // Initialize Gitple.
    Gitple.initialize("{app code}");
  }
}
 
class GitpleChat extends React.Component {
  constructor() {

  }

  render() {
    let hideHeader = true;
    // Start chat
    return (
      <GitpleView 
        hideHeader={hideHeader}
      />
    );
  }
}
```

#### App code

For App code, log into [workspace](https://workspace.gitple.io) and select the "**Setting > Integrations**"menu and copy and paste the code at the “App code” attribute at the top.
![Meta](assets/images/sdk_app_code_copy.png)


## Log-in user

If you use as a log-in user, you can use the `Gitple.setUser()` function after initializing Gitple as follows.

```javascript
  // Initialize Gitple.
  Gitple.initialize("{app code}");

  // User log-in
  let userInfo = {....};
  Gitple.setUser(userInfo).then(() => {
    // User logout: Initializes the user data.
  }).catch((error) => {
    console.warn('Gitple setUser failed. error:', error);
  });

  // User logout: Initializes the user data.
  Gitple.resetUser().then(() => {
    // Complete log-out user setting.
  }).catch((error) => {
    console.warn('Gitple reset failed. error:', error);
  });
```

#### Log-in user fields

| Item | Type           | Detailed description|
| :------- |:---------------:| :----------------------------|
| id       | String(required)  | customer identification ID: The unique value of the customer inside the service. The log-in ID and e-mail address are acceptable but the UUID and number that cannot be guessed are recommended. (Should be composed of numbers, lowercase alphabets, '.', and '@'. No special characters can be used at the beginning and end. Up to 50 characters are allowed.) |
| name     | String(option)  | Name of the customer                 |
| email    | String(option)  | E-mail of the customer                  |
| phone    | String(option)  | Phone number of the customer                 |
| meta     | Object(option)  | A field used to display the additional information on the chat screen, besides basic fields. `{'company':'gitple', 'city': 'seoul'}` |

#### Login error codes
The error code returned by `setUser` and `resetUser` is the error type. The definition value of the name field (string) is as follows.

| Item                  | Detailed description                                   |
| :-------------------:| :-------------------------------------------|
| APPCODE_UNDEFINED    | If `Gitple.initialzie` is invoked without an App code. |
| USER_UNDEFINED       | If there is no user information or there is no id.        |

## Checking unread messages

The `Gitple.unreadCount()` function checks the number of unread messages when used as a login user.

This function must be used after initializing Gitple and setting the user.


```javascript
  // Initialize Gitple.
  Gitple.initialize("{app code}");

  // User log-in
  let userInfo = {....};
  Gitple.setUser(userInfo).then(() => {
    // Check the user’s unread message.
    Gitple.unreadCount().then((count) => {
      console.info('Unread count :', count);
    }).catch((error) => {
      console.warn('Gitple get unreadCount failed. error:', error);
    });
  }).catch((error) => {
    console.warn('Gitple setUser failed. error:', error);
  });

```

#### Login error codes

The error code returned by `unreadCount` and resetUser is the error type. The definition value of the name field (string) is as follows.

| Item                  | Detailed description                                        |
| :-------------------:| :-----------------------------------------------|
| APPCODE_UNDEFINED    | If `Gitple.initialzie` is invoked without an App code.    |
| USER_UNDEFINED       | If there is no user information or there is no id.           |
| HTTP_FAILED           | If failed to fetch values due to a network or server error.   |


## Setting GitpleView props

#### Setting the chat screen header

`hideHeader`: Hides the header menu that is provided on the Gitple chat screen by default. `False` is the default value.

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

#### Setting the chat language 

`userLang`: Sets the language of Gitple consultation. If not set, it will be set to the language of the user system.

?> You can set the language that is set in “Chatting App Supported Languages” of the "**Settings > Apps**” menu in the workspace.


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

## Push settings

[Shortcut to Push SDK](en/push.md)

Don’t you have an account yet? [ Free membership](https://workspace.gitple.io/#/register/en)

---

© Gitple Inc. All Rights Reserved.
