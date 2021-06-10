<template>
  <section id="audit" class="feature-section ptb-100">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md-4">
          <div class="download-img">
            <img src="img/csdsec.png" alt="download" class="img-fluid">
          </div>
        </div>
        <div class="col-md-7">
          <div class="feature-contents section-heading">
            <h2>{{ $t('myobuIsSafe') }}</h2>
            <p class="lead">{{ $t('myobuIsSafeText1') }} <a href="https://twitter.com/ctdsec" target="_blank">@ctdsec</a>, {{ $t('myobuIsSafeText2') }}</p>
            <ul class="list-inline mt-5">
              <li class="list-inline-item">
                <a href="files/Cybersecurity_Audit_CTDSEC_Myobu.pdf" target="_blank">
                  <div class="mr-3 icon-box border">
                    <img src="img/icon-pdf.png" alt="icon image" class="img-fluid">
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "Features",
};
</script>

<style>
</style>