<template>
  <div>
    <nav-bar />
    <div class="main">
      <banner />
      <gamefi />
      <Realm />
      <protocol />
      <tokenomics />
      <parallax />
      <more-about-myobu />
      <team />
      <roadmap />
      <press />
      <site-footer />
    </div>
  </div>
</template>

<script>
import NavBar from "../../views/commons/NavBar";
import Banner from "../../views/index-one/Banner";
import Tokenomics from "../../views/index-one/Tokenomics";
import Gamefi from "../../views/index-one/Gamefi";
import Realm from "../../views/index-one/Realm";
import Protocol from "../../views/index-one/Protocol";
import Team from "../../views/index-one/Team.vue";
import MoreAboutMyobu from "@/views/index-one/MoreAboutMyobu";
import Roadmap from "../../views/index-one/Roadmap";
import SiteFooter from "../../views/commons/SiteFooter";
import Press from "@/views/index-one/Press";
import Parallax from "../../views/index-one/Parallax.vue";

export default {
  name: "Myobu",
  components: {
    Press,
    NavBar,
    Banner,
    Tokenomics,
    Protocol,
    Realm,
    Gamefi,
    Team,
    Roadmap,
    SiteFooter,
    MoreAboutMyobu,
    Parallax,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>