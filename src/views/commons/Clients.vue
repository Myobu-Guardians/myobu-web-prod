<template>
   
    <section
        class="client-section ptb-100"
        v-bind:class="isGray ? 'gray-light-bg' : ''"
    >
        <div class="container">
            
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="section-heading text-center mb-5">
                        <h2>Trusted by companies</h2>
                        <p class="lead">
                            Rapidiously morph transparent internal or "organic"
                            sources whereas resource sucking e-business.
                            Conveniently innovate compelling internal.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-md-12">
                    <carousel
                        :items="1"
                        :nav="false"
                        :autoplay="true"
                        :dots="true"
                        :loop="true"
                        :margin="15"
                        slideTransition="linear"
                        :autoplayTimeout="4000"
                        :autoplaySpeed="false"
                        :smartSpeed="6000"
                        :responsive="{
                            0: { items: 2 },
                            500: { items: 3 },
                            600: { items: 4 },
                            800: { items: 5 },
                            1200: { items: 6 },
                        }"
                        class="owl-theme clients-carousel dot-indicator owl-loaded owl-drag"
                    >
                        <div class="item single-client">
                            <img
                                src="img/client-5-color.png"
                                alt="client logo"
                                class="client-img"
                            />
                        </div>
                        <div class="item single-client">
                            <img
                                src="img/client-1-color.png"
                                alt="client logo"
                                class="client-img"
                            />
                        </div>
                        <div class="item single-client">
                            <img
                                src="img/client-6-color.png"
                                alt="client logo"
                                class="client-img"
                            />
                        </div>
                        <div class="item single-client">
                            <img
                                src="img/client-3-color.png"
                                alt="client logo"
                                class="client-img"
                            />
                        </div>
                        <div class="item single-client">
                            <img
                                src="img/client-4-color.png"
                                alt="client logo"
                                class="client-img"
                            />
                        </div>
                        <div class="item single-client">
                            <img
                                src="img/client-5-color.png"
                                alt="client logo"
                                class="client-img"
                            />
                        </div>
                        <div class="item single-client">
                            <img
                                src="img/client-7-color.png"
                                alt="client logo"
                                class="client-img"
                            />
                        </div>
                        <div class="item single-client">
                            <img
                                src="img/client-2-color.png"
                                alt="client logo"
                                class="client-img"
                            />
                        </div>
                        <div class="item single-client">
                            <img
                                src="img/client-1-color.png"
                                alt="client logo"
                                class="client-img"
                            />
                        </div>
                        <div class="item single-client">
                            <img
                                src="img/client-3-color.png"
                                alt="client logo"
                                class="client-img"
                            />
                        </div>
                    </carousel>
                </div>
            </div>
           
        </div>
    </section>
    

    
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
    name: "Customer",
    components: { carousel },
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
};
</script>



<style>
</style>