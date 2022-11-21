<script>
import SectionHeading from './SectionHeading.vue';
import Value from './Value.vue';

export default {
    name: "Values",
    components: {
        SectionHeading,
        Value
    },
    data() {
        return {
            values: [
                {
                    title: "great services",
                    description: "Obcaecati rem tenetur sapiente autem quisquam omnis molestiae, assumenda.",
                    iconClasses: ["fa-solid", "fa-house-chimney", "bg-bali-hai"]
                },
                {
                    title: "highest standards",
                    description: "Obcaecati rem tenetur sapiente autem quisquam omnis molestiae, assumenda.",
                    iconClasses: ["fa-solid", "fa-gear", "bg-ship-cove"]
                },
                {
                    title: "professional team",
                    description: "Obcaecati rem tenetur sapiente autem quisquam omnis molestiae, assumenda.",
                    iconClasses: ["fa-solid", "fa-users", "bg-orange"]
                },
                {
                    title: "creative solutions",
                    description: "Obcaecati rem tenetur sapiente autem quisquam omnis molestiae, assumenda.",
                    iconClasses: ["fa-regular", "fa-lightbulb", "bg-olive"]
                },
            ],
        }
    }
}
</script>

<template>
    <section class="values-section">
        <SectionHeading title="Our Core Values" />
        <div class="values">
            <div class="ms_container-md">
                <div class="container-fluid">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                        <div class="col" v-for="(value, index) in values" :key="index">
                            <Value :value="value" />
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
.values-section {
    padding-top: 2rem;
    padding-bottom: 4rem;
    background-color: $pampas;
    .section-heading {
        padding-top: 2.5rem;
        padding-bottom: 1.5rem;
    }
    .values {
        padding-top: 1rem;
    }
}
</style>