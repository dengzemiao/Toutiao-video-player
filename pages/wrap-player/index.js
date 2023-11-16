Component({
  data: {
  },
  properties: {
  },
  methods: {
    binderror (e) {
      console.log('binderror', e)
    },
    bindplay (e) {
      console.log('playhandler', e)
    },
    bindtimeupdate (e) {
      console.log('bindtimeupdate', e)
    }
  }
})