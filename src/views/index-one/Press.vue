<template>
  <section
      class="client-section ptb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="section-heading text-center mb-5">
            <h2 class="text-white">Press releases</h2>
            <p class="lead">
              Myōbu has been featured in many online magazines such as: Yahoo Finance, Business Insider, NewsBTC, and many more.
            </p>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-12">
          <carousel
              :items="12"
              :nav="false"
              :autoplay="true"
              :dots="true"
              :loop="true"
              :margin="15"
              slideTransition="linear"
              :autoplayTimeout="4000"
              :autoplaySpeed="false"
              :responsive="{
                            0: { items: 2 },
                            500: { items: 3 },
                            600: { items: 4 },
                            800: { items: 5 },
                            1200: { items: 6 },
                        }"
              class="owl-theme clients-carousel dot-indicator owl-loaded owl-drag">

            <a class="item single-client" href="https://cointelegraph.com/press-releases/myobu-presents-its-innovative-gamefi-staking-rewarded-in-eth" target="_blank">
              <img
                  src="img/redesign/press/cointelegraph.png"
                  alt="client logo"
                  class="client-img"
              />
            </a>
            <a class="item single-client" href="https://www.benzinga.com/node/21878268" target="_blank">
              <img
                  src="img/redesign/press/benzinga.webp"
                  alt="client logo"
                  class="client-img"
              />
            </a>
            <a class="item single-client" href="https://markets.businessinsider.com/news/stocks/myobu-created-unique-community-based-project-1030625796" target="_blank">
              <img
                  src="img/redesign/press/business-insider.png"
                  alt="client logo"
                  class="client-img"
              />
            </a>
            <a class="item single-client" href="https://ihodl.com/analytics/2021-07-05/mybu-starts-its-first-official-token-burn-adds-surprise-community/" target="_blank">
              <img
                  src="img/redesign/press/ihodl.svg"
                  alt="client logo"
                  class="client-img"
              />
            </a>
            <a class="item single-client" href="https://www.investing.com/news/cryptocurrency-news/myobu-donates-to-charities-based-on-communitys-football-predictions-2550579" target="_blank">
              <img
                  src="img/redesign/press/investing.webp"
                  alt="client logo"
                  class="client-img"
              />
            </a>
            <a class="item single-client" href="https://www.newsbtc.com/news/company/myobu-announces-euro-2020-charity-giveaway/" target="_blank">
              <img
                  src="img/redesign/press/news_btc.png"
                  alt="client logo"
                  class="client-img"
              />
            </a>
            <a class="item single-client" href="https://finance.yahoo.com/news/myobu-created-unique-community-based-133500840.html" target="_blank">
              <img
                  src="img/redesign/press/yahoo_finance.png"
                  alt="client logo"
                  class="client-img"
              />
            </a>
            <a class="item single-client" href="https://money.yahoo.com/myobu-created-unique-community-based-133500840.html" target="_blank">
              <img
                  src="img/redesign/press/yahoo_money.png"
                  alt="client logo"
                  class="client-img"
              />
            </a>
            <a class="item single-client" href="https://news.yahoo.com/myobu-created-unique-community-based-133500840.html" target="_blank">
              <img
                  src="img/redesign/press/yahoo_news.png"
                  alt="client logo"
                  class="client-img"
              />
            </a>
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "Press",
  components: {carousel},
  props: {
    isGray: {
      type: Boolean,
      default: false,
    },
    paddingTop: {
      type: Boolean,
      default: true,
    },
    paddingBottom: {
      type: Boolean,
      default: true,
    },
  },
};
</script>


<style>
</style>