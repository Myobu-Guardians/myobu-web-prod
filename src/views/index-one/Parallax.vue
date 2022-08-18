<template>
  <div class="overflow-hidden" id="parallax-container" @mousemove="mouseMove">
    <section>
      <div id="parallax">
        <div class="texts">
          <h2 class="text-white font-normal mb-1" style="text-transform: none">
            Immerse yourself in Myōbu
          </h2>
          <p class="lead">
            We're building a high fidelity open-world MMORPG metaverse powered
            by Unreal Engine 5
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style type="text/css">
#parallax {
  position: relative;
  max-width: 100%;
  max-height: 90vh;
  aspect-ratio: 4 / 3;
  margin: 0 auto;
  background-image: url(../../assets/img/parallax/glow-400.png),
    url(../../assets/img/parallax/wall-1920.png),
    url(../../assets/img/parallax/temple-1920-grad-9-3.png),
    url(../../assets/img/parallax/trees-1920.png),
    url(../../assets/img/parallax/mountains-1920-2.png),
    url(../../assets/img/parallax/moon-200.png),
    url(../../assets/img/parallax/stars-1920.jpg);
  background-repeat: no-repeat;
  background-size: 20%, 120%, 120%, 105%, 120%, 10%, 120%;
}

#parallax .texts {
  position: absolute;
  top: 15%;
  left: 5%;
}
</style>

<script>
export default {
  name: "Parallax",
  mounted() {
    console.log("mounted");
  },
  methods: {
    mouseMove(event) {
      const container = document.getElementById("parallax-container");
      let _w = container.offsetWidth / 2; // window.innerWidth / 2;
      let _h = container.offsetHeight / 2; // window.innerHeight / 2;
      let _mouseX = event.clientX;
      let _mouseY = event.clientY;
      // Glow
      let _depth1 = `${-10 - (_mouseX - _w) * 0.0005}% ${
        60 - (_mouseY - _h) * 0.0005
      }%`;
      // Wall
      let _depth2 = `${50 - (_mouseX - _w) * 0.025}% ${
        70 - (_mouseY - _h) * 0.025
      }%`;
      // Temple
      let _depth3 = `${50 - (_mouseX - _w) * 0.015}% ${
        70 - (_mouseY - _h) * 0.015
      }%`;
      // Tree
      let _depth4 = `${50 - (_mouseX - _w) * 0.01}% ${
        50 - (_mouseY - _h) * 0.01
      }%`;
      // Mountains
      let _depth5 = `${50 - (_mouseX - _w) * 0.005}% ${
        40 - (_mouseY - _h) * 0.005
      }%`;
      // Moon
      let _depth6 = `${60 - (_mouseX - _w) * 0.001}% ${
        20 - (_mouseY - _h) * 0.001
      }%`;
      // Stars
      let _depth7 = `${50 - (_mouseX - _w) * 0.001}% ${
        50 - (_mouseY - _h) * 0.001
      }%`;
      let x = `${_depth1}, ${_depth2}, ${_depth3}, ${_depth4}, ${_depth5}, ${_depth6}, ${_depth7}`;
      document.getElementById("parallax").style.backgroundPosition = x;
    },
  },
};
</script>