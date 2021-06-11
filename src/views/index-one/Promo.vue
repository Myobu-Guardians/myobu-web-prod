<template>
  <section class="promo-section ptb-100" id="tokenomics">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7 col-md-8">
          <div class="section-heading text-center mb-5">
            <h2>{{ $t('tokenomics') }}</h2>
          </div>
        </div>
      </div>
      <div class="row equal">
        <div class="col-md-4 col-lg-4">
          <div class="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
            <h5>$MYOBU</h5>
            <p>{{ $t('tokenSymbol') }}</p>
          </div>
        </div>
        <div class="col-md-4 col-lg-4">
          <div class="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
            <h5>1 {{ $t('trillion') }}</h5>
            <p>{{ $t('Total supply') }}</p>
          </div>
        </div>
        <div class="col-md-4 col-lg-4">
          <div class="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
            <h5>7% - 28%</h5>
            <p>{{ $t('redRateText') }}</p>
          </div>
        </div>
      </div>
      <div class="row equal mt-4">
        <div class="col-md-4 col-lg-4">
          <div class="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
            <h5>{{ $t('fairLaunch') }}</h5>
            <p>{{ $t('fairLaunchText') }}</p>
          </div>
        </div>
        <div class="col-md-4 col-lg-4">
          <div class="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
            <h5>{{ $t('safe') }}</h5>
            <p>{{ $t('safeText') }}</p>
          </div>
        </div>
        <div class="col-md-4 col-lg-4">
          <div class="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
            <h5>{{ $t('devFee') }}</h5>
            <p>{{ $t('devFeeText') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    name: "Promo",
};
</script>