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
        <img :src="getImagePath('construction_logo.png')" alt="logo">
        <nav>
            <ul>
                <li v-for="(link, index) in links" :key="index">
                    <a :href="link.href" :class="{active: link.active}">{{ link.title }}</a>
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
    @include flex();
    padding: 0 3rem;
    nav {
        height: 100%;
        ul {
            height: 100%;
            @include flex();
            li {
                height: 100%;
                @include flex();
                a {
                    height: 100%;
                    line-height: 100px;
                    text-transform: uppercase;
                    white-space: nowrap;
                    padding: 0 1.5rem;
                    color: $silver;
                    &.active {
                        color: $bright-sun-light;
                    }
                }
            }
            li:last-child {
                a {
                    height: 40%;
                    line-height: 40px;
                    background-color: $bright-sun-light;
                }
            }
        }
    }
}
</style>