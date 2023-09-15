<script setup lang="ts">
defineProps<{ img: string, data: Date }>()
</script>
<template>
    <div class="container">
        <article>
            <img class="big-image" src="../../assets/A-Day-Director-Speech.jpg" />
            <header>
                <h1 class="heading-title">More on A-Day Director</h1>
                <time><span>12/09/2020</span></time>
            </header>

            <main>
                <strong>A DAY DIRECTOR: CROWE SCHOOLS TRAILBLAZING, SETTING THE PACE, RAISING THE BAR.</strong>
                <slot name="content">

                </slot>
            </main>
            <footer class="footer">
                <ul>
                    <li>
                        Telephone: <a href="tel:+2348067089949">+2348067089949</a>, <a
                            href="tel:+2348067089949">+2347067279632</a>
                    </li>
                    <li>

                        Email:<a href="mailto:croweschoolsng@gmail.com"> croweschoolsng@gmail.com</a>

                    </li>
                    <li>
                        <a href="www.croweschools.com.ng">
                            www.croweschools.com.ng
                        </a>
                    </li>
                    <li>
                        Social Media Handles: @croweschoolsng
                    </li>

                </ul>
                <div class="footer-div">
                    <div class="prev">
                        <img src="../../assets/A-Day-Director-Speech.jpg" />
                        <p href="hello.com">hello</p>
                        <p><a href="hello.io">
                                Previous
                            </a>
                        </p>
                    </div>
                    <div class="next">
                        <img src="../../assets/A-Day-Director-Speech.jpg" />
                        <a href="hello.com">hello</a>
                        <a href="hello.io">
                            <strong>Previous</strong>
                        </a>
                    </div>
                </div>
            </footer>
        </article>
        <aside>

        </aside>
    </div>
</template>
<style scoped>
.container {
    padding: 5rem 4rem;
    display: grid;
    grid-template-columns: 65% 25%;
    gap: 2%;
    margin: 0 auto;
    background-color: #F9FAFB;
}

.container * {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.container article {
    background-color: #fff;
    box-shadow: 0px 12px 18px -6px rgba(34, 56, 101, 0.04);
    padding: 3rem;
    border-radius: 3px;
}

.big-image {
    width: 100%;
    height: 400px;
}

header,
.container article {
    display: grid;
    gap: 1.5rem;
}

.heading-title {
    font-size: 30px;
    color: #5b0909;
}

header time {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 1.3;
    color: #3a4f66;
}

.content *,
.footer li,
.content p * {
    color: #3a4f66;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
}

.footer ul {
    padding: 0;
    margin: 0;
    display: grid;
    gap: 1rem;
    margin-left: 3.5rem;
}

.footer-div {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.footer-div img {
    width: 80px;
    height: 80px;
    border-radius: 5px;
}

.prev,
.next {
    display: block;
}

.prev img {
    float: left;
}

.next img {
    float: right;
}
</style>