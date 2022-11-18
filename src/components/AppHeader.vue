<script>
export default {
    name: "AppHeader",
    data() {
        return {
            links: [
                {
                    title: "home",
                    href: "/home",
                    active: true,
                },
                {
                    title: "about",
                    href: "/about",
                    active: false,
                },
                {
                    title: "services",
                    href: "/services",
                    active: false,
                },
                {
                    title: "work",
                    href: "/work",
                    active: false,
                },
                {
                    title: "articles",
                    href: "/articles",
                    active: false,
                },
            ],
        };
    },
    methods: {
        getImagePath(imageName) {
            return new URL(`../assets/img/${imageName}`, import.meta.url).href;
        },
    },
};
</script>

<template>
    <header>
        <img :src="getImagePath('logo.png')" alt="logo">
        <nav>
            <ul>
                <li v-for="(link, index) in links" :key="index">
                    <a :href="link.href" :class="{active: link.active}">{{ link.title }}</a>
                    <div class="arrow-down" v-if="link.active"></div>
                </li>
                <li>
                    <a href="/quote">get quote</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

header {
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    @include flex();
    padding: 0 3rem;
    background-color: white;
    img {
        height: 70px;
    }
    nav {
        height: 100%;
        ul {
            height: 100%;
            @include flex();
            li {
                height: 100%;
                position: relative;
                @include flex();
                a {
                    height: 100%;
                    line-height: 100px;
                    text-transform: uppercase;
                    white-space: nowrap;
                    padding: 0 1.5rem;
                    color: $tuatara;
                    &.active {
                        color: $bright-sun-light;
                    }
                }
                .arrow-down {
                    width: 0;
                    height: 0;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translate(-50%, 100%);
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    border-top: 10px solid white;
                }
            }
            li:last-child {
                a {
                    height: 40%;
                    line-height: 40px;
                    background-color: $bright-sun-light;
                    &:hover {
                        color: white;
                        background-color: $tuatara;
                    }
                }
            }
            li:not(:last-child) {
                a:hover {
                    color: $bright-sun-light;
                }
            }
        }
    }
}
</style>