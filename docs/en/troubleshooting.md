Hybrid Chatting [Gitple](https://gitple.io/en)

# Troubleshooting

This section explains how to solve the issue that can occur while linking to Gitple.


### The chat App is not shown

1. Did you hide the chat App icon?
The “Show icon automatically” check box may not be selected in "**Settings > Chat App > Launcher position**” attribute. Unless you want to control how to display the chat App differently, you have to select the check box.

2.	Is it not visible only in IE (Internet Explorer)? 
The way of displaying the chat App differs depending on the IE version. Therefore, you have to use Compatibility View function provided by Microsoft. In other words, you have to input the meta tag into the page as shown below. (Set to IE11 or Edge.)

   ```javascript
   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  ```

### If no push message is received

1. It may have been read by another chat window. Please try again after closing the window to which you have logged in using the account to receive push messages.

2. If you link to push messages using OneSignal, check whether the OneSignal tag is sent after the OneSignal initialization code
  - It should be like `OneSignal.sendTag("gp", "loginId");`  and the ID should be a `string`.


*The end of the current page*

---

© Gitple Inc. All Rights Reserved.
