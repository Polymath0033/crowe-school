<script setup lang="ts">
import { ref } from 'vue'
import HeroImage from "@/components/UI/HeroImage.vue"
const faqData = ref([{ question: 'What are school opening and closing times ?', answer: 'School starts at 7:30 AM each day for the nursery/primary and high school and all pupils will be ready to be picked up in the afternoon at 2:00 PM each day.', show: false }, { question: 'Can i send someone else to pick up my child ?', answer: 'If you need someone else to come to school to collect your children, please speak to the class teacher in the morning. Each child has a data overview sheet with people who are allowed to collect them.', show: false }, { question: 'How do i report my child\'s absence from school ?', answer: 'Telephone school on the day of the absence before 9.30am and inform our administrator. A text message could also be sent to this effect.', show: false }, { question: 'How will i be informed if there\'s an enforced school closure ?', answer: 'On the very rare occasion that the school needs to close we will inform all parents via text.', show: false }, { question: 'Where can i buy branded school uniforms from ?', answer: 'Branded school uniforms are available within the school.', show: false }])
const toggleQuestion: (index: number) => void = (index) => {
    for (let i = 0; i <= faqData.value.length; i++) {
        if (i === index) {
            faqData.value[index].show = !faqData.value[index].show

        } else {
            faqData.value[i].show = false
        }
    }
}

</script>
<template>
    <hero-image text="FAQs"></hero-image>
    <section class="section">
        <h1>Frequently Asked Questions</h1>
        <p class="section-p">
            We understand that parents/caretakers who are new to our school will have several questions.
            Staff at the school are often asked questions in relation to your child’s education, school timings, procedures
            and a myriad of other topics.</p>
        <p class="section-p">If your question is not answered here, please do contact the school via the information
            provided below.
        </p>
        <div class="flex">
            <ul class="faq">
                <li v-for="({ question, answer, show }, index) in   faqData  " :key="index">
                    <p :style="{ backgroundColor: show ? '#5b0909' : '', color: !show ? '#550909' : '#fff' }"
                        v-on:click="toggleQuestion(index)">
                        {{ question }}
                        <button>
                            <i :style="{ color: show ? '#fff' : '' }"><font-awesome-icon
                                    :icon="!show ? 'fa fa-plus' : 'fa fa-minus'"></font-awesome-icon></i>
                        </button>
                    </p>
                    <div v-if="show">{{ answer }}</div>
                </li>
            </ul>
            <div class="address">
                <h1>Contact Info</h1>
                <strong>We’re looking forward to hearing from you.</strong>
                <ul>
                    <li> <span><i class="bi bi-geo-alt"></i></span>
                        <p>KM 3, Iwo-Ejigbo Road, Agbowo Area, Iwara Iwo, Osun, Nigeria.</p>
                    </li>
                    <li> <span><i class="bi bi-envelope-at"></i></span>
                        <a href="mailto:croweschoolsng@gmail.com">croweschoolsng@gmail.com</a>
                    </li>
                    <li>
                        <span><i class="bi bi-telephone"></i></span>
                        <a href="tel:0806 708 9949">0806 708 9949</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<style scoped>
.section {
    padding: 4rem 0.5rem;
    background-color: #fafafa;
}

.section h1 {
    text-align: center;
    color: var(--primary);
    font-size: 35px;
    text-transform: capitalize;
}

.section-p {
    color: #3a4f66;
    text-align: center;
    width: calc(100% - 3rem);
    font-size: 18px;
    line-height: 1.8;
}

.flex {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.faq {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    list-style: none;
    justify-content: center;
}

.faq li {
    border-radius: 5px;
    border: 1px solid var(--primary);

    cursor: pointer;
}

.faq p {
    color: var(--primary);
    font-size: 18px;
    text-align: start;
    font-weight: 600;
    fill: var(--primary);
    display: flex;
    padding: 0.5rem;
    justify-content: space-between;
    width: 100%;

}

.faq button {
    all: unset;
    cursor: pointer;
    font-size: 18px;
    font-weight: 900;
    width: 1rem;
    height: 1rem;
}

.faq i {
    fill: var(--primary);
    color: var(--primary);
    font-size: 18px;
    font-weight: 900;
    width: 1rem;
    height: 1rem;

}

.faq div {
    padding: 01rem;
    text-align: start;
    color: #000;
}

.address {
    border-style: solid;
    border-width: 15px 15px 15px 15px;
    border-color: var(--secondary);
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    margin: 5px 0px 15px 0px;
    width: calc(100% - 2rem);
    margin-right: auto;
    margin-left: auto;

}

.address ul {
    list-style: none;
}

.address li {
    display: flex;
    padding: 0.5rem;
    column-gap: 0.5rem;
}

.address strong {
    text-align: center;
    color: #3a4f66;
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 1rem;
}

.address a {
    all: unset;
    cursor: pointer;
}

.address i {
    fill: #3a4f66;
    color: #3a4f66;
    font-weight: 900;
    font-size: 18px;
}

.address p,
.address a {
    font-size: 18px;
    color: #3a4f66;
}

@media screen and (min-width:1000px) {
    .faq {
        width: 60%;
    }

    .address {
        width: 40%;
    }

    .flex {
        flex-direction: row;
    }
}
</style>