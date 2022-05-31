<template>
  <div>
    <div class="main">
      <nav-bar />
      <staking-b-s-c-create/>
    </div>
  </div>
</template>

<script>
import StakingBSCCreate from "@/views/staking/StakingBSCCreate";
import NavBar from "@/views/commons/NavBar";

export default {
  name: "StakingBSCCreatePage",
  components: {
    StakingBSCCreate,
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