<template>
  <div>
    <div class="main">
      <nav-bar/>
      <staking/>
    </div>
  </div>
</template>

<script>
import Staking from "@/views/staking/StakingEthereum";
import NavBar from "@/views/commons/NavBar";

export default {
  name: "StakingPage",
  components: {
    Staking,
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