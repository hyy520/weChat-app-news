Page({
  data: {
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
  regionchange(e) {  //拖动地图时触发begin/end
    console.log(e.type)
  },
  markertap(e) {     //点击标注点时触发
    console.log(e.markerId)
  },
  controltap(e) {    //点击控件时触发
    console.log(e.controlId)
  },
  tap(e) {      //点击地图时触发 
    console.log(e)
  }
})
