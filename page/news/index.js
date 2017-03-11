//获取应用实例
var app = getApp()
Page({
    data: {
        page:1,
        newList:[],
        imgUrls: [
            '../../image/1.jpg',
            '../../image/2.jpg',
            '../../image/3.jpg'
        ],   
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,    
        nopic:"../../nopic.jpg", 
        loadingHidden: false  // loading
    },

    //事件处理函数
    swiperchange: function(e) {
        //console.log(e.detail.current)
    },

    onLoad: function() {
        console.log('onLoad')
        var that = this
            //调用应用实例的方法获取全局数据
        /*app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })  */
        that.newsListLoad();     
    },
    newsListLoad: function(){
        var that = this;
        console.log(that,'123456');
        wx.showToast({
            title: '加载中...',
            icon: 'loading',
            mask:true
        }); 
        //newsList
        wx.request({
            url: 'http://v.juhe.cn/weixin/query',
            method: 'GET',
            data: {
                pno:that.data.page,
                ps:20,                
                key:"222c5bd548e4410e3538e3d1e4e0b26a"
            },
            header: {
                'Accept': 'application/json'
            },
            success: function(result) {
                console.log(result,'11111')
                that.setData({
                    newList: that.data.newList?that.data.newList.concat(result.data.result.list):result.data.result.list
                });
                wx.hideToast();
            }
        })
    },    
    onReachBottom: function() {
        this.data.page++;
        // Do something when page reach bottom.
        this.newsListLoad();               
    },
    onShareAppMessage: function () {
        return {
            title: '新闻热点',
            desc: '关注最新新闻热点',
            path: '/page/news/index'
        }
    }
})
