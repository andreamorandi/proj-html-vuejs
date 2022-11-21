<script>
import SectionHeading from './SectionHeading.vue';

export default {
    name: "Works",
    components: {
        SectionHeading
    },
    data() {
        return {
            images: ["work-1.jpg", "work-2.jpg", "work-3.jpg"],
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
    <section class="works">
        <SectionHeading title="Explore Recent Work" />
        <div class="images">
            <div class="ms_container-md">
                <div class="container-fluid">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                        <div class="col" v-for="(image, index) in images" :key="index">
                            <img :src="getImagePath(image)" :alt="`Work ${index} image`">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-footer">
            <span>VIEW ALL PROJECTS</span>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
.works {
    padding-top: 3rem;
    padding-bottom: 5rem;
    .section-heading {
        padding-top: 1.5rem;
    }
    .images {
        padding-top: 2rem;
        padding-bottom: 4rem;
    }
}
</style>