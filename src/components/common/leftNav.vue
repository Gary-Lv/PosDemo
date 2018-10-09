<template>
    <div class="left-nav">
        <ul>
            <li>
                <i class="icon iconfont icon-goumai"></i>
                <div>结账</div>
            </li>
            <li>
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
          icon: "icon iconfont icon-goumai",
          path: '/',
          title: "结账"
        },
        {
          icon: "icon iconfont icon-dianpu",
          path: '/DianPu',
          title: "店铺"
        },
        {
          icon: "icon iconfont icon-goumai",
          path: '/',
          title: "美食"
        }
      ]
    };
  },
  methods:{
      routerLink:function(path){
          //跳转路由
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
</style>
