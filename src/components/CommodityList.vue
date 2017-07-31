<template>
  <div>
    <div class="auction-nav">
      <span class="col-0-5"></span>
      <div class="col-3 active">当前拍卖</div>
      <span class="col-1"></span>
      <div class="col-3">拍卖预展</div>
      <span class="col-1"></span>
      <div class="col-3">我的收藏</div>
      <span class="col-0-5"></span>
    </div>

    <div class="bg-white pad-2-0 advertdiv">
      <div class="col-4 "><img src="static/img/naog.png"/></div>
      <div class="col-8 alignR"><span class="padR-3-0">距结束</span><span class="endtime">00</span>：<span class="endtime">18</span>：<span class="endtime">15</span></div>
      <div class="clearboth"></div>
    </div>


    <!--列表数据-->
    <div class="auction-list">
      <div class="auction-list-left">
        <img src="static/img/order1.png"/>
      </div>

      <div class="auction-list-right">
        <div class="auction-name">
          <h1 class="name-val"><span>杨家版木年画</span></h1>
          <div class="lerad">
            <span class="leradiusl">拍卖中</span><span class="gray leradiusr alignC">还有5秒开始</span>
          </div>
        </div>
        <div class="auction-pro">
          <div class="pro-val ">
            <div class="pro-val-c1">
              <div class="col-6">
                <div class="floatL"><p class="c-p1">RMB</p><p class="c-p2 red">拍卖价</p></div>
                <div class="c-p3 floatL red">323</div>
              </div>
              <div class="col-6">
                <div class="floatL"><p class="c-p1">RMB</p><p class="c-p2 red">拍卖价</p></div>
                <div class="c-p3 floatL red">323</div>
              </div>
            </div>

            <div class="pro-val-c2">
              <div class="col-5">
                <span class="col-6 nowrap">起拍价</span><span class="col-6 nowrap">100.00</span>
              </div>
              <div class="col-5 padL-1-0">
                <span class="col-6 nowrap">保证金</span><span class="col-6 nowrap">100.00</span>
              </div>
            </div>

            <div class="pro-val-c2">
              <div class="col-5">
                <span class="col-6 nowrap">加价幅度</span><span class="col-6 nowrap">100.00</span>
              </div>
              <div class="col-5 padL-1-0">
                <span class="col-6 nowrap">已出价</span><span class="col-6 nowrap">100.00</span>
              </div>
            </div>
          </div>
          <div class="pro-btn flex-custom">
            <a class="black" href="javascript:;" ><img src="static/img/btn1.png"/></a>
          </div>
        </div>
      </div>
    </div><!--列表数据End-->
  </div>
</template>

<script>
  import {loadMore} from 'src/components/common/'
  export default {
    name: 'commodityList',
    data () {
      return {
        commodityList: null, //商品列表
        showLoading: true
      }
    },
    mounted () {
      this.initData()
    },
    mixins: [loadMore],
    methods: {
      //初始化获取数据
      async initData(){
        let res = await getCommodityList();

      }

    }

  }
</script>
