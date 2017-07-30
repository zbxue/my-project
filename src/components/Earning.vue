<template>
  <div>
    <h1>{{earningCur}}</h1>
    <h2>历史收益：{{earningHis}}</h2>
    <h2>可用资金{{money}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'earning',
    data () {
      return {
        earningCur: 10,
        earningHis: 200,
        money: 1000
      }
    }
  }
</script>
