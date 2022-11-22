<script>
import Tweet from "vue-tweet";
import Contacts from "./Contacts.vue";
import Socials from "./Socials.vue";

export default {
    name: "AppFooter",
    data() {
        return {
            center: {lat: 51.516023, lng: -0.209001},
            markers: [
                {
                    id: 'dfsldjl3r',
                    position: {lat: 51.516023, lng: -0.209001},
                },
            ],
        };
    },
    components: {
        Tweet,
        Contacts,
        Socials
    },
    methods: {
        getImagePath(imageName) {
            return new URL(`../assets/img/${imageName}`, import.meta.url).href;
        },
    },
};
</script>

<template>
    <footer>
        <div class="footer-top-line"></div>
        <div class="footer-content">
            <div class="container-fluid">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    <div class="col">
                        <div class="story">
                            <img :src="getImagePath('footer-logo.png')" alt="footer logo">
                            <p>We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world</p>
                            <a href="/more">LEARN MORE</a>
                        </div>
                    </div>
                    <div class="col">
                        <h6 class="footer-title">LATEST TWEETS</h6>
                        <Tweet tweet-id="1594962397114023937" cards="hidden" conversation="none" theme="dark" />
                    </div>
                    <div class="col">
                        <h6 class="footer-title">CONTACT US TODAY</h6>
                        <Contacts />
                    </div>
                    <div class="col">
                        <h6 class="footer-title">FIND US</h6>
                        <GMapMap :center="center" :zoom="15" map-type-id="terrain" style="width: 90%; height: 250px;">
                            <GMapMarker :key="marker.id" v-for="marker in markers" :position="marker.position"/>
                        </GMapMap>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>COPYRIGHT 2012 - 2015 AVADA THEME BY <span>THEME FUSION</span> | ALL RIGHTS RESERVED | POWERED BY <span>WORDPRESS</span></p>
            <Socials />
            <div class="footer-popup">
                <i class="fa-solid fa-chevron-up"></i>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

footer {
    background-color: $cod-gray;
    .footer-top-line {
        width: 100%;
        height: 10px;
        background-color: $tuatara;
    }
    .footer-content {
        padding: 3rem;
        padding-bottom: 2.5rem;
        p {
            margin: 1.5rem 0;
            color: $dove-gray;
        }
        a {
            font-size: .8rem;
            padding: .4rem 1.5rem;
            color: $tuatara;
            background-color: $bright-sun-light;
            &:hover {
                color: white;
                background-color: $tuatara;
                outline: 1px solid white;
            }
        }
        .footer-title {
            font-size: .95rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: $bright-sun-light;
        }
    }
    .footer-bottom {
        position: relative;
        @include flex(row, space-between, center);
        font-size: .75rem;
        padding: 1rem 3rem;
        color: $dove-gray;
        background-color: #101010;
        p {
            margin: 0;
        }
        span {
            font-weight: 500;
            color: $silver;
        }
        .footer-popup {
            position: absolute;
            bottom: 0;
            right: .5rem;
            cursor: pointer;
            padding: .35rem .75rem .15rem .75rem;
            color: white;
            background-color: $cod-gray;
            opacity: .75;
            &:hover {
                opacity: 1;
            }
        }
    }
}
</style>