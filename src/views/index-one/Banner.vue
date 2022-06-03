<template>
  <section class="hero-section pt-100 banner-1-bg" id="home">
    <video class="banner-video" src="/videos/landing.mp4" autoplay loop>
      <source src="/videos/landing.mp" type="video/mp4" />
    </video>
    <div class="container">
      <div class="row align-items-center justify-content-between py-5">
        <div class="col-md-12 col-lg-7 col-sm-12">
          <div class="hero-content-left text-white">
            <h1 class="text-white">
              <span>Welcome Myobu Guardians!</span>
            </h1>
            <p class="lead">
              Myobu is an ever-evolving blockchain-based project that is aiming
              to build one of the most robust, entertaining, and rewarding
              ecosystems in the Gamefi and Metaverse arenas. By developing a
              variety of unique and interconnecting Play & Earn games (P&E),
              Myobu strives to become a leader in these fields.
            </p>
            <p class="lead">
              Join other Guardians as we explore a one of a kind Gamefi
              ecosystem, NFT Marketplace, and metaverse experience inspired by
              Japanese celestial fox spirits.
            </p>
            <ul
              class="social-list list-inline list-unstyled mb-3 mt-5 space-2x"
            >
              <li class="list-inline-item">
                <a
                  href="https://t.me/MyobuOfficial"
                  target="_blank"
                  title="Telegram"
                >
                  <font-awesome-icon
                    :icon="['fab', 'telegram-plane']"
                    size="lg"
                    :style="{ color: 'white' }"
                  />
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://twitter.com/MyobuOfficial"
                  target="_blank"
                  title="Twitter"
                >
                  <font-awesome-icon
                    :icon="['fab', 'twitter']"
                    size="lg"
                    :style="{ color: 'white' }"
                  />
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://discord.gg/kxCuVdZwPn"
                  target="_blank"
                  title="Discord"
                >
                  <font-awesome-icon
                    :icon="['fab', 'discord']"
                    size="lg"
                    :style="{ color: 'white' }"
                  />
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://www.reddit.com/r/Myobu/"
                  target="_blank"
                  title="Reddit"
                >
                  <font-awesome-icon
                    :icon="['fab', 'reddit']"
                    size="lg"
                    :style="{ color: 'white' }"
                  />
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://www.instagram.com/myobu_official/"
                  target="_blank"
                  title="Instagram"
                >
                  <font-awesome-icon
                    :icon="['fab', 'instagram']"
                    size="lg"
                    :style="{ color: 'white' }"
                  />
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://www.tiktok.com/@myobu_official?lang=en&is_copy_url=1&is_from_webapp=v1"
                  target="_blank"
                  title="TikTok"
                >
                  <font-awesome-icon
                    :icon="['fab', 'tiktok']"
                    size="lg"
                    :style="{ color: 'white' }"
                  />
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://myobu.medium.com/"
                  target="_blank"
                  title="Medium"
                >
                  <font-awesome-icon
                    :icon="['fab', 'medium']"
                    size="lg"
                    :style="{ color: 'white' }"
                  />
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://www.facebook.com/Myobu-101060582216135"
                  target="_blank"
                  title="Facebook"
                >
                  <font-awesome-icon
                    :icon="['fab', 'facebook']"
                    size="lg"
                    :style="{ color: 'white' }"
                  />
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://www.youtube.com/channel/UCkEdaRw8w0daEvGgzKff8TA/videos"
                  target="_blank"
                  title="Youtube"
                >
                  <font-awesome-icon
                    :icon="['fab', 'youtube']"
                    size="lg"
                    :style="{ color: 'white' }"
                  />
                </a>
              </li>
            </ul>
            <div class="mb-5">
              <a
                href="files/myobu-whitepaper-v2.0.pdf"
                target="_blank"
                class="btn btn-white mr-2"
                ><img src="img/redesign/favicon-small.png" height="18" />
                &nbsp;FOXPAPER</a
              >
              <div
                class="dropdown"
                style="display: inline-block; z-index: 99999; overflow: visible"
              >
                <button class="btn app-store-btn mr-2" data-toggle="dropdown">
                  BUY MYŌBU
                </button>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  style="overflow: auto"
                >
                  <a
                    href="https://app.uniswap.org/#/swap?use=V2&inputCurrency=ETH&outputCurrency=0xdfdd3459d4f87234751696840092ee20c970fb07"
                    target="_blank"
                    class="dropdown-item"
                    >Uniswap</a
                  >
                  <a
                    href="https://pancakeswap.finance/swap?outputCurrency=0x4ef06d1a55962f29d362c53c864a4f0c791dcb9e"
                    target="_blank"
                    class="dropdown-item"
                    >Pancakeswap</a
                  >
                  <a
                    href="https://www.hotbit.io/exchange?symbol=MYOBU_USDT"
                    target="_blank"
                    class="dropdown-item"
                    >Hotbit</a
                  >
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
        { flag: "us", language: "en", title: "English" },
        { flag: "cn", language: "cn", title: "中文" },
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
