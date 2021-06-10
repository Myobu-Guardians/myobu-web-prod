<template>
    <section
        id="team"
        class="team-member-section ptb-100"
        v-bind:class="isGray ? 'gray-light-bg' : ''"
    >
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7 col-md-8">
                    <div class="section-heading text-center mb-5">
                        <h2>Our team members</h2>
                        <p class="lead">
                            Following reasons show advantages of adding AppCo to
                            your lead pages, demos and checkouts
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div
                    v-for="member in members"
                    v-bind:key="member.imageUrl"
                    class="col-sm-6 col-lg-3"
                >
                    <team-member
                        :name="member.name"
                        :post="member.post"
                        :desc="member.desc"
                        :image-url="member.imageUrl"
                        :is-rounded="isRounded"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TeamMember from "../../components/TeamMember";
export default {
    name: "Team",
    props: {
        isGray: {
            type: Boolean,
            default: false,
        },
        isRounded: {
            type: Boolean,
            default: true,
        },
    },
    components: {
        TeamMember,
    },
    data() {
        return {
            members: [
                {
                    name: "Edna Mason",
                    post: "Senior Designer",
                    desc:
                        "Authoritatively engage leading-edge processes tactical capital",
                    imageUrl: "img/team-4.jpg",
                },
                {
                    name: "Edna Mason",
                    post: "Senior Designer",
                    desc:
                        "Authoritatively engage leading-edge processes tactical capital",
                    imageUrl: "img/team-1.jpg",
                },
                {
                    name: "Edna Mason",
                    post: "Senior Designer",
                    desc:
                        "Authoritatively engage leading-edge processes tactical capital",
                    imageUrl: "img/team-2.jpg",
                },
                {
                    name: "Edna Mason",
                    post: "Senior Designer",
                    desc:
                        "Authoritatively engage leading-edge processes tactical capital",
                    imageUrl: "img/team-3.jpg",
                },
            ],
        };
    },
};
</script>

<style>
</style>