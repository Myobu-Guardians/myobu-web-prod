<template>
  <footer class="footer-section">
    <div class="footer-top pt-150 background-img-2"
         style="background: url('img/footer-bg.png')no-repeat center top / cover">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-12 col-lg-12 mb-12 mb-md-12 mb-sm-12 mb-lg-12 text-center">
            <div class="footer-nav-wrap text-white">
              <img src="img/myobu-5@2x.png" alt="footer logo" width="120" class="img-fluid mb-3">
              <p>{{ $t('madeByDevs') }}</p>

              <div class="social-list-wrap">
                <ul class="social-list list-inline list-unstyled">
                  <li class="list-inline-item"><a href="https://t.me/MyobuOfficial" target="_blank"
                                                  title="Telegram"><span
                      class="fab fa-telegram-plane"></span></a>
                  </li>
                  <li class="list-inline-item"><a href="https://twitter.com/MyobuOfficial" target="_blank"
                                                  title="Twitter"><span
                      class="fab fa-twitter"></span></a></li>
                  <li class="list-inline-item"><a href="https://www.reddit.com/r/Myobu/" target="_blank"
                                                  title="Reddit"><span
                      class="fab fa-reddit"></span></a></li>
                  <li class="list-inline-item"><a href="https://www.instagram.com/myobu_official/"
                                                  target="_blank"
                                                  title="Instagram"><span class="fab fa-instagram"></span></a>
                  <li class="list-inline-item"><a
                      href="https://www.tiktok.com/@myobu_official?lang=en&is_copy_url=1&is_from_webapp=v1"
                      target="_blank"
                      title="TikTok"><span class="fab fa-tiktok"></span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom border-gray-light mt-5 py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-7">
              <div class="copyright-wrap small-text">
                <p class="mb-0 text-white">© Myōbu, {{ $t('allRightsReserved') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: "SiteFooter",
};
</script>

<style scoped lang="scss">
.bg-footer-custom {
    background: url("../../assets/img/footer-bg.png") no-repeat center top /
        cover !important;
}
</style>