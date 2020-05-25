깃플을 iOS에 연동하는 가이드입니다.
깃플 iOS SDK는 iOS 8 이상(Swift 3.1이상)을 지원하고 샘플코드는 다음 Github 페이지에서 확인 가능합니다.

> 샘플코드: [https://github.com/gitple/gitple-ios-sdk](https://github.com/gitple/gitple-ios-sdk)


## Gitple SDK 설치

#### CocoaPods로 설치

iOS에서 깃플 연동은 CocoaPods를 지원합니다.

CocoaPods를 사용하지 않고 있다면 [CocoaPods Getting Start 가이드](https://guides.cocoapods.org/using/getting-started.html)를 참고해서 설치하시고 XCode 프로젝트의 루트 디렉토리에서 다음 명령을 싱행하면 `Podfile` 파일이 생성됩니다. 

```bash
$ cd $PROJECT_PATH
$ pod init
```

`Podfile`파일에 깃플 SDK 라이브러리 설치를 위해서 `pod 'Gitple'` 라인을 추가하고 저장합니다.

```ruby
target 'Target Name' do
  pod 'Gitple'
end
```

> Swift를 사용할 경우는 반드시 `Podfile`에서 `# use_frameworks!` 부분의 주석을 제거해야 합니다.

!> xcode 9.2 이하 버전을 사용할 경우는 Gitple SDK 1.x 버전을 사용해야 합니다.

```ruby
target 'Target Name' do
  pod 'Gitple', '< 2.0'
end
```

파일 저장 후에 터미널에서 `pod instal`l을 하면 설치가 완료됩니다.
그리고 CocoaPods이 적용된 프로젝트를 열기 위해서는 `.xcodeproj` 파일이 아니라 `.xcworkspace`파일을 열어야만 적용됩니다.

## 프로젝트 설정

#### info.plist에 권한 추가
깃플 연동을 위해서는 기존 프로젝트에 파일 첨부를 위해서 `info.plist`파일에 다음의 권한을 추가해야 합니다.

- `Privacy - Photo Library Usage Description`
- `Privacy - Camera Usage Description`
- `Privacy - Microphone Usage Description`

그리고 사용자에게 보여지는 피드백 문구는 앱의 상황에 맞게 추가하시면 됩니다.

- XCode에서의 설정 예제
![info.plist](assets/images/xcode_info.plist.png)
