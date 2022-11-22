<script>
import SectionHeading from './SectionHeading.vue';

export default {
    name: "Partners",
    components: {
        SectionHeading
    },
    data() {
        return {
            images: ["partner-1.png", "partner-2.png", "partner-3.png", "partner-4.png", "partner-5.png"],
        };
    },
    methods: {
        getImagePath(imageName) {
            return new URL(`../assets/img/${imageName}`, import.meta.url).href;
        },
    },
};
</script>

<template>
    <section class="partners">
        <SectionHeading title="Trusted Partners" />
        <div class="images">
            <div class="ms_container-md">
                <div class="container-fluid">
                    <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-5 g-4">
                        <div class="col" v-for="(image, index) in images" :key="index">
                            <img :src="getImagePath(image)" :alt="`Partner ${index} image`">
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
.partners {
    padding-top: 3rem;
    padding-bottom: 3rem;
    .section-heading {
        padding-top: 1.5rem;
    }
    .images {
        padding-top: 2rem;
        padding-bottom: 4rem;
    }
}
</style>