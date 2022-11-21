<script>
import Feature from './Feature.vue';

export default {
    name: "Presentation",
    components: {
        Feature
    },
    data() {
        return {
            features: [
                {
                    title: "buildings",
                    description: "Obcaecati rem tenetur sapiente autem quisquam omnis molestiae, assumenda.",
                    iconClasses: ["fa-regular", "fa-building"]
                },
                {
                    title: "renovate",
                    description: "Obcaecati rem tenetur sapiente autem quisquam omnis molestiae, assumenda.",
                    iconClasses: ["fa-solid", "fa-arrows-rotate"]
                },
                {
                    title: "construct",
                    description: "Obcaecati rem tenetur sapiente autem quisquam omnis molestiae, assumenda.",
                    iconClasses: ["fa-solid", "fa-house-chimney"]
                },
                {
                    title: "exclusive",
                    description: "Obcaecati rem tenetur sapiente autem quisquam omnis molestiae, assumenda.",
                    iconClasses: ["fa-solid", "fa-truck"]
                },
            ],
        }
    }
}
</script>

<template>
    <section class="presentation">
        <div class="section-heading">
            <div class="ms_container-sm">
                <h2>Specialists In Modern Construction</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem tenetur sapiente autem quisquam omnis molestiae, assumenda, vel perspiciatis unde modi sequi. Eligendi earum enim recusandae, reiciendis minus commodi illo!</p>
            </div>
        </div>
        <div class="features">
            <div class="ms_container-lg">
                <div class="container-fluid">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                        <div class="col" v-for="(feature, index) in features" :key="index">
                            <Feature :feature="feature" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
.presentation {
    padding: 3rem 0;
    .section-heading {
        padding-top: 2.5rem;
        padding-bottom: 1.5rem;
    }
    .features {
        padding: 2rem 0;
    }
}
</style>