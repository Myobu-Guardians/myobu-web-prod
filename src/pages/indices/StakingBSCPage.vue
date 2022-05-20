<template>
  <div>
    <nav-bar/>
    <div class="main">
      <staking-b-s-c/>
      <lite-footer/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/views/commons/NavBar";
import StakingBSC from "@/views/staking/StakingBSC";
import LiteFooter from "@/views/commons/LiteFooter";

export default {
  name: "StakingBSCPage",
  components: {
    StakingBSC,
    LiteFooter,
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