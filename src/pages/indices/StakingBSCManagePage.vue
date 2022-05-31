<template>
  <div>
    <div class="main">
      <nav-bar />
      <staking-b-s-c-manage/>
    </div>
  </div>
</template>

<script>
import StakingBSCManage from "@/views/staking/StakingBSCManage";
import NavBar from "@/views/commons/NavBar";

export default {
  name: "StakingBSCManagePage",
  components: {
    StakingBSCManage,
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