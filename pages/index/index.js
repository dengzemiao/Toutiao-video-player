const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
  },
  jumpPlay () {
    tt.navigateTo({
      url: '/pages/play/index',
      success: (res) => {
      },
      fail: (res) => {
      },
    });
  }
})
