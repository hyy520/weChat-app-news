Page({
  openLocation: function (e) {
    console.log(e,'1111')
    var value = e.detail.value     
    wx.openLocation({   //使用微信内置地图查看位置
      longitude: Number(value.longitude),
      latitude: Number(value.latitude),
      name: value.name,
      address: value.address
    })
  }
})
