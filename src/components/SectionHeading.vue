<script>
export default {
    name: "SectionHeading",
    props: {
        title: String
    }
}
</script>

<template>
    <div class="section-heading">
        <div class="ms_container-sm">
            <h2>{{ title }}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem tenetur sapiente autem quisquam omnis molestiae, assumenda, vel perspiciatis unde modi sequi. Eligendi earum enim recusandae, reiciendis minus commodi illo!</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
.section-heading {
    h2 {
        position: relative;
        margin: 1rem 0;
        &::after {
            content: '';
            width: 150px;
            height: 2px;
            position: absolute;
            bottom: -1.25rem;
            left: 50%;
            transform: translateX(-50%);
            background-color: $bright-sun-dark;
        }
    }
    p {
        margin-top: 3rem;
        color: $dove-gray;
    }
}

</style>