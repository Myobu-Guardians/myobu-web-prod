<template>
  <div class="overflow-hidden">
    <section id="info" class="pt-100 tertiary-bg">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md-12">
            <h1 class="text-white text-center">V2 migration guide</h1>
            <p class="lead">
              Option 1: Do nothing. You will be airdropped 1:1 V1:V2. For example, hold 1000 V1? Get 1000 V2<br>
              Option 2: Send to contract. Get 1:1 V1:V2 + 5%. For example, send 1000 V1? Get 1050 V2<br><br>

              Why does option 2 exist? This will allow team to move V1 liq to V2. As a thanks, you get a bonus of 5%
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="howTo" class="pt-100 tertiary-bg">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md-12">
            <h1 class="text-white text-center">How to send tokens?</h1>
            <p class="lead">
              1) Open MetaMask (or any other wallet where your Myōbus are stored)<br>
              2) Click "Send" button<br>
              3) Enter
              <code>0x75d12e4f91df721fafcae4c6cd1d5280381370ac</code>
              as recipient address (To:)<br>
              4) You might get "This is the contract address" warning. Press "I understand"<br>
              5) Select Myōbu as a currency<br>
              6) Enter the amount you want to send. Make sure the amount is less than 3% POOL SIZE!<br>
              7) Press "Send"
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="blessings" class="blessings pt-100 tertiary-bg">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md-12 text-center">
            <h1 class="text-white">3% Pool size</h1>
            <h1 class="hero-text-2"><code>{{ size }} Myōbu</code></h1>
          </div>
        </div>
      </div>
    </section>
    <section id="wen" class="ptb-100 tertiary-bg">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md-12">
            <h1 class="text-white text-center">Wen V2?</h1>
            <p class="lead">
              Once we pull enough liquidity out of the V1 contract, we will airdrop holders. Process is automated and
              you don't have to do anything to receive your V2 airdrop.<br>
              After team finishes airdrop, liquidity will be added to V2 contract, locked and trading will be enabled.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

var Web3 = require('web3')
var abi = require('human-standard-token-abi')

const web3 = new Web3('https://mainnet.infura.io/v3/fd06f29383fe441db68ad498b59d58eb')
const contractAddress = '0x75d12e4f91df721fafcae4c6cd1d5280381370ac'
const contract = new web3.eth.Contract(abi, contractAddress)

export default {
  name: "Pool",
  data() {
    return {
      size: 0
    }
  },
  methods: {
    getSize() {
      contract.methods.balanceOf('0xa440baf25ac41b26a6ea40f864542b54a76ce530').call()
          .then((data) => {
            this.size = new Intl.NumberFormat('en-US', {
              minimumFractionDigits: 6,
              maximumFractionDigits: 6
            }).format(data / 1000000000 * 0.03)
          })
    }
  },
  created() {
    this.getSize()
  }
}
</script>

<style>
pre {
  text-shadow: none;
  clear: none;
  display: inline !important;
  font-weight: bold;
}

.blessings h1.hero-text-2 {
  font-size: 60px;
  color: #2c0d4f;
  font-weight: 800;
  /*text-shadow: none;*/
  line-height: 1.25;
}

@media (max-width: 767px) {
  .blessings h1.hero-text-2 {
    font-size: 25px;
  }
}
</style>