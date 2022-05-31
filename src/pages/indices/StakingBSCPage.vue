<template>
  <div>
    <div class="main">
      <nav-bar />
      <staking-b-s-c/>
    </div>
  </div>
</template>

<script>
import StakingBSC from "@/views/staking/StakingBSC";
import NavBar from "@/views/commons/NavBar";

export default {
  name: "StakingBSCPage",
  components: {
    StakingBSC,
    NavBar
  },
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>