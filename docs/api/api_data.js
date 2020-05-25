define({ "api": [
  {
    "type": "get",
    "url": "https://api.gitple.io/v1/exports/agentGroups/:id",
    "title": "Get agent group data",
    "group": "Data",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "app-code",
            "description": "<p><code>app_code</code></p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "secret",
            "description": "<p><code>openapi_secret</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>agent group query id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET -H 'app-code: {app_code}' -H 'secret: {openapi_secret}' \\\n    https://api.gitple.io/v1/exports/agentGroups/{id}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Agent group query id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Agent group name</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "agents",
            "description": "<p>Agent id list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\":\"agent_group_query_id\",\n  \"identifier\":\"agent_group_name\",\n  \"agents\":[\n     \"agent_id\",\n     \"agent_id\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400/Bad",
            "description": "<p>Request The request parameters is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401/Unauthorized",
            "description": "<p>The <code>app_code</code> or <code>secret</code> is invalid.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/src/app.ts",
    "groupTitle": "Data",
    "name": "GetHttpsApiGitpleIoV1ExportsAgentgroupsId"
  },
  {
    "type": "get",
    "url": "https://api.gitple.io/v1/exports/agents/:id",
    "title": "Get agent data",
    "group": "Data",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "app-code",
            "description": "<p><code>app_code</code></p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "secret",
            "description": "<p><code>openapi_secret</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>agent query id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET -H 'app-code: {app_code}' -H 'secret: {openapi_secret}' \\\n    https://api.gitple.io/v1/exports/agents/{id}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Agent query id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>Agent login id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Agent role ('spAdmin'|'spUser')</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "groups",
            "description": "<p>Optional. Agent group id list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\":\"agent_query_id\",\n  \"identifier\":\"agent_login_id\",\n  \"name\":\"agent_name\",\n  \"email\":\"agent_nemail\",\n  \"role\":\"spAdmin\"\n  \"groups\":[\n     \"agent_group_id\",\n     \"agent_group_id\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400/Bad",
            "description": "<p>Request The request parameters is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401/Unauthorized",
            "description": "<p>The <code>app_code</code> or <code>secret</code> is invalid.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/src/app.ts",
    "groupTitle": "Data",
    "name": "GetHttpsApiGitpleIoV1ExportsAgentsId"
  },
  {
    "type": "get",
    "url": "https://api.gitple.io/v1/exports/categories/:id",
    "title": "Get category data",
    "group": "Data",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "app-code",
            "description": "<p><code>app_code</code></p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "secret",
            "description": "<p><code>openapi_secret</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>category query id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET -H 'app-code: {app_code}' -H 'secret: {openapi_secret}' \\\n    https://api.gitple.io/v1/exports/categories/{id}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Category query id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Category name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "parent",
            "description": "<p>Parent Category query id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "root",
            "description": "<p>Root Category query id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"category_query_id\",\n  \"name\": \"category_name\",\n  \"parent\": \"parent_category_query_id\",\n  \"root\": \"root_category_query_id\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400/Bad",
            "description": "<p>Request The request parameters is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401/Unauthorized",
            "description": "<p>The <code>app_code</code> or <code>secret</code> is invalid.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/src/app.ts",
    "groupTitle": "Data",
    "name": "GetHttpsApiGitpleIoV1ExportsCategoriesId"
  },
  {
    "type": "get",
    "url": "https://api.gitple.io/v1/exports/sessions/:id",
    "title": "Get session data",
    "group": "Data",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "app-code",
            "description": "<p><code>app_code</code></p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "secret",
            "description": "<p><code>openapi_secret</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>session id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET -H 'app-code: {app_code}' -H 'secret: {openapi_secret}' \\\n    https://api.gitple.io/v1/exports/sessions/{id}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Session query id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>Session state changed reason</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Session user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "openTime",
            "description": "<p>Session open time (UTC)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inprogressTime",
            "description": "<p>Session inprogress time (UTC)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "closeTime",
            "description": "<p>Session close time (UTC)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assigneeType",
            "description": "<p>Optional. Session assignee type ('agent'|'bot')</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assigneeId",
            "description": "<p>Optional. Session assignee id</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "userGroups",
            "description": "<p>Optional. User group id list</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "categories",
            "description": "<p>Optional. User selected category id list</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Optional. session tag id list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Optional. session note</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"id\":\"session_id\",\n   \"reason\":\"agent\",\n   \"userId\":\"user_id\",\n   \"openTime\":\"2019-04-29T08:57:15.878Z\",\n   \"inprogressTime\":\"2019-04-29T08:57:15.943Z\",\n   \"closeTime\":\"2019-04-29T09:05:56.000Z\",\n   \"userGroups\":[\n      \"user_group_id\"\n   ],\n   \"assigneeType\": \"agent\",\n   \"assigneeId\":\"agent_id\"\n   },\n   \"categories\":[\n      \"category_id\"\n   ],\n   \"tags\":[\n      \"session_tag_id\",\n      \"session_tag_id\"\n   ],\n   \"note\":\"session note\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400/Bad",
            "description": "<p>Request The request parameters is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401/Unauthorized",
            "description": "<p>The <code>app_code</code> or <code>secret</code> is invalid.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/src/app.ts",
    "groupTitle": "Data",
    "name": "GetHttpsApiGitpleIoV1ExportsSessionsId"
  },
  {
    "type": "get",
    "url": "https://api.gitple.io/v1/exports/sessions/:id/messages",
    "title": "Get session messages",
    "group": "Data",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "app-code",
            "description": "<p><code>app_code</code></p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "secret",
            "description": "<p><code>openapi_secret</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>session id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET -H 'app-code: {app_code}' -H 'secret: {openapi_secret}' \\\n    https://api.gitple.io/v1/exports/sessions/{id}/messages",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Message id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "senderType",
            "description": "<p>Message sender type ('agent'|'user'|'bot'|'sys')</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "senderId",
            "description": "<p>Message sender id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ctime",
            "description": "<p>Message creation time (UTC)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": \"5cc14b61415b8906cfa1abd6\",\n    \"senderType\": \"sys\",\n    \"senderId\": \"rule\",\n    \"content\": \"상담이 종료되었습니다.\",\n    \"ctime\": \"2019-04-25T03:08:12.458Z\"\n  },\n  {\n    \"id\": \"5cc14d46415b8906cfa1abd5\",\n    \"senderType\": \"agent\",\n    \"senderId\": 1,\n    \"content\": {\n      \"l\": {\n        \"m\": \"image/png\",\n        \"u\": \"https://gitple.io/test_image.png\"\n      }\n    },\n    \"ctime\": \"2019-04-25T06:01:42.444Z\"\n  },\n  {\n    \"id\": \"5cc14cd0415b8906cfa1abd4\",\n    \"senderType\": \"agent\",\n    \"senderId\": 2,\n    \"content\": {\n      \"e\": {\n        \"alt\": \"😄\"\n      }\n    },\n    \"ctime\": \"2019-04-25T05:59:44.661Z\"\n  },\n  {\n    \"id\": \"5cc14b67415b8906cfa1abd3\",\n    \"senderType\": \"user\",\n    \"senderId\": 1,\n    \"content\": \"test message\",\n    \"ctime\": \"2019-04-25T05:53:43.359Z\"\n  },\n  {\n    \"id\": \"5cc14b61415b8906cfa1abd2\",\n    \"senderType\": \"agent\",\n    \"senderId\": 1,\n    \"content\": \"hello.\",\n    \"ctime\": \"2019-04-25T05:53:37.384Z\"\n  },\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400/Bad",
            "description": "<p>Request The request parameters is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401/Unauthorized",
            "description": "<p>The <code>app_code</code> or <code>secret</code> is invalid.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/src/app.ts",
    "groupTitle": "Data",
    "name": "GetHttpsApiGitpleIoV1ExportsSessionsIdMessages"
  },
  {
    "type": "get",
    "url": "https://api.gitple.io/v1/exports/sessionTags/:id",
    "title": "Get session tag data",
    "group": "Data",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "app-code",
            "description": "<p><code>app_code</code></p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "secret",
            "description": "<p><code>openapi_secret</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>session tag query id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET -H 'app-code: {app_code}' -H 'secret: {openapi_secret}' \\\n    https://api.gitple.io/v1/exports/sessionTags/{id}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Session tag query id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Session tag name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\":\"session_tag_query_id\",\n  \"name\":\"session_tag_name\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400/Bad",
            "description": "<p>Request The request parameters is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401/Unauthorized",
            "description": "<p>The <code>app_code</code> or <code>secret</code> is invalid.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/src/app.ts",
    "groupTitle": "Data",
    "name": "GetHttpsApiGitpleIoV1ExportsSessiontagsId"
  },
  {
    "type": "get",
    "url": "https://api.gitple.io/v1/exports/userGroups/:id",
    "title": "Get user group data",
    "group": "Data",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "app-code",
            "description": "<p><code>app_code</code></p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "secret",
            "description": "<p><code>openapi_secret</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>user group query id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET -H 'app-code: {app_code}' -H 'secret: {openapi_secret}' \\\n    https://api.gitple.io/v1/exports/userGroups/{id}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User group query id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User group name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>User group code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\":\"user_group_query_id\",\n  \"name\":\"user_group_name\",\n  \"code\":\"user_group_code\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400/Bad",
            "description": "<p>Request The request parameters is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401/Unauthorized",
            "description": "<p>The <code>app_code</code> or <code>secret</code> is invalid.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/src/app.ts",
    "groupTitle": "Data",
    "name": "GetHttpsApiGitpleIoV1ExportsUsergroupsId"
  },
  {
    "type": "get",
    "url": "https://api.gitple.io/v1/exports/users/:id",
    "title": "Get user data",
    "group": "Data",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "app-code",
            "description": "<p><code>app_code</code></p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "secret",
            "description": "<p><code>openapi_secret</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>user id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET -H 'app-code: {app_code}' -H 'secret: {openapi_secret}' \\\n    https://api.gitple.io/v1/exports/users/{id}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User query id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>integrated customer id</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "anonymous",
            "description": "<p>whether user is a visitor or not</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lang",
            "description": "<p>User language('ko'|'en'|'ja'|'zh'|'vi')</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Optional. User meta data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Optional. User name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Optional. User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Optional. User phone</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "groups",
            "description": "<p>Optional. User group id list</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Optional. User tag id list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\":\"user_id\",\n  \"identifier\":\"user_identifier\",\n  \"anonymous\":false,\n  \"name\":\"user_name\",\n  \"email\":\"user_email\",\n  \"tags\":[\n     \"user_tag_id\",\n     \"user_tag_id\"\n  ],\n  \"groups\":[\n    \"user_group_id\"\n  ],\n  \"meta\":{\n  },\n  \"lang\":\"ko\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400/Bad",
            "description": "<p>Request The request parameters is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401/Unauthorized",
            "description": "<p>The <code>app_code</code> or <code>secret</code> is invalid.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/src/app.ts",
    "groupTitle": "Data",
    "name": "GetHttpsApiGitpleIoV1ExportsUsersId"
  },
  {
    "type": "get",
    "url": "https://api.gitple.io/v1/exports/userTags/:id",
    "title": "Get user tag data",
    "group": "Data",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "app-code",
            "description": "<p><code>app_code</code></p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "secret",
            "description": "<p><code>openapi_secret</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>user group id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET -H 'app-code: {app_code}' -H 'secret: {openapi_secret}' \\\n    https://api.gitple.io/v1/exports/userTags/{id}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User tag query id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User tag name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\":\"user_tag_query_id\",\n  \"name\":\"user_tag_name\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400/Bad",
            "description": "<p>Request The request parameters is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401/Unauthorized",
            "description": "<p>The <code>app_code</code> or <code>secret</code> is invalid.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/src/app.ts",
    "groupTitle": "Data",
    "name": "GetHttpsApiGitpleIoV1ExportsUsertagsId"
  },
  {
    "type": "post",
    "url": "https://api.gitple.io/v1/hooks",
    "title": "1. Sending message or notification",
    "group": "WebHook",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "app-code",
            "description": "<p><code>app_code</code></p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "secret",
            "description": "<p><code>openapi_secret</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "data format",
          "content": "{\n  \"type\": (\"message\"|\"notification\")\n  \"identifier\": \"user_identifier\"\n  \"anonymous\": (true|false)\n  \"lang\": ('ko'|'en'|'ja'|'zh'|'vi') // content_language, default: 'en'\n  \"content\": [\n    {\n      \"t\": {string},\n      \"l\": {    // link\n        \"u\": {url},// url\n        \"m\": {mime type}, // type image/png, text/json ...\n      },\n      \"a\": [ // interaction object\n        {\n          \"p\": \"button\", // presented as a button\n          \"t\": {string},  // button text\n          \"c\": {\n            \"l\": {    // link on button press\n              \"u\": {url}, // url to get\n            }\n          }\n        }\n      ]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST -H 'Content-type: application/json' -H 'app-code: {app_code}' -H 'secret: {openapi_secret}' --data \\\n   '{\n      \"type\": \"message\",\n      \"identifier\": \"user_identifier\",\n      \"anonymous\": false,\n      \"lang\": \"ko\",\n      \"content\": [\n        {\n          \"t\": \"message\",\n          \"l\": {\n            \"u\": \"image_url\",\n            \"m\": \"image/jpeg\"\n          },\n          \"a\": [\n            {\n              \"p\": \"button\",\n              \"t\": \"확인\",\n              \"c\": {\n                \"l\": {\n                  \"u\": \"https://example.com/readok/XXXXYYYY12334\"\n                }\n              }\n            }\n          ]\n        }\n      ]\n    }' \\\n    https://api.gitple.io/v1/hooks",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401/Unauthorized",
            "description": "<p>The <code>app_code</code> or <code>secret</code> is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Unauthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/src/app.ts",
    "groupTitle": "WebHook",
    "name": "PostHttpsApiGitpleIoV1Hooks"
  }
] });
