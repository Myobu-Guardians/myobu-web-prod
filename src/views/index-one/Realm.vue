<template>
  <section class="download-section ptb-100 dark-bg-text secondary-bg">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <img src="img/realm/logo.png" style="height: 156px" />
          <h2 class="text-white">REALM</h2>
          <p class="lead text-left">
            Realm is a decentralized social network and DAO built on Myōbu
            Protocol and MNS. It allows users to create their social network and
            invite their friends to join. Users can post notes on Realm to share
            their thoughts and ideas, make proposals, and vote on proposals.
          </p>
          <p class="lead text-left">
            Realm will also be the web3 version of Steam, where third parties
            can create their games and publish/sell them on Realm. We will also
            allow users to trade NFTs on Realm.
          </p>
          <a href="https://realm.myobu.io" target="_blank">
            <div id="realm-bg">
              <button class="btn btn-purple" id="enter-realm-btn">
                Enter Realm
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Realm",
};
</script>

<style>
#realm-bg {
  background-image: url("https://user-images.githubusercontent.com/111298477/201521306-df72e594-ea33-4f4e-bb26-7ec2186bfe32.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  max-width: 100%;
  max-height: 70vh;
  aspect-ratio: 2/1;
  border-radius: 8px;
}
#enter-realm-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>