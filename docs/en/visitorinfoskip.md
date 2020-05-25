Hybrid Chatting [Gitple](https://gitple.io/en)

## Skip visitor information input

?> This function is organized as a guide after seeing the actual use of Gitple by the actual customers themselves.

If you decide it is important to go **straight to chat** without having to type in e-mail/phone number/name of your site, you can set up by following this guide.

* How it works
  - It makes visitors feel as if they were login-users, but it allows them to distinguish unique identifiers from real login-users.

 
##### Find `Gitple('boot');` at the bottom of the Gitple insertion code and change it as shown below.

```javascript
Gitple('boot', { id: String(Date.now()) });
```

*This guide uses current milliseconds for id, a unique identifier.*
  - You can create a complex random uuid like 
    `id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)`


The settings after the actual login are the same as the original [Login User Processing](en/web-sdk.md) section.

<br>
[Back to the tutorial](en/tutorial.md)

---

© Gitple Inc. All Rights Reserved.
