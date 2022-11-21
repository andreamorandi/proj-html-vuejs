<script>
export default {
    name: "Article",
    props: {
        article: Object
    },
    methods: {
        getImagePath(imageName) {
            return new URL(`../assets/img/${imageName}`, import.meta.url).href;
        },
    },
}
</script>

<template>
    <div class="image-wrapper">
        <img :src="getImagePath(article.image)" alt="article image">
    </div>
    <div class="article">
        <h2>{{ article.title }}</h2>
        <p>{{ article.date }}</p>
        <hr>
        <p>{{ article.content }}</p>
    </div>
</template>

<style lang="scss" scoped>
.image-wrapper {
    img {
        width: 100%;
    }
}
.article {
    text-align: left;
    padding: 2rem;
    background-color: white;
    hr {
        color: silver;
    }
    p:first-of-type {
        font-size: .7rem;
    }
}
</style>