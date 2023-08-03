<template>
    <div class="anthem">
        <h2>School Anthem</h2>
        <!-- <audio src=""></audio> -->
        <div style="display:flex" class="anthem-div">
            <marquee>There's a rock solid learning Citadel
                With a solid base like a Gibraltar
                There's a school that stands out as a model
                And a future leader Alma mater
                There's a place to be fit as a fiddle
                Where physical and mental growth matters
                There's a place where moral never dwindles, but boost knowledge and make future brighter
                Crowe Schools will never fail
                To raise students that all hails
                Crowe Schools will ever pass Sound knowledge to students En Mass.
                ***Crowe Schools, Leading with Cognition!***
                <i><font-awesome-icon icon="fa-solid fa-music"></font-awesome-icon></i>
            </marquee>
            <audio controls autoplay muted>
                <source src="../assets/Crowe-Schools-Anthem.mp3" type="audio/mpeg" />
            </audio>
        </div>
    </div>
</template>
<style scoped>
.anthem {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.anthem h2 {
    text-align: center;
    color: var(--primary);
}

.anthem marquee {
    color: #393939;
    font-size: 18px;
    font-weight: 600;
    margin-top: 1rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;

}

.anthem path * {
    fill: var(--primary) !important;
}

@media screen and (max-width:785px) {
    .anthem-div {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }

    .anthem-div audio {
        width: calc(100% - 4rem)
    }
}
</style>