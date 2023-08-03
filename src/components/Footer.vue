<script setup lang="ts">
const date = new Date().getFullYear()
</script>
<template>
    <footer class="footer">
        <div class="col">
            <div class="left">
                <h1>
                    Download the App
                </h1>
                <p>
                    Download our Mobile App to easily access the school portal.
                </p>
            </div>
            <div class="right">
                <a href="https://croweschools.com.ng/files/Crowe-Schools.apk">
                    <img src="../assets/Download-App.png" />
                </a>
            </div>
        </div>
        <div class="band">
            <p>copyright &#169{{ date }}<a href="https://rejoiceschools.ng">Crowe Int'l schools</a></p>
            <p>Developed By<a href="mailto:olosanyusuf19@gmail.com">Polymath</a></p>
        </div>
    </footer>
</template>
<style scoped>
.footer {
    width: 100%;
    background-color: #FBF6B9;
    display: block;
}

.col {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 3rem 2rem 2rem 2rem;
    text-align: center;
}

.col h1 {
    color: var(--primary);
    font-size: 45px;
}

.col p {
    color: #3a4f66;
    font-weight: 500;
    font-size: 18px;

}

.right a {
    all: unset;
    cursor: pointer;
    transition: all .4s;
}

.right a:hover img {
    transform: scale(0.8);
}

.right img {
    width: 80%;
    margin: 0 auto;
}

.band {
    background-color: #000000;
    width: 100%;
    height: 100px;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    text-align: center;
}

.band p {
    text-transform: capitalize;
    display: flex;
    gap: 0.5rem
}

.band a {
    color: var(--primary);
    font-size: 18px;
    text-decoration: none;
    font-weight: bold;
}

@media screen and (max-width:520px) {

    .col,
    .band {
        flex-direction: column;
    }

}
</style>