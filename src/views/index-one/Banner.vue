<template>
  <section class="hero-section pt-100 background-img banner-1-bg" id="home">
    <div class="container">
      <div class="row align-items-center justify-content-between py-5">
        <div class="col-md-12 col-lg-7 col-sm-12">
          <div class="hero-content-left text-white">
            <h1 class="text-white">
              <span>Welcome Myobu Guardians!</span>
            </h1>
            <p class="lead">
              Myobu is an ever-evolving blockchain-based project that aims to
              build one of the most robust, entertaining, and rewarding
              ecosystems in the SocialFi, GameFi, and Metaverse arenas. With the
              Myobu Protocol's power, we develop various unique and
              interconnecting community platforms and Play & Earn games (P&E).
              Myobu strives to construct serious products with real-life
              utilities that could benefit the web3 world and individuals'
              lives.
            </p>
            <p class="lead">
              Join other Guardians as we explore a one-of-a-kind decentralized
              community, GameFi ecosystem, NFT Marketplace, and metaverse
              experience inspired by Japanese celestial fox spirits.
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
              <li class="list-inline-item">
                <a
                  href="https://github.com/myobu-guardians"
                  target="_blank"
                  title="GitHub"
                >
                  <font-awesome-icon
                    icon="fa-brands fa-github"
                    size="lg"
                    :style="{ color: 'white' }"
                  />
                </a>
              </li>
            </ul>
            <div class="mb-4">
              <a
                href="https://realm.myobu.io/#/notes/2DC7Nj7H4MhaD9qVtW0RD"
                target="_blank"
              >
                <button
                  class="btn btn-white mr-2"
                  style="width: 228px; max-width: 100%"
                >
                  <img src="img/redesign/favicon-small.png" height="18" />
                  &nbsp;FOXPAPER
                </button>
              </a>
            </div>
            <div class="text-danger">
              Please set slippage to
              <span class="font-weight-bold" style="font-size: 18px">0.5%</span>
              on buy and
              <span class="font-weight-bold" style="font-size: 18px">5.5%</span>
              on sell for Uniswap & PancakeSwap
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
