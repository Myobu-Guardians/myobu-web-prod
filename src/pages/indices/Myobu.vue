<template>
  <div>
    <nav-bar/>
    <div class="main">
      <banner/>
      <gamefi/>
      <team />
      <more-about-myobu />
      <tokenomics/>
      <roadmap/>
      <press/>
      <site-footer/>
    </div>
  </div>
</template>

<script>
import NavBar from "../../views/commons/NavBar";
import Banner from "../../views/index-one/Banner";
import Tokenomics from "../../views/index-one/Tokenomics";
import Gamefi from "../../views/index-one/Gamefi";
import Team from "../../views/index-one/Team.vue"
import MoreAboutMyobu from "@/views/index-one/MoreAboutMyobu";
import Roadmap from "../../views/index-one/Roadmap";
import SiteFooter from "../../views/commons/SiteFooter";
import Press from "@/views/index-one/Press";

export default {
  name: "Myobu",
  components: {
    Press,
    NavBar,
    Banner,
    Tokenomics,
    Gamefi,
    Team,
    Roadmap,
    SiteFooter,
    MoreAboutMyobu
  },
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>