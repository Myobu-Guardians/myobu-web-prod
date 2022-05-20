<template>
  <div>
    <nav-bar/>
    <div class="main">
      <banner/>
      <gamefi/>
      <blessings/>
      <tokenomics/>
      <roadmap/>
      <buy/>
      <press/>
      <site-footer/>
    </div>
  </div>
</template>

<script>
import NavBar from "../../views/commons/NavBar";
import Banner from "../../views/index-one/Banner";
import Tokenomics from "../../views/index-one/Tokenomics";
import Buy from "../../views/index-one/Buy";
import Gamefi from "../../views/index-one/Gamefi";
import Roadmap from "../../views/index-one/Roadmap";
import Blessings from "@/views/index-one/Blessings";
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
    Buy,
    Roadmap,
    Blessings,
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