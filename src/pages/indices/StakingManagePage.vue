<template>
  <div>
    <nav-bar/>
    <div class="main">
      <staking-manage/>
      <lite-footer/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/views/commons/NavBar";
import StakingManage from "@/views/staking/StakingManage";
import LiteFooter from "@/views/commons/LiteFooter";

export default {
  name: "StakingManagePage",
  components: {
    LiteFooter,
    StakingManage,
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