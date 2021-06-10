<template>
    <div
        class="single-blog-card card border-0 shadow-sm"
        v-bind:class="{
            'shadow-sm': isGray && !isPrimary,
            'white-bg': !isGray && isPrimary,
        }"
    >
        <span
            class="category position-absolute badge badge-pill"
            v-bind:class="{
                'badge-primary':
                    isCategoryPrimary &&
                    !isCategoryWarning &&
                    !isCategoryDanger,
                'badge-danger':
                    isCategoryDanger &&
                    !isCategoryWarning &&
                    !isCategoryPrimary,
                'badge-warning':
                    isCategoryWarning &&
                    !isCategoryPrimary &&
                    !isCategoryDanger,
            }"
            >{{ categories }}</span
        >
        <img
            :src="imageUrl"
            class="card-img-top position-relative "
            alt="blog"
        />
        <div class="meta-date card-body">
            <div class="post-meta mb-2">
                <ul class="list-inline meta-list">
                    <li class="list-inline-item">
                        <small>{{ month }} </small> 
                        <small>{{ day }}, </small> 
                        <small>{{ year }}</small> 
                    </li>
                    
                    <li class="list-inline-item">
                        <span>{{ comments }}</span> Comments
                    </li>
                   
                    <li class="list-inline-item">
                        <span>{{ shares }}</span> Share
                    </li>
                </ul>
            </div>

            <h3 class="h5 card-title">
                <a href="#">{{ title }}</a>
            </h3>
            <p class="card-text">
                {{ desc }}
            </p>
            <a href="#" class="detail-link">
                Read more
                <span class="ti-arrow-right"></span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "SmallBlogItem",
    props: {
        categories: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        day: {
            type: String,
            required: true,
        },
        month: {
            type: String,
            required: true,
        },
        year: {
            type: String,
            required: true,
        },
        comments: {
            type: Number,
            required: true,
        },
        shares: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        isGray: {
            type: Boolean,
            default: false,
        },
        isPrimary: {
            type: Boolean,
            default: false,
        },
        isCategoryPrimary: {
            type: Boolean,
            default: false,
        },
        isCategoryDanger: {
            type: Boolean,
            default: false,
        },
        isCategoryWarning: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped>
</style>