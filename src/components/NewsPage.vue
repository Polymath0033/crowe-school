<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useDataStore } from '@/stores/data';
import { imageLink } from '@/helpers/image-link';
const data = useDataStore()
const route = useRoute();
const formatText = (text: string) => {
    text = text.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
    text = text.replace(/\_(.*?)\_/g, "<i>$1</i>")
    text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    text = text.replace(/(^|\n)- (.*)/g, "<li>$2</li>")
    text = `<ul>${text}</ul>`
    return text;
}
const inputText = ref("This is a *sample* text with [a link](https://example.com). And here's an unordered list:\n- Item 1\n- Item 2");
const text = ref('');
console.log(route.params.news)
const formattedText = computed(() => formatText(text.value))
console.log(data.data)
const filter = computed(() => data.data.filter(({ category }) => category === route.params.news))
console.log(filter.value)
</script>
<template>
    <div v-for="array in filter" :key="array.image">
        <img :src="imageLink(array.image)" :alt="array.image" />
        <!-- <p v-html="formatText(array.content)"></p> -->
    </div>
    <div v-html="formattedText"></div>
    <input v-model="text" />
</template>