<script>
export default {
    name: "Cta",
};
</script>

<template>
    <div class="cta">
        <div class="ms_container-md">
            <div class="container-fluid">
                <div class="row">
                    <div class="cta-text col col-12 col-md-8">
                        <h2>Building Inspiring Spaces</h2>
                        <div class="title-underline"></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem tenetur sapiente autem quisquam omnis molestiae, assumenda, vel perspiciatis unde modi sequi. Eligendi earum enim recusandae, reiciendis minus commodi illo!</p>
                    </div>
                    <div class="cta-button col col-12 col-md-4">
                        <a href="/quote" class="mt-3 mt-md-5">GET A FREE QUOTE</a>
                        <p>Only takes a few seconds!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

.cta {
    padding: 4em 0;
    background-image: url("../assets/img/banner-3.jpg");
    background-size: cover;
    background-position: 50% 75%;
    color: white;
    .cta-text {
        text-align: left;
        h2 {
            margin: 1.25rem 0;
        }
        p {
            margin-top: 2rem;
        }
        .title-underline {
            width: 150px;
            height: 2px;
            background-color: $bright-sun-dark;
        }
    }
    .cta-button {
        a {
            padding: .75rem 3rem;
            color: $tuatara;
            background-color: $bright-sun-light;
            &:hover {
                color: white;
                background-color: $tuatara;
                outline: 1px solid white;
            }
        }
        p {
            font-size: .8rem;
            margin-top: .75rem;
        }
    }
}
</style>