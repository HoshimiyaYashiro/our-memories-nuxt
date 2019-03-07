<template>
  <section class="index">
    <div class="columns is-desktop">
      <div class="column flex-center person-card">
        <figure class="image is-256x256">
          <div class="rounded-flower"></div>
          <img class="is-rounded" src="bg/male.jpg">
        </figure>
        <div class="person-description is-size-3">
          <div>
            <span class="">Nguyễn Quốc Khương</span>
            <a class="icon social-link is-inline-block" href="https://www.facebook.com/inoue.konoha" target="_blank"></a>
          </div>
        </div>
      </div>
      <div class="column flex-center">
        <img src="bg/love.png" alt class="img-love">
      </div>
      <div class="column flex-center person-card">
        <figure class="image is-256x256">
          <div class="rounded-flower"></div>
          <img class="is-rounded" src="bg/female.jpg">
        </figure>
        <div class="person-description is-size-3">
          <div>
            <span class="">Vũ Hồng Nhung</span>
            <a class="icon social-link is-inline-block" href="https://www.facebook.com/paradise.rosalie" target="_blank"></a>
          </div>
        </div>
      </div>
    </div>
    <!-- <figure class="image is-2by1">
      <img src="bg/index.jpg">
    </figure>-->
  </section>
</template>

<script>
import common from '@/assets/js/common'
export default {
  components: {},
  mounted() {
    common.initIndexPage()
  }
}
</script>
