<script setup lang="ts">
defineProps<{ text: string }>()
</script>
<template>
    <div class="hero">
        <div class="overlay"></div>
        <h2>{{ text }}</h2>
    </div>
</template>
<style scoped>
.hero {
    background-image: url('../../assets/graduants-celebrating.jpg');
    width: 100%;
    min-height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-color: #000000;
    position: relative;
    transition: background 10s ease;
    animation-name: background;
    animation-iteration-count: infinite;
    animation-duration: 10s;
}

@keyframes background {
    from {

        background-image: url('../../assets/graduants-celebrating.jpg');
    }

    to {
        background-image: url('../../assets/Crowe-Schools-2D.png');
    }

}

.overlay {
    position: absolute;
    height: 100%;
    background-color: #000000;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0.7;
}

.hero h2 {
    color: #fff;
    /* text-transform: uppercase; */
    position: relative;
    z-index: 100;
    font-weight: 600;
    font-size: 35px;
}
</style>