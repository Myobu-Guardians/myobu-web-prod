<template>
  <section class="download-section ptb-100 secondary-bg" id="lore">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="text-white">Cards</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="hikari-cards hikari-cards-hover hikari-cards-1 rounded primary-bg">
            <div class="circle-icon mb-1">
              <span class="text-white">Kitsune</span>
            </div>
            <p class="lead">
              Base kitsune cards have a number (from 1 to 9), and one symbol. Premium (NFT) kitsune cards can have a range and one or more symbols (up to 4).<br>
              There are 54 base kitsune cards (fixed), and a lot of premium kitsune cards (hundreds).
            </p>
            <img class="img-fluid" src="img/hikari/kitsune1.jpg">
          </div>
        </div>
        <div class="col-md-4">
          <div class="hikari-cards hikari-cards-hover hikari-cards-1 rounded primary-bg">
            <div class="circle-icon mb-1">
              <span class="text-white">Offerings</span>
            </div>
            <p class="lead">
              Each offering has a number (from 1 to 9), and one symbol.<br>
              There are 6 possible symbols (types of offerings):<br>
            </p>
            <ul class="list-tokenomics">
              <li>Plants</li>
              <li>Instruments</li>
              <li>Incense</li>
              <li>Food</li>
              <li>Money</li>
              <li>Beverage</li>
            </ul>
            <p class="lead">
              The deck of offering cards is fixed, with 54 total cards (6 types with 9 cards each). There are always 4 current offerings in play. Whenever an offering card is used, a new offering card is drawn and placed on the board.
            </p>
            <img class="img-fluid" src="img/hikari/offering.jpg">
          </div>
        </div>
        <div class="col-md-4">
          <div class="hikari-cards hikari-cards-hover hikari-cards-1 rounded primary-bg">
            <div class="mb-1">
              <span class="text-white">Spells</span>
            </div>
            <p class="lead">
              Besides playing with kitsune cards, players can cast spells to aid their offense or defense strategies.<br>
              Some spells are resolved and immediately removed from play, while others have an ongoing effect.<br>
              Types of spells:
            </p>
            <ul class="list-tokenomics">
              <li>Instant action</li>
              <li>Enchant kitsune card</li>
              <li>Enchant player</li>
              <li>Enchant world (affects all players)</li>
            </ul>
            <img src="img/hikari/spell2.jpg" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HikariCards",
};
</script>

<style>
.download-1-bg {
  background: url("../../assets/img/app-hero-bg.jpg") no-repeat center center /
        cover !important;
}
</style>