<script setup lang="ts">
import Top from "./Top.vue";
import { ref, type Ref } from "vue";
import SideBar from "./side/SideBar.vue"
const side: Ref<boolean> = ref(false)
const clickHandler: () => boolean = () => side.value = !side.value

</script>
<template>
    <Top />
    <div class="header">
        <router-link to="/"><img src="../assets/Crowe-Schools-LogoB.png" alt="Crowe Schools" /></router-link>
        <nav class="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/admissions">Admissions</router-link>
            <div class="has-caret">
                <router-link to="/media-zone">Media Zone<i class="bi bi-chevron-down"></i> </router-link>
                <div class="dropdown">
                    <router-link to="/admissions">Crowe News</router-link>
                    <router-link to="/admissions">Crowe Events</router-link>
                    <router-link to="/admissions">Crowe Gallery</router-link>
                </div>
            </div>
            <router-link to="/careers">Careers</router-link>
            <div class="has-caret">
                <router-link to="/">More<i class="bi bi-chevron-down"></i>
                </router-link>
                <div class="dropdown more">
                    <div class="side-down">
                        <router-link to="/admissions">More Info <span class="bi bi-chevron-down"></span> </router-link>
                        <div class="drop-side">
                            <router-link to="/">Faq</router-link>
                            <router-link to="/">About us</router-link>
                            <router-link to="/">Contact us</router-link>
                        </div>
                    </div>
                    <router-link to="/admissions">Payments</router-link>
                </div>
            </div>
            <button>
                <i class="bi bi-search"></i>
            </button>
            <button>
                <i class="bi bi-person"></i>
            </button>
            <a role="button"> school portal</a>
        </nav>
        <div class="right">
            <i class="bi bi-person"></i>
            <button class="list" v-on:click="clickHandler">
                <div v-for="k in 3" :key="k"></div>
            </button>
            <side-bar :side="side" v-on:on-click="clickHandler"></side-bar>
        </div>
    </div>
</template>
<style  scoped>
.header {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    background-color: #fafafa;
    height: 77px;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
    border-bottom: 2px solid rgba(44, 62, 80, 0.2);
    z-index: 1000;
}

.header a {
    all: unset;
    cursor: pointer;
}

.right {
    display: none;
    align-items: center;
}

.right i {
    font-size: 20px;
    color: var(--primary);
}

.list {
    all: unset;
    cursor: pointer;
    display: flex;
    flex-direction:
        column;
    gap: 0.5rem;
    width: 40px;

}

.list:hover div {
    background-color: #3a4f66;
}

.list div {
    height: 4px;
    background-color: var(--primary);
    width: 100%;
    border-radius: 3px;
}

.header img {
    height: 75px;
}

.nav {
    display: flex;
    align-items: center;
    gap: 1rem;
}


.nav a {
    color: var(--primary);
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    gap: 0.4rem;
    align-items: baseline;
    cursor: pointer !important;
}

.nav a:hover,
.nav a.router-link-active {
    color: #a3210d;
}

.nav button {
    all: unset;
    cursor: pointer;
}

.nav i {
    color: var(--primary);
}

.nav a i {
    font-size: 12px;
    font-weight: 700;
}

.nav a[role="button"] {
    all: unset;
    background-color: var(--primary);
    text-transform: uppercase;
    padding: 0.5rem;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
}

.has-caret {
    position: relative;
    display: inline-block;
}

.has-caret:hover .dropdown {
    display: block;
}

.has-caret:hover i {
    transform: rotate(180deg);
}

.dropdown {
    display: none;
    position: absolute;
    top: 100%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 3px 5px rgba(44, 62, 80, 0.2);
    animation-name: dropdown;
    animation-duration: .1s;
    transition: all .1s;
    width: 100%;
}

.more {
    width: max-content;
}

.dropdown a {
    font-size: 15px;
    text-transform: capitalize;
    font-weight: 500;
    border-bottom: 1px dotted rgba(44, 62, 80, 0.2);
    padding: 0.5rem;
    justify-content: space-between;
}

.dropdown a:last-child {
    border-bottom: none;
}

.side-down {
    position: relative;
    display: inline-block;
}

.drop-side {
    position: absolute;
    left: 100%;
    width: max-content;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 3px 5px rgba(44, 62, 80, 0.2);
    top: 0;
    display: none;
}

.drop-side a {
    padding: 0.5rem 1rem;
}

.side-down:hover .drop-side {
    display: block;
}

.side-down a:last-child {
    border-bottom: 1px dotted rgba(44, 62, 80, 0.2);
}

.side-down:hover span {
    transform: rotate(270deg);
}

@keyframes dropdown {
    0% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0);
    }
}

@media screen and (max-width:1000px) {
    .nav {
        display: none;
    }

    .right {
        display: flex;
        gap: 1rem;
    }
}

@media screen and (max-width:520px) {
    .header img {
        width: 80%;
        height: 60px;
    }

    .header {
        height: 65px;
        padding: 0 1rem;
    }

    .list {
        width: 30px;
        gap: 0.4rem;
    }
}
</style>
