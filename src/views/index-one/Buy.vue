<template>
  <div class="overflow-hidden" id="buy">
    <section id="about" class="about-us ptb-150 secondary-bg">
      <div class="container">
        <div class="row align-items-center justify-content-between border-bottom pb-5">
          <div class="col-md-6">
            <div class="about-content-left section-heading">
              <h2 class="text-white">{{ $t('howToBuyTitle') }}</h2>
              <div class="single-feature mb-4 mt-5">
                <h5>{{ $t('step1Title') }}</h5>
                <div class="icon-box-wrap d-flex align-items-center mb-2">
                  <p class="mb-0">{{ $t('step1Text') }}</p>
                </div>
              </div>
              <div class="single-feature mb-4">
                <h5>{{ $t('step2Title') }}</h5>
                <div class="icon-box-wrap mb-2">
                  <p class="mb-0">{{ $t('step2Text') }}</p>
                </div>
                <p></p>
              </div>
              <div class="single-feature mb-4">
                <h5>{{ $t('step3Title') }}</h5>
                <div class="icon-box-wrap mb-2">
                  <p class="mb-0">{{ $t('step3Text') }}</p>
                </div>
                <p></p>
              </div>
              <div class="single-feature mb-4">
                <h5>{{ $t('step4Title') }}</h5>
                <div class="icon-box-wrap mb-2">
                  <p class="mb-0">{{ $t('step4Text') }}</p>
                </div>
                <p></p>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="hero-animation-img">
              <img class="img-fluid d-block m-auto animation-one" src="img/redesign/cloud.png"
                   width="220" alt="animation image">
              <img class="img-fluid d-none d-lg-block animation-three"
                   src="img/redesign/cloud.png" alt="animation image" width="150">
              <img class="img-fluid d-none d-lg-block animation-four" src="img/redesign/cloud.png"
                   alt="animation image" width="350">
            </div>
            <div class="about-content-right">
              <iframe
                  src="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xdfdd3459d4f87234751696840092ee20c970fb07&use=V2"
                  height="660px"
                  width="100%"
                  style="border: 0; margin: 0 auto; display: block; border-radius: 10px; max-width: 600px; min-width: 300px;"
                  id="myobu-uniswap-integration"
              />
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-6">
            <iframe src="https://buy.routelay.com?apiKey=dc804946-723d-4a72-81d9-f97b664c208d&to=myobu&primaryColor=9075f9&mode=buy&isDarkTheme=true&cl=myobu"
                    height="650px" width="100%">
              Your browser does not support iframes.
            </iframe>
          </div>
          <div class="col-md-6">
            <div class="about-content-left section-heading">
              <h2 class="text-white">How to buy $MYOBU using fiat</h2>
              <div class="single-feature mb-4 mt-5">
                <h5>SELECT ERC20 OR BEP20 $MYOBU</h5>
                <div class="icon-box-wrap d-flex align-items-center mb-2">
                  <p class="mb-0">MYOBU can be chosen for either the Ethereum Blockchain or Binance Smart Chain</p>
                </div>
              </div>
              <div class="single-feature mb-4">
                <h5>ENTER THE AMOUNT</h5>
                <div class="icon-box-wrap mb-2">
                  <p class="mb-0">Enter the amount of fiat you want to spend or the amount of $MYOBU you want to buy. Click Continue To Buy</p>
                </div>
              </div>
              <div class="single-feature mb-4">
                <h5>ADD YOUR WALLET ADDRESS</h5>
                <div class="icon-box-wrap mb-2">
                  <p class="mb-0">Enter the wallet address where you want to receive your $MYOBU tokens</p>
                </div>
              </div>
              <div class="single-feature mb-4">
                <h5>FOLLOW THE DIRECTIONS TO LOGIN BY EMAIL</h5>
                <div class="icon-box-wrap mb-2">
                  <p class="mb-0">Routelay will ask you to verify your email and get the billing address associated with your credit or debit card</p>
                </div>
              </div>
              <div class="single-feature mb-4">
                <h5>SUBMIT</h5>
                <div class="icon-box-wrap mb-2">
                  <p class="mb-0">Enter your credit or debit card and follow the steps to confirm your payment</p>
                </div>
              </div>
              <div class="single-feature mb-4">
                <h5>SUCCESSFUL TRANSACTION</h5>
                <div class="icon-box-wrap mb-2">
                  <p class="mb-0">Within a few minutes $MYOBU tokens will appear in your wallet</p>
                </div>
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
  name: "Buy",
  mounted() {
    let iframe = document.getElementById('myobu-uniswap-integration')
    let doc = iframe.contentDocument;
    let el = doc.getElementsByTagName('MuiPaper-elevation1')
    el.css('box-shadow', 'none');
  }
};
</script>

<style>
.MuiPaper-root {
  box-shadow: none !important;
}
</style>