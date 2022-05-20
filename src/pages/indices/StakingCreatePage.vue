<template>
  <div>
    <nav-bar/>
    <div class="main">
      <staking-create/>
      <lite-footer/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/views/commons/NavBar";
import StakingCreate from "@/views/staking/StakingCreate";
import LiteFooter from "@/views/commons/LiteFooter";

export default {
  name: "StakingCreatePage",
  components: {
    LiteFooter,
    StakingCreate,
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