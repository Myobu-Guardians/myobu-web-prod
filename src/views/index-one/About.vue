<template>
  <div class="overflow-hidden" id="metamask">
    <section id="about" class="about-us ptb-100 background-shape-img">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md-7">
            <div class="about-content-left section-heading">
              <h2>{{ $t('howToBuyTitle') }}</h2>

              <div class="single-feature mb-4 mt-5">
                <h5>{{ $t('step1Title') }}</h5>
                <div class="icon-box-wrap d-flex align-items-center mb-2">
                  <p class="mb-0">{{ $t('step1Text') }}</p>
                </div>
              </div>
              <div class="single-feature mb-4">
                <h5>{{ $t('step2Title') }}</h5>
                <div class="icon-box-wrap mb-2">
                  <p class="mb-0">{{ $t('step2Text') }}</p>
                </div>
                <p></p>
              </div>
              <div class="single-feature mb-4">
                <h5>{{ $t('step3Title') }}</h5>
                <div class="icon-box-wrap mb-2">
                  <p class="mb-0">{{ $t('step3Text') }}</p>
                </div>
                <p></p>
              </div>
              <div class="single-feature mb-4">
                <h5>{{ $t('step4Title') }}</h5>
                <div class="icon-box-wrap mb-2">
                  <p class="mb-0">{{ $t('step4Text') }}</p>
                </div>
                <p></p>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="about-content-right">
              <iframe
                  src="https://app.uniswap.org/#/swap?outputCurrency=0x75D12E4F91Df721faFCae4c6cD1d5280381370AC&use=V2"
                  height="660px"
                  width="100%"
                  style="border: 0; margin: 0 auto; display: block; border-radius: 10px; max-width: 600px; min-width: 300px;"
                  id="myobu-uniswap-integration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
</style>