<template>
  <div>
    <div class="main">
      <nav-bar />
      <staking-manage/>
    </div>
  </div>
</template>

<script>
import StakingManage from "@/views/staking/StakingManage";
import NavBar from "@/views/commons/NavBar";

export default {
  name: "StakingManagePage",
  components: {
    StakingManage,
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