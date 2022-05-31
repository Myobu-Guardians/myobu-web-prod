<template>
  <div>
    <div class="main">
      <nav-bar />
      <staking-create-myobu-e-t-h/>
    </div>
  </div>
</template>

<script>
import StakingCreateMyobuETH from "@/views/staking/StakingCreateMyobuETH";
import NavBar from "@/views/commons/NavBar";

export default {
  name: "StakingCreateMyobuETHPage",
  components: {
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