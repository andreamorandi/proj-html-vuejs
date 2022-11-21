<script>
import TestimonialsSlider from "./TestimonialsSlider.vue";
export default {
    name: "Testimonials",
    components: {
        TestimonialsSlider
    },
    data() {
        return {
            testimonials: [
                {
                    user: "harry smith",
                    state: "new home owner",
                    phrase: "No man but feels more of a man in the world if he have but a bit of ground that he can call his own. However small it is on the surface, it is four thousand miles deep; and that is a very handsome property.",
                    image: "testimonial-1.jpg"
                },
                {
                    user: "russel sage",
                    state: "real estate investor",
                    phrase: "Real estate is an imperishable asset, ever increasing in value. It is the most solid security that human ingenuity has devised. It is the basis of all security and about the only indestructible security.",
                    image: "testimonial-2.jpg"
                },
            ],
        }
    }
}
</script>

<template>
    <section class="testimonials">
        <div class="wave-top"></div>
        <div class="ms_container-sm">
            <div class="section-heading">
                <h2>Our Home Owners Say</h2>
            </div>
            <TestimonialsSlider :slides="testimonials" />
        </div>
        <div class="wave-bottom"></div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
.testimonials {
    position: relative;
    padding: 6rem 0;
    background: url("../assets/img/banner-2.jpg") no-repeat center center;
    background-size: cover;
    .section-heading {
        color: white;
    }
    .wave-top::after, 
    .wave-bottom::after {
        background-color: $pampas;
    }
}
</style>