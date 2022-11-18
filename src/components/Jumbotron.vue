<script>
export default {
    name: "Jumbotron",
};
</script>

<template>
    <section>
        <div class="ms_container-md">
            <h1>BUILDING INSPIRING SPACES</h1>
            <p>We Build Inspiring Residential & Commercial Spaces</p>
            <div class="cta">
                <a href="/work">EXPLORE RECENT WORK</a>
                <a href="/quote">GET A QUOTE TODAY</a>
            </div>
            <div class="tags">
                <div class="tag">
                    <i class="fa-solid fa-folder-closed"></i>
                    <span>Demos</span>
                </div>
                <div class="tag">
                    <i class="fa-solid fa-tags"></i>
                    <span>On Sale</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

section {
    position: relative;
    padding: 15rem 0;
    background-image: url("../assets/img/jumbotron.jpg");
    background-size: cover;
    h1 {
        margin-bottom: unset;
        font-weight: 550;
        letter-spacing: 1px;
        color: white;
    }
    p {
        color: $bright-sun-light;
        margin: 1.75rem 0;
    }
    .cta {
        @include flex(row, center, center);
        a {
            padding: .75rem 3rem;
            margin: 0 1rem;
        }
        a:first-child {
            color: white;
            background-color: $tuatara;
            &:hover {
                color: $tuatara;
                background-color: $bright-sun-light;
                outline: 1px solid white;
            }
        }
        a:last-child {
            color: $tuatara;
            background-color: $bright-sun-light;
            &:hover {
                color: white;
                background-color: $tuatara;
                outline: 1px solid white;
            }
        }
    }
    .tags {
        position: absolute;
        top: 10px;
        right: 10px;
        .tag {
            width: 50px;
            height: 50px;
            position: relative;
            margin-top: .25rem;
            border-radius: 5px;
            color: $tuatara;
            background-color: white;
            i {
                position: absolute;
                top: 7.5px;
                left: 50%;
                transform: translateX(-50%);
            }
            span {
                position: absolute;
                bottom: 5px;
                left: 50%;
                transform: translateX(-50%);
                white-space: nowrap;
                font-size: .7rem;
            }
            &:last-child {
                i {
                    color: limegreen;
                }
            }
        }
    }
}
</style>