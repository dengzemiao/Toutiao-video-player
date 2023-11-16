const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
    console.log(tt.canIUse('video-player'))
  },
  binderror (e) {
    console.log('binderror', e)
  },
  bindplay (e) {
    console.log('playhandler', e)
  },
  bindtimeupdate (e) {
    console.log('bindtimeupdate', e)
  }
})
