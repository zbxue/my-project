<template>
  <div>
    <div class="pad-3-5 white alignC bg-red">
      <p class="sizeF-6-0">{{earningCur}}</p>
      <p class="huicolor">当前收益（元）</p>
      <p class="marT-4-0 sizeF-3-0">可用资金：{{money}}元</p>
    </div>

    <div class="pad-2-0 bg-white">
      <div class="col-6 alignC">
        <p class="red">{{earningHis}}</p>
        <p class="gray ">历史收益</p>
      </div>
      <div class="col-6 alignC">
        <p class="red">{{power}}/{{powerMax}}</p>
        <p class="gray ">体力值</p>
      </div>
      <div class="clearboth"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'earning',
    data () {
      return {
        earningCur: 10,
        earningHis: 200,
        money: 1000,
        power: 5,
        powerMax: 10
      }
    }
  }
</script>
wrX9BHKzaM1x0v7d
