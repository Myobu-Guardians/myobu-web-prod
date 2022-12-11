<template>
  <section class="download-section ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 class="text-white">MYŌBU Protocol</h2>
          <p class="lead text-left">
            <a
              href="https://protocol.myobu.io"
              target="_blank"
              style="color: #fff; text-decoration: underline !important"
              >Myobu Protocol</a
            >
            is our <strong style="font-weight: 800">**core**</strong> product
            that aims to become the bridge between web2 and web3 that helps
            developers to construct robust, persistent, and real-time web3
            applications quickly. All of our products, such as
            <a
              href="https://protocol.myobu.io"
              target="_blank"
              style="color: #fff; text-decoration: underline !important"
              >MNS</a
            >,
            <a
              href="https://realm.myobu.io"
              target="_blank"
              style="color: #fff; text-decoration: underline !important"
              >Realm</a
            >, are built on top of Myobu Protocol.
          </p>
          <p class="lead text-left">
            <a
              href="https://protocol.myobu.io"
              target="_blank"
              style="color: #fff; text-decoration: underline !important"
              >Myobu Protocol</a
            >
            mainly consists of the following components:
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-6">
          <div
            class="
              single-promo single-promo-hover single-promo-1
              rounded
              text-center
              primary-bg
              pt-2
            "
          >
            <h4>
              <font-awesome-icon :icon="['fa-solid', 'key']" class="mr-2" />
              Authentication
            </h4>
            <p class="text-left" style="font-size: 16px; font-weight: 300">
              The protocol layer authenticates users by simply signing a
              messages with their wallet.
            </p>
            <p class="text-left" style="font-size: 16px; font-weight: 300">
              This guarantees that Myōbu Protocol works on any blockchain
              network and users don't need to pay gas fees to interact with the
              protocol.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div
            class="
              single-promo single-promo-hover single-promo-1
              rounded
              text-center
              primary-bg
              pt-2
            "
          >
            <h4>
              <font-awesome-icon
                :icon="['fa-solid', 'database']"
                class="mr-2"
              />
              DATABASE
            </h4>
            <p class="text-left" style="font-size: 16px; font-weight: 300">
              Allows users to store/query data on our Myōbu Database without
              paying gas fees.
            </p>
            <p class="text-left" style="font-size: 16px; font-weight: 300">
              This feature also enables users to perform complicated queries on
              the database, which cannot be directly done with smart contracts
              on blockchain.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div
            class="
              single-promo single-promo-hover single-promo-1
              rounded
              text-center
              primary-bg
              pt-2
            "
          >
            <h4>
              <font-awesome-icon
                :icon="['fa-solid', 'tower-broadcast']"
                class="mr-2"
              />PUBSUB
            </h4>
            <p class="text-left" style="font-size: 16px; font-weight: 300">
              Allows PubSub messages to be sent to users without paying gas
              fees.
            </p>
            <p class="text-left" style="font-size: 16px; font-weight: 300">
              This feature is useful for building real-time applications on the
              blockchain.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div
            class="
              single-promo single-promo-hover single-promo-1
              rounded
              text-center
              primary-bg
              pt-2
            "
          >
            <h4>
              <font-awesome-icon :icon="['fa-solid', 'person']" class="mr-2" />
              MNS
            </h4>
            <p class="text-left" style="font-size: 16px; font-weight: 300">
              <a
                href="https://protocol.myobu.io/#/mns"
                target="_blank"
                rel="noreferrer"
                style="color: #fff; text-decoration: underline !important"
                >MNS</a
              >
              (Myōbu Name Service) is a decentralized naming system that allows
              users to register human-readable names associated with their
              wallet addresses.
            </p>
            <p class="text-left" style="font-size: 16px; font-weight: 300">
              MNS works on any EVM compatible blockchain networks.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div
            class="
              single-promo single-promo-hover single-promo-1
              rounded
              text-center
              primary-bg
              pt-2
            "
          >
            <h4>
              <font-awesome-icon :icon="['fa-solid', 'sitemap']" class="mr-2" />
              DAO
            </h4>
            <p class="text-left" style="font-size: 16px; font-weight: 300">
              The MYŌBU DAO is a decentralized autonomous organization that is
              responsible for managing the Myōbu protocol and its ecosystem.
            </p>
            <p class="text-left" style="font-size: 16px; font-weight: 300">
              You can participate in the DAO by staking MYOBU tokens, then make
              proposals and votes on
              <a
                href="https://realm.myobu.io/#/proposals"
                target="_blank"
                rel="noreferrer"
                style="color: #fff; text-decoration: underline !important"
                >Realm</a
              >.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div
            class="
              single-promo single-promo-hover single-promo-1
              rounded
              text-center
              primary-bg
              pt-2
            "
          >
            <h4>
              <font-awesome-icon :icon="['fa-solid', 'gun']" class="mr-2" />
              NFT
              <i
                class="italic"
                style="font-style: italic; font-size: 14px; color: #999"
                >(Comming soon)</i
              >
            </h4>
            <p class="text-left" style="font-size: 16px; font-weight: 300">
              Allows arbitrary NFT metadata to be stored on our Myōbu Database
              and will enable users to mint NFTs only when they want to.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Protocol",
};
</script>

<style>
.download-1-bg {
  background: url("../../assets/img/app-hero-bg.jpg") no-repeat center center /
    cover !important;
}
</style>