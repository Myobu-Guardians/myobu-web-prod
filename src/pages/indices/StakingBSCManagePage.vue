<template>
  <div>
    <nav-bar/>
    <div class="main">
      <staking-b-s-c-manage/>
      <lite-footer/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/views/commons/NavBar";
import LiteFooter from "@/views/commons/LiteFooter";
import StakingBSCManage from "@/views/staking/StakingBSCManage";

export default {
  name: "StakingBSCManagePage",
  components: {
    StakingBSCManage,
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