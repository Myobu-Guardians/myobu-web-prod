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
      <div class="container">
        <a class="navbar-brand" href="/"
          ><img
            :src="
              coloredLogo ? 'img/redesign/logo.png' : 'img/redesign/logo.png'
            "
            width="150"
            alt="logo"
            class="img-fluid"
        /></a>

        <button
          class="navbar-toggler"
          type="button"
          @click="mobileNavClicked"
          v-bind:class="{ collapsed: collapsed }"
        >
          <span class="ti-menu"></span>
        </button>

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
                href="#team"
                v-scroll-to="'#team'"
                >{{ $t("Team") }}</a
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
                href="https://myobu-guardians.github.io/hikari-dev/"
                target="_blank"
                >Hikari (Beta)</a
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/staking">Staking</router-link>
            </li>
            <!--            <li class="nav-item dropdown">-->
            <!--              <a class="nav-link page-scroll dropdown-toggle" href="#" id="communityDropdown" role="button"-->
            <!--                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
            <!--                Community-->
            <!--              </a>-->
            <!--              <div class="dropdown-menu submenu" aria-labelledby="communityDropdown">-->
            <!--                <a class="nav-link" href="https://forum.myobu.io">{{ $t('forum') }}</a>-->
            <!--&lt;!&ndash;                <a class="nav-link page-scroll" href="https://app.myobu.io">{{ $t('dashboard') }}</a>&ndash;&gt;-->
            <!--              </div>-->
            <!--            </li>-->
            <!--            <li class="nav-item dropdown">-->
            <!--              <a class="nav-link page-scroll dropdown-toggle" href="#" id="navbarDropdownHome" role="button"-->
            <!--                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
            <!--                <font-awesome-icon :icon="['fas', 'language']" size="lg"/>-->
            <!--              </a>-->
            <!--              <div class="dropdown-menu submenu" aria-labelledby="navbarDropdownHome">-->
            <!--                <a href="#" v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">-->
            <!--                  <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}-->
            <!--                </a>-->
            <!--              </div>-->
            <!--            </li>-->
          </ul>
        </div>
      </div>
    </nav>
    <!--end navbar-->
  </header>
</template>

<script>
import i18n from "@/plugins/i18n";
export default {
  props: {
    coloredLogo: {
      type: Boolean,
      default: false,
    },
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