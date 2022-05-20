<template>
  <div>
    <nav-bar/>
    <div class="main">
      <staking-b-s-c-create/>
      <lite-footer/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/views/commons/NavBar";
import LiteFooter from "@/views/commons/LiteFooter";
import StakingBSCCreate from "@/views/staking/StakingBSCCreate";

export default {
  name: "StakingBSCCreatePage",
  components: {
    StakingBSCCreate,
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