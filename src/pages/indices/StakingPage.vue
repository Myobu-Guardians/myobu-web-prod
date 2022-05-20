<template>
  <div>
    <nav-bar/>
    <div class="main">
      <staking/>
      <lite-footer/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/views/commons/NavBar";
import Staking from "@/views/staking/StakingEthereum";
import LiteFooter from "@/views/commons/LiteFooter";

export default {
  name: "StakingPage",
  components: {
    LiteFooter,
    Staking,
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