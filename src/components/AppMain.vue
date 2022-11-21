<script>
import Jumbotron from "./Jumbotron.vue";
import CtaHelp from "./CtaHelp.vue";
import Presentation from "./Presentation.vue";
import Numbers from "./Numbers.vue";
import Works from "./Works.vue";
import Values from "./Values.vue";
import Testimonials from "./Testimonials.vue";
import News from "./News.vue";

export default {
    name: "AppMain",
    components: {
        Jumbotron,
        CtaHelp,
        Presentation,
        Numbers,
        Works,
        Values,
        Testimonials,
        News
    },
};
</script>

<template>
    <main>
        <Jumbotron />
        <CtaHelp />
        <Presentation />
        <Numbers />
        <Works />
        <Values />
        <Testimonials />
        <News />
    </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

main {
    margin-top: 100px;
    text-align: center;
}
</style>