<template>
  <section class="download-section pt-100 background-img"
           style="background: url('img/myobu-social_twitter-coover.jpg')no-repeat center center / cover" id="tax">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 class="text-white">{{ $t('antiDumpTitle') }}</h2>
        </div>
      </div>
      <div class="row mb-1">
        <div class="col-md-12">
          <div class="download-content text-white">
            <p class="lead">{{ $t('antiDumpText1') }}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <img src="img/tax.png" alt="download" class="img-fluid">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="download-content text-white pb-100">
            <p class="lead">
              {{ $t('antiDumpText2') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "Download",
};
</script>

<style>
.download-1-bg {
    background: url("../../assets/img/app-hero-bg.jpg") no-repeat center center /
        cover !important;
}
</style>