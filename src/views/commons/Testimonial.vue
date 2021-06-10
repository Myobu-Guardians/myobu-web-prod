<template>
    <section
        class="testimonial-section ptb-100"
        v-bind:class="isGray ? 'gray-light-bg' : ''"
    >
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-md-6">
                    <div class="section-heading mb-5">
                        <h2>
                            Testimonials <br />what clients say
                        </h2>
                        <p class="lead">
                            Rapidiously morph transparent internal or "organic"
                            sources whereas resource sucking e-business.
                            Conveniently innovate compelling internal.
                        </p>

                        <div
                            class="client-section-wrap d-flex flex-row align-items-center"
                        >
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <img
                                        src="img/client-1-color.png"
                                        alt="client"
                                        class="img-fluid"
                                        width="85"
                                    />
                                </li>
                                &nbsp;
                                <li class="list-inline-item">
                                    <img
                                        src="img/client-6-color.png"
                                        alt="client"
                                        class="img-fluid"
                                        width="85"
                                    />
                                </li>
                                &nbsp;
                                <li class="list-inline-item">
                                    <img
                                        src="img/client-3-color.png"
                                        alt="client"
                                        class="img-fluid"
                                        width="85"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 owl-custom-nav-parent">
                    <carousel
                        ref="oc"
                        :autoplay="true"
                        :dots="false"
                        class="owl-carousel owl-theme client-testimonial arrow-indicator owl-loaded owl-drag"
                        :loop="true"
                        :margin="30"
                        :nav="true"
                        :responsiveClass="true"
                        :autoplayHoverPause="true"
                        :lazyLoad="true"
                        :items="1"
                        :nav-text="navText"
                    >
                        <div class="item">
                            <div class="testimonial-quote-wrap">
                                <div class="media author-info mb-3">
                                    <div class="author-img mr-3">
                                        <img
                                            src="img/client-1.jpg"
                                            alt="client"
                                            class="img-fluid rounded-circle"
                                        />
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0">John Charles</h5>
                                        <span>Google</span>
                                    </div>
                                </div>
                                <div class="client-say">
                                    <p>
                                        <img
                                            src="img/quote.png"
                                            alt="quote"
                                            class="img-fluid"
                                        />
                                        Interactively optimize fully researched
                                        expertise vis-a-vis plug-and-play
                                        relationships. Intrinsicly develop viral
                                        core competencies for fully tested
                                        customer service. Enthusiastically
                                        create next-generation growth strategies
                                        and.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="testimonial-quote-wrap">
                                <div class="media author-info mb-3">
                                    <div class="author-img mr-3">
                                        <img
                                            src="img/client-2.jpg"
                                            alt="client"
                                            class="img-fluid rounded-circle"
                                        />
                                        &nbsp;
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0">Arabella Ora</h5>
                                        <span>Amazon</span>
                                    </div>
                                </div>
                                <div class="client-say">
                                    <p>
                                        <img
                                            src="img/quote.png"
                                            alt="quote"
                                            class="img-fluid"
                                        />
                                        Rapidiously develop user friendly growth
                                        strategies after extensive initiatives.
                                        Conveniently grow innovative benefits
                                        through fully tested deliverables.
                                        Rapidiously utilize focused platforms
                                        through end-to-end schemas.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="testimonial-quote-wrap">
                                <div class="media author-info mb-3">
                                    <div class="author-img mr-3">
                                        <img
                                            src="img/client-1.jpg"
                                            alt="client"
                                            class="img-fluid rounded-circle"
                                        />
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0">Jeremy Jere</h5>
                                        <span>Themetags</span>
                                    </div>
                                </div>
                                <div class="client-say">
                                    <p>
                                        <img
                                            src="img/quote.png"
                                            alt="quote"
                                            class="img-fluid"
                                        />
                                        Objectively synthesize client-centered
                                        e-tailers for maintainable channels.
                                        Holisticly administrate customer
                                        directed vortals whereas tactical
                                        functionalities. Energistically monetize
                                        reliable imperatives through
                                        client-centric best practices.
                                        Collaboratively.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="testimonial-quote-wrap">
                                <div class="media author-info mb-3">
                                    <div class="author-img mr-3">
                                        <img
                                            src="img/client-1.jpg"
                                            alt="client"
                                            class="img-fluid rounded-circle"
                                        />
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0">John Charles</h5>
                                        <span>Google</span>
                                    </div>
                                </div>
                                <div class="client-say">
                                    <p>
                                        <img
                                            src="img/quote.png"
                                            alt="quote"
                                            class="img-fluid"
                                        />
                                        Enthusiastically innovate B2C data
                                        without clicks-and-mortar convergence.
                                        Monotonectally deliver compelling
                                        testing procedures vis-a-vis B2B testing
                                        procedures. Competently evisculate
                                        integrated resources whereas global
                                        processes. Enthusiastically.
                                    </p>
                                </div>
                            </div>
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
    name: "Testimonial",
    components: { carousel },
    props: {
        isGray: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            navText: ["‹", "›"],
        };
    },
};
</script>

<style >
.owl-custom-nav-parent .owl-carousel .owl-nav .owl-next:hover {
    color: #ffffff !important;
}
.owl-custom-nav-parent .owl-carousel .owl-nav .owl-prev:hover {
    color: #ffffff !important;
}
</style>