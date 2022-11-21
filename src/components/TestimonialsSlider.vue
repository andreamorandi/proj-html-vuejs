<script>
export default {
    name: "TestimonialsSlider",
    props: {
        slides: Array
    },
    data() {
        return {
            currentSlide: 0,
            upSlide: false,
        };
    },
    created: function() {
        setInterval(() => {
            if (!this.upSlide) {
                this.showNext();
            }
        }, 5000)
    },
    methods: {
        showNext() {
            if (this.currentSlide < this.slides.length - 1) {
                this.currentSlide++;
            } else {
                this.currentSlide = 0;
            }
        },
        getImagePath(imageName) {
            return new URL(`../assets/img/${imageName}`, import.meta.url).href;
        },
    }
}
</script>

<template>
    <div class="testimonial" @mouseover="upSlide = true" @mouseleave="upSlide = false">
        <img :src="getImagePath(slides[currentSlide].image)" :alt="`${slides[currentSlide].user} image`">
        <p>{{ `"${slides[currentSlide].phrase}"` }}</p>
        <h6>{{ `${slides[currentSlide].user} &middot; ${slides[currentSlide].state}` }}</h6>
        <div class="circles">
            <template v-for="(slide, index) in slides" :key="index">
                <i class="fa-solid fa-circle" v-if="index === currentSlide" @click="currentSlide = index"></i>
                <i class="fa-regular fa-circle" v-else @click="currentSlide = index"></i>
            </template>
        </div>
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
    i {
        font-size: .7rem;
        margin: 0 .25rem;
    }
}
</style>