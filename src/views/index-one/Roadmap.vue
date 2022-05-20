<template>
    <div class="overflow-hidden">
      <section id="roadmap" class="roadmap-section ptb-150 mt-5"
               style="background: url('img/redesign/roadmap-bg.png') left bottom/20% no-repeat, url('img/redesign/clouds.png') right top/20% no-repeat">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="section-heading mb-5">
                <h2 class="text-white">{{ $t('roadmap') }}</h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-3 col-md">
              <div class="card single-pricing-pack">
                <h5 class="mb-2">{{ $t('phase1') }}</h5>
                <div class="card-body p-0">
                  <ul class="list-unstyled text-sm pricing-feature-list">
                    <li class="checked">Website launch</li>
                    <li class="checked">Launch of $MYOBU token</li>
                    <li class="checked">Community growth</li>
                    <li class="checked">Marketing campaigns</li>
                    <li class="checked">Third-party audit</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md">
              <div class="card single-pricing-pack">
                <h5 class="mb-2">{{ $t('phase2') }}</h5>
                <div class="card-body p-0">
                  <ul class="list-unstyled text-sm pricing-feature-list">
                    <li class="checked">Coingecko listing</li>
                    <li class="checked">Coinmarketcap listing</li>
                    <li class="checked">Professional marketing</li>
                    <li class="checked">Add utility for Myōbu</li>
                    <li class="checked">Myōbu Dashboard</li>
                    <li class="checked">Myōbu Forum</li>
                    <li class="checked">Smart Contract Games</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md">
              <div class="card single-pricing-pack">
                <h5 class="mb-2">{{ $t('phase3') }}</h5>
                <div class="card-body p-0">
                  <ul class="list-unstyled text-sm pricing-feature-list">
                    <li class="checked">DeFi add on (e.g. staking)</li>
                    <li class="checked">Website upgrade</li>
                    <li>NFT minting</li>
                    <li class="checked">GameFi Introduction</li>
                    <li>Initial NFT game</li>
                    <li>DAO Introduction</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md">
              <div class="card single-pricing-pack">
                <h5 class="mb-2">Phase 4</h5>
                <div class="card-body p-0">
                  <ul class="list-unstyled text-sm pricing-feature-list">
                    <li class="checked">New and upgraded SCGs</li>
                    <li>Advanced NFT game</li>
                    <li>Myōbu game</li>
                    <li class="checked">CEX listing</li>
                    <li>Exclusive Myōbu events</li>
                    <li>More utility along crypto innovations</li>
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
    name: "Roadmap",
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