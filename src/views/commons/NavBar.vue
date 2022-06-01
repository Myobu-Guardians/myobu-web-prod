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
        <a class="navbar-brand" href="https://myobu.tech/"
        ><img
            :src="
                            coloredLogo
                                ? 'img/redesign/logo.png'
                                : 'img/redesign/logo.png'
                        "
            width="150"
            alt="logo"
            class="img-fluid"
        /></a>
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

