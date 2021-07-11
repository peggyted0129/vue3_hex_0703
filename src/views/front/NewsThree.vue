<template>
<section class="pt-10 mb-7 mb-sm-10 mb-md-15">
  <div class="time d-flex flex-sm-row flex-column align-items-center mb-md-15 mb-10 pb-4">
    <p class="fw-bolder text-white bg-sgreen me-7">2021.09.26</p>
    <h5 class="text-sgreen fw-bolder my-3 my-sm-0">【 運動者的洗沐聖品 !! 】</h5>
  </div>
  <ul>
    <h2 class="fw-bolder text-center">【 運動者的洗沐聖品 !! 】</h2>
    <p class="h5 text-center my-4">運動愛美，從每一個小小細節堆砌而成...</p>
    <p class="listed">全新上市</p>
  </ul>
  <div class="h5 fw-bolder mb-md-15 my-13 d-flex justify-content-center">
    <div class="news-head position-relative p-6 p-sm-0">
      夏天頭頂容易大爆油，頭髮頭皮中容易藏污納垢，天天洗頭真的很重要… 😩 <br>
      但對付大油頭可不能隨便洗！💁‍♂️ 選對好髮品維持頭皮酸酸的，才能真正淨化油垢且健康頭皮。 <br>
      完美 KO 頭皮，是需要從每一個小小的細節好好地保養的。<br>
      深層清潔毛孔髒污，洗澡兼保養，越洗越保濕 ! <br>
      一瓶到底，洗頭、洗身體 💙 現在的天氣天天使用超適合！！<br>
      讓你整天都有香氣 💕 <br>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 col-lg-5 mb-7">
      <img src="../../assets/img/news/news_th1.png" alt="news">
    </div>
    <div class="col-md-6 col-lg-7 d-flex flex-column justify-content-center mb-7">
      <h3 class="text-sgreen fw-bolder">運動沐浴乳</h3>
      <p class="h5 fw-bolder my-3">
        老話一句！要漂亮、保養要先顧好 🕶️，<br>
        居家運動後一身汗非常黏膩，而且流汗悶著更容易長背痘，<br>
        運動後一定選專為運動後設計的沐浴乳做清潔與保養，<br>
        降低皮膚發炎反應。<br>
      </p>
      <p class="news-txt">
        ✨ 洗臉、洗髮、沐浴三效合一 <br>
        ✨ pH5.5不含皂鹼(溫和修護肌膚) <br>
        ✨ 乳酸鈉(舒緩氯氣造成的皮膚乾澀) <br>
        ✨ 多重保濕氨基酸(強化保濕) <br>
        ✨ 離氨酸（抗靜電防止頭髮糾結） <br>
        ✨ 尿囊素（調理油脂平衡） <br>
         ✔  清新花香 ：適合中偏乾性肌，壓力大或夜間使用可紓壓、幫助入眠 <br>
      </p>
      <ul class="news-buy">
        <li>
          <router-link :to="{ name: 'ProductDetail', params: { id: '-Mc8IZe5SGvvmmtJ8X2e' }}" target="_blank" class="text-sgreen fw-bolder py-2">運動沐浴乳 1000ml / NT. 1050</router-link>
        </li>
      </ul>
    </div>
    <!---- **************** ---->
    <div class="col-md-6 col-lg-5 mb-7 order-md-2 order-1">
      <img src="../../assets/img/news/news_th2.png" alt="news">
    </div>
    <div class="col-md-6 col-lg-7 d-flex flex-column order-md-1 order-2 justify-content-center mb-7">
      <h3 class="text-sgreen fw-bolder">溫和洗髮乳</h3>
      <p class="h5 fw-bolder my-3">
        幫另一半洗頭，一起健康頭皮，感情也急速加溫 💗🥰<br>
        無負擔的健康養髮 👉<br>
      </p>
      <p class="news-txt">
        不含矽靈、皂鹼、SLS、藥性、及刺激性成分，<br>
        以 pH5.5 微酸養護頭皮，就是為了在頭皮形成微酸的保護膜，<br>
        加強防護力，舒緩陽光、空汙或染燙等化學成分對頭皮的刺激，<br>
        同時淨化多餘油脂和皮屑，頭皮健康深呼吸，整個好放鬆，<br>
        就同跟另一半的關係，永遠自在無負擔！<br>
      </p>
      <ul class="news-buy">
        <li>
          <router-link :to="{ name: 'ProductDetail', params: { id: '-Mc81bdA1wLzZJiaZG22' }}" target="_blank" class="text-sgreen fw-bolder py-2">溫和洗髮乳 1000ml / NT. 1020</router-link>
        </li>
      </ul>
    </div>
  </div>
  <!--- 載入 YOUTUBE : 加入 RWD 標籤 --->
  <div class="video-container mx-10 mt-5">
    <iframe width="640" height="360" src="https://www.youtube.com/embed/queAy7dfkr0" frameborder="0" allowfullscreen></iframe>
  </div>
  <p class="text-center my-7">※ 注意事項：限定商品數量有限，售完為止，實際價格及販售資訊請以官網公告為主。</p>
   <!--- tag --->
  <div class="tag text-center mt-5">
    <ul class="d-flex justify-content-center">
      <li>
        <router-link :to="{ name: 'ProductDetail', params: { id: '-Mc8IZe5SGvvmmtJ8X2e' }}" target="_blank" class="tag-link"># 運動沐浴乳</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ProductDetail', params: { id: '-Mc81bdA1wLzZJiaZG22' }}" target="_blank" class="tag-link"># 溫和洗髮乳</router-link>
      </li>
    </ul>
  </div>
</section>
</template>
