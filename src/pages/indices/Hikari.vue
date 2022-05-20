<template>
  <div>
    <nav-bar/>
    <div class="main">
      <hikari-banner/>
      <hikari-overview/>
      <hikari-cards/>
      <hikari-disclaimer/>
      <lite-footer/>
    </div>
  </div>
</template>

<script>
import NavBar from "../../views/commons/NavBar";
import HikariBanner from "@/views/hikari/HikariBanner";
import HikariOverview from "@/views/hikari/HikariOverview";
import LiteFooter from "@/views/commons/LiteFooter";
import HikariCards from "@/views/hikari/HikariCards";
import HikariDisclaimer from "@/views/hikari/HikariDisclaimer";

export default {
  name: "Hikari",
  components: {
    HikariDisclaimer,
    HikariCards,
    LiteFooter,
    HikariOverview,
    HikariBanner,
    NavBar,
  },
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>