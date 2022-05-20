<template>
  <footer class="footer-section">
    <div class="footer-top pt-150 tertiary-bg">
      <div class="container">
        <div class="row pb-100 border-bottom ">
          <div class="col-md-2 my-auto">
            <img src="img/redesign/ctd.png" class="img-fluid">
          </div>
          <div class="col-md-4 text-white align-middle my-auto">
            <h3 class="text-white">Myōbu is safe</h3>
            According to @ctdsec, Myōbu passed all the security tests upon audit, and is completely safe.
          </div>
          <div class="col-md-6 text-right my-auto">
            <a class="btn" href="files/Cybersecurity_Audit_CTDSEC_MyobuDAOv2.pdf" target="_blank">Download</a>
          </div>
        </div>
        <div class="row pt-100">
          <div class="col-md-4">
            <a class="navbar-brand" href="/"
            ><img src="img/redesign/logo.png"
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
                  <a href="https://t.me/MyobuOfficial" target="_blank" title="Telegram">
                    <font-awesome-icon :icon="['fab', 'telegram-plane']" :style="{ color: 'white' }"/>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://twitter.com/MyobuOfficial" target="_blank" title="Twitter">
                    <font-awesome-icon :icon="['fab', 'twitter']" :style="{ color: 'white' }"/>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://discord.gg/kxCuVdZwPn" target="_blank" title="Discord">
                    <font-awesome-icon :icon="['fab', 'discord']" :style="{ color: 'white' }"/>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.reddit.com/r/Myobu/" target="_blank" title="Reddit">
                    <font-awesome-icon :icon="['fab', 'reddit']" :style="{ color: 'white' }"/>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.instagram.com/myobu_official/" target="_blank" title="Instagram">
                    <font-awesome-icon :icon="['fab', 'instagram']" :style="{ color: 'white' }"/>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.tiktok.com/@myobu_official?lang=en&is_copy_url=1&is_from_webapp=v1"
                     target="_blank"
                     title="TikTok">
                    <font-awesome-icon :icon="['fab', 'tiktok']" :style="{ color: 'white' }"/>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://myobu.medium.com/"
                     target="_blank"
                     title="Medium">
                    <font-awesome-icon :icon="['fab', 'medium']" :style="{ color: 'white' }"/>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.facebook.com/Myobu-101060582216135"
                     target="_blank"
                     title="Facebook">
                    <font-awesome-icon :icon="['fab', 'facebook']" :style="{ color: 'white' }"/>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.youtube.com/channel/UCkEdaRw8w0daEvGgzKff8TA/videos"
                     target="_blank"
                     title="Youtube">
                    <font-awesome-icon :icon="['fab', 'youtube']" :style="{ color: 'white' }"/>
                  </a>
                </li>
              </ul>
            </div>
            <div class="social-list-wrap text-right text-white mt-4">
              <ul class="social-list list-inline list-unstyled">
                <li class="list-inline-item">
                  <a class="nav-link page-scroll" href="#tokenomics" v-scroll-to="'#tokenomics'">{{ $t('tokenomics') }}</a>
                </li>
                <li class="list-inline-item">
                  <a class="nav-link page-scroll" href="#gamefi" v-scroll-to="'#gamefi'">GameFi</a>
                </li>
                <li class="list-inline-item">
                  <a class="nav-link page-scroll" href="https://shop.myobu.io">{{ $t('shop') }}</a>
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
                <p class="mb-0 text-white text-right">© Myōbu, {{ $t('allRightsReserved') }}</p>
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
  name: "SiteFooter",
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
    }
  },
};
</script>

<style scoped lang="css">
.social-list a {
  color: white;
  font-size: 16px;
  font-family: 'MerriweatherSansRoman', sans-serif;
  font-weight: bold;
}
</style>