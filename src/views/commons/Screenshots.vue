<template>
    <section
        id="screenshots"
        class="screenshots-section ptb-100"
        v-bind:class="isGray ? 'gray-light-bg' : 'primary-bg'"
    >
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="section-heading text-center">
                        <h2 v-bind:class="isGray ? '' : 'text-white'">
                            App screenshots <br />
                            Looks awesome
                        </h2>
                        <p class="lead">
                            Credibly synthesize multimedia based networks
                            vis-a-vis top-line growth strategies. Continually
                            leverage existing worldwide interfaces
                        </p>
                    </div>
                </div>
            </div>

            <div class="screen-slider-content mt-5">
                <div class="screenshot-frame"></div>
                <carousel
                    :autoplay="true"
                    :dots="true"
                    :loop="true"
                    :responsive="{
                        0: { items: 1 },
                        768: { items: 3 },
                        991: { items: 4 },
                        1200: { items: 4 },
                        1920: { items: 4 },
                    }"
                    :margin="0"
                    :center="true"
                    :nav="false"
                    class="screen-carousel owl-carousel owl-theme dot-indicator owl-loaded owl-drag"
                >
                    <img src="img/01.png" class="img-fluid" alt="screenshots" />
                    <img src="img/03.png" class="img-fluid" alt="screenshots" />
                    <img src="img/02.png" class="img-fluid" alt="screenshots" />
                    <img src="img/04.png" class="img-fluid" alt="screenshots" />
                    <img src="img/05.png" class="img-fluid" alt="screenshots" />
                    <img src="img/06.png" class="img-fluid" alt="screenshots" />
                </carousel>
            </div>
        </div>
    </section>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
    name: "Screenshots",
    props: {
        isGray: {
            type: Boolean,
            default: false,
        },
        paddingTop: {
            type: Boolean,
            default: true,
        },
        paddingBottom: {
            type: Boolean,
            default: true,
        },
    },
    components: { carousel },
};
</script>

<style>
</style>
