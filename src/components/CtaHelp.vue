<script>
export default {
    name: "CtaHelp",
}
</script>

<template>
    <div class="cta">
        <div class="ms_container-md">
            <h2>Do You Have A Construction Project We Can Help With?</h2>
            <a href="/quote">GET A FREE QUOTE</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
.cta {
    position: relative;
    padding: 3rem 0;
    background-color: $bright-sun-light;
    a {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
        padding: .5rem 1.5rem;
        border: 2px solid transparent;
        outline: 2px solid white;
        color: white;
        background-color: $tuatara;
        &:hover {
            border: 2px solid $bright-sun-light;
            color: $bright-sun-light;
        }
    }
}
</style>