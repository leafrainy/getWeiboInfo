# getWeiboInfo
一键获取微博视频页面的一级（不含楼层回复）评论者昵称和头像
## console和 js  简直绝配~~
## 食用方法

1.找到想要爬取信息的微博视频连接，如下

```
https://weibo.com/tv/v/I1ZBKvaEk?fid=1034:4404654394570083
```

2.将当前页面的视频暂停播放，然后下拉评论，直到评论区域底部出现【查看更多】


3.复制项目中的weibogo.js到浏览器当前页面的console


4.如果只是为了看数据玩，那么 将murl=  和它的下一行都注释掉。如果需要插入自己的数据库，那么将murl自行修改成自己的连接，连接后的插入数据库逻辑请自行处理

## 已知问题

1.数据量过大时插入自己的数据连接murl会出现超时问题。【不知具体原因，可能是自己写的插入demo有问题，没深究】

2.本地网络环境不太好时，插入数据的murl也会提示超时。
