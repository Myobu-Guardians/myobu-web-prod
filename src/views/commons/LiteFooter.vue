<template>
  <footer class="footer-section">
    <div class="footer-top pt-100 tertiary-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <a class="navbar-brand" href="/"
              ><img
                src="img/redesign/logo.png"
                width="150"
                alt="logo"
                class="img-fluid"
            /></a>
            <div class="text-white lead">
              Made by developers, powered by community
            </div>
          </div>
          <div class="col-md-8">
            <div class="social-list-wrap text-right text-white space-2x">
              <ul class="social-list list-inline list-unstyled">
                <li class="list-inline-item">
                  <a
                    href="https://t.me/MyobuOfficial"
                    target="_blank"
                    title="Telegram"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'telegram-plane']"
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
                      :icon="['fab', 'github']"
                      :style="{ color: 'white' }"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div class="social-list-wrap text-right text-white mt-4">
              <ul class="social-list list-inline list-unstyled">
                <li class="list-inline-item">
                  <a class="nav-link page-scroll" href="/#/#tokenomics">{{
                    $t("tokenomics")
                  }}</a>
                </li>
                <li class="list-inline-item">
                  <a class="nav-link page-scroll" href="/#/#gamefi">GameFi</a>
                </li>
                <!--                <li class="list-inline-item">-->
                <!--                  <a class="nav-link page-scroll" href="https://app.myobu.io">{{ $t('dashboard') }}</a>-->
                <!--                </li>-->
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom border-gray-light mt-5 py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-12">
              <div class="copyright-wrap small-text">
                <p class="mb-0 text-white text-right">
                  © Myōbu, {{ $t("allRightsReserved") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "LiteFooter",
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    // if(localStorage.Lang != null) i18n.locale = localStorage.Lang;
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll: function () {
      this.windowTop = window.top.scrollY;
    },
  },
};
</script>

<style scoped lang="css">
.social-list a {
  color: white;
  font-size: 16px;
  font-family: "MerriweatherSansRoman", sans-serif;
  font-weight: bold;
}
</style>