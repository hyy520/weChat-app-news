var app = getApp()

Page({
  data:{    
    userInfo: {},
    markers: [{  //标记点用于在地图上显示标记的位置
      iconPath: "/image/location.png",
      title:"杭州数字娱乐产业园1号楼",
      id: 0,
      latitude: 30.286410,
      longitude: 120.114460,
      width: 50,
      height: 50
    }],
    polyline: [{  //指定一系列坐标点，从数组第一项连线至最后一项
      points: [{
        longitude: 120.114460,
        latitude: 30.286410
      }, {
        longitude: 120.126660,
        latitude: 30.286410
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{  //在地图上显示控件，控件不随着地图移动
      id: 1,
      iconPath: '/image/location.png',
      position: {
        left: 0,
        top: 350,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    circles: [{  //在地图上显示圆
      latitude: 30.286410,
      longitude: 120.114460,
      color:"#ffffffff",
      fillColor:"0079ffa0",  //经检测，必填   否则其他标注也失效
      radius:100, 
      strokeWidth:1
    }]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo) {           
        that.setData({
            userInfo: userInfo
        })
    })
    
    //$vm.getUserInfo().then(user => this.setData(              {userInfo:user})).catch(console.log)
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})