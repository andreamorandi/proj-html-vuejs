<script>
import Number from './Number.vue';

export default {
    name: "Numbers",
    components: {
        Number
    },
    data() {
        return {
            numbers: [
                {
                    number: 3534,
                    description: "planning applications",
                    iconClasses: ["fa-solid", "fa-suitcase"]
                },
                {
                    number: 896,
                    description: "completed projects",
                    iconClasses: ["fa-regular", "fa-building"]
                },
                {
                    number: 172,
                    description: "trained professionals",
                    iconClasses: ["fa-solid", "fa-users"]
                },
                {
                    number: 19,
                    description: "international offices",
                    iconClasses: ["fa-solid", "fa-globe"]
                },
            ],
        }
    }
}
</script>

<template>
    <div class="numbers">
        <div class="wave-top"></div>
        <div class="ms_container-md">
            <div class="container-fluid">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    <div class="col" v-for="(number, index) in numbers" :key="index">
                        <Number :number="number" />
                    </div>
                </div>
            </div>
        </div>
        <div class="wave-bottom"></div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
.numbers {
    position: relative;
    padding: 9rem 0;
    background: url("../assets/img/banner-1.jpg") no-repeat center center;
    background-size: cover;
}
</style>