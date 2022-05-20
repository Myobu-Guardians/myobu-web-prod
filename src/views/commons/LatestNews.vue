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
              :image-url="blog.thumbnail"
              :shares="blog.shares"
              :date="blog.pubDate"
              :title="blog.title"
              :link="blog.link"
              :guid="blog.guid"
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
  components: {SmallBlogItem},
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
      blogs: []
    };
  },
  methods: {
    getPosts() {
      fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@myobu')
          .then((res) => res.json())
          .then((data) => {
            this.blogs = data.items
          })
    }
  },
  created() {
    this.getPosts()
  }
};
</script>


<style>
</style>