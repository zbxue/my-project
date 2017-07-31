<template>
  <div>
    <head1></head1>
    <div class="content">
      <earning></earning>
      <commodity-list></commodity-list>
    </div>
  </div>
</template>

<script>
  import Earning from '@/components/earning'
  import Head1 from '@/components/header/head'
  import CommodityList from '@/components/commodityList'
  export default {
    name: 'home',
    components: {
      CommodityList,
      Earning,
      Head1}

  }
</script>

