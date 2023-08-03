<script  setup lang="ts">
import { onMounted, onBeforeMount, computed, ref, type Ref } from 'vue';
const array = ref(['Male-Students-Group-2', 'Female-Students-Group-1', 'Students-Strolling-2', 'Yusuf', 'Sidiq', 'Olosan', 'Muhammad', 'Jamiu', 'Innaka']);

const images: Ref<string[]> = ref([]);
for (let i = 0; i < array.value.length; i += 3) {
    images.value.push(array.value.slice(i, i + 3))
}
console.log(images.value)
const current: Ref<number> = ref(3);
const direction = ref('left')
const interval: Ref<null | number> = ref(null)
const currentSlide = (index: number) => {
    current.value = index
}

const prev = (step = -1) => {
    const index =
        current.value > 0
            ? current.value + step
            : images.value.length - 1;
    currentSlide(index)
    direction.value = "left";
    startSlide()
}

const next_ = (step = 1) => {
    const index =
        current.value < images.value.length - 1
            ? current.value + step
            : 0;
    currentSlide(index);
    direction.value = "right";
}
const next = (step = 1) => {
    next_(step)
    startSlide()
}

const stopSlide = () => {
    if (typeof interval.value === 'number') {
        clearInterval(interval.value)
    }

}
const startSlide = () => {
    stopSlide();
    interval.value = setInterval(() => {
        next_();
    }, 5000);
}
const switchSlide = (index: number) => {
    const step = index - current.value;
    if (step > 0) {
        next(step);
    } else {
        prev(step);
    }
}
onMounted(() => {
    startSlide()
})
onBeforeMount(() => {
    stopSlide()
})
</script>
<template>
    <div v-for="(arr, idx) in images" v-show="idx === current">
        <div v-for="(ar, index) in arr">
            <p>{{ ar }}Hello</p>
        </div>

    </div>
</template>