var _app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    menuitems: [
      { text: '我的订单', url: '../myInfo/myorders/myorder', icon: '../../images/我的订单.png', tips: '', arrows: '/../../images/向右.png' },
      { text: '我的发布', url: '../myInfo/mycommits/mycommit', icon: '../../images/我的发布.png', tips: '', arrows: '../../images/向右.png' },
      { text: '帮助说明', url: '../myInfo/helps/help', icon: '../../images/帮助.png', tips: '', arrows: '../../images/向右.png' }
    ],
    userInfo:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    this.setData({
      userInfo: wx.getStorageSync('user')
    })
    console.log(this.data.userInfo)
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
