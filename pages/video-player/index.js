// 自定义组件参考：https://mp.kuaishou.com/docs/develop/frame/custom_comp/component_constructor.html
// video 参考：https://bytedance.larkoffice.com/docx/TsJmdbX6co33uJxi7j9cfYc2nnd
Component({
  // 外部样式属性定义，其实也就是把内部需要外部支持的 class 名称放这里导出
  // 在外部直接使用导出的名称字段关联即可，可以同时导出多个，这里是数组 ['','',...]
  externalClasses: ['inner-class'],
  // 对内参数
  data: {
  },
  // 对外参数（prop）
  properties: {
    // 内部样式
    innerStyle: {
      type: String,
      value: ''
    },
    // 唯一标识符
    id: {
      type: String,
      value: ''
    },
    // 原片id
    albumId: {
      type: String,
      value: ''
    },
    // 剧集id
    episodeId: {
      type: String,
      value: ''
    },
    // 废弃字段。为了兼容老版本，请传 1 
    version: {
      type: String,
      value: '1'
    },
    // 使用cdn类型，1: 抖音云  2: 三方云
    cloudType: {
      type: Number,
      value: 1
    },
    // 播放地址，cloudType 为 2 时生效，传入第三方播放地址 http://vjs.zencdn.net/v/oceans.mp4
    src: {
      type: String,
      value: ''
    },
    // 自动播放
    autoplay: {
      type: Boolean,
      value: false
    },
    // 显示默认播放控件（播放/暂停按钮、播放进度、时间）
    controls: {
      type: Boolean,
      value: true
    },
    // 循环播放
    loop: {
      type: Boolean,
      value: false
    },
    // 静音播放
    muted: {
      type: Boolean,
      value: false
    },
    // 指定视频初始播放位置
    initialTime: {
      type: Number,
      value: 0
    },
    // 指定视频时长
    duration: {
      type: Number,
      value: 0
    },
    // 'contain' | 'fill' | 'cover'
    objectFit: {
      type: String,
      value: 'contain'
    },
    // 若不设置，宽度大于 240 时才会显示
    showProgress: {
      type: Boolean,
      value: true
    },
    // 是否显示全屏按钮
    // 在同层渲染模式下仅支持控制竖屏状态（非全屏）下的「全屏按钮」的显示，横屏状态（全屏）不显示「退出全屏按钮」，只能通过标题旁边的箭头退出全屏
    showFullscreenBtn: {
      type: Boolean,
      value: true
    },
    // 是否显示视频底部控制栏的播放按钮
    showPlayBtn: {
      type: Boolean,
      value: true
    },
    // 是否开启控制进度的手势
    enableProgressGesture: {
      type: Boolean,
      value: true
    },
    // 是否显示静音按钮
    showMuteBtn: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    // 当开始/继续播放时触发 play 事件
    handlePlay (e) {
      this.triggerEvent('play', e)
    },
    // 当暂停播放时触发 pause 事件
    handlePause (e) {
      this.triggerEvent('pause', e)
    },
    // 当播放到末尾时触发 ended 事件
    handleEnded (e) {
      this.triggerEvent('ended', e)
    },
    // 播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次
    handleTimeupdate (e) {
      this.triggerEvent('timeupdate', e)
    },
    // 视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，direction 有效值为 vertical 或 horizontal
    handleFullscreenchange (e) {
      this.triggerEvent('fullscreenchange', e)
    },
    // 视频播放出错时触发
    handleError (e) {
      this.triggerEvent('error', e)
    }
  }
})