<template>
  <section class="hero-section pt-100 background-img banner-1-bg" id="hikari-home">
    <div class="container">
      <div class="row align-items-center justify-content-between py-5">
        <div class="col-md-12 col-lg-12 col-sm-12">
          <div class="glass text-white">
            <h1 class="text-white">
              <span>Hikari</span>
            </h1>
            <p class="lead">Inari Ōkami is the spirit of foxes, fertility, rice, tea and sake, of agriculture and
              industry, of general prosperity and worldly success. Inari's foxes, or 'Kitsune', act as messengers and
              intermediaries of power.</p>
            <p class="lead">Kitsune are believed to possess keen intellect, long life, and powers beyond our mortal
              reckoning. Unlike foxes of the physical plane, Kitsune can have more than one tail, with more tails
              signifying power, age, and wisdom. Once a Kitsune has lived for one-thousand years and possesses nine tails,
              they claim the title of ‘kyūbi no kitsune’. These beings walk the halls of the highest realms of the spirit world, wielding power and wisdom
              beyond mortal comprehension. For this reason, many in the mortal realm offer up sacrifices to these
              otherworldly beings, seeking Kitsune growth and power for their own ends…</p>
            <p class="lead"> In the Trading Card Game (TCG) Hikari, you take on the role of a supplicant to the spirit
              world, providing offerings and summoning ever increasingly powerful Kistune to tap the power held
              therein.</p>
            <p class="lead">
              Will you serve as a virtuous priest or priestess, to use the power of the Kitsune to heal the sick, feed the
              hungry, and bring peace to the world? Or will you act as a malevolent summoner, utilizing the spiritual
              power
              for fame, wealth, personal gain, or worse? Who will the spirit world deem worthy?</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style type="text/css">
.space-2x li {
  margin-right: 14px !important;
}
</style>

<script>

import i18n from "@/plugins/i18n";

export default {
  name: "HikariBanner",
  data: function () {
    return {
      languages: [
        {flag: 'us', language: 'en', title: 'English'},
        {flag: 'cn', language: 'cn', title: '中文'}
      ],
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
  },
};
</script>
