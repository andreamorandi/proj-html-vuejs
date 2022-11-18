<script>
export default {
    name: "Values",
    data() {
        return {
            values: [
                {
                    title: "great services",
                    description: "Obcaecati rem tenetur sapiente autem quisquam omnis molestiae, assumenda.",
                    iconClasses: ["fa-solid", "fa-house-chimney", "bg-bali-hai"]
                },
                {
                    title: "highest standards",
                    description: "Obcaecati rem tenetur sapiente autem quisquam omnis molestiae, assumenda.",
                    iconClasses: ["fa-solid", "fa-gear", "bg-ship-cove"]
                },
                {
                    title: "professional team",
                    description: "Obcaecati rem tenetur sapiente autem quisquam omnis molestiae, assumenda.",
                    iconClasses: ["fa-solid", "fa-users", "bg-orange"]
                },
                {
                    title: "creative solutions",
                    description: "Obcaecati rem tenetur sapiente autem quisquam omnis molestiae, assumenda.",
                    iconClasses: ["fa-regular", "fa-lightbulb", "bg-olive"]
                },
            ],
        }
    }
}
</script>

<template>
    <section class="values-section">
        <div class="section-heading">
            <div class="ms_container-sm">
                <h2>Specialists In Modern Construction</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem tenetur sapiente autem quisquam omnis molestiae, assumenda, vel perspiciatis unde modi sequi. Eligendi earum enim recusandae, reiciendis minus commodi illo!</p>
            </div>
        </div>
        <div class="values">
            <div class="ms_container-md">
                <div class="container-fluid">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                        <div class="col" v-for="(value, index) in values" :key="index">
                            <div class="value">
                                <i :class="value.iconClasses"></i>
                                <span>{{ value.title }}</span>
                                <p>{{ value.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
.values-section {
    padding-top: 2rem;
    padding-bottom: 4rem;
    background-color: $pampas;
    .section-heading {
        padding-top: 2.5rem;
        padding-bottom: 1.5rem;
    }
    .values {
        padding-top: 1rem;
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
        }
    }
}
</style>