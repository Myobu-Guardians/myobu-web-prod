<template>
    <div class="overflow-hidden">
      <section id="roadmap" class="package-section ptb-100">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="section-heading text-center mb-5">
                <h2>{{ $t('roadmap') }}</h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md">
              <div class="card text-center single-pricing-pack p-5">
                <h5 class="mb-2">{{ $t('phase1') }}</h5>
                <div class="card-body p-0">
                  <ul class="list-unstyled text-sm pricing-feature-list">
                    <li>{{ $t('websiteLaunch') }}</li>
                    <li>{{ $t('kTg') }}</li>
                    <li>{{ $t('kHolders') }}</li>
                    <li>{{ $t('mc5') }}</li>
                    <li>{{ $t('marketingCmpgn') }}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md">
              <div class="card text-center single-pricing-pack p-5">
                <h5 class="mb-2">{{ $t('phase2') }}</h5>
                <div class="card-body p-0">
                  <ul class="list-unstyled text-sm pricing-feature-list">
                    <li>{{ $t('blog') }}</li>
                    <li>{{ $t('k5Holders') }}</li>
                    <li>{{ $t('k5Tg') }}</li>
                    <li>{{ $t('cg') }}</li>
                    <li>{{ $t('cmc') }}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md">
              <div class="card text-center single-pricing-pack p-5">
                <h5 class="mb-2">{{ $t('phase3') }}</h5>
                <div class="card-body p-0">
                  <ul class="list-unstyled text-sm pricing-feature-list">
                    <li>{{ $t('swap') }}</li>
                    <li>{{ $t('k15Holders') }}</li>
                    <li>{{ $t('k15Tg') }}</li>
                    <li>{{ $t('nft') }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>

export default {
    name: "Pricing",
    isGray: {
        type: Boolean,
        default: false,
    },
    isPrimary: {
        type: Boolean,
        default: false,
    },
    components: {
    },
    data: function () {
        return {
        };
    },
};
</script>

<style>
</style>