<template>
  <header class="home pt-14">
    <loading v-model:active="isLoading">
      <img src="https://upload.cc/i1/2021/06/12/N7mIQ1.gif
  " alt="loading">
    </loading>
    <!-- 輪播 -->
    <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
          <img src="../../assets/img/carousel1.jpg" class="d-block w-100" alt="img_oil">
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src="../../assets/img/carousel2.jpg" class="d-block w-100" alt="img_dark">
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src="../../assets/img/carousel3.jpeg" class="d-block w-100" alt="img_color">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- 最新消息 -->
    <main class="container">
      <div class="news my-md-16 my-10">
        <h2 class="home-title fw-bolder text-center position-relative mb-12">最新消息</h2>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12 mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div class="card mews-card">
              <img src="../../assets/img/news/news_one7.png" class="card-img-top" alt="...">
              <div class="card-body mx-5" style="height: 155px">
                <h5 class="card-title fw-bolder">偷一抹時光，偷一步美麗</h5>
                <p class="card-text">偷走美麗悠閒！偷走時光危肌 !</p>
                <p class="my-5"><small class="text-lgreen">發佈日期 | 2021-07-05</small></p>
              </div>
              <div class="card-footer mx-5">
                <router-link :to="{ name: 'NewsOne' }" class="btn btn-hgray hvr-bounce-to-right">了解更多</router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12 mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <div class="card mews-card">
              <img src="../../assets/img/discount.jpg" class="card-img-top" alt="...">
              <div class="card-body mx-5" style="height: 155px">
                <h5 class="card-title fw-bolder">在家安心購物，抽折扣</h5>
                <p class="card-text">防疫有你有我！宅在家也能安心購物</p>
                <p class="my-5"><small class="text-lgreen">發佈日期 | 2021-08-01</small></p>
              </div>
              <div class="card-footer mx-5">
                <router-link :to="{ name: 'NewsTwo' }" class="btn btn-hgray hvr-bounce-to-right">了解更多</router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12 mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
            <div class="card mews-card">
              <img src="../../assets/img/news/news_one8.png" class="card-img-top" alt="...">
              <div class="card-body mx-5" style="height: 155px">
                <h5 class="card-title fw-bolder">運動者的洗沐聖品!!</h5>
                <p class="card-text">運動愛美，從每一個小小細節堆砌而成...</p>
                <p class="my-5"><small class="text-lgreen">發佈日期 | 2021-09-26</small></p>
              </div>
              <div class="card-footer mx-5">
                <router-link :to="{ name: 'NewsThree' }" class="btn btn-hgray hvr-bounce-to-right">了解更多</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- video -->
    <div class="video-banner position-relative my-md-16 my-10 w-100">
      <div class="container h-100">
        <div class="row align-items-center h-100 w-100 ms-0">
          <div class="col-12 col-md-10 col-lg-8 col-xl-7 order-2 order-md-1">
            <strong class="video-title h1 fw-bolder text-white mx-10 mx-md-0">Sebamed pH5.5 原創領導品牌</strong>
          </div>
          <div class="col-12 col-md-2 col-lg-4 col-xl-5 order-1 order-md-2 d-flex flex-column align-items-center">
            <a href="https://www.sebamed.com.tw/video/sebamed.mp4" class="video-btn hvr-buzz-out zindex-1" target="_blank">
              <i class="fas fa-play zindex-1"></i>
            </a>
            <p class="video-text text-sgreen mt-10 position-relative zindex-1">潔膚皂的誕生</p>
          </div>
        </div>
      </div>
    </div>
    <!-- about -->
    <div class="bg-sgray py-15 mb-10">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-5 mb-md-0">
            <div class="about-text bg-white p-5 px-xl-9 py-xl-11 d-flex flex-column align-items-center">
              <h2 class="about-title fw-bolder mb-10 text-center">
                <span>Science for healthy skin<br>美麗來自健康肌膚</span>
              </h2>
              <p class="h5 text-center">
                我們相信美麗來自健康肌膚 !<br>
                堅持醫學皮膚護理的觀念，<br>
                研發 pH5.5 的潔護膚產品，<br>
                使用 Sebamed 超有安心感。
              </p>
            </div>
          </div>
          <div class="col-md-3 mb-5 mb-md-0">
            <img class="about-img-top" data-aos="fade-down" src="../../assets/img/about_img.jpg" alt="about_img">
          </div>
          <div class="col-md-3">
            <img class="about-img-bottom w-100" data-aos="fade-up" src="../../assets/img/about_img1.jpg" alt="about_img">
          </div>
        </div>
      </div>
    </div>
    <!-- memo -->
    <div class="container-fluid">
      <div class="memo row flex-column flex-lg-row justify-content-between">
        <div class="col-12 col-lg-5 col-xxl-5 align-self-start align-self-lg-stretch align-items-lg-center mt-lg-9">
          <p class="memo-txt text-center text-lg-end">
            <img src="~@/assets/img/new.png" alt="new">
            超柔細泡泡， <br>
            不刺激眼睛 !!
          </p>
          <p class="memo-title text-center text-lg-end">
            # 嬰兒泡泡浴露
            <img class="memo-yellow" src="~@/assets/img/yellow.png" alt="memo-yellow">
          </p>
        </div>
        <div class="col-12 col-lg-2 col-xl-3 col-xxl-2 memo-prouct d-flex justify-content-center align-self-start align-self-lg-stretch align-items-lg-center">
          <img class="updown2" src="~@/assets/img/memo_product.png" alt="">
        </div>
        <div class="col-12 col-lg-5 col-xl-4 col-xxl-5 memo-content d-flex justify-content-center align-self-start align-self-lg-stretch align-items-lg-center justify-content-lg-start">
          <ul>
            <li class="d-flex align-items-center">
              <i class="fas fa-chevron-right me-3"></i>
              <p>洋甘菊萃取精華，舒緩皮膚乾癢</p>
            </li>
            <li class="d-flex align-items-center">
              <i class="fas fa-chevron-right me-3"></i>
              <p>洗頭沐浴一次完成，新手媽媽輕鬆上手</p>
            </li>
            <li class="d-flex align-items-center">
              <i class="fas fa-chevron-right me-3"></i>
              <p>不流淚配方，保護寶寶嬌嫩淚腺</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- contact -->
    <div class="contact-wrap mb-10 mb-md-13 mt-md-10 mt-lg-0">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-5 contact-left mb-20">
            <h3 class="fw-bolder">聯絡我們</h3>
            <p class="fw-bolder mt-3">如有任何問題或商品合作洽談，請留下訊息讓我們知道~! 若是對商店有任何建議與回饋，也歡迎留言，讓我們能夠為您提供更好的購物體驗!</p>
            <span class="ps-5">
              ph5.5 守護全家人的健康
            </span>
          </div>
          <div class="col-md-7 contact-right mt-3 mt-sm-0">
            <div class="contactPic"></div>
            <Form @submit="customer" ref="form" class="row contact mx-auto" v-slot="{ errors }">
              <div class="col-12 mb-5">
                <Field type="text" class="form-control" id="姓名" name="姓名" :class="{ 'is-invalid': errors['姓名'] }" rules="required" placeholder="請輸入您的姓名或稱號" />
                <error-message name="姓名" class="invalid-feedback"></error-message>
              </div>
              <div class="col-12 mb-5">
                <Field type="email" :class="{ 'is-invalid': errors['email'] }" rules="email|required" class="form-control" id="email" name="email" placeholder="請留下您的 email" />
                <error-message name="email" class="invalid-feedback"></error-message>
              </div>
              <div class="col-12 mb-5">
                <Field type="text" name="留言" id="留言" class="form-control" :class="{ 'is-invalid': errors['留言'] }" rules="required" placeholder="請留下您寶貴的意見" as="textarea" />
                <error-message name="留言" class="invalid-feedback"></error-message>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-hgray hvr-bounce-to-right">送出</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="cuetomerModal" tabindex="-1" aria-labelledby="cuetomerModal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header bg-sgray">
            <h5 class="modal-title fw-bolder" id="cuetomerModal">您的訊息我們收到囉 !!</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body fw-bolder py-10">
            訊息已送出，非常感謝您的聯繫! 我們收到訊息後，近期將會安排與您聯絡。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-hgray hvr-bounce-to-right" data-bs-dismiss="modal">我知道了</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { mapGetters } from 'vuex'
import * as bootstrap from 'bootstrap'

export default {
  data () {
    return {
      cuetomerModal: ''
    }
  },
  computed: {
    ...mapGetters(['isLoading'])
  },
  methods: {
    customer () {
      this.$store.dispatch('updateLoading', true)
      setTimeout(() => {
        this.$store.dispatch('updateLoading', false)
        this.cuetomerModal.show()
        this.$refs.form.resetForm() 
      }, 1000)
    }
  },
  mounted () {
    this.cuetomerModal = new bootstrap.Modal(document.getElementById('cuetomerModal'), {
      keyboard: false,
      backdrop: 'static'
    })
  }
}
</script>
