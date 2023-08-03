<template>
    <div class="top">
        <div class="left">
            <div>
                <span><i class="bi bi-geo-alt"></i></span>
                <p>KM 3, Iwo-Ejigbo Road, Agbowo Area, Iwara Iwo, Osun, Nigeria.</p>
            </div>
            <div>
                <span><i class="bi bi-envelope-at"></i></span>
                <a href="mailto:croweschoolsng@gmail.com">croweschoolsng@gmail.com</a>
            </div>
            <div>
                <span><i class="bi bi-telephone"></i></span>
                <a href="tel:0806 708 9949">0806 708 9949</a>
            </div>

        </div>
        <div class="right">
            <div>
                <span><i class="bi bi-facebook"></i></span>
                <a href="https://www.facebook.com/CroweSchoolsNG/">facebook</a>
            </div>
            <div>
                <span><i class="bi bi-instagram"></i></span>
                <a href="https://www.instagram.com/croweschoolsng">instagram</a>
            </div>
        </div>
    </div>
</template>
<style scoped>
.top {
    display: flex;
    /* width: 100%; */
    justify-content: space-between;
    margin: 0 2rem;
    border-bottom: 1px dotted rgba(44, 62, 80, 0.2)
}

.right,
.left {
    display: flex;
    column-gap: 1.5rem;
    align-items: center;
    row-gap: 0.5rem;
}

.top a {
    all: unset;
    cursor: pointer;
    font-size: 14px;
}

.left a {
    padding-top: 0.3rem
}

.right div,
.left div {
    display: flex;
}

.left {
    flex-wrap: wrap;
}

.left i {
    color: var(--primary);
}

.left span {
    background-color: var(--background-color);
    padding: 0.5rem;
}

.right div {
    gap: 0.5rem;
    text-transform: uppercase;
}

.right div:first-of-type {
    color: #557dbc;

}

.right div:last-of-type {
    color: #ed1376;
}

@media screen and (max-width:1000px) {
    .top {
        display: none;
    }
}
</style>