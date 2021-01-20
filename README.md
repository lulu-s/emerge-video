# emerge-video
video loop player 🖥

> 用于宣传视频需循环播放的场合，视频比例需和屏幕分辨率一致

## 依赖
* [http-server](https://www.npmjs.com/package/http-server)
* [Electron](https://www.electronjs.org/)

## 测试
```
    cd ./
    http-server -p 1234

    cd assets/
    http-server -p 8080 --cors

    cd electron 
    electron shell.js
```

## 设置开机自启动