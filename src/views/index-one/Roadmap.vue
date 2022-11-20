<template>
  <div class="overflow-hidden">
    <section
      id="roadmap"
      class="roadmap-section ptb-150 mt-5"
      style="
        background: url('img/redesign/roadmap-bg.png') left bottom/20% no-repeat,
          url('img/redesign/clouds.png') right top/20% no-repeat;
      "
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="section-heading mb-5">
              <h2 class="text-white">{{ $t("roadmap") }}</h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-3 col-md">
            <div class="card single-pricing-pack">
              <h5 class="mb-2">{{ $t("2021 ~ Q2 2022") }}</h5>
              <div class="card-body p-0">
                <ul class="list-unstyled text-sm pricing-feature-list">
                  <li class="checked">Website launch</li>
                  <li class="checked">Launch of $MYOBU token</li>
                  <li class="checked">Community growth</li>
                  <li class="checked">Marketing campaigns</li>
                  <li class="checked">Third-party audit</li>
                  <li class="checked">Coingecko listing</li>
                  <li class="checked">Coinmarketcap listing</li>
                  <li class="checked">Professional marketing</li>
                  <li class="checked">Add utility for Myōbu</li>
                  <li class="checked">
                    Smart Contract Games (Fountain of Fortune)
                  </li>
                  <li class="checked">DeFi add on (e.g. staking)</li>
                  <li class="checked">GameFi Introduction</li>
                  <li class="checked">New and upgraded SCGs</li>
                  <li class="checked">CEX listing (Hotbit)</li>
                  <li class="checked">ETH~BNB Bridge</li>
                  <li class="checked">New and upgraded SCGs</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md">
            <div class="card single-pricing-pack">
              <h5 class="mb-2">{{ $t("Q3 2022") }}</h5>
              <div class="card-body p-0">
                <ul class="list-unstyled text-sm pricing-feature-list">
                  <li class="checked">Launch Myōbu Protocol</li>
                  <li class="checked">Launch MNS (Myōbu Name Service)</li>
                  <li class="checked">
                    Launch Myōbu Realm (the initial version)
                  </li>
                  <li class="checked">Launch Hikari Beta</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md">
            <div class="card single-pricing-pack">
              <h5 class="mb-2">{{ $t("Q4 2022") }}</h5>
              <div class="card-body p-0">
                <ul class="list-unstyled text-sm pricing-feature-list">
                  <li class="checked">myobu.io website update</li>
                  <li>Launch the Myōbu Realm - Friend System</li>
                  <li>Launch the Myōbu Realm - Proposal & Vote System</li>
                  <li>Launch the Myōbu Realm - Game Store</li>
                  <li>Publish Hikari on the Myōbu Realm - Game Store</li>
                  <li>
                    Publish Hikari NFT card packs on the Myōbu Realm - Game
                    Store
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md">
            <div class="card single-pricing-pack">
              <h5 class="mb-2">{{ $t("2023") }}</h5>
              <div class="card-body p-0">
                <ul class="list-unstyled text-sm pricing-feature-list">
                  <li>
                    Improve existing products, such as Myōbu Protocol, MNS,
                    Realm, etc.
                  </li>
                  <li>Develop the new game project - Katana 刀</li>
                  <li>More trading pairs and more networks support</li>
                  <li>More CEXs listings</li>
                  <li>More marketing and community building</li>
                  <li>DAO governance on Realm</li>
                  <li>Game Hackathon events</li>
                  <li>Hikari tournament (and other game tournaments)</li>
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
  components: {},
  data: function () {
    return {};
  },
};
</script>

<style>
</style>