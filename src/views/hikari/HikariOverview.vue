<template>
  <section class="download-section ptb-100" id="overview">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="text-white">Game Overview</h2>
          <p class="lead">Hikari is a 2-player duel, racing each other to earn points. When you earn enough points
            through activation of your kitsune, you defeat your opponent and win. Higher ranking players will be
            required to earn more points to claim victory, so players at varying levels can duel fairly. During the
            gameplay, players can utilize different strategies and card types to e.g. hinder their opponent’s plans or
            focus on accelerating their own plans.
          </p>
          <img src="img/hikari/battle_area.jpeg" class="img-fluid">
          <h3 class="text-white">Gameplay</h3>
          <p class="lead">
            The game is played over a series of turn-based rounds until one player wins, or a game ends in a draw. In
            the initial setup of the game, a number of random offerings are placed in the center of the board (brought
            there by the pilgrims). Players can use these offerings to either place and activate their kitsune card from
            their hand into play or to activate an already placed kitsune card. When players activate a kitsune card,
            they combine card numbers and symbols with one or more offering cards based on a number of combinatorial
            options. Besides playing with kitsune cards, players can cast spells. Some spells are resolved and
            immediately removed from play, while others have an ongoing effect.
          </p>
          <h3 class="text-white">Game rounds</h3>
          <p class="lead">
            On their round, a player can:<br>
            - Place one kitsune card from their hand into play OR activate an already placed kitsune card<br>
            - Play any number of spells<br>
            - Or, if the player didn’t activate/place a kitsune card, or play any spells. They can choose to skip their
            round, and remove one placed offering (which is then replaced with a new one)
          </p>
          <h3 class="text-white">Using Kitsune cards</h3>
          <p class="lead">
            Each player has up to 3 possible positions to place their kitsune cards. These places are called shrines.
            Initially, players have only 1 shrine, but they can purchase an “unlock shrine” add-on.
            To place or activate a kitsune card, a player must use a number of offering cards to match either the
            symbol, or the total number based on the number (or range) specified on the kitsune card.
            For every used offering card, players score a point. If that offering card contains a symbol also present on
            the kitsune card, a player scores an additional bonus point.
          </p>
          <h3 class="text-white">PLAY-AND-EARN (P&E)</h3>
          <p class="lead">
            Hikari will reward players. At this point in time, Hikari’s game logic has been defined. The full reward
            logic, and the link of gameplay performance to rewards, will be described closer to the release of the game
            so that players will understand how P&E is embedded into the gameplay. In addition to rewards through
            tournaments, future rewards in the ecosystem may be released possibly including but not limited to ETH,
            NFTs, unique rewards, and tokens.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HikariOverview",
};
</script>

<style>
.download-1-bg {
  background: url("../../assets/img/app-hero-bg.jpg") no-repeat center center /
        cover !important;
}
</style>