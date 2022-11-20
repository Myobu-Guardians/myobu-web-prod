<template>
  <div class="overflow-hidden" id="buy">
    <section id="team" class="pt-150 secondary-bg">
      <div class="container">
        <h2 class="text-white text-center">Team</h2>
        <div class="hero-animation-img">
          <img
            class="img-fluid d-block m-auto animation-one"
            src="img/redesign/cloud.png"
            width="210"
            alt="animation image"
          />
          <img
            class="img-fluid d-none d-lg-block animation-three"
            src="img/redesign/cloud.png"
            alt="animation image"
            width="150"
          />
          <img
            class="img-fluid d-none d-lg-block animation-four"
            src="img/redesign/cloud.png"
            alt="animation image"
            width="200"
          />
        </div>
        <div class="row align-items-center justify-content-between pb-5">
          <div class="col-md-6 col-lg-4">
            <div class="team-member">
              <img class="profile-avatar" src="img/team/team-ryan.png" />
              <div class="profile">
                <h5 class="profile-name text-white mb-0">Ryan</h5>
                <div class="profile-contact mb-2">
                  @prodigalmyogirl
                  <a
                    href="https://t.me/MyobuOfficial"
                    target="_blank"
                    title="Telegram"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'telegram-plane']"
                      size="lg"
                      :style="{ color: 'white' }"
                    />
                  </a>
                </div>
                <div class="profile-role">Team Lead</div>
                <div class="profile-bio">
                  Published scientist, professor, serial entrepreneur, and
                  finance expert, ProdigalMyoGirl works alongside the team to
                  set the vision for Myobu’s future. 14 years of analytical
                  experience. Token owner. Dox:
                  <a
                    href="https://www.linkedin.com/in/ryan-renslow"
                    target="_blank"
                    >Ryan Renslow</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="team-member">
              <img class="profile-avatar" src="img/team/team-artists.png" />
              <div class="profile">
                <h5 class="profile-name text-white mb-0">Kirito</h5>
                <div class="profile-contact mb-2">
                  @kirito_myo
                  <a
                    href="https://t.me/kirito_myo"
                    target="_blank"
                    title="Telegram"
                    class="mr-2"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'telegram-plane']"
                      size="lg"
                      :style="{ color: 'white' }"
                    />
                  </a>
                    <a
                    href="https://github.com/kirito-m"
                    target="_blank"
                    title="GitHub"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'github']"
                      size="lg"
                      :style="{ color: 'white' }"
                    />
                  </a>
                </div>
                <div class="profile-role">CTO</div>
                <div class="profile-bio">
                  Professional web2&3 developer and blockchain enthusiast.
                  Kirito is leading the development of Myobu’s core technology.
                  His goal is to make Myobu Great Again.
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="team-member">
              <img class="profile-avatar" src="img/team/team-jumboox.png" />
              <div class="profile">
                <h5 class="profile-name text-white mb-0">Jumboox</h5>
                <div class="profile-contact mb-2">
                  @jumboox
                  <a
                    href="https://t.me/MyobuOfficial"
                    target="_blank"
                    title="Telegram"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'telegram-plane']"
                      size="lg"
                      :style="{ color: 'white' }"
                    />
                  </a>
                </div>
                <div class="profile-role">Lead Lore</div>
                <div class="profile-bio">
                  Background in creative writing and artistic development,
                  Jumboox is head of Gamefi lore and storylines for Myobu.
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="team-member">
              <img class="profile-avatar" src="img/team/team-jad.png" />
              <div class="profile">
                <h5 class="profile-name text-white mb-0">JAD</h5>
                <div class="profile-contact mb-2">
                  @im_just_a_dude
                  <a
                    href="https://t.me/MyobuOfficial"
                    target="_blank"
                    title="Telegram"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'telegram-plane']"
                      size="lg"
                      :style="{ color: 'white' }"
                    />
                  </a>
                </div>
                <div class="profile-role">Creative</div>
                <div class="profile-bio">
                  JAD has a background in media and graphic design. Designer and
                  creator of game icon, symbols, marketing videos and graphic
                  design work for Myobu social media and other mediums.
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="team-member">
              <img class="profile-avatar" src="img/team/team-foxy.png" />
              <div class="profile">
                <h5 class="profile-name text-white mb-0">Victor</h5>
                <div class="profile-contact mb-2">
                  @vctrcrypto
                  <a
                    href="https://t.me/MyobuOfficial"
                    target="_blank"
                    title="Telegram"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'telegram-plane']"
                      size="lg"
                      :style="{ color: 'white' }"
                    />
                  </a>
                </div>
                <div class="profile-role">PR</div>
                <div class="profile-bio">
                  Background in public relations development, Victor focuses on
                  social media concepts, engagement, and overall community
                  oversight.
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="team-member">
              <img class="profile-avatar" src="img/team/team-community.png" />
              <div class="profile">
                <h5 class="profile-name text-white">Community Mods</h5>
                <div class="profile-bio">
                  Myobu’s community is cared for by dedicated community mods
                  spanning channels such as telegram, discord, and Twitter. Many
                  are coin holders and all want to engage the community and help
                  answer any questions. Except for “wen?”
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
  name: "Team",
  mounted() {},
};
</script>

<style>
.team-member {
  text-align: center;
}
.team-member .profile-avatar {
  width: 180px;
}
.team-member .profile {
  background-color: #2b1d3e;
  color: #fff;
  box-shadow: 0 3px 20px 0px rgb(0 0 0 / 12%);
  border-radius: 1.5rem !important;
  padding: 32px 20px;
  height: 320px;
}

@media screen and (max-width: 768px) {
  .team-member .profile {
    height: auto;
  }
}

.team-member .profile-role {
  font-weight: 600;
}
</style>