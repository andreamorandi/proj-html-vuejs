<script>
import SectionHeading from './SectionHeading.vue';
import Work from './Work.vue';

export default {
    name: "Works",
    components: {
        SectionHeading,
        Work
    },
    data() {
        return {
            works: [
                {
                    title: "Chicago Hospital",
                    image: "work-1.jpg",
                    type: "Services"
                },
                {
                    title: "Florida Health Facility",
                    image: "work-2.jpg",
                    type: "Commercial"
                },
                {
                    title: "Mexico Residential Complex",
                    image: "work-3.jpg",
                    type: "Residential"
                },
            ],
        };
    },
}
</script>

<template>
    <section class="works">
        <SectionHeading title="Explore Recent Work" />
        <div class="images">
            <div class="ms_container-md">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                    <div class="col" v-for="(work, index) in works" :key="index">
                        <Work :work="work" />
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