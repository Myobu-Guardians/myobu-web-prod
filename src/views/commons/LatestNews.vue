<template>
    <section
        id="blog"
        class="our-blog-section ptb-100"
        v-bind:class="{
            'gray-light-bg': isGray && !isPrimary,
            'primary-bg': !isGray && isPrimary,
        }"
    >
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="section-heading mb-5">
                        <h2
                            v-bind:class="{
                                'text-white': !isGray && isPrimary,
                            }"
                        >
                            Our Latest News
                        </h2>
                        <p>
                            Enthusiastically drive revolutionary opportunities
                            before emerging leadership. Distinctively transform
                            tactical methods of empowerment via resource sucking
                            core.
                        </p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div v-for="(blog, i) in blogs" class="col-md-4" v-bind:key="i">
                    <small-blog-item
                        :categories="blog.categories"
                        :image-url="blog.imageUrl"
                        :comments="blog.comments"
                        :shares="blog.shares"
                        :month="blog.month"
                        :day="blog.day"
                        :year="blog.year"
                        :title="blog.title"
                        :desc="blog.desc"
                        :is-category-primary="blog.isPrimary"
                        :is-category-danger="blog.isDanger"
                        :is-category-warning="blog.isWarning"
                        :is-primary="isPrimary"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SmallBlogItem from "../../components/SmallBlogItem";
export default {
    name: "LatestNews",
    components: { SmallBlogItem },
    props: {
        isGray: {
            type: Boolean,
            default: false,
        },
        isPrimary: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            blogs: [
                {
                    imageUrl: "img/blog/1.jpg",
                    categories: "Lifestyle",
                    day: "21",
                    month: "Jan",
                    year: "2019",
                    comments: 45,
                    shares: 10,
                    title: "Appropriately productize fully",
                    desc:
                        "Some quick example text to build on the card title and make up the bulk.",
                    isPrimary: true,
                    isDanger: false,
                    isWarning: false,
                },
                {
                    imageUrl: "img/blog/2.jpg",
                    categories: "Technology",
                    day: "26",
                    month: "May",
                    year: "2019",
                    comments: 30,
                    shares: 5,
                    title: "Quickly formulate backend",
                    desc:
                        "Synergistically engage effective ROI after customer directed partnerships.",
                    isPrimary: false,
                    isDanger: true,
                    isWarning: false,
                },
                {
                    imageUrl: "img/blog/3.jpg",
                    categories: "Science",
                    month: "Apr",
                    day: "25",

                    year: "2019",
                    comments: 41,
                    shares: 30,
                    title: "Objectively extend extensive",
                    desc:
                        "Holisticly mesh open-source leadership rather than proactive users.",
                    isPrimary: true,
                    isDanger: false,
                    isWarning: false,
                },
            ],
        };
    },
};
</script>


<style>
</style>