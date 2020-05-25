하이브리드 채팅상담 [깃플](https://gitple.io)

## 링크로 대화창 열기

기본으로 제공되는 채팅앱 이외에 `버튼`, `이미지`, `링크` 등에서 대화창을 제어할 수 있습니다.

아래에 각각의 경우에 대해서 샘플 코드를 참고하시면 됩니다.


#### 버튼을 이용해서 채팅창 열기

```
<button type="button" onclick="javascript:Gitple('open');">채팅창 열기</button>
```

#### 이미지를 이용해서 채팅창 열기

```html
<a href="javascript:Gitple('open');">
  <img src="이미지 주소" alt="Open chat"/>
</a>
```

#### 링크를 이용해서 채팅창 열기

```
<a href="javascript:Gitple('open');">
  채팅창 열기
</a>
```

?> 'open' 과 같은 사용방법으로, 대화창을 닫는 `'close'` 도 가능합니다.

!> 기본 채팅앱 아이콘을 보이지 않게 하려면 "**설정 > 채팅앱**" 에서 채탱앱 아이콘의 위치와 표시 여부를 변경할 수 있습니다. (채팅앱 아이콘 표시 방법)
([채팅앱 아이콘 표시 방법](ws-settings-inapp.md))

<br>
[튜토리얼 페이지로 돌아가기](./tutorial.md)

---

© Gitple Inc. All Rights Reserved.
