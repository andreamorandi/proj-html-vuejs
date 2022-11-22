<script>
export default {
    name: "Feature",
    props: {
        feature: Object
    },
};
</script>

<template>
    <div class="feature">
        <i :class="feature.iconClasses"></i>
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.description }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
.feature {
    border-radius: 10px;
    padding: 1.5rem;
    background-color: $pampas;
    h2 {
        text-transform: capitalize;
        margin: .75rem 0;
    }
    p {
        color: $dove-gray;
    }
    i {
        width: 50px;
        height: 50px;
        line-height: 50px;
        font-size: 1rem;
        border: 1px solid $dove-gray;
        border-radius: 50%;
        color: $dove-gray;
    }
}
</style>