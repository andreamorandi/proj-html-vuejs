<script>
export default {
    name: "Testimonial",
    props: {
        testimonial: Object
    },
    methods: {
        getImagePath(imageName) {
            return new URL(`../assets/img/${imageName}`, import.meta.url).href;
        },
    },
};
</script>

<template>
    <div class="testimonial" @mouseover="upSlide = true" @mouseleave="upSlide = false">
        <img :src="getImagePath(testimonial.image)" :alt="`${testimonial.user} image`">
        <p>{{ `"${testimonial.phrase}"` }}</p>
        <h6>{{ `${testimonial.user} &middot; ${testimonial.state}` }}</h6>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
.testimonial{
    cursor: pointer;
    color: white;
    img {
        width: 150px;
        border-radius: 50%;
        margin-top: 2rem;
        margin-bottom: 1.5rem;
    }
    p {
        font-style: italic;
        margin-bottom: 2rem;
    }
    h6 {
        font-size: .85rem;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }
}
</style>