var app=getApp()
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  scrollToRed:function(e)
  {
    this.setData({
      toView: 'green'
    })
  },
  scrollTo100: function (e) {
    this.setData({
      scrollLeft: 100
    })
  },
  
  upper: function (e) {
    console.log('滚动到顶部')
  },
  lower: function (e) {
    console.log('滚动到底部')
  },
  scroll: function (e) {
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.cloud.callFunction({
      name:'funcquery2',
      success:function(res){
        that.setData({
          zong:res.result.data,
        })
        console.log(res.result.data)
      },fail:function(res){
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})