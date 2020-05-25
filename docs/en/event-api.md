Hybrid Chatting [Gitple](https://gitple.io/en)

# Event APIs

## Integration Setting

Setting guide for "**Settings > Integrations**" > "**Event APIs**".

* URL
  * REST API to POST
  * HTTPS is recommended for transport security.
* Secret
  * For each API call, a hash value for the payload is added to the `X-Hub-Signature` header to determine that it is a safe API call from the Gitple.
  * The hash value uses the digest of HMAC (sha256) based on the Secret you entered.
* SSL Verification
  * If you are using HTTPS, we recommend setting the `Enable SSL verification` to check whether it is a valid certificate.
  * Select the event type to apply (Binding Event)
* Events
  * Send external message(`send_external_message`)
    * `Send Message` menu will be shown at the customer info view.
      * Agent can send message to the customer.
  * Send session state event when closed(`session_state_open`)
    * When a session is created, the API is called by loading the session basic information.
  * Send session state event when closed(`session_state_inprogress`)
    * When a session is assigned to an agent, the API is called by loading the session basic information.
  * Send session state event when closed(`session_state_close`)
    * When a session is ended, the API is called by loading the session basic information.

## API Spec

* `Header` is commonly used.
* All of the time format is **UTC** `Date`.

### Headers

```json
{
  'X-Hub-Signature': 'sha256=HASH_SIGNATURE_DIGESTED_BY_SECRET'
  'content-type': 'application/json'
}
```

### send_external_message

* Payload example

  ```json
  {
    triggerId: "trigger_query_id",
    ctime: "2019-04-29T08:57:15.878Z",
    appCode: "YOUR_OWN_APP_CODE",
    type: "send_external_message",

    from: {
      type: "agent",
      id: "agent_query_id"
    },

    to: {
      type: "user",
      id: "user_query_id",
      identifier: "integrated_user_id"
      anonymous: false,
      name: "user_name",
      email: "user_email",
      phone: "user_phone",
      lang: "ko",
      groups: ["aaa"],
      tags: ["xx", "yy"]
      meta: {
        your_key_1 : "your_value_1"
        ...
        your_key_n : "your_value_n"
      }
    },

    message: {
      type: "text/plain",
      content: "AGENT_TYPED_MESSAGE"
    }
  }
  ```

### session_state_close

* Payload example

  ```json
  {
    triggerId: "trigger_query_id",
    ctime: "2019-04-29T09:05:56.001Z",
    appCode: "YOUR_OWN_APP_CODE",
    type: "session_state_close",

    session: {
      id: "session_query_id",
      openTime: "2019-04-29T08:57:15.878Z",
      inprogressTime: "2019-04-29T08:57:15.943Z",
      closeTime: "2019-04-29T09:05:56.000Z",
      reason: "userCancel",
      userId: "user_query_id",
      userGroups: ["xxxx"],
      assigneeType: "agent",
      assigneeId: "agent_query_id",
      categories: ["aaa", "bbb"],
      tags: ["sss", "tttt"],
      note: "session_note_message"
    }
  }
  ```

* Payloads for open and inprogress are the same format as above.
* For more details, see this [API Spec Document](http://guide.gitple.io/api).

---

© Gitple Inc. All Rights Reserved.
