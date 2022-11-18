<script>
import Jumbotron from "./Jumbotron.vue";
import CtaHelp from "./CtaHelp.vue";

export default {
    name: "AppMain",
    components: {
        Jumbotron,
        CtaHelp,
    },
};
</script>

<template>
    <main>
        <Jumbotron />
        <CtaHelp />
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