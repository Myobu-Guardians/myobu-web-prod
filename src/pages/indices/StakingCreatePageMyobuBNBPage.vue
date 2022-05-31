<template>
  <div>
    <div class="main">
      <nav-bar />
      <staking-create-myobu-b-n-b/>
    </div>
  </div>
</template>

<script>
import StakingCreateMyobuBNB from "@/views/staking/StakingCreateMyobuBNB";
import NavBar from "@/views/commons/NavBar";

export default {
  name: "StakingCreateMyobuETHPage",
  components: {
    NavBar,
    StakingCreateMyobuBNB,
  },
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>