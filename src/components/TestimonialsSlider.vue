<script>
import Testimonial from './Testimonial.vue';

export default {
    name: "TestimonialsSlider",
    props: {
        slides: Array
    },
    components: {
        Testimonial
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
    },
};
</script>

<template>
    <Testimonial :testimonial="slides[currentSlide]" />
    <div class="circles">
        <template v-for="(slide, index) in slides" :key="index">
            <i class="fa-solid fa-circle" v-if="index === currentSlide" @click="currentSlide = index"></i>
            <i class="fa-regular fa-circle" v-else @click="currentSlide = index"></i>
        </template>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

i {
    font-size: .7rem;
    margin: 0 .25rem;
    color: white;
}
</style>