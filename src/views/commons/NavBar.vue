<template>
  <header class="header">
    <!--start navbar-->
    <nav
      class="navbar navbar-expand-lg fixed-top"
      v-bind:class="{
        affix: hasAffix,
        'custom-nav': coloredLogo,
        'bg-transparent': !coloredLogo,
        'white-bg': coloredLogo,
      }"
    >
      <div class="container" style="max-width: 100%; width: 100%">
        <a class="navbar-brand" href="/"
          ><img
            :src="
              coloredLogo ? 'img/redesign/logo.png' : 'img/redesign/logo.png'
            "
            width="150"
            alt="logo"
            class="img-fluid"
        /></a>
        <div class="nav-bar-right">
          <img
            src="../../assets/img/redesign/logo-no-text.png"
            class="small-logo"
          />
          <div class="global-buttons-md mr-2">
            <buy-buttons></buy-buttons>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            @click="mobileNavClicked"
            v-bind:class="{ collapsed: collapsed }"
            style="float: right"
          >
            <span class="ti-menu"></span>
          </button>
        </div>

        <div
          class="collapse navbar-collapse main-menu h-auto"
          v-bind:class="{ show: !collapsed }"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link page-scroll" href="/">{{ $t("home") }}</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link page-scroll"
                href="#gamefi"
                v-scroll-to="'#gamefi'"
                >GameFi</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link page-scroll"
                href="#tokenomics"
                v-scroll-to="'#tokenomics'"
                >{{ $t("Tokenomics") }}</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link page-scroll"
                href="#team"
                v-scroll-to="'#team'"
                >{{ $t("Team") }}</a
              >
            </li>
            <li class="nav-item">
              <a href="https://hikari-sandbox.myobu.io/" target="_blank"
                >Hikari (Beta)</a
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/staking">Staking</router-link>
            </li>
            <div class="global-buttons ml-5">
              <buy-buttons></buy-buttons>
            </div>
          </ul>
        </div>
      </div>
    </nav>
    <!--end navbar-->
  </header>
</template>

<style>
.global-buttons-md {
  background-color: transparent;
  border: none;
  float: right;
  position: relative;
}

.nav-bar-right {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.small-logo {
  display: none;
}

@media screen and (max-width: 991px) {
  .global-buttons-md {
    display: flex;
    flex-direction: row;
  }
  .global-buttons-md .brigde-btn {
    margin-top: 0 !important;
  }

  .global-buttons {
    display: none;
  }
}

@media screen and (min-width: 992px) {
  .global-buttons-md {
    display: none;
  }
  .global-buttons {
    display: flex;
  }
}

@media screen and (max-width: 575px) {
  .navbar-brand {
    display: none !important;
  }
  .nav-bar-right {
    justify-content: space-between;
    width: 100%;
  }
  .small-logo {
    display: block;
    width: 48px;
    height: 48px;
  }
  .nav-bar-right .btn {
    padding: 14px;
  }
  .nav-bar-right .global-buttons-md {
    margin-left: auto !important;
  }
}
</style>

<script>
import i18n from "@/plugins/i18n";
import BuyButtons from "../../views/commons/BuyButtons.vue";

export default {
  props: {
    coloredLogo: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BuyButtons,
  },
  data: function () {
    return {
      languages: [
        { flag: "us", language: "en", title: "English" },
        { flag: "cn", language: "cn", title: "中文" },
        { flag: "es", language: "es", title: "Español" },
        { flag: "kr", language: "kr", title: "한국어" },
        { flag: "de", language: "de", title: "Deutsch" },
        { flag: "tr", language: "tr", title: "Türkçe" },
        { flag: "jp", language: "jp", title: "日本語" },
      ],
      windowTop: 0,
      collapsed: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    // if(localStorage.Lang != null) i18n.locale = localStorage.Lang;
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    changeLocale(locale) {
      localStorage.Lang = locale;
      i18n.locale = locale;
    },
    onScroll: function () {
      this.windowTop = window.top.scrollY;
    },
    mobileNavClicked: function () {
      this.collapsed = !this.collapsed;
    },
  },
  computed: {
    hasAffix: function () {
      return this.windowTop > 0;
    },
  },
};
</script>