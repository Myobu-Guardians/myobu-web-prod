<template>
  <section class="hero-section pt-100 background-img banner-1-bg" id="home">
    <div class="container">
      <div class="row align-items-center justify-content-between py-5">
        <div class="col-md-6 col-lg-6">
          <div class="hero-content-left text-white">
            <h1 class="text-white">
              <span>Myōbu</span>
            </h1>
            <p class="lead">
              {{ $t('welcomeMsg') }}
            </p>
            <div class="download-btn">
              <a href="https://app.uniswap.org/#/swap?outputCurrency=0x75D12E4F91Df721faFCae4c6cD1d5280381370AC&use=V2"
                 target="_blank" class="btn google-play-btn mr-3">{{ $t('buyUniswap') }}</a>
              <a href="https://www.dextools.io/app/uniswap/pair-explorer/0xa440baf25ac41b26a6ea40f864542b54a76ce530"
                 target="_blank" class="btn app-store-btn">{{ $t('priceChart') }}</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="hero-animation-img">
            <img src="img/myobu.png" alt="app" class="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-img-absolute">
      <img
          src="img/hero-bg-shape-1.svg"
          alt="wave shape"
          class="img-fluid"
      />
    </div>
  </section>
</template>

<script>
import i18n from "@/plugins/i18n";

export default {
  name: "Banner",
  components: {},
  data: function () {
    return {
      languages: [
        {flag: 'us', language: 'en', title: 'English'},
        {flag: 'cn', language: 'cn', title: 'Chinese'}
      ],
      showModal: false,
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
    showYouTubeModal: function (e) {
      e.preventDefault();
      this.showModal = true;
    },
  },
};
</script>
