iOS Swift link guide 

A guide to link Gitple with iOS. The Gitple iOS SDK supports iOS 8 or later (Swift 3.1 or later), and sample codes are available on the following Github page.

> Sample code: [https://github.com/gitple/gitple-ios-sdk](https://github.com/gitple/gitple-ios-sdk)


## Installing Gitple SDK

#### Install with CocoaPods

iOS link to Gitple supports CocoaPods.

If you are not using CocoaPods, install it by referring to [CocoaPods Getting Start guide](https://guides.cocoapods.org/using/getting-started.html) and the execute the following command in the root directory of your XCode project to create a `Podfile` file.

```bash
$ cd $PROJECT_PATH
$ pod init
```

Add a `pod Gitple` line and save it to install the Gitple SDK library in the `Podfile` file.

```ruby
target 'Target Name' do
  pod 'Gitple'
end
```

> When using Swift, be sure to remove the comment in the `# use_frameworks!` section from `Podfile`.  

!> If you are using xcode 9.2 or earlier, you must use Gitple SDK 1.x.

```ruby
target 'Target Name' do
  pod 'Gitple', '< 2.0'
end
```

Installation will be completed if you execute `pod install` in the terminal after saving the file. 
And, to open the project that CocoaPods is applied, the `.xcworkspace` file should be opened, instead of the `.xcodeproj` file.
## Project settings

#### Adding rights to info.plist
To link to Gitple, the following rights should be added to the `info.plist` file to attach a file to the existing project.

- `Privacy - Photo Library Usage Description`
- `Privacy - Camera Usage Description`
- `Privacy - Microphone Usage Description`

Then, you can add feedback phrases displayed to the user according to the situation of your App.

- Setting example in XCode 

![info.plist](assets/images/xcode_info.plist.png)
