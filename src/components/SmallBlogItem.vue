<template>
  <div
      class="single-blog-card card border-0 shadow-sm"
      v-bind:class="{
            'shadow-sm': isGray && !isPrimary,
            'white-bg': !isGray && isPrimary,
        }"
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
            <small>{{ date }} </small>
          </li>
        </ul>
      </div>

      <h3 class="h5 card-title">
        <a :href="fixUrl">{{ title }}</a>
      </h3>
      <a href="#" class="detail-link">
        Read more
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmallBlogItem",
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
      render(){
        console.log(this)
      }
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    fixUrl: function(){
      return 'kita';
    }
  },
};
</script>

<style scoped>
</style>