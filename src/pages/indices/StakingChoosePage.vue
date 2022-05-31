<template>
  <div>
    <div class="main">
      <nav-bar />
      <staking-choose/>
    </div>
  </div>
</template>

<script>
import StakingChoose from "@/views/staking/StakingChoose";
import NavBar from "@/views/commons/NavBar";

export default {
  name: "StakingChoosePage",
  components: {
    StakingChoose,
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