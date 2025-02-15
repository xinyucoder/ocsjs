# [3.16.0](https://github.com/enncy/online-course-script/compare/3.15.0...3.16.0) (2022-05-31)


### Bug Fixes

* **core:** 将 unsafeWindow 全局变量封装成 useUnsafeWindow ([1c0f0bb](https://github.com/enncy/online-course-script/commit/1c0f0bbf71661249b81bfed12472fd7bc389ebf2))
* **core:** 将超星视频进度步数调整为0.25，倍速颗粒度控制更高。 ([1702aa9](https://github.com/enncy/online-course-script/commit/1702aa9484bc5007a8f04cb0f1600af72ab28477))
* **core:** 修复智慧树倍速失效的BUG ([7943442](https://github.com/enncy/online-course-script/commit/79434421cc1b9c28c547b7c45b08ea762459dd26))


### Features

* **core:** 新增超星直播回放视频脚本 ([3788a6f](https://github.com/enncy/online-course-script/commit/3788a6fc5bb852b4847025b4df88a5b9499ce4de))



# [3.15.0](https://github.com/enncy/online-course-script/compare/3.13.8...3.15.0) (2022-05-30)


### Bug Fixes

* **core:** 脚本学习核心修改，适配 useSettings 和 useContext 两个 API ([b4e38b1](https://github.com/enncy/online-course-script/commit/b4e38b144cdd23504432a17950aafcbbcd6723c2))
* **core:** 删除全局变量 OCS ([c74195d](https://github.com/enncy/online-course-script/commit/c74195d0d3192e6854c8da0d32262634f4470de2))
* **core:** 修复超星复习模式自动切换的BUG ([64c63cc](https://github.com/enncy/online-course-script/commit/64c63cc19bf0f97de7409a1f3c87ab4321726365))
* **core:** 移除页面反调试脚本至超星 ([77cb19c](https://github.com/enncy/online-course-script/commit/77cb19c73df4fdacaac7120bdd748a49a06c8091))
* **core:** 因全局变量删除，且需要封装 store 中多个变量的处理，以及防止变量污染，新增了 useContext 和 useSettings 的API，相应涉及代码同步更新。 ([6d9fa51](https://github.com/enncy/online-course-script/commit/6d9fa5112e81ce278f16a8248c3f9dfe3fed8e13))
* **core:** 优化智慧树脚本，适配 useContext 和 useSettings 两个 API ([a24d991](https://github.com/enncy/online-course-script/commit/a24d991e8a289dd524ae577036a4e165b92afbd1))


### Features

* **core:** 搜索结果页面新增复制题目按钮 ([4cbd032](https://github.com/enncy/online-course-script/commit/4cbd03217678a9426806f98828d76f2da664ba20))
* **core:** 新增智慧树视频反反混淆脚本 ([5de857f](https://github.com/enncy/online-course-script/commit/5de857fb12f229fbed1284d507bac87500e5b6ce))
* **core:** 新增智慧职教（职教云）脚本 ([59c0cc2](https://github.com/enncy/online-course-script/commit/59c0cc2b66fa1af2418e682bec014342f3ed0e7f))
* **core:** 新增j脚本热更新功能，大大提升开发效率 ([42ba110](https://github.com/enncy/online-course-script/commit/42ba110b2cc8e54e043b73979216a8f22c9017fe))
* **core:** 优化智慧树文字识别脚本 ([608e760](https://github.com/enncy/online-course-script/commit/608e76076d63d3b22c55c0baaf2df008e0b32313))
* **core:** 智慧职教（职教云）发布 ([f0eb02f](https://github.com/enncy/online-course-script/commit/f0eb02f2ada42fb64a5f3767689ddf7af0c303e9))



## [3.13.8](https://github.com/enncy/online-course-script/compare/3.13.7...3.13.8) (2022-05-27)


### Bug Fixes

* **core:** 更新教程链接 ([f07fe39](https://github.com/enncy/online-course-script/commit/f07fe3906a1bbfe360d5174cf2bfacbfe319bb88))



## [3.13.7](https://github.com/enncy/online-course-script/compare/3.13.6...3.13.7) (2022-05-25)


### Bug Fixes

* **core:** 暂时删除视频答题功能 ([b8eeba5](https://github.com/enncy/online-course-script/commit/b8eeba52b2d8a8fdd16a90a9f7a3f73d9d8cc722))



## [3.13.6](https://github.com/enncy/online-course-script/compare/3.13.5...3.13.6) (2022-05-25)


### Bug Fixes

* **core:** 修复超星视频答题永远只选2个选项的BUG ([1209ee7](https://github.com/enncy/online-course-script/commit/1209ee7362a3bd10e7745393a944f686b0fca431))



## [3.13.5](https://github.com/enncy/online-course-script/compare/3.13.0...3.13.5) (2022-05-24)


### Bug Fixes

* **core:** 修复不能关闭路线切换的BUG ([a5694f1](https://github.com/enncy/online-course-script/commit/a5694f1acecb7962c0e39d5b6890b5b86b365d03))
* **core:** 修复视频频繁停止导致的频繁验证码 ([62f708e](https://github.com/enncy/online-course-script/commit/62f708e9e1a3e15582efd0618ca085b9aa578535))
* **core:** 修复题库配置报错异常未捕获的BUG ([4e04da0](https://github.com/enncy/online-course-script/commit/4e04da0ccfd938e58d4f0239be861a882fb01d56))
* **core:** 修改搜索结果文案 ([00f185e](https://github.com/enncy/online-course-script/commit/00f185e2cba817cbe4d58e28c1d8248bdd656b9d))
* **root:** 优化构建发布release.sh文件 ([a855740](https://github.com/enncy/online-course-script/commit/a855740f0b8ffa107f5f580f2123c70baedb16f7))



# [3.13.0](https://github.com/enncy/online-course-script/compare/3.12.3...3.13.0) (2022-05-23)


### Features

* **core:** 添加页面反调试脚本 ([1174617](https://github.com/enncy/online-course-script/commit/1174617cee99dd4d2e546d79279160ba1afea40e))
* **core:** 新增超星视频中答题功能 ([3f925cb](https://github.com/enncy/online-course-script/commit/3f925cba72910fce0353df421dec75a137f24e4e))
* **core:** 新增网课视频选项：显示视频进度 ([b6086df](https://github.com/enncy/online-course-script/commit/b6086df349fa50434e199c88c8fff6414bed4c14))



## [3.12.3](https://github.com/enncy/online-course-script/compare/3.12.2...3.12.3) (2022-05-22)


### Bug Fixes

* **core:** 修复误删最大长宽导致的超出页面范围 ([9b0bcd4](https://github.com/enncy/online-course-script/commit/9b0bcd4d0f26fb8591950e73563be78a5c3d876d))



## [3.12.2](https://github.com/enncy/online-course-script/compare/3.12.0...3.12.2) (2022-05-21)


### Bug Fixes

* **core:** 修复某些填空题识别不出的BUG ([c2c1c3d](https://github.com/enncy/online-course-script/commit/c2c1c3d2a7fafbe569b25531070b1803e07ccfe6))


### Features

* **core:** 新增自动答题选项：强制提交 ([e0ff3a2](https://github.com/enncy/online-course-script/commit/e0ff3a2c64d9e9de061889d2ad145ed29a492cb1))



# [3.12.0](https://github.com/enncy/online-course-script/compare/3.11.0...3.12.0) (2022-05-21)


### Bug Fixes

* **core:** 删除多余输出 ([8cee017](https://github.com/enncy/online-course-script/commit/8cee0173c670633d665bddd24c4884fa3ad3f621))
* **core:** 修改userjs打包代码未加分号报错 BUG ([e0ec319](https://github.com/enncy/online-course-script/commit/e0ec319150ec2f42a4a1256ae9250a3bfd1ae779))
* **core:** 优化多选题答案分割判断 ([7da6f92](https://github.com/enncy/online-course-script/commit/7da6f92074a4a9ced316be312aa664ea3f75af52))


### Features

* **core:** 新增随机作答功能 ([ecc2a87](https://github.com/enncy/online-course-script/commit/ecc2a87c24e2e81e82a6f1d4fe737b3ccab69b8c))
* **core:** 新增图片题识别脚本，新增搜索结果显示题目图片和答案图片 ([fd483c3](https://github.com/enncy/online-course-script/commit/fd483c3bbbe9af689e3b006c21ae12cdeccdd73a))



# [3.11.0](https://github.com/enncy/online-course-script/compare/3.10.6...3.11.0) (2022-05-21)


### Bug Fixes

* **core:** 新增未经压缩代码的打包 ([4099fc4](https://github.com/enncy/online-course-script/commit/4099fc428d6cfa3b835bf7c89f29bb63b11ad090))


### Features

* **core:** 新增userjs未经压缩代码打包 ([42badc8](https://github.com/enncy/online-course-script/commit/42badc85967abb2486c3a6895b8ffd8f9155f05a))



## [3.10.6](https://github.com/enncy/online-course-script/compare/3.10.4...3.10.6) (2022-05-20)


### Bug Fixes

* **core:** 修复题库配置解析器BUG ([3986a49](https://github.com/enncy/online-course-script/commit/3986a49a1323bc17f8cca54763586c23f6e03907))



## [3.10.4](https://github.com/enncy/online-course-script/compare/3.10.2...3.10.4) (2022-05-20)


### Bug Fixes

* **app:** 修复浏览器报错BUG ([fd3780c](https://github.com/enncy/online-course-script/commit/fd3780c2d9fdb58016b06f090696056934888f89))
* **core:** 修复超星考试页面样式问题 ([03fa9be](https://github.com/enncy/online-course-script/commit/03fa9bed5e176377e921deffbacf0212ccd85e34))
* **core:** 修复题库配置BUG ([2b8c939](https://github.com/enncy/online-course-script/commit/2b8c9391cecb7aed7e55b47694772feaed2e45fc))



## [3.10.2](https://github.com/enncy/online-course-script/compare/3.10.1...3.10.2) (2022-05-19)


### Bug Fixes

* **core:** 还原文件，修改 release 执行错误但继续打包发布的BUG ([201ae0f](https://github.com/enncy/online-course-script/commit/201ae0f6face34db36c9edffe0e323e744ea0106))



## [3.10.1](https://github.com/enncy/online-course-script/compare/3.10.0...3.10.1) (2022-05-19)


### Bug Fixes

* **app:** 修复软件浏览器选择BUG，并停止火狐浏览器使用。 ([5e2559b](https://github.com/enncy/online-course-script/commit/5e2559bfdea087806246120da566410b54a39c0b))
* **core:** 修改 typr 库，减少部分打包体积。 ([51e26de](https://github.com/enncy/online-course-script/commit/51e26debe37c9ad45e181a9d67528244863e7b33))



# [3.10.0](https://github.com/enncy/online-course-script/compare/3.9.6...3.10.0) (2022-05-17)


### Features

* **core:** 新增超星繁体字识别选项 - 字典识别 ([2a241d6](https://github.com/enncy/online-course-script/commit/2a241d6fe987316b335e57dd9b8b19be188f1805))
* **core:** 新增超星强制答题功能 ([e7c4fc0](https://github.com/enncy/online-course-script/commit/e7c4fc060c30b341c17fefa0148fde5170069c87))



## [3.9.6](https://github.com/enncy/online-course-script/compare/3.9.5...3.9.6) (2022-05-16)


### Bug Fixes

* 修复日志记录问题 ([c9f2147](https://github.com/enncy/online-course-script/commit/c9f21473a755a9af6e7bbeed4095f2209d64cb6e))
* **app:** 修复软件文件重命名时，运行文件名不同步的BUG ([28a1af1](https://github.com/enncy/online-course-script/commit/28a1af141217c83cc891952731b585153d6d3d59))
* **app:** 修复智慧树登录后白屏错误的BUG ([9622f7e](https://github.com/enncy/online-course-script/commit/9622f7e4c809e64be76c2cd4309e01f1ba9a4e44))


### Features

* **app:** 新增软件自动选择浏览器路径功能 ([eb56f67](https://github.com/enncy/online-course-script/commit/eb56f67e6885badcfa252fc716ac6e203560fc2a))
* **app:** 新增自定义脚本载入路径功能, 路径将托管到官方服务器 ([289cefe](https://github.com/enncy/online-course-script/commit/289cefecae8b7c3ed900bba1cb99150438a0a842))



## [3.9.5](https://github.com/enncy/online-course-script/compare/3.8.0...3.9.5) (2022-05-16)


### Bug Fixes

* 修复新增 shadowroot 后，复制粘贴脚本失效的BUG ([081a99e](https://github.com/enncy/online-course-script/commit/081a99ee62a47f427e02b33e3497e5f95e6dedfa))
* 优化超星识别时可能遇到选项按钮被删除的BUG ([ef396b4](https://github.com/enncy/online-course-script/commit/ef396b4a3bc9f10284529c3cbb857edba9c927ca))


### Features

* 新增 AnswererWrapper 参数: headers 和 type ([8c970bb](https://github.com/enncy/online-course-script/commit/8c970bb52a9b6ef83618b7f1dc2d55fa26045024))
* 新增题库配置跨域模块，可对不同域名的服务器进行跨域访问，并且新增 root 环境变量，可访问元素题目的跟节点元素对象。 ([4e8ea1c](https://github.com/enncy/online-course-script/commit/4e8ea1c6bdc84a1b0ce84b24af48a91cff0830af))



# [3.8.0](https://github.com/enncy/online-course-script/compare/3.7.4...3.8.0) (2022-05-11)


### Bug Fixes

* 避免重复劫持函数导致页面内存移除 ([067ee58](https://github.com/enncy/online-course-script/commit/067ee58e6ffa74657a8adf213ad32fcda0799243))
* 修复智慧树倍速不能立刻改变的BUG ([39d7402](https://github.com/enncy/online-course-script/commit/39d7402d804ad5adb8556150d58ae9277f97229f))


### Features

* + 新增消息提示 + 修复火狐底部版本不显示的BUG  + 优化eslint代码 + 增加文字识别错误提示 + 将原有弹出框修改为消息提示 + 增加API:message ([534bee3](https://github.com/enncy/online-course-script/commit/534bee3b6e449b9c725cbdec9efa27979c6545ed))
* 使用ShadowRoot对脚本进行加固 ([346d9d1](https://github.com/enncy/online-course-script/commit/346d9d109499e303704f7a05414631d9c7e3b11c))



## [3.7.4](https://github.com/enncy/online-course-script/compare/3.7.3...3.7.4) (2022-05-09)



## [3.7.3](https://github.com/enncy/online-course-script/compare/3.7.2...3.7.3) (2022-05-08)



## [3.7.2](https://github.com/enncy/online-course-script/compare/3.7.0...3.7.2) (2022-05-07)


### Bug Fixes

* 修改 store 初始化位置 ([808eb08](https://github.com/enncy/online-course-script/commit/808eb080a50e75ecef151010b74891ce272938c9))


### Features

* 添加智慧树文本识别脚本和屏蔽视频检测脚本 ([85ddac1](https://github.com/enncy/online-course-script/commit/85ddac119874d5b6877dfc8fa29ecdff70fec4ed))



# [3.7.0](https://github.com/enncy/online-course-script/compare/3.6.4...3.7.0) (2022-05-04)


### Features

* 添加答题等待时间，方便检查或者使用其他答题工具。 ([12f2960](https://github.com/enncy/online-course-script/commit/12f2960a47f3eb22cc9bbf91bf49c2ace54ea89e))



## [3.6.4](https://github.com/enncy/online-course-script/compare/3.6.2...3.6.4) (2022-05-04)


### Bug Fixes

* 深度优化OCR ([a21a8ad](https://github.com/enncy/online-course-script/commit/a21a8adf3b209ae5e65aff26c134da2a7b1f0fd2))
* 修复填空题多个填空不填的BUG ([4a0f031](https://github.com/enncy/online-course-script/commit/4a0f031b244a800b1e6ff39d3b1b99160372e66d))



## [3.6.2](https://github.com/enncy/online-course-script/compare/3.6.1...3.6.2) (2022-04-30)


### Bug Fixes

* 修改 OCR 脚本加载路径, 确保能够访问 work 和 core 脚本 ([9b1544a](https://github.com/enncy/online-course-script/commit/9b1544a8e2b002d78471d387e507967e20281020))



## [3.6.1](https://github.com/enncy/online-course-script/compare/3.6.0...3.6.1) (2022-04-30)


### Bug Fixes

* 修改环境依赖 ([9c69d35](https://github.com/enncy/online-course-script/commit/9c69d3581a84a8e50d87dd7a5d7ed3f446e45295))



# [3.6.0](https://github.com/enncy/online-course-script/compare/3.5.5...3.6.0) (2022-04-29)


### Features

* 新增智慧树共享课考试脚本 ([5ba2022](https://github.com/enncy/online-course-script/commit/5ba2022e084f7af9ef01309e7d88f8d42436732a))



## [3.5.5](https://github.com/enncy/online-course-script/compare/3.5.4...3.5.5) (2022-04-28)


### Bug Fixes

* 适当增大了文本便于识别 ([483d68b](https://github.com/enncy/online-course-script/commit/483d68b44720babd1a2f8432661712d869433ad4))



## [3.5.4](https://github.com/enncy/online-course-script/compare/3.5.3...3.5.4) (2022-04-28)


### Bug Fixes

* 优化OCR空格问题，还有上个版本OCR锁初始化的问题 ([82a84d7](https://github.com/enncy/online-course-script/commit/82a84d778aa99849f26fdd87447f41c7bdda72e2))



## [3.5.3](https://github.com/enncy/online-course-script/compare/3.5.2...3.5.3) (2022-04-28)


### Bug Fixes

* 优化 OCR ， 解决题目选项没有识别的BUG ([e534658](https://github.com/enncy/online-course-script/commit/e534658665be9863d19fc52ee787f7cad696bdd8))



## [3.5.2](https://github.com/enncy/online-course-script/compare/3.5.1...3.5.2) (2022-04-27)


### Bug Fixes

* 优化 OCR 加载逻辑 ([9dd69dc](https://github.com/enncy/online-course-script/commit/9dd69dce3073b137999c753b50f7fec8ee03a8a2))



## [3.5.1](https://github.com/enncy/online-course-script/compare/3.5.0...3.5.1) (2022-04-27)


### Bug Fixes

* 优化 OCR 数据加载问题 ([ed958a9](https://github.com/enncy/online-course-script/commit/ed958a9a47de90763daf7b59c7c1fa3abd698b7f))



# [3.5.0](https://github.com/enncy/online-course-script/compare/3.4.5...3.5.0) (2022-04-27)


### Bug Fixes

* 修复超星有时不能自动下一章的BUG ([7c5516f](https://github.com/enncy/online-course-script/commit/7c5516f731295ccc2fd73129bf659dd8b339d2f1))


### Features

* 繁体字乱码识别功能 ([ec01cd1](https://github.com/enncy/online-course-script/commit/ec01cd168a4f0f4111e7cb6e3c1597b07d7dfd14))
* 开发智慧树倍速选项 ([83015b7](https://github.com/enncy/online-course-script/commit/83015b73bdb0bda4f23af04b3814b8cd7e21d721))



## [3.4.5](https://github.com/enncy/online-course-script/compare/3.4.4...3.4.5) (2022-04-23)


### Bug Fixes

* 修复软件重命名有时会无效的BUG ([48fb520](https://github.com/enncy/online-course-script/commit/48fb520263fabb4740138705bf55d5086e425907))
* 优化软件启动加载 ([be866d1](https://github.com/enncy/online-course-script/commit/be866d1eb966a64aefe5fd95ffaf2c1c53ae76d8))



## [3.4.4](https://github.com/enncy/online-course-script/compare/3.4.3...3.4.4) (2022-04-22)


### Bug Fixes

* 修复提交设置的BUG ([612dccc](https://github.com/enncy/online-course-script/commit/612dcccc40bec2871cccf92bb46c2210da76623e))



## [3.4.3](https://github.com/enncy/online-course-script/compare/3.4.2...3.4.3) (2022-04-21)


### Bug Fixes

* 删除无用的选项：搜题错误时暂停 ([e30446c](https://github.com/enncy/online-course-script/commit/e30446c2627e628a8aa1c4bb7843c32734131e80))



## [3.4.2](https://github.com/enncy/online-course-script/compare/3.4.1...3.4.2) (2022-04-19)


### Bug Fixes

* 修复软件设置空白的BUG ([f757a3b](https://github.com/enncy/online-course-script/commit/f757a3b8ae6233eee6fd187471d866b7ec25028a))
* 修复自动答题提交设置保存不了的BUG ([fb9bd39](https://github.com/enncy/online-course-script/commit/fb9bd394c246b7446173fba0d956431c300b6577))
* app version upate ([505ce22](https://github.com/enncy/online-course-script/commit/505ce22fc11c799da5c22b6f183182ea0b43eb6d))



## [3.4.1](https://github.com/enncy/online-course-script/compare/3.4.0...3.4.1) (2022-04-17)


### Bug Fixes

* 修复ABCD纯答案直接点击的BUG ([9df1222](https://github.com/enncy/online-course-script/commit/9df1222dfa7569ee0995284cbc988ddda7c292bc))



# [3.4.0](https://github.com/enncy/online-course-script/compare/3.3.14...3.4.0) (2022-04-17)


### Features

* 新增智慧树学分课作业脚本 ([978bf47](https://github.com/enncy/online-course-script/commit/978bf47feec507910ae62e0be60a79ffd8d46941))



## [3.3.14](https://github.com/enncy/online-course-script/compare/3.3.13...3.3.14) (2022-04-15)


### Bug Fixes

* 修复 release.sh 版本命令 ([652a022](https://github.com/enncy/online-course-script/commit/652a022b1f895e0ec848dc0b54f238d4f8192772))



## [3.3.13](https://github.com/enncy/online-course-script/compare/v3.3.12...3.3.13) (2022-04-15)



## [3.3.12](https://github.com/enncy/online-course-script/compare/v3.3.11...v3.3.12) (2022-04-13)



## [3.3.11](https://github.com/enncy/online-course-script/compare/v3.3.10...v3.3.11) (2022-04-13)


### Bug Fixes

* 修复 paste 和 input 共存导致的粘贴BUG ([370e46f](https://github.com/enncy/online-course-script/commit/370e46fe3eecffbb5b63c5576dfe6447e79860bd))



## [3.3.10](https://github.com/enncy/online-course-script/compare/v3.3.9...v3.3.10) (2022-04-13)


### Bug Fixes

* 修复不能右键复制粘贴的BUG ([9af5480](https://github.com/enncy/online-course-script/commit/9af5480038ba11bd47937bff889ee084c72fb04b))



## [3.3.9](https://github.com/enncy/online-course-script/compare/v3.3.8...v3.3.9) (2022-04-13)


### Bug Fixes

* 修复上个版本store加载问题 ([48fdc1a](https://github.com/enncy/online-course-script/commit/48fdc1a57fbcfa587f2dc42f338249a7b3222985))



## [3.3.8](https://github.com/enncy/online-course-script/compare/v3.3.7...v3.3.8) (2022-04-13)


### Bug Fixes

* app 兼容OCS助手最新版的响应式特性 ([eaa66dd](https://github.com/enncy/online-course-script/commit/eaa66dd9a1c647f12602363f08003c9254ba0f7d))


### Features

* 新增全局存储功能，使用油猴自带API实现。 ([be13a5b](https://github.com/enncy/online-course-script/commit/be13a5bd71884ef9f9913a8e2c391da9ecedef4b))



## [3.3.7](https://github.com/enncy/online-course-script/compare/v3.3.6...v3.3.7) (2022-04-13)


### Bug Fixes

* 支持纯浏览器端的加载，仅用于核心API的调用。 ([cf9dbe8](https://github.com/enncy/online-course-script/commit/cf9dbe8d779c05ba804aab43c242ddde1af8e7c6))


### Features

* 删除调试输出 ([a096447](https://github.com/enncy/online-course-script/commit/a096447a45573e6bfb05d249aad374e2e56530dd))



## [3.3.6](https://github.com/enncy/online-course-script/compare/v3.3.5...v3.3.6) (2022-04-13)


### Bug Fixes

* 修复打包压缩选项 ([9425289](https://github.com/enncy/online-course-script/commit/9425289ed6cc864f95f59414783f88db1968d140))


### Features

* 新增超星 : 屏蔽作业考试填空简答题粘贴限制 功能 ([591971e](https://github.com/enncy/online-course-script/commit/591971eea5065b4097e6b24516cb6d5a36497f76))



## [3.2.20](https://github.com/enncy/online-course-script/compare/v3.2.19...v3.2.20) (2022-04-09)


### Bug Fixes

* 延长一点视频暂停后启动的时间，防止超星鬼畜。 ([837d873](https://github.com/enncy/online-course-script/commit/837d873d29146de7741e9cfb4b4e988633767551))



## [3.3.5](https://github.com/enncy/online-course-script/compare/v3.3.4...v3.3.5) (2022-04-13)


### Bug Fixes

* 修复搜索结果 undefined 的 BUG, 修复超星章节测试填空题BUG ([97500c5](https://github.com/enncy/online-course-script/commit/97500c591315eb4fdc97b799e77e788ccdf32def))



## [3.3.4](https://github.com/enncy/online-course-script/compare/v3.3.3...v3.3.4) (2022-04-13)


### Bug Fixes

* 修复超星考试作业页面不能复制粘贴的BUG ([4c64c00](https://github.com/enncy/online-course-script/commit/4c64c009f6bf87ad63d5b7f717daef339782bdc4))
* 修复上个版本响应式导致的倍速，音量失效的BUG ([5182d02](https://github.com/enncy/online-course-script/commit/5182d02d0fc1a9e11f7b7b2bc5ee3e0387c2b74e))
* 修复智慧树复习模式的BUG，修复已经播放完的视频但没有完成却跳过的BUG ([3cd12a7](https://github.com/enncy/online-course-script/commit/3cd12a72312faec10200a1a4bb700fe17e3e3682))



## [3.3.3](https://github.com/enncy/online-course-script/compare/v3.3.2...v3.3.3) (2022-04-12)


### Bug Fixes

* 兼容库模式，并且优化自动答题答案显示 ([fcd2311](https://github.com/enncy/online-course-script/commit/fcd2311b3b2564a3a06b2da102cdf841fbd19fc1))


### Features

* 新增自动答题答案预览功能 ([29b17e8](https://github.com/enncy/online-course-script/commit/29b17e8d055272882aebf672dbf76006f5509fc1))



## [3.3.2](https://github.com/enncy/online-course-script/compare/v3.3.1...v3.3.2) (2022-04-12)


### Bug Fixes

* 修复闯关模式因为刷新太快任务点没有出现导致重复的BUG ([dad5eb3](https://github.com/enncy/online-course-script/commit/dad5eb3db14c112e7c8f65c6214402502f2a8764))
* 修复答题配置输入后会消失的BUG， 新增音量设置 ([34cd585](https://github.com/enncy/online-course-script/commit/34cd585203623e606e459fd7761f77001a0b6911))



## [3.3.1](https://github.com/enncy/online-course-script/compare/v3.3.0...v3.3.1) (2022-04-11)



# [3.3.0](https://github.com/enncy/online-course-script/compare/v3.2.20...v3.3.0) (2022-04-11)


### Bug Fixes

* 修复各种问题，并且兼容了响应式特性 ([0c42947](https://github.com/enncy/online-course-script/commit/0c42947afa70f75f57435d5bebdd1dd48141754a))
* 修改打包方式为压缩打包 ([333661f](https://github.com/enncy/online-course-script/commit/333661f4c3a5338721e56227ef0e6fcb53ea872f))


### Features

* 切换网络路线 ([0a0a5dd](https://github.com/enncy/online-course-script/commit/0a0a5dd20ce80cb503f3c57d8b6aa2c25e261b8d))
* 响应式特性 ([5e21f0a](https://github.com/enncy/online-course-script/commit/5e21f0a1c17b1aca8ba22692c6649c6bae397d51))
* vnode 重构成 tsx , 并且新增数据响应式特性 ([18c5a78](https://github.com/enncy/online-course-script/commit/18c5a7836cd11222f8301687fff930b5e93583c0))



## [3.2.20](https://github.com/enncy/online-course-script/compare/v3.2.19...v3.2.20) (2022-04-09)


### Bug Fixes

* 延长一点视频暂停后启动的时间，防止超星鬼畜。 ([837d873](https://github.com/enncy/online-course-script/commit/837d873d29146de7741e9cfb4b4e988633767551))



## [3.2.19](https://github.com/enncy/online-course-script/compare/v3.2.18...v3.2.19) (2022-04-08)


### Bug Fixes

* 修复切换路线后倍速无效的BUG ([4e3f78b](https://github.com/enncy/online-course-script/commit/4e3f78b78f5ae3467d4546fc23d4aba0aa8fda4e))



## [3.2.18](https://github.com/enncy/online-course-script/compare/v3.2.16...v3.2.18) (2022-04-08)


### Features

* 新增超星视频路线切换功能 ([8721e48](https://github.com/enncy/online-course-script/commit/8721e4895c46393b210a1f707b61f5b7a446ecee))



## [3.2.16](https://github.com/enncy/online-course-script/compare/v3.2.14...v3.2.16) (2022-04-08)


### Bug Fixes

* 修复快捷键有时候失效的问题 ([0d5df16](https://github.com/enncy/online-course-script/commit/0d5df16cbd18936180935d02642cf68faea8c22f))



## [3.2.14](https://github.com/enncy/online-course-script/compare/v3.2.13...v3.2.14) (2022-04-08)


### Features

* 新增隐藏按钮 ([dce116e](https://github.com/enncy/online-course-script/commit/dce116e6f268bffe5ef1e178980c4318b47ea755))
* 新增ocs快捷键，可重置位置，优化面板初始位置 ([af7d231](https://github.com/enncy/online-course-script/commit/af7d231d9af520ace066190981196975a4d08213))



## [3.2.13](https://github.com/enncy/online-course-script/compare/v3.2.12...v3.2.13) (2022-04-07)


### Features

* 彻底修复超星验证码问题 ([0cf69f2](https://github.com/enncy/online-course-script/commit/0cf69f22f070d47ed72cd4c1d5b898b6ad3e2e14))



## [3.2.12](https://github.com/enncy/online-course-script/compare/v3.2.11...v3.2.12) (2022-04-05)


### Features

* 新增超星支持域名 edu.cn ， 修复多个视频播放时，播放完成继续播放的BUG ([959cc9b](https://github.com/enncy/online-course-script/commit/959cc9b2b38e6b573823ee5c9976f92089bdc5bb))



## [3.2.11](https://github.com/enncy/online-course-script/compare/v3.2.10...v3.2.11) (2022-04-04)


### Bug Fixes

* 修改点击间隔 ([176d83e](https://github.com/enncy/online-course-script/commit/176d83eaaa210b562ab38458ee15a4969c6b080e))



## [3.2.10](https://github.com/enncy/online-course-script/compare/v3.2.9...v3.2.10) (2022-04-04)


### Bug Fixes

* 继续优化答题问题 ([2dfd14d](https://github.com/enncy/online-course-script/commit/2dfd14d57e195615a257ac21b0db6fa167714768))



## [3.2.9](https://github.com/enncy/online-course-script/compare/v3.2.8...v3.2.9) (2022-04-04)


### Bug Fixes

* 修复超星重复暂停的BUG ([c5c7681](https://github.com/enncy/online-course-script/commit/c5c768176e53c7266c9e90b97ec351943627143a))



## [3.2.8](https://github.com/enncy/online-course-script/compare/v3.2.7...v3.2.8) (2022-04-04)


### Features

* 新增解除右键，复制粘贴限制的功能， 修复超星播放视频重复卡死的BUG ([fe9b59a](https://github.com/enncy/online-course-script/commit/fe9b59ac28baded93f30539daf262a18870fedf0))



## [3.2.7](https://github.com/enncy/online-course-script/compare/v3.2.6...v3.2.7) (2022-04-04)


### Features

* 答案判断优化 ([801e4f3](https://github.com/enncy/online-course-script/commit/801e4f3a0ffe66c6979833bae113f868bbba3f38))



## [3.2.6](https://github.com/enncy/online-course-script/compare/v3.2.5...v3.2.6) (2022-04-03)


### Bug Fixes

* 修复软件1.2.0自动更新BUG ([512b61c](https://github.com/enncy/online-course-script/commit/512b61c26f8b72828cd875b9ecf867dcc879f3b7))
* 修复智慧树作业重复关闭的BUG ([2288d61](https://github.com/enncy/online-course-script/commit/2288d6119af7efa97761e2bc8cca3393b62e507f))


### Features

* 新增 common 包 ， 修复脚本执行BUG ， 修复通知 ， 新增打包脚本 scripts 文件夹 ([0831102](https://github.com/enncy/online-course-script/commit/083110233cc5462ed5d7d2c44bfc7141f9c8f9e8))
* aPP版本更新 1.2.0 ([4ebd3cb](https://github.com/enncy/online-course-script/commit/4ebd3cbdc5775c7c4f60fd6c00f621297fed7d00))



## [3.2.5](https://github.com/enncy/online-course-script/compare/v3.2.4...v3.2.5) (2022-04-01)


### Bug Fixes

* 修复答题时多选不全的BUG， 修复答题时答案为空报错的BUG ([75177b5](https://github.com/enncy/online-course-script/commit/75177b553b269282b16e812c6e65e1ffb8edad01))
* 修改远程信息获取路径 ([b80d091](https://github.com/enncy/online-course-script/commit/b80d0914bd91482d2e75978d3d6676a92717d91e))


### Features

* 自动更新功能， scripts 分包 ， 浏览器端修改为 core 文件夹 ([f536614](https://github.com/enncy/online-course-script/commit/f53661497d92911c4daea12ae2936471169b3e5a))



## [3.2.4](https://github.com/enncy/online-course-script/compare/v3.2.3...v3.2.4) (2022-03-31)


### Bug Fixes

* 修复上个版本视频跳过问题 ([1719bbd](https://github.com/enncy/online-course-script/commit/1719bbdfba8cc21bb10cad8c16ec7ae6127ae6af))
* 修复油猴脚本更新BUG ([fd043dd](https://github.com/enncy/online-course-script/commit/fd043ddc3a6d9d3a3863c158379d7e1afd37a1d6))



## [3.2.3](https://github.com/enncy/online-course-script/compare/v3.2.2...v3.2.3) (2022-03-30)


### Features

* 添加任务点是否完成检测，不重复执行已完成任务点， 修复判断题不选择的BUG ([dbc1a86](https://github.com/enncy/online-course-script/commit/dbc1a86c5793cecfbd5521ee24d4373da3b3ee5e))



## [3.2.2](https://github.com/enncy/online-course-script/compare/v3.2.1...v3.2.2) (2022-03-27)


### Features

* 添加智慧树学分课脚本 ([37b112a](https://github.com/enncy/online-course-script/commit/37b112ae8f1488b4b07ce4a986ac798df8d0bd9e))



## [3.2.1](https://github.com/enncy/online-course-script/compare/3.2.0...v3.2.1) (2022-03-27)


### Features

* 添加禁止弹窗脚本 ([2b6be41](https://github.com/enncy/online-course-script/commit/2b6be413847fa55367d72ee5b16570d8ef8a218b))



# [3.2.0](https://github.com/enncy/online-course-script/compare/v3.1.11...3.2.0) (2022-03-26)


### Features

* **app:** 软件更新，支持超星学习作业考试，支持脚本自动更新 ([f500119](https://github.com/enncy/online-course-script/commit/f500119bed4d05d775b635de672c3b3e16e5a363))



## [3.1.11](https://github.com/enncy/online-course-script/compare/v3.1.10...v3.1.11) (2022-03-26)


### Features

* 更新软件，加载时自动更新ocs脚本 ([e16d954](https://github.com/enncy/online-course-script/commit/e16d954ff5bb4a084fa4dd6ff4e6dc6b9643f483))



## [3.1.10](https://github.com/enncy/online-course-script/compare/v3.1.9...v3.1.10) (2022-03-26)


### Bug Fixes

* 修复脚本只能在油猴环境下执行的BUG ([4f081c9](https://github.com/enncy/online-course-script/commit/4f081c90ee20e67a7f4e2afb43098e0c4308201e))



## [3.1.9](https://github.com/enncy/online-course-script/compare/v3.1.8...v3.1.9) (2022-03-26)



## [3.1.8](https://github.com/enncy/online-course-script/compare/v3.1.7...v3.1.8) (2022-03-26)


### Bug Fixes

* 修改答案结果判断bug ([a2808d0](https://github.com/enncy/online-course-script/commit/a2808d09b6ffa37376b25682cc4c8cd1cf0be5d7))



## [3.1.7](https://github.com/enncy/online-course-script/compare/3.0.0-beta.9...v3.1.7) (2022-03-25)


### Bug Fixes

* 修改题库配置设置，取消必选，添加判断，如果没有题库设置，则不开始自动答题。 ([b25ef93](https://github.com/enncy/online-course-script/commit/b25ef9323d0fe5c9d8437e3f50551a5e47e20dfa))
* 修改油猴配置 ([db8a733](https://github.com/enncy/online-course-script/commit/db8a733adaadb263fa2ed05233bd0b03f93c2e68))
* **cx:** 兼容cx选项获取不到，以及设置保存bug ([5a2e672](https://github.com/enncy/online-course-script/commit/5a2e67214d45053475574f4e16d3023909f6b132))
* **script:** 修复答题解析器bug， 更新做题标题获取，修复学习时章节测验类型获取失败bug， 更新 app 的脚本 ([659955b](https://github.com/enncy/online-course-script/commit/659955b818b41b7f25506e93caa888392e37aba1))
* **script:** 修改答题配置解析器 ([6e4332f](https://github.com/enncy/online-course-script/commit/6e4332f3855319e59f0bf5981fb713b7463cb531))
* **style:** 修改样式引入 ([8a6ab90](https://github.com/enncy/online-course-script/commit/8a6ab903ef661b89bc81bdc2298cdb28c2f40f9e))
* **url:** 修改 url cdn 资源 ([5cad7c1](https://github.com/enncy/online-course-script/commit/5cad7c19b6976d5825c982ccbede011d157b94a8))



# [3.0.0-beta.9](https://github.com/enncy/online-course-script/compare/3.0.0-beta.6...3.0.0-beta.9) (2022-03-24)


### Bug Fixes

* **index:** 修改数据路径 ([c97bdaf](https://github.com/enncy/online-course-script/commit/c97bdaf00aef72ce9c71068573cd4d9933d15590))


### Features

* 版本更新至 beta.6 ([cc63a07](https://github.com/enncy/online-course-script/commit/cc63a076ddb79235f8ca12c0c30b500c5d8be43e))
* 新增答题器，新增题库配置选项，新增zhs作业功能 ([449c008](https://github.com/enncy/online-course-script/commit/449c008af2f961c6a6ca12788309fabcc8334cfc))
* 修改为单进程软件，支持.ocs文件的点击加载，新增软件标题栏，删除原生标题栏 ([8427936](https://github.com/enncy/online-course-script/commit/8427936e931ca8bfcc86240393d40c7583f95abc))
* **all:** 版本更新 ([3b17a92](https://github.com/enncy/online-course-script/commit/3b17a9242d6cc12330e8bbb5ff15c88957507ce2))
* **scripts:** 添加超星学习，考试，作业脚本。 添加日志，搜题结果面板。 ([94d99d4](https://github.com/enncy/online-course-script/commit/94d99d4fb32ce9b58e88e0fa8f0812adea7f89a6))



# [3.0.0-beta.6](https://github.com/enncy/online-course-script/compare/3.0.0-beta.5...3.0.0-beta.6) (2022-03-15)


### Features

* **app | script:** 新增 script/browser 端的面板显示，替换之前的油猴头部信息加载模式，添加app主进程端的脚本调用 ([f9cf10f](https://github.com/enncy/online-course-script/commit/f9cf10f6757a45d520c1c2ff5532bceaa9298f07))
* **web:** 添加文件关闭编辑功能，取消页面所有动画效果，删除'关于'页面，新增'帮助'一栏。 ([1f4d4ad](https://github.com/enncy/online-course-script/commit/1f4d4ad7da78d97282524dd9325fc9c4ac1468f5))



# [3.0.0-beta.5](https://github.com/enncy/online-course-script/compare/0675ac6a631e8946a52e7e4e655b28faee8248d4...3.0.0-beta.5) (2022-03-07)


### Bug Fixes

* **package.json:** fix dependency security ([948662a](https://github.com/enncy/online-course-script/commit/948662a580aab60a3ff70c64111aa36c40b5a4ce))
* **web:** 优化侧边栏： 优化文件列表头部，优化文件列表搜索 ([84acc62](https://github.com/enncy/online-course-script/commit/84acc62870db173211165408c8fe665df556ebf0))


### Features

* add glup ([15c0015](https://github.com/enncy/online-course-script/commit/15c0015141f4104888813dda905fc723843f66ca))
* **all:** 添加终端显示，添加脚本执行，添加文件属性 ([cf5dc9a](https://github.com/enncy/online-course-script/commit/cf5dc9a2d17057c5ac2db7df43e9e2a5b26e664f))
* **app and web:** 添加文件夹管理，添加右键菜单，初始化设置和关于页面 ([24930ad](https://github.com/enncy/online-course-script/commit/24930ad1e32508e227fb36b7008fb2981438cbb7))
* **app and web:** add elctron-builder in app , init  page view in web ([fe60df6](https://github.com/enncy/online-course-script/commit/fe60df65dfeed1607ab89a941fc6b6eb627132fc))
* **init:** init project ([0675ac6](https://github.com/enncy/online-course-script/commit/0675ac6a631e8946a52e7e4e655b28faee8248d4))
* **packages:** init packages : web app scripts ([24e5386](https://github.com/enncy/online-course-script/commit/24e5386ec86dec33cc696fda6b5956785e2c1359))
* **script|web|app:** add commander line support, and update web view ([35efb39](https://github.com/enncy/online-course-script/commit/35efb39f34e4dc0d4e4914516f95d0ff467f8f37))
* **script:** add cx and zhs login ([8d69e16](https://github.com/enncy/online-course-script/commit/8d69e166fd73cf2ae2d700aa772b78159efbdeaa))
* **script:** change folder name, and add browser script ([c540500](https://github.com/enncy/online-course-script/commit/c540500b0cef50e7c2944d3ea6331e93c3e00e52))
* **scripts-tempaermonkey:** add tempermonkey support, update browser export ([456af02](https://github.com/enncy/online-course-script/commit/456af0250ff33fada0930f01270d1e147f27e2f7))
* **scripts/cx:** add new login : phone-code login ([494e523](https://github.com/enncy/online-course-script/commit/494e523ffda8ddf5c9320be5861b42234fab4d91))
* **scripts:** 修改 package.json ， 调整登录api ([614c628](https://github.com/enncy/online-course-script/commit/614c628a749bc6dd4e1556fd9fbdb026c82d6937))
* **scripts:** add script package ([6f03fb4](https://github.com/enncy/online-course-script/commit/6f03fb4d3545f02f8ccfeb14fa7b5d8169c15348))
* **test and cx login:** update tests README.md and add new login way of cx : phone-code-login ([ab46a1d](https://github.com/enncy/online-course-script/commit/ab46a1df98c73351518847a629ddaeb7f51a2d4d))
* **web:** 添加文件解析，使用懒加载进行文件的显示 ([0da0f02](https://github.com/enncy/online-course-script/commit/0da0f024741191ce408354ffc148c83dc7bea4f3))
* **web:** 添加文件拖拽，文件搜索功能 ([fb1b7c9](https://github.com/enncy/online-course-script/commit/fb1b7c93c1679e484769362724c2818c68898145))
* **web:** 添加重命名功能，添加目录展开记录保存，添加帮助页面 ([0b90cc2](https://github.com/enncy/online-course-script/commit/0b90cc20d33c21b406b7d6426df812aed03eec1c))
* **web:** 文件编辑，文件拓展 ([9f2f4fb](https://github.com/enncy/online-course-script/commit/9f2f4fb6b4fd37b7526239bacf45135ff5874cbc))
* **web:** 支持文件（夹）拖拽放置，文件（夹）的创建，删除 ([705cc21](https://github.com/enncy/online-course-script/commit/705cc210bf382a3a92962f03526366edc0e18398))



