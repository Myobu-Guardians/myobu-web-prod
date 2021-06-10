<template>
    <div class="card" v-bind:class="{ 'accordion-active': content.active }">
        <div
            class="card-header py-4"
            style="color: gray; outline: none"
            v-bind:class="{ collapsed: !content.active }"
            v-on:click="update($event)"
            :aria-expanded="content.active"
        >
            <h6 class="mb-0 ">
                <span class="mr-3" v-bind:class="content.icon"></span>
                {{ content.title }}
            </h6>
        </div>
        <div ref="accordion-body" v-bind:class="{ show: content.active }" style>
            <div class="card-body white-bg">
                <p>{{ content.description }}</p>
            </div>
        </div>
    </div>
</template>


<script>
import { TweenLite } from "gsap";
import Vue from "vue";

export default {
    name: "AccordianItem",
    props: {
        content: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    },
    methods: {
        expand(el) {
            Vue.set(this.content, "active", true);
            Vue.nextTick(() => {
                TweenLite.to(el, 0.3, {
                    height: el.scrollHeight,
                });
            });
            this.$emit("on-expanded", this.index);
        },
        collapse(el) {
            Vue.set(this.content, "active", false);
            Vue.nextTick(() => {
                TweenLite.to(el, 0.3, {
                    height: 0,
                });
            });
        },
        update: function (e) {
            e.preventDefault();

            let el = this.$refs["accordion-body"];

            if (this.content.active === false) {
                this.expand(el);
            } else {
                this.collapse(el);
            }
        },
        closeIfOpen: function () {
            if (this.content.active) {
                this.collapse(this.$refs["accordion-body"]);
            }
        },
    },
    mounted() {
        let el = this.$refs["accordion-body"];
        if (this.content.active) this.expand(el);
        else this.collapse(el);
    },
};
</script>

<style lang="scss">
.accordion,
.accordion-item,
.accordion-header,
.accordion-body {
    font-family: inherit;
}

.accordion-item.accordion-active .accordion-caret {
    animation: accordion-is-active 200ms linear forwards;
}

.accordion-header {
    color: inherit;
    font-size: 1.2rem;
    font-weight: bold;
    position: relative;
}
.accordion-header a {
    color: inherit;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    border-radius: 0.6rem;
    transition: background-color 200ms ease-in-out;
}
.accordion-header a:not(.accordion-active):hover {
    background-color: #efefef;
}

.accordion-header-div {
    padding: 1rem 1rem 1rem 1rem;
}
.accordion-header-div:last-child {
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.accordion-caret {
    background-image: linear-gradient(
        to top right,
        transparent 50%,
        #727272 50%
    );
    width: 0.5rem;
    height: 0.5rem;
    transform: rotate(-45deg);
    animation: accordion-is-inactive 200ms linear forwards;
}

.accordion-body {
    height: 0;
    overflow: hidden;
}

.accordion-content {
    padding: 1rem;
}

@keyframes accordion-is-inactive {
    0% {
        transform: rotate(-45deg);
    }
    50% {
        transform: scale(1.5) rotate(45deg);
    }
    100% {
        transform: rotate(135deg);
    }
}
@keyframes accordion-is-active {
    0% {
        transform: rotate(135deg);
    }
    50% {
        transform: scale(1.5) rotate(45deg);
    }
    100% {
        transform: rotate(-45deg);
    }
}
@media screen and (min-width: 320px) {
    .accordion {
        max-height: none;
        border-radius: 0.5rem;
    }
}
</style>