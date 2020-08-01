// 轮播图数据
var bannerData= [{
  id:1,
  banner_img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2614594787.webp"
},{
  id:2,
  banner_img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614997041.webp"
},{
  id:3,
  banner_img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614691271.webp"
},
{
  id:4,
  banner_img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614594570.webp"
}];

// 专区数据
var subJectData = [{
    subjectTitle:"影院热映",
    movieList: [{
      id:1,
      movie_img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2614594787.webp",
      name:"多力特的奇幻冒险",
      rate:5.7
    },
    {
      id:2,
      movie_img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614997041.webp",
      name:"乔乔的异想世界 Jojo Rabbit (2019)",
      rate:8.1
    },
    {
      id:3,
      movie_img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614691271.webp",
      name:"抵达之谜 ",
      rate:6.2
    },
    {
      id:4,
      movie_img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614594570.webp",
      name:"刺猬索尼克 ",
      rate:8.9
    },
    {
      id:5,
      movie_img:"https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2614234255.webp",
      name:"妙先生 ",
      rate:4.2
    }
    ]},
    {
    subjectTitle:"热门电影",
    movieList:[{
      id:1,
      movie_img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614385032.webp",
      name:"喋血战士",
      rate:5.2
    },
    {
      id:2,
      movie_img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2614204949.webp",
      name:"第一次的离别 (2018)",
      rate:9.3
    },
    {
      id:3,
      movie_img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2605928267.webp",
      name:"致命复活 ",
      rate:3.6
    },
    {
      id:4,
      movie_img:"https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2615303224.webp",
      name:"白狮奇缘 ",
      rate:6.6
    }
  ]},
  {
    subjectTitle:"热门电视剧",
    movieList:[{
      id:1,
      movie_img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1599059779.webp",
      name:"风声",
      rate:8.2
    },
    {
      id:2,
      movie_img:"https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2455050536.webp",
      name:"大话西游之大圣娶亲 西遊記大結局之仙履奇緣 (1995)",
      rate:9.2
    },
    {
      id:3,
      movie_img:"https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2614500706.webp",
      name:"寻梦环游记",
      rate:6.3
    },
    {
      id:4,
      movie_img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2555295759.webp",
      name:"何以为家",
      rate:9.1
    }
    ]}
];

//更多电影数据
var moreData = [{
      id:1,
      movie_img:"https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2361744534.webp",
      name:"大鱼海棠",
      rate:3.6
},
{
  id:2,
  movie_img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2264377763.webp",
  name:"夏洛特烦恼",
  rate:7.7
},
{
  id:3,
  movie_img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2316177058.webp",
  name:"美人鱼",
  rate:6.7
},
{
  id:4,
  movie_img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2520331478.webp",
  name:"超时空同居",
  rate:6.9
},{
  id:5,
  movie_img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1959304567.webp",
  name:"中国合伙人",
  rate:7.6
},{
  id:6,
  movie_img:"https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2257944916.webp",
  name:"捉妖记",
  rate:6.7
},{
  id:7,
  movie_img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2578721161.webp",
  name:"鲨海逃生",
  rate:5.2
}

];

//宝贝详情数据
var detailData = {
  movie_img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2614594787.webp",
  name:"多力特的奇幻冒险 Dolittle (2020)",
  movie_category:"喜剧/美国/片长101分钟",
  rate:6.4,
  description:"失去妻子后的7年中，约翰·杜立德医生把自己关在庄园里与动物相伴。当时年轻的女王身患重病，杜立德医生不情愿出门冒险，前往神秘的岛屿寻找治疗方法，这让他重获勇气和智慧，因为他击败了老对手，还发现了奇妙的新生物。",
  actor: [{
    actorImg:"https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p25915.webp",
    name:"斯蒂芬·加汉 Stephen Gaghan",
    role:"导演"
   },
   {
    actorImg:"https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56339.webp",
    name:"小罗伯特·唐尼 Robert Downey Jr.",
    role:"演员 "
   },
   {
    actorImg:"https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1467942867.09.webp",
    name:"汤姆·赫兰德 Tom Holland",
    role:" 配音 / 导演"
   },
   {
    actorImg:"https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1860.webp",
    name:"拉米·马雷克 Rami Malek",
    role:"演员"
   },
   {
    actorImg:"https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21073.webp",
    name:"麦克·辛 Michael Sheen",
    role:"演员/配音"
   },
   {
    actorImg:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614385032.webp",
    name:"大卫.雷奇",
    role:"导演"
   },
   {
    actorImg:"https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1535353936.25.webp",
    name:"杰西·巴克利 Jessie Buckley",
    role:"导演"
   },
   


]
}

module.exports = {
  bannerData:bannerData,
  subJectData:subJectData,
  moreData:moreData,
  detailData:detailData
}
