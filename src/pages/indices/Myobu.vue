<template>
  <div>
    <nav-bar/>
    <div class="main">
      <banner/>
      <promo/>
      <download/>
      <about/>
      <pricing/>
      <features/>
      <subscribe/>
      <site-footer/>
    </div>
  </div>
</template>

<script>
import NavBar from "../../views/commons/NavBar";
import Banner from "../../views/index-one/Banner";
import Promo from "../../views/index-one/Promo";
import About from "../../views/index-one/About";
import Features from "../../views/index-one/Features";
import Download from "../../views/index-one/Download";
import Pricing from "../../views/index-one/Pricing";
import Subscribe from "../../views/commons/Subscribe";
import SiteFooter from "../../views/commons/SiteFooter";

export default {
  name: "Myobu",
  components: {
    NavBar,
    Banner,
    Promo,
    Download,
    About,
    Pricing,
    Features,
    Subscribe,
    SiteFooter,
  },
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>