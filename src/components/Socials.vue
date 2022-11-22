<script>
export default {
    name: "Socials",
    data() {
        return {
            socials: [
                {
                    href: "https://www.facebook.com/",
                    iconClasses: ["fa-brands", "fa-facebook-f"]
                },
                {
                    href: "https://twitter.com/",
                    iconClasses: ["fa-brands", "fa-twitter"]
                },
                {
                    href: "https://www.youtube.com/",
                    iconClasses: ["fa-brands", "fa-youtube"]
                },
                {
                    href: "https://www.instagram.com/",
                    iconClasses: ["fa-brands", "fa-instagram"]
                },
            ]
        }
    }
}
</script>

<template>
    <div class="socials">
        <ul>
            <li v-for="(social, index) in socials" :key="index">
                <a :href="social.href">
                    <i :class="social.iconClasses"></i>
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

.socials {
    height: 100%;
    ul {
        margin: 0;
        display: flex;
        li {
            a {
                padding: .3rem;
                font-size: .9rem;
                color: $dove-gray;
                &:hover {
                    color: $silver;
                }
            }
        }
    }
}
</style>