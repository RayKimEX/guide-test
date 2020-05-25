### 채팅앱 Web API

#### Gitple('boot', loginUser)

로그인하지 않은 상담고객 예제

  ```javascript
  if (window.Gitple) {
    window.Gitple('boot');
  }
  ```

로그인 상담고객 예제

  ```javascript
  if (window.Gitple) {
    var loginUser = {
      id: '12345', // 상담고객 식별 ID
      name: 'gitple',
      email: 'user1@gitple.com',
      phone: '010-xxxx-xxxx',
      meta: {
        'Company': 'Gitple',
        'Link': '<a href="https://gitple.io/" target="_blank">내부정보</a>',
        '고객정보': '<a href="https://myService/api/customer?id=12345" target="_blank">고객정보</a>',
        '이슈생성': '<a href="https://github.com/gitple/cs/issues/new?title=이슈제목&body=고객이슈내용" target="_blank">이슈생성</a>'
      }
    };

    window.Gitple('boot', loginUser);
  }
  ```


#### Gitple('update')

깃플 의 환경 변수를 변경하거나 상담고객 정보가 변경될 경우 사용하는 함수.

설정된 값으로 상담고객 정보가 변경되고 상담 서비스를 다시 시작합니다.

  ```javascript
  if (window.Gitple) {
    var updateduser = {
      id: '12345', // 상담고객 식별 ID
      name: 'gitple',
      email: 'user1@gitple.com',
      phone: '010-xxxx-xxxx',
      meta: {
        'Company': 'Gitple',
        'Link': '<a href="https://gitple.io/" target="_blank">내부정보</a>',
        '고객정보': '<a href="https://myService/api/customer?id=12345" target="_blank">고객정보</a>',
        '이슈생성': '<a href="https://github.com/gitple/cs/issues/new?title=이슈제목&body=고객이슈내용" target="_blank">이슈생성</a>'
      }
    };

    window.Gitple('update', updateduser);
  }
  ```

#### Gitple('shutdown')

채팅앱을 종료할 때 사용하는 함수.

채팅앱 아이콘 및 채팅앱 자체를 종료합니다.

  ```javascript
  if (window.Gitple) {
    window.Gitple('shutdown');
  }
  ```

#### Gitple('show')

채팅앱 아이콘을 보여주는 함수.

  ```javascript
  if (window.Gitple) {
    window.Gitple('show');
  }
  ```

#### Gitple('hide')

채팅앱 아이콘을 숨기는 함수.

  ```javascript
  if (window.Gitple) {
    window.Gitple('hide');
  }
  ```

#### Gitple('open')

채팅앱 대화창을 오픈하는 함수.

```html
<!-- 이미지를 이용해서 채팅창 열기 -->
<a href="javascript:Gitple('open');">
  <img src="이미지 주소" alt="Open chat"/>
</a>

<!-- 링크를 이용해서 채팅창 열기 -->
<a href="javascript:Gitple('open');">
  채팅창 열기
</a>

<!-- 버튼을 이용해서 채팅창 열기 -->
<button type="button" onclick="javascript:Gitple('open');">채팅창 열기</button>
```

#### Gitple('close')

채팅앱 대화창을 닫는 함수.

```html
<!-- 이미지를 이용해서 채팅창 닫기 -->
<a href="javascript:Gitple('close');">
  <img src="이미지 주소" alt="Close chat"/>
</a>

<!-- 링크를 이용해서 채팅창 닫기 -->
<a href="javascript:Gitple('close');">
  채팅창 닫기
</a>

<!-- 버튼을 이용해서 채팅창 닫기 -->
<button type="button" onclick="javascript:Gitple('close');">채팅창 닫기</button>
```


#### Gitple('onOpen', function () { ... })

채팅앱 대화창이 열리면 호출되는 콜백함수.

```js
Gitple('onOpen', function () {
  console.log('onOpen event');
});
```

#### Gitple('onClose', function () { ... })

채팅앱 대화창이 닫히면 호출되는 콜백함수.

```js
Gitple('onClose', function () {
  console.log('onClose event');
});
```

#### Gitple('changeTooltip', message, { hide: Boolean })

툴팁에 표시되는 메시지를 설정하고, 툴팁의 노출 여부를 지정합니다.
툴팁의 기본 설정값은 `툴팁 보임`, `{hide: false}` 입니다.

```js
Gitple('changeTooltip', '', { hide: true }); // Hide tooltip
setTimeout(function () {
  Gitple('changeTooltip', '새로운 알림이 도착하였습니다.'); // Show tooltip
}, 2000);
```
