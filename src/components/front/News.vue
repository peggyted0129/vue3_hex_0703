<template>
<section class="pt-14">
  <div class="w-100 news-banner position-relative d-flex align-items-center justify-content-center">
    <div class="news-title position-absolute d-flex flex-column align-items-center justify-content-center m-5 m-sm-0 h-100">
      <h1 class="my-3">最新消息</h1>
      <span>Event</span>
    </div>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</section>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    //
  },
  created () {
    //
  }
}
</script>
