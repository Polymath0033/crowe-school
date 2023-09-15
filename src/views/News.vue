<script setup lang="ts">
import { useDataStore } from '@/stores/data';
import { imageLink } from '@/helpers/image-link';
import { modifiedLink } from '@/helpers/route-helper'
const data = useDataStore();
defineProps<{}>()
</script>
<template>
    <section>
        <h1 class="crowe-h1">Category News</h1>
        <h6 class="crowe-h6">Crowe school news</h6>
        <div class="entries">
            <article class="card" v-for="article in data.data" :key="article.content?.substring(0, 10)">
                <router-link to="/news" class="span-news">
                    <span class="category">{{ article.category }}</span>
                </router-link>
                <h2>
                    <router-link :to="`/news/${modifiedLink(article.title)}`">
                        {{ article.title }}
                    </router-link>
                </h2>
                <router-link :to="`/news/${modifiedLink(article.title)}`">
                    <img :src="imageLink(article.image)" />
                </router-link>
                <p>{{ article.content }}...</p>
                <div class="footer">
                    <router-link to="/news/umaru">
                        <span>{{ article.author }}</span>
                    </router-link>/
                    <time :datetime="article.date.toDateString()">{{ article.date.toLocaleDateString() }}</time>

                </div>
            </article>
        </div>
    </section>
</template>
<style scoped>
section {
    padding: 4rem 4rem;
}

.crowe-h1 {
    color: #3a4f66;
    line-height: 2.5;
    font-size: 2.5rem;
    font-weight: 600;
}

.crowe-h6 {
    color: var(--color-text);
    font-weight: 400;
    font-size: 1rem;
    text-transform: capitalize;
}

.entries {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
}

.card {
    box-shadow: 0px 12px 18px -6px rgba(34, 56, 101, 0.04);
    ;
    padding: 2rem 0;
    transition-property: opacity, transform;
    transition-duration: 1.5s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.2, 1);
    animation-name: fadeInLeft;
    color: #192A3d;
}

.card img {
    width: 100%;
    height: 350px;
}

.card a {
    text-decoration: none;
    /* color: #3a4f66; */
}

.span-news {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    color: #3a4f66;
}

.span-news,
.card h2 {
    margin-left: 1rem;
}

.card * {

    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* .card h2 {} */

.card h2 a {
    font-size: 18px;
    line-height: 1.3;
    color: #192A3d;

}

.card p {
    padding: 1rem;
    color: #3a4f66 !important;
    word-break: break-word;
    font-size: 16px;
    font-weight: 400;

    /* display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    overflow: hidden;
    max-height: 5rem; */
}

.footer {
    padding: 1rem 1rem 0 1rem;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    gap: 0.5rem;

}

.footer a {
    color: #3a4f66;
}

.card h2 {
    margin-bottom: 1rem;
}

@media screen and (max-width:999.98px) {
    .entries {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    section {
        padding: 5rem 2.5rem;
    }
}

@media screen and (max-width:689.98px) {
    .entries {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    section {
        padding: 5rem 2.5rem;
    }
}
</style>