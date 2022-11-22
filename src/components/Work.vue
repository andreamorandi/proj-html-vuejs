<script>
export default {
    name: "Work",
    props: {
        work: Object
    },
    data() {
        return {
            workHover: false
        };
    },
    methods: {
        getImagePath(imageName) {
            return new URL(`../assets/img/${imageName}`, import.meta.url).href;
        },
    },
}
</script>

<template>
    <div class="work">
        <img :src="getImagePath(work.image)" :alt="`${work.title} image`" v-show="!workHover" @mouseenter="workHover = true" @mouseleave="workHover = false">
        <div class="work-back" v-show="workHover" @mouseleave="workHover = false">
            <div class="work-info">
                <i class="fa-solid fa-link"></i>
                <i class="fa-solid fa-magnifying-glass"></i>
                <h5>{{ work.title }}</h5>
                <span>{{ work.type }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

.work {
    @include flex-center();
    img {
        width: calc(60vw / 3 - 1.5rem);
        height: calc(60vw / 3 - 1.5rem);
    }
    .work-back {
        @include flex-center(vertical);
        width: calc(60vw / 3 - 1.5rem);
        height: calc(60vw / 3 - 1.5rem);
        color: white;
        background-color: $bright-sun-light;
        i {
            font-size: 1.25rem;
            width: 40px;
            height: 40px;
            line-height: 40px;
            margin: .5rem;
            border-radius: 50%;
            color: $bright-sun-light;
            background-color: white;
        }
    }
    .work-info {
        width: 100%;
    }
    @media screen and (max-width: 992px) {
        img,
        .work-back {
            width: calc(80vw / 3 - 1.5rem);
            height: calc(80vw / 3 - 1.5rem);
        }
    }
    @media screen and (max-width: 768px) {
        img,
        .work-back {
            width: calc(90vw / 2 - 1.5rem);
            height: calc(90vw / 2 - 1.5rem);
        }
    }
    @media screen and (max-width: 576px) {
        img,
        .work-back {
            width: calc(100vw / 1 - 1.5rem);
            height: calc(100vw / 1 - 1.5rem);
        }
    }
}
</style>