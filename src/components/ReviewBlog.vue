<template>
    <div
        class="testimonial-quote-wrap my-lg-3 my-md-3 rounded white-bg shadow-sm p-5"
    >
        <!-- <div
                    class="review-top d-flex align-items-center justify-content-between mb-2"
                >
                    <span
                        ><i
                            class="fas fa-quote-left icon-size-sm color-secondary"
                        ></i
                    ></span>
                </div> -->
        <div class="client-say">
            <p>
                <img
                    src="img/quote.png"
                    alt="quote"
                    class="img-fluid"
                />&nbsp;{{ review }}
            </p>
        </div>
        <div class="media author-info mb-3">
            <div class="author-img mr-3">
                <img
                    :src="imageUrl"
                     alt="author"
                     class="img-fluid rounded-circle"
                />
            </div>
            <div class="media-body">
                <h5 class="mb-0">{{ name }}</h5>
                <span>{{ org }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ReviewBlog",
    props: {
        review: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        org: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
    },
};
</script>