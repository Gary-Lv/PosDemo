<template>
    <div class="left-nav">
        <ul>
            <!-- <li @click="goMoney()">
                <i class="icon iconfont icon-goumai"></i>
                <div>结账</div>
            </li>
            <li @click="goDianPu()">
                <i class="icon iconfont icon-dianpu"></i>
                <div>店铺</div>
            </li>
            <li>
                <i class="icon iconfont icon-hanbao"></i>
                <div>美食</div>
            </li>
            <li>
                <i class="icon iconfont icon-huiyuanqia"></i>
                <div>会员</div>
            </li>
            <li>
                <i class="icon iconfont icon-shezhi"></i>
                <div>设置</div>
            </li> -->
            <li v-for="(info,index) in items" :key="info.id" :class="{checket:index == nowIndex}" @click="goPagePath(info.path,index)">
                <i class="icon iconfont" :class="info.icon"></i>
                <div> {{info.title}} </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 0,
          icon: "icon-goumai",
          path: '/',
          title: "结账"
        },
        {
          id: 1,
          icon: "icon-dianpu",
          path: '/DianPu',
          title: "店铺"
        },
        {
          id: 2,
          icon: "icon-hanbao",
          path: '/Cate',
          title: "美食"
        },
        {
          id: 3,
          icon: "icon-huiyuanqia",
          path: '/VIP',
          title: "会员"
        },
        {
          id: 4,
          icon: "icon-shezhi",
          path: '/Set',
          title: "设置"
        }
      ],
      nowIndex:0
    }
  },
  methods:{
      goPagePath:function(path,index){
          this.nowIndex = index;
          this.$router.push(path);
      }
  }
};
</script>

<style>
.left-nav {
  height: 100%;
  width: 5%;
  float: left;
  font-size: 10px;
  color: #fff;
  background-color: #1d8ce0;
}
.iconfont {
  font-size: 24px;
}
.left-nav ul {
  padding: 0;
  margin: 0;
}
.left-nav li {
  list-style: none;
  text-align: center;
  border-bottom: 1px solid #20a0ff;
  padding: 10px;
  cursor: pointer;
}
.checket{
  list-style: none;
  text-align: center;
  border-bottom: 1px solid #20a0ff;
  padding: 10px;
  cursor: pointer;
  background-color: rgb(224, 224, 224);
  color: #1d8ce0;
}
</style>
