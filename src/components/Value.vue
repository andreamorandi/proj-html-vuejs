<script>
export default {
    name: "Value",
    props: {
        value: Object
    },
}
</script>

<template>
    <div class="value">
        <i :class="value.iconClasses"></i>
        <span>{{ value.title }}</span>
        <p>{{ value.description }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
.value {
    span {
        position: relative;
        display: block;
        text-transform: capitalize;
        margin: .75rem 0;
        &::after {
            content: '';
            width: 20px;
            height: 2px;
            position: absolute;
            top: 130%;
            left: 50%;
            transform: translateX(-50%);
            background-color: $dove-gray;
        }
    }
    p {
        margin-top: 1.5rem;
        color: $dove-gray;
    }
    i {
        width: 75px;
        height: 75px;
        line-height: 75px;
        font-size: 2.15rem;
        border-radius: 50%;
        color: white;
        &:hover {
            background-color: $bright-sun-light;
        }
    }
}
</style>