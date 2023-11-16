Component({
  data: {
    // 播放器上下文
    context: undefined,
    // 播放器 ref
    counter: undefined
  },
  methods: {
    bindref(ref) {
      // 获取上下文，ref 用于拿不到上下文时传入第二个参数
      // const context = tt.createVideoContext('my-video-player', ref)
      const context = tt.createVideoContext('my-video-player')
      // 记录
      this.setData({
        context,
        counter: ref
      })
    },
    binderror(e) {
      // console.log('binderror', e)
    },
    bindplay(e) {
      // console.log('playhandler', e)
    },
    bindtimeupdate(e) {
      // console.log('bindtimeupdate', e)
    },
    touchPlay() {
      this.data.context.play()
    },
    touchPause() {
      this.data.context.pause()
    }
  }
})