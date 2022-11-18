<script>
export default {
    name: "Presentation",
    data() {
        return {
            features: [
                {
                    title: "buildings",
                    description: "Obcaecati rem tenetur sapiente autem quisquam omnis molestiae, assumenda, vel perspiciatis unde modi sequi.",
                    iconClasses: ["fa-regular", "fa-building"]
                },
                {
                    title: "renovate",
                    description: "Obcaecati rem tenetur sapiente autem quisquam omnis molestiae, assumenda, vel perspiciatis unde modi sequi.",
                    iconClasses: ["fa-solid", "fa-arrows-rotate"]
                },
                {
                    title: "construct",
                    description: "Obcaecati rem tenetur sapiente autem quisquam omnis molestiae, assumenda, vel perspiciatis unde modi sequi.",
                    iconClasses: ["fa-solid", "fa-house-chimney"]
                },
                {
                    title: "exclusive",
                    description: "Obcaecati rem tenetur sapiente autem quisquam omnis molestiae, assumenda, vel perspiciatis unde modi sequi.",
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
                <hr>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem tenetur sapiente autem quisquam omnis molestiae, assumenda, vel perspiciatis unde modi sequi. Eligendi earum enim recusandae, reiciendis minus commodi illo!</p>
            </div>
            <div class="ms_container-lg">
                <div class="container-fluid">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                        <div class="col" v-for="(feature, index) in features" :key="index">
                            <div class="feature">
                                <i :class="feature.iconClasses"></i>
                                <h2>{{ feature.title }}</h2>
                                <p>{{ feature.description }}</p>
                            </div>
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
    .row {
        padding: 2rem 0;
        .feature {
            border-radius: 10px;
            padding: 1.5rem;
            background-color: $pampas;
            i {
                border: 1px solid $dove-gray;
                border-radius: 50%;
                padding: 1rem;
                color: $dove-gray;
            }
        }
    }
}
</style>