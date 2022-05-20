<template>
  <div>
    <nav-bar/>
    <div class="main">
      <staking-create-myobu-e-t-h/>
      <lite-footer/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/views/commons/NavBar";
import StakingCreateMyobuETH from "@/views/staking/StakingCreateMyobuETH";
import LiteFooter from "@/views/commons/LiteFooter";

export default {
  name: "StakingCreateMyobuETHPage",
  components: {
    LiteFooter,
    StakingCreateMyobuETH,
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