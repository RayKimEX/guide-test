
# 깃플 가이드 [guide.gitple.io](guide.gitple.io)

### The thing that you have to concern   

When you add `foo.md` file, you should add `foo.md` file to search paths in `index.html` like 
```
    search: {
      maxAge: 86400000, 
      paths: [  
        'foo.md' // <-- this is what you have to concern whenever you add every `.md` file to guide
      ],
      placeholder: {
        '/': 'Search',
        '/en/': 'Search'
      },
      noData: {
        '/': '결과 없음',
        '/en/': 'No Results'
      },
      // Headline depth, 1 - 6
      depth: 4
    }
```



### Install Nodejs(6.xx)
[download link](https://nodejs.org/download/release/v6.14.1/node-v6.14.1.pkg)

### Install & Run
  - Install
  ```bash
  $ npm i docsify-cli -g // version 4.1.11
  ```

  - Run at local
  ```
  $ cd {guide project path}
  $ docsify serve docs
  ```

### build jekyll ([github help](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/))

  - Add `Gemfile` in docs directory

  - Add these lines to a `Gemfile`
  ```
  source 'https://rubygems.org'
  gem 'github-pages', group: :jekyll_plugins
  ```

  - Install Jekyll and others
  ```
  $ cd {guide}/docs
  $ bundle install
  ```

  - Build
  ```
  $ cd {guide}/docs
  $ bundle exec jekyll build
  ```

### build API

  - install apidoc

  ```
  npm install apidoc -g
  ```
  - generate doc
  
  ```
  cd five/server; 
  npm run doc
  ```


### Reference
  - [docsify](https://docsify.js.org)
---

Copyright © Gitple

All rights reserved.
