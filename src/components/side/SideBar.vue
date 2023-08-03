<script setup lang="ts">
defineProps<{ side: boolean }>()
</script>
<template>
    <Teleport to="body">
        <div class="backdrop" v-on:click="$emit('on-click')" v-if="side"></div>
        <Transition name="side-animation">
            <aside v-if="side">
                <button class="x" v-on:click="$emit('on-click')"> <i class="bi  bi-x"></i></button>
                <nav class="nav">
                    <router-link to="/">Home</router-link>
                    <router-link to="/admissions">Admissions</router-link>
                    <div class="has-caret">
                        <router-link to="/media-zone">Media Zone<i class="bi bi-caret-down-fill"></i> </router-link>
                        <div class="dropdown">
                            <router-link to="/media-zone">Crowe News</router-link>
                            <router-link to="/media-zone">Crowe Events</router-link>
                            <router-link to="/media-zone">Crowe Gallery</router-link>
                        </div>
                    </div>
                    <router-link to="/careers">Careers</router-link>
                    <div class="has-caret">
                        <router-link to="/">More Info<i class="bi bi-caret-down-fill"></i>
                        </router-link>
                        <div class="dropdown more">
                            <router-link to="/">Faq</router-link>
                            <router-link to="/">About us</router-link>
                            <router-link to="/">Contact us</router-link>
                        </div>
                    </div>
                    <router-link to="/admissions">Payments</router-link>
                    <a role="button"> school portal</a>
                    <ul class="ul">
                        <li> <span><i class="bi bi-geo-alt"></i></span>
                            <p>KM 3, Iwo-Ejigbo Road, Agbowo Area, Iwara Iwo, Osun, Nigeria.</p>
                        </li>
                        <li><span><i class="bi bi-envelope-at"></i></span>
                            <a href="mailto:croweschoolsng@gmail.com">croweschoolsng@gmail.com</a>
                        </li>
                        <li> <span><i class="bi bi-telephone"></i></span>
                            <a href="tel:0806 708 9949">0806 708 9949</a>
                        </li>
                        <li>
                            <span><i class="bi bi-facebook"></i></span>
                            <a href="https://www.facebook.com/CroweSchoolsNG/">facebook</a>
                            <span><i class="bi bi-instagram"></i></span>
                            <a href="https://www.instagram.com/croweschoolsng">instagram</a>
                        </li>
                        <div>
                            Developed by:<a href="mailto:olosanyusuf@gmail.com">Polymath</a>
                        </div>
                    </ul>
                </nav>

            </aside>
        </Transition>
    </Teleport>
</template>
<style scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: transparent;

}

aside {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 40%;
    background-color: var(--primary);
    z-index: 1000;
    scroll-behavior: auto;
}

.x {
    border: none;
    border-radius: 2px;
    padding: 0.1rem;
    font-size: 25px;
    position: absolute;
    top: 20px;
    right: 0;
}

.side-animation-enter-from {
    transform: translateX(20px);
}

.side-animation-enter-active,
.side-animation-leave-active {
    transition: all .2s;
}

.side-animation-leave-to {
    transform: translateX(10px)
}

.nav {
    position: relative;
    top: 60px;
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;
    gap: 1rem;
}

.dropdown {
    display: none;
}

.has-caret {
    position: relative;
    display: inline-block;
}

.dropdown {

    flex-direction: column;
    gap: 0.5rem;
}

.has-caret:hover .dropdown {
    display: flex;
}

.has-caret:hover i {
    transform: rotate(180deg);
}


.dropdown a {
    justify-content: flex-start !important;
    align-items: center;
    margin-left: 2rem !important;
}

.nav a {
    all: unset;
    color: #fafafa;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    transition: all 0.12s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    display: flex;
    gap: 0.2rem;
    align-items: baseline;
    justify-content: space-between;
}

.nav a.router-link-active {
    color: #fff;
    font-weight: 700;
}

.nav a[role="button"] {
    all: unset;
    background-color: #fff;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    color: var(--primary);
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    width: max-content;
}

.ul {
    list-style: none;
    display: grid;
    gap: 1rem;
}

.ul i {
    color: var(--primary);
}

.ul span {
    background-color: #fff;
    padding: 0.5rem;
}

.ul li {
    display: flex;
    gap: 1rem;
    align-items: center;
    color: #fff;

}

.ul a,
.ul p {
    font-size: 16px;
}

.ul li:nth-child(4) a {
    gap: 0.5rem;
    text-transform: uppercase;
}

.ul li:nth-child(4) span {
    background-color: transparent;
}

.ul li:nth-child(4) span:first-of-type i {
    color: #557dbc !important;
}

.ul li:last-of-type span:last-of-type i {
    color: #ed1376 !important;
}

.ul li:last-of-type {
    border-bottom: 1px solid #fafafa;
}

.ul div {
    display: flex;
    justify-content: center;
    color: #fff;
}

.ul div a {
    color: blue;
}

@media screen and (min-width:1000px) {

    .backdrop,
    aside {
        display: none;
    }
}

@media screen and (max-width:785px) {
    aside {
        width: 60%;
    }
}

@media screen and (max-width:520px) {
    aside {
        width: 80%;
    }
}
</style>
