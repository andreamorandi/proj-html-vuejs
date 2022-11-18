<script>
import Jumbotron from "./Jumbotron.vue";
import CtaHelp from "./CtaHelp.vue";
import Presentation from "./Presentation.vue";
import Numbers from "./Numbers.vue";
import Works from "./Works.vue";
import Values from "./Values.vue";

export default {
    name: "AppMain",
    components: {
        Jumbotron,
        CtaHelp,
        Presentation,
        Numbers,
        Works,
        Values
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