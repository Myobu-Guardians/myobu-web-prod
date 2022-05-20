<template>
  <div>
    <nav-bar/>
    <div class="main">
      <staking-create-myobu-b-n-b/>
      <lite-footer/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/views/commons/NavBar";
import LiteFooter from "@/views/commons/LiteFooter";
import StakingCreateMyobuBNB from "@/views/staking/StakingCreateMyobuBNB";

export default {
  name: "StakingCreateMyobuETHPage",
  components: {
    StakingCreateMyobuBNB,
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