# Toutiao-video-player

- 抖音短剧播放器 video-player 原生组件封装，可用于 uniapp、原生抖小短剧项目使用。

- 官方对接文档：<https://bytedance.larkoffice.com/docx/TsJmdbX6co33uJxi7j9cfYc2nnd>

- Uniapp 对接抖音短剧播放器 video-player 坑点解决：<https://blog.csdn.net/zz00008888/article/details/134457909>

- `video-player.ttml 与 video-player.ttss` 中的加了 `class: video-player-view` 是为了解决 `uniapp` 混编的问题，纯原生开发可以移除这个样式即可。

  原因：因为 `uniapp` 在使用 `video-player` 组件时，会形成两层包裹 `uniapp video-player` 包裹 `原生 video-player`，导致使用 `inner-class` 会无法设置样式，原生就没问题，这个时候有两种方式解决：

  1、直接传 `inner-style` 样式进去，不走 `inner-class`

  2、(推荐)直接给 `uniapp video-player` 设置 `class` 正常设置样式，然后给 `原生 video-player` 的 `class: video-player-view` 内部宽高百分百，这样就能正常沿用外面的尺寸。

  3、(推荐)直接给 `uniapp video-player` 设置 `class` 正常设置样式，然后给 `原生 video-player` 的 `inner-style` 设置宽高百分百，这样也能正常沿用外面的尺寸。

- 目录结构：

```sh
- pages
  - index           # 首页
  - play            # 播放页，包含：1、直接使用播放组件 2、播放组件被组件嵌套使用
  - video-player    # 播放组件
  - wrap-player     # 对播放组件再次包裹一层组件测试，包含上下文获取实现播放跟暂停
```
