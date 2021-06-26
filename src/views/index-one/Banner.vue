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
            <ul class="social-list list-inline list-unstyled mb-3 space-2x">
              <li class="list-inline-item">
                <a href="https://t.me/MyobuOfficial" target="_blank" title="Telegram">
                  <font-awesome-icon :icon="['fab', 'telegram-plane']" size="2x" :style="{ color: 'white' }"/>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://twitter.com/MyobuOfficial" target="_blank" title="Twitter">
                  <font-awesome-icon :icon="['fab', 'twitter']" size="2x" :style="{ color: 'white' }"/>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.reddit.com/r/Myobu/" target="_blank" title="Reddit">
                  <font-awesome-icon :icon="['fab', 'reddit']" size="2x" :style="{ color: 'white' }"/>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.instagram.com/myobu_official/" target="_blank" title="Instagram">
                  <font-awesome-icon :icon="['fab', 'instagram']" size="2x" :style="{ color: 'white' }"/>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.tiktok.com/@myobu_official?lang=en&is_copy_url=1&is_from_webapp=v1"
                   target="_blank"
                   title="TikTok">
                  <font-awesome-icon :icon="['fab', 'tiktok']" size="2x" :style="{ color: 'white' }"/>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://myobu.medium.com/"
                   target="_blank"
                   title="Medium">
                  <font-awesome-icon :icon="['fab', 'medium']" size="2x" :style="{ color: 'white' }"/>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.facebook.com/Myobu-101060582216135"
                   target="_blank"
                   title="Facebook">
                  <font-awesome-icon :icon="['fab', 'facebook']" size="2x" :style="{ color: 'white' }"/>
                </a>
              </li>
            </ul>
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

<style type="text/css">
.space-2x li {
  margin-right: 20px !important;
}
</style>
<script>
import i18n from "@/plugins/i18n";

export default {
  name: "Banner",
  components: {},
  data: function () {
    return {
      languages: [
        {flag: 'us', language: 'en', title: 'English'},
        {flag: 'cn', language: 'cn', title: '中文'}
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
