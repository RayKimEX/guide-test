하이브리드 채팅상담 [깃플](https://gitple.io)

# 봇 연동 방법

깃플 봇 시스템은 어느 챗봇 엔진이나 연동해서 사용할 수 있도록 제공하고 있습니다.

## 봇 시스템 아키텍처
![Bot Architecture](./assets/images/bot-sdk/chatbot_arch.png)

## 봇 SDK

### 기본

기본 봇 연동 방법을 현재 Nodejs 인터페이스로 제공합니다.

#### [Gitple-Bot SDK](https://github.com/gitple/gitple-bot-node)

### 확장

위 기본 봇 SDK을 활용하여, 다양한 방식의 확장 인터페이스를 제공합니다.

_추가로 지원이 필요한 확장이 있으면 언제든지 말씀주세요._

| 확장 인터페이스  | 설명 |
|-----------------| -------|
| [Gitple-Bot-RiveScript SDK](https://github.com/gitple/gitple-bot-rivescript-node) | RiveScript(www.rivescript.com) 언어를 사용해서 깃플과 연동할 수 있습니다. |
| [Gitple-Bot-Dialogflow Example](https://github.com/gitple/gitple-bot-dialogflow-example) | Google Dialogflow(dialogflow.com) 빌더를 사용해서 깃플과 연동할 수 있습니다. |

## 봇 연동

> 확장 인터페이스 봇을 통해 간단히 봇 연동 테스트를 진행하실 수 있습니다.

1. [Gitple-Bot-RiveScript SDK](https://github.com/gitple/gitple-bot-rivescript-node) 를 다운로드 하여 연동할 봇을 준비해주세요.

  봇 기동 방법은 [README](https://github.com/gitple/gitple-bot-rivescript-node/blob/master/README.md) 내용을 참고해주세요.

2. 워크스페이스 > 설정 > **봇 관리** 메뉴에서 봇을 추가하실 수 있습니다.

  ![Bot Management Menu](./assets/images/bot-sdk/bot_management_menu.png)

  **봇 관리** 메뉴를 선택해주세요.

  ![Bot Management](./assets/images/bot-sdk/bot_management.png)

3. **봇 추가** 버튼을 클릭하시고 봇 이름을 입력, 연동될 앱을 선택한 후 생성하시면 됩니다.

  필요에 따라 시작 봇 설정을 하실 수 있습니다. 시작 봇 설정 시에는 FAQ 안내 봇 설정이 사용함으로 되어있더라도 시작 봇이 우선됩니다.

  ![Bot Management Add](./assets/images/bot-sdk/bot_management_add_before.png)

4. 봇을 추가하시면 목록에서 추가된 봇을 확인하실 수 있습니다. 앞서 준비한 봇 연동을 위해 **연동 파일 다운로드 아이콘**을 클릭해주세요.

  ![Bot Management Add](./assets/images/bot-sdk/bot_management_add_after.png)

5. 다운로드 받은 **config.json** 파일을 준비한 봇의 config.json 파일과 교체해주세요.

  ```config.json
  # 각 정보는 선택된 앱과 각각의 봇에 따라 자동으로 생성됩니다.
  {
    "BOT_ID": BOT_ID,
    "BOT_GATEWAY_SECRET": BOT_GATEWAY_SECRET,
    "APP_CODE": APP_CODE
  }
  ```
6. 봇을 기동하시면 자동으로 워크스페이스 앱과 연동됩니다!!

  이제 채팅앱 테스트를 통해 연동을 확인하실 수 있습니다.

  [채팅앱 테스트](ws-inapp-test.md) ← 채팅앱 테스트 방법은 이 링크를 확인해주세요.

---

아직 계정이 없으시다구요? [무료 회원 가입](https://workspace.gitple.io/#/register)

---

© Gitple Inc. All Rights Reserved.
