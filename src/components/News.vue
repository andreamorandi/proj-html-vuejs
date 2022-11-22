<script>
import SectionHeading from './SectionHeading.vue';
import Article from "./Article.vue";

export default {
    name: "News",
    components: {
        SectionHeading,
        Article
    },
    data() {
        return {
            articles: [
                {
                    title: "Redeveloping Florida's Remote Southern Coast",
                    date: "December 7th, 2015",
                    content: "Technology is Here to Stay Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, doloremque. Numquam, consequuntur, nemo reiciendis dolores asperiores nihil veritatis aut inventore aliquid non aperiam possimus temporibus optio quasi quis nobis consequatur!",
                    image: "news-1.jpg",
                    type: "Architecture, Buildings, Construction, News"
                },
                {
                    title: "How We Manage Large Construction Projects",
                    date: "December 7th, 2015",
                    content: "Technology is Here to Stay Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, doloremque. Numquam, consequuntur, nemo reiciendis dolores asperiores nihil veritatis aut inventore aliquid non aperiam possimus temporibus optio quasi quis nobis consequatur!",
                    image: "news-2.jpg",
                    type: "Architecture, Buildings, Construction, News"
                },
                {
                    title: "Future proofing a modern home",
                    date: "December 6th, 2015",
                    content: "Technology is Here to Stay Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, doloremque. Numquam, consequuntur, nemo reiciendis dolores asperiores nihil veritatis aut inventore aliquid non aperiam possimus temporibus optio quasi quis nobis consequatur!",
                    image: "news-3.jpg",
                    type: "Architecture, Buildings, Construction, News"
                },
            ],
        };
    },
};
</script>

<template>
    <section class="news-section">
        <SectionHeading title="Latest News" />
        <div class="articles">
            <div class="ms_container-md">
                <div class="container-fluid">
                    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                        <div class="col" v-for="(article, index) in articles" :key="index">
                            <Article :article="article" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-footer">
            <span>VIEW ALL ARTICLES</span>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
.news-section {
    padding-top: 3rem;
    padding-bottom: 5rem;
    background-color: $pampas;
    .section-heading {
        padding-top: 1.5rem;
    }
    .articles {
        padding-top: 2rem;
        padding-bottom: 4rem;
    }
    .section-footer {
        span {
            &::before,
            &::after {
                background-color: white;
            }
        }
    }
}
</style>