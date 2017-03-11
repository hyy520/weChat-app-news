const $vm = getApp()

Page({
    data:{         
        article:{
            title:'新闻标题',
            content:'在国际形势“乱”“变”起伏，全球经济增长乏力的当口，习近平此次2017年中国外交开篇之举吸引了很多人的目光。为什么新年首访选择瑞士？中国国家主席首次亮相达沃斯释放什么信号？还有哪些成果值得期待？此行的这4个“小目标”你需要了解。',
            time:'2017-1-9',
            author:'东方时空'
        }         
    },
    onLoad:function(options){
        
    },
    getArticleDetail(opt){        
    },
    onShareAppMessage: function () {
        return {
            title: '新闻热点',
            desc: '关注最新新闻热点',
            path: '/page/news/index'
        }
    }
})