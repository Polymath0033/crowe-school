<script setup lang="ts">

</script>
<template>
    <main>
        <h1>Category News</h1>
        <p>Crowe School News</p>
        <section class="cards">
            <article v-for="y in 6" class="card">
                <span>News</span>
                <router-link to="/">More on A-Day Director</router-link>
                <router-link class="image" to="/">
                    <img src="../assets/director.jpg" />
                </router-link>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptates numquam nihil odio quod
                    ut ipsa facilis. Tempore at impedit quae maiores corrupti, in modi doloremque iste debitis cupiditate
                    sequi, fugit quam eligendi, dicta non quidem cum aliquid blanditiis excepturi laboriosam alias nulla
                    nobis? Hic magnam aliquam ipsa ullam accusamus quidem consequatur quis perferendis ducimus vel.

                </p>
                <div class="bottom">
                    <p>Jello</p>

                </div>
            </article>
        </section>
    </main>
</template>
<style scoped>
main {
    padding: 2rem;
    background-color: #fafafa;
}

.cards {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.card {
    background-color: #fff;
    box-shadow: 0 8px 12px -6px rgba(0, 0, 0, 0.1);
}



.card * {

    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
}

.image {
    padding-left: 0 !important;
    padding-right: 0 !important;
}

.card {
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.card span,
.card p,
.bottom {
    padding-left: 2rem;
    padding-right: 2rem;
}

.card a {
    all: unset;
    cursor: pointer;
    padding-left: 2rem;
    padding-right: 2rem;
    text-transform: capitalize;
}

.card span {
    color: #3a4f66;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
}

.card a {
    font-weight: 600;
    color: #192A3D;
    font-size: 20px;
}


.card p {
    color: #3a4f66;
    line-height: 1.5;
    font-size: 18px;
}

.card img {
    width: 100%;
}

.bottom {
    display: flex;
    gap: 1rem;
}

.bottom p {
    padding-left: 0;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    gap: 9px;
    /* letter-spacing: 9px; */
}
</style>