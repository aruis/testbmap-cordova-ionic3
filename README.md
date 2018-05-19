# testbmap-cordova-ionic3
ordova-plugin-baidumaplocation example@ionic3


### if you got this error in a Android project.
`baidu location service can not decrypt the request query, please check the so file`
### please use this code in the platform/android/app/build.android
```
android{
  sourceSets{
  main{
       jniLibs.srcDir 'libs'  
      }
  }
  
  //other config ...
}
```
