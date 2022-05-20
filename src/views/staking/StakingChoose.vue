<template>
  <div class="overflow-hidden">
    <section id="info" class="pt-150 tertiary-bg">
      <div class="container">
        <div class="row align-items-center justify-content-between border-bottom">
          <div class="col-md-6 col-sm-12 mb-5 text-md-left text-center">
            <h1 class="text-white my-auto align-middle"><img src="img/redesign/staking.png"
                                                             class="img-fluid staking-img my-auto align-middle"> <span
                class="my-auto align-middle"> MYŌBU STAKING</span></h1>
          </div>
        </div>
      </div>
    </section>
    <section id="ETH" class="ptb-100">
      <div class="container pools-mobile">
        <div class="row align-items-center justify-content-between">
          <div class="col-md-6 col-sm-12 pl-0 pr-0 text-center">
            <router-link class="bordered py-5" to="/staking-eth">
              <img src="img/eth.png" class="img-fluid"/>
              <div>
                Ethereum staking
              </div>
            </router-link>
          </div>
          <div class="col-md-6 col-sm-12 pl-0 pr-0 text-center">
            <router-link class="bordered py-5" to="/staking-bsc">
              <img src="img/bnb.png" class="img-fluid"/>
              <div>
                Binance smart chain staking
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "StakingChoose",
}
</script>

<style scoped>
.wallet {
  color: white;
  border-radius: 10px;
  border: solid 2px #9075f9;
  padding: 13px 13px 12px 20px;
  font-size: 14px;
}

.wallet .check {
  margin-bottom: -2px;
  vertical-align: baseline;
  height: 14px;
}

.pool-row {
  color: #ffffff;
  font-size: 14px;
  font-family: 'MerriweatherSansRoman', sans-serif;
}

table tr td {
  border: none;
}

table tr:nth-child(even) td {
  padding-top: 0;
}

.pool-row .focus {
  padding-bottom: 0;
  color: #cdbdff;
  font-weight: 800;
  font-size: 20px;
}

.highlight {
  color: #9075f9;
}

.border-bottom {
  border-bottom: solid 1px #44305d;
}

.staking-img {
  height: 1em;
}

.rounded img {
  border-radius: 50%;
  padding: 10px;
  max-width: 75px;
  border: solid 1px #9075f9;
}

.btn.staking {
  padding: 5px 100px;
  line-height: 2.5;
  border-radius: 10px;
}

.btn.staking.purple {
  background-color: #9075f9;
}

.table tbody + tbody {
  border-top: none;
}

.lock-info {
  border: solid 1px #9075f9;
  background: rgba(251, 251, 251, 0.1) !important;
}

.lock-info td {
  font-size: 12px !important;
  padding-bottom: 0.75rem !important;
}

.lock-info .btn {
  margin-top: 2px;
  padding: 2px 10px;
  margin-right: 0;
  border-radius: 0;
}

#ETH {
  color: #ffffff !important;
}

.pools-mobile img {
  padding: 5px;
  margin-right: 10px;
  max-width: 150px;
}

.pools-mobile img.img-rounded {
  border-radius: 50%;
  margin: 10px;
  border: solid 1px #9075f9;
  max-width: 35px;
}

.bordered {
  color: #ffffff;
  display: block;
  border: solid 1px #9075f9;
  background: rgba(251, 251, 251, 0.1);
  margin: 10px;
  padding-bottom: 15px;
  padding-top: 15px;
}


.border-bottom {
  border: none !important;
}

.btn.staking {
  width: 100%;
  line-height: 1.5;
  padding: 5px 0;
}

@media (min-width: 320px) and (max-width: 992px) {
  #info {
    padding-top: 150px !important;
  }
}


</style>