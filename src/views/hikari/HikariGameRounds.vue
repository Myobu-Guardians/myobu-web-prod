<template>
  <section class="download-section ptb-100" id="game-rounds">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="text-white">Game rounds</h2>
          <p class="lead">Game is played over a series of rounds. Each player takes their
            round, then the other player, until one players wins, or a game
            is a draw.</p>
          <p class="lead">
            On their round, a player can:<br>
            - place one kitsune card from hand into play OR activate an already placed kitsune card<br>
            - play any number of spells<br>
            - if the player didn’t activate/place a kitsune card, or play any spells. They can choose to skip their
            round, and remove one placed offering (which is then replaced with a new one)
          </p>
          <h3 class="text-white">Using Kitsune cards</h3>
          <p class="lead">
            Each player has up to 3 possible positions to place their kitsune cards. These places are called shrines.
            Initially player has only 1 shrine, but they can purchase an “unlock shrine” add-on.
            <br>
            To place or activate a kitsune card a player must use a number of offering cards to match either the symbol,
            or the total number based on the number (or range) specified on the kitsune card.<br>
            For every used offering card, player scores a point. If that
            offering card contains a symbol also present on the kitsune card,
            a player scores an additional point.
          </p>
          <h3 class="text-white">Loot boxes</h3>
          <p class="lead">
            A loot box is either earned by winning a duel or purchased. When opened, a loot box can contain:<br>
            - XP<br>
            - in-game currency<br>
            - kitsune card (base or NFT)<br>
            - spell card (base or NFT)<br>
            There are 9 levels of loot boxes (depending on the player level), and different types of loot boxes with
            different probabilities for rewards.
          </p>
          <h3 class="text-white">Gold</h3>
          <p class="lead">
            Player can use gold to:<br>
            - unlock shrines<br>
            - buy a loot box<br>
            - purchase elixirs<br>
            - mint new kitsune<br>
          </p>
          <h3 class="text-white">Elixirs</h3>
          <p class="lead">
            Elixirs are used outside duels. When used, they give special effects to players for a specific duration.<br>
            There are different types of elixirs. Some examples:<br>
            - increase earned XP by 25% during 8 hours<br>
            - increase earned gold by 25% during 8 hours<br>
            - increase probability of gaining premium (NFT) cards through loot boxes by 10% during 8 hours
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HikariGameRounds",
};
</script>

<style>
.download-1-bg {
  background: url("../../assets/img/app-hero-bg.jpg") no-repeat center center /
        cover !important;
}
</style>