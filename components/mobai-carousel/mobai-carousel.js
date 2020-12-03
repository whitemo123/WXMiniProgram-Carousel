// components/mobai-carousel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    swiperList: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    swiperList: [],
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    swiperChange: function(e) {
      var currentItemId = e.detail.current;
      this.setData({
        currentIndex: currentItemId
      })
    }
  }
})
