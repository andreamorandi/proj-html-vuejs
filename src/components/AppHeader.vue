<script>
export default {
    name: "AppHeader",
    data() {
        return {
            showMenu: false,
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
        <nav class="d-nav">
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
        <i class="fa-solid m-nav-icon" :class="!showMenu ? 'fa-bars' : 'fa-xmark'" @click="showMenu = !showMenu"></i>
        <nav class="m-nav" v-show="showMenu">
            <ul class="row row-cols-2 g-2">
                <div class="col" v-for="(link, index) in links" :key="index">
                    <li>
                        <a :href="link.href" :class="{active: link.active}">{{ link.title }}</a>
                    </li>
                </div>
                <li class="col">
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
    .d-nav {
        height: 100%;
        ul {
            height: 100%;
            @include flex();
            li {
                height: 100%;
                position: relative;
                @include flex-center();
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
    .m-nav-icon {
        font-size: 1.5rem;
        cursor: pointer;
        color: $tuatara;
        &.fa-bars:hover {
            color: $bright-sun-light;
        }
        &.fa-xmark:hover {
            color: red;
        }
    }
    .m-nav {
        width: 100%;
        max-width: 400px;
        position: absolute;
        top: 100%;
        right: 0;
        text-align: center;
        padding: 0 5%;
        background-color: white;
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
        li {
            @include flex-center();
        }
        .col:last-child {
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
        .col:not(:last-child) {
            a:hover {
                color: $bright-sun-light;
            }
        }
    }
}

@media screen and (max-width: 960px) {
    .d-nav {
        li:last-child {
            display: none;
        }
    }
}

@media screen and (max-width: 820px) {
    .d-nav {
            display: none;
    }
}

@media screen and (min-width: 820px) {
    .m-nav-icon,
    .m-nav {
        display: none;
    }
}
</style>