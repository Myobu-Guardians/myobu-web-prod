<template>
  <div>
    <nav-bar/>
    <div class="main">
      <staking-choose/>
      <lite-footer/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/views/commons/NavBar";
import LiteFooter from "@/views/commons/LiteFooter";
import StakingChoose from "@/views/staking/StakingChoose";

export default {
  name: "StakingChoosePage",
  components: {
    StakingChoose,
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