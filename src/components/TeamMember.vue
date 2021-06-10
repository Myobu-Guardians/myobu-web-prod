<template>
    <div class="single-team-member position-relative">
        <div class="team-image">
            <img
                :src="imageUrl"
                alt="Team Members"
                class="img-fluid"
                v-bind:class="isRounded ? 'rounded-circle' : ''"
            />
        </div>
        <div
            class="team-info text-white d-flex flex-column align-items-center justify-content-center"
            v-bind:class="isRounded ? 'rounded-circle' : ''"
        >
            <h5 class="mb-0">{{ name }}</h5>
            <h6>{{ post }}</h6>
            <ul class="list-inline team-social social-icon mt-4 text-white">
                <li class="list-inline-item">
                    <a href="#"><span class="ti-facebook"></span></a>
                </li>
                <li class="list-inline-item">
                    <a href="#"><span class="ti-twitter"></span></a>
                </li>
                <li class="list-inline-item">
                    <a href="#"><span class="ti-github"></span></a>
                </li>
                <li class="list-inline-item">
                    <a href="#"><span class="ti-dribbble"></span></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "TeamMember",
    props: {
        name: {
            type: String,
            required: true,
        },
        post: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        isRounded: {
            type: Boolean,
            default: true,
        },
    },
};
</script>

<style scoped>
</style>