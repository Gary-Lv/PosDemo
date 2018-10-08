<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="order" id="orderHeight">
        <el-tabs type="border-card" class="tabname">
          <el-tab-pane label="点餐">
            <el-table style="width:100%;" show-summary border :data="tableData">
              <el-table-column prop="commName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width=80></el-table-column>
              <el-table-column prop="price" label="金额" width=80></el-table-column>
              <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                  <el-button type="text" size="small">查看</el-button>
                  <el-button type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="BtnClass">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger">删除</el-button>
              <el-button type="success">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>
      </el-col>

      <el-col :span="17">
        <div class="goodsCate">
          <div class="goodsHead">
            我是产品栏
          </div>
          <div class="goodsCate-box">
            <ul>
              <li v-for =" item in oftenGoods " class="goodsInfo-box">
                <span>{{item.goodsName}}</span>
                <span class="moneycolor">￥{{item.price}}元</span>
              </li>
            </ul>
          </div>
          <div class="CateList" id="CateListBox">
            <el-tabs type="card">
              <el-tab-pane label="主食">
                <div>
                  <ul class='cookList'>
                      <li v-for="item in type0Goods">
                          <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                          <span class="foodName">{{item.goodsName}}</span>
                          <span class="foodPrice">￥{{item.price}}元</span>
                      </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="小食">
                <div>
                  <ul class='cookList'>
                      <li v-for="item in type1Goods">
                          <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                          <span class="foodName">{{item.goodsName}}</span>
                          <span class="foodPrice">￥{{item.price}}元</span>
                      </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="饮料">
                <div>
                  <ul class='cookList'>
                      <li v-for="item in type2Goods">
                          <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                          <span class="foodName">{{item.goodsName}}</span>
                          <span class="foodPrice">￥{{item.price}}元</span>
                      </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                <div>
                  <ul class='cookList'>
                      <li v-for="item in type3Goods">
                          <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                          <span class="foodName">{{item.goodsName}}</span>
                          <span class="foodPrice">￥{{item.price}}元</span>
                      </li>
                  </ul>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Pos',
  mounted: function () {
    // 获取父元素的高度 页面高度
    var mainHeight = document.body.clientHeight
    document.getElementById('orderHeight').style.height = mainHeight + 'px';
    document.getElementById('CateListBox').style.height = (mainHeight - 356) + 'px';
  },
  data () {
    return {
      tableData: [
        {
          commName: '香辣鸡腿堡',
          count: 2,
          price: 36
        },
        {
          commName: '可口可乐',
          count: 3,
          price: 24
        },
        {
          commName: '大份薯条',
          count: 1,
          price: 12
        }
      ],
      oftenGoods:[],
      type0Goods:[],
      type1Goods:[],
      type2Goods:[],
      type3Goods:[],
    }
  },
  created () {
    //获取热门食品数据
    axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods')
    .then(datas=>{
      if(datas.statusText == "OK"){
        this.oftenGoods = datas.data;
      }
      else{
        alert("获取数据失败");
      }
      
    })
    .catch(error=>{
      alert("网络错误，不能访问");
    });

    //获取食品分类数据
    axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods')
    .then(datas=>{
      if(datas.statusText == "OK")
      {
        this.type0Goods = datas.data[0];
        this.type1Goods = datas.data[1];
        this.type2Goods = datas.data[2];
        this.type3Goods = datas.data[3];
      }
      else{
        alert("获取数据失败");
      }
    })
    .catch(error=>{
      alert("网络错误，不能访问");
    });
  }
}
</script>

<style scoped>
.order {
  background-color: white;
  border-right: 1px solid #e4e7ed;
  padding: 0 1px;
}
.tabname{
  font-size: 18px;
}
.BtnClass{
  margin-top:20px;
}
.goodsHead{
  height: 20px;
  border-bottom: 1px solid #e4e7ed;
  padding: 10px 0 10px 20px;
  text-align: left;
  background-color: #f5f7fa;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #909399;
}
.goodsCate-box{
  height: 300px;
  border-bottom: 1px solid #e4e7ed;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
}
.goodsInfo-box{
  list-style: none;
  float:left;
  border:1px solid #E5E9F2;
  padding:10px;
  margin:5px;
  background-color:#fff;
  border-radius: 10px;
  cursor: pointer;
}
.moneycolor{
  color: #58B7FF;
}
.CateList{
  background-color: rgba(253, 253, 253, 0.966);
}
.cookList li{
  list-style: none;
  width:23%;
  border:1px solid #E5E9F2;
  height: auot;
  overflow: hidden;
  background-color:#fff;
  padding: 2px;
  float:left;
  margin: 5px;
  border-radius: 10px;
  cursor: pointer;
}
.cookList li span{
    display: block;
    float:left;
}
.foodImg{
    width: 40%;
    margin-left: 20px;
}
.foodName{
    font-size: 18px;
    padding-left: 10px;
    color:brown;
    margin-top: 15px;
}
.foodPrice{
    font-size: 16px;
    padding-left: 10px;
    padding-top:10px;
}
</style>
