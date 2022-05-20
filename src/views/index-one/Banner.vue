<template>
  <section class="hero-section pt-100 background-img banner-1-bg" id="home">
    <div class="container">
      <div class="row align-items-center justify-content-between py-5">
        <div class="col-md-12 col-lg-7 col-sm-12">
          <div class="hero-content-left text-white">
            <h1 class="text-white">
              <span>Celestial Blessings</span>
            </h1>
            <p class="lead">
              Myōbu is a blockchain-based project that is building a leading GameFi ecosystem. Through its native token,
              holders will gain access to upcoming games, an NFT marketplace, and other on-chain products. Join our
              community and have fun while you play to earn.
            </p>
            <p class="lead">
              Myōbu was inspired by the Japanese celestial fox spirits, that have white fur and full, fluffy tails. They
              are holy creatures, and bring happiness and blessings to those around them. Japanese influences flow
              throughout Myōbu products and guide our team of industry leading artists.
            </p>
            <ul class="social-list list-inline list-unstyled mb-3 mt-5 space-2x">
              <li class="list-inline-item">
                <a href="https://t.me/MyobuOfficial" target="_blank" title="Telegram">
                  <font-awesome-icon :icon="['fab', 'telegram-plane']" size="lg" :style="{ color: 'white' }"/>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://twitter.com/MyobuOfficial" target="_blank" title="Twitter">
                  <font-awesome-icon :icon="['fab', 'twitter']" size="lg" :style="{ color: 'white' }"/>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://discord.gg/kxCuVdZwPn" target="_blank" title="Discord">
                  <font-awesome-icon :icon="['fab', 'discord']" size="lg" :style="{ color: 'white' }"/>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.reddit.com/r/Myobu/" target="_blank" title="Reddit">
                  <font-awesome-icon :icon="['fab', 'reddit']" size="lg" :style="{ color: 'white' }"/>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.instagram.com/myobu_official/" target="_blank" title="Instagram">
                  <font-awesome-icon :icon="['fab', 'instagram']" size="lg" :style="{ color: 'white' }"/>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.tiktok.com/@myobu_official?lang=en&is_copy_url=1&is_from_webapp=v1"
                   target="_blank"
                   title="TikTok">
                  <font-awesome-icon :icon="['fab', 'tiktok']" size="lg" :style="{ color: 'white' }"/>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://myobu.medium.com/"
                   target="_blank"
                   title="Medium">
                  <font-awesome-icon :icon="['fab', 'medium']" size="lg" :style="{ color: 'white' }"/>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.facebook.com/Myobu-101060582216135"
                   target="_blank"
                   title="Facebook">
                  <font-awesome-icon :icon="['fab', 'facebook']" size="lg" :style="{ color: 'white' }"/>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.youtube.com/channel/UCkEdaRw8w0daEvGgzKff8TA/videos"
                   target="_blank"
                   title="Youtube">
                  <font-awesome-icon :icon="['fab', 'youtube']" size="lg" :style="{ color: 'white' }"/>
                </a>
              </li>
            </ul>
            <div class="mb-5">
              <a href="files/myobu-whitepaper-v2.0.pdf"
                 target="_blank" class="btn btn-white mr-2"><img src="img/redesign/favicon-small.png" height="18">
                &nbsp;FOXPAPER</a>
              <div class="dropdown" style="display: inline-block; z-index: 99999; overflow: visible">
                <button class="btn app-store-btn mr-2" data-toggle="dropdown">
                  BUY MYŌBU
                </button>
                <div class="dropdown-menu dropdown-menu-right" style="overflow: auto;">
                  <a href="https://app.uniswap.org/#/swap?use=V2&inputCurrency=ETH&outputCurrency=0xdfdd3459d4f87234751696840092ee20c970fb07"
                     target="_blank" class="dropdown-item">Uniswap</a>
                  <a href="https://pancakeswap.finance/swap?outputCurrency=0x4ef06d1a55962f29d362c53c864a4f0c791dcb9e"
                     target="_blank" class="dropdown-item">Pancakeswap</a>
                  <a href="https://www.hotbit.io/exchange?symbol=MYOBU_USDT"
                     target="_blank" class="dropdown-item">Hotbit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style type="text/css">
.space-2x li {
  margin-right: 14px !important;
}

.dropdown-menu a {
  text-shadow: none;
}
</style>

<script>

import i18n from "@/plugins/i18n";

export default {
  name: "Banner",
  data: function () {
    return {
      languages: [
        {flag: 'us', language: 'en', title: 'English'},
        {flag: 'cn', language: 'cn', title: '中文'}
      ],
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
  },
};
</script>
