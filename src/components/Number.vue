<script>
export default {
    name: "Number",
    props: {
        number: Object
    },
}
</script>

<template>
    <div class="number">
        <i :class="number.iconClasses"></i>
        <h2>{{ number.number }}</h2>
        <h6>{{ number.description }}</h6>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
.number {
    h2 {
        font-size: 2rem;
        font-weight: 400;
        margin: .75rem 0;
        color: $bright-sun-light;
    }
    h6 {
        font-size: .8rem;
        text-transform: uppercase;
        color: white;
    }
    i {
        font-size: 3rem;
        color: $bright-sun-light;
    }
}
</style>