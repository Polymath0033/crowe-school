<script setup lang="ts">
import HeroImage from '@/components/UI/HeroImage.vue';
</script>
<template>
    <hero-image text="Admissions"></hero-image>
    <section class="section">
        <h1>Join Us Today</h1>
        <div class="text">
            <p>
                Thank you for your interest in <b>Crowe International Schools.</b></p>
            <p>The search for the right school is a deeply personal, interesting, and enlightening experience. We hope that
                as you consider the educational options available for your family you will give us the opportunity to share
                the wonderful benefits of quality education.
                We know this is a significant decision and want to do everything we can to help you with your choice.
                We seek students who have the ability to succeed academically at <b>CIS</b>, whose families are committed to
                the
                core values of the school, and who represent a diverse range of racial, economic, cultural, and ethnic
                backgrounds.</p>
            <p>At <b>CIS</b>, students become fully-equipped with a love for learning and a strong faith so they are able to
                face
                a changing and challenging world. A variety of aptitudes and learning styles are represented within our
                student body.</p>
            <p style="margin-bottom: 2rem;"><b>
                    Crowe International Schools
                </b> will admit students of any race, color, national, or ethnic origin to all the
                rights, privileges, programs, and activities generally made available to students at the school.
            </p>
            <strong>Selection for admission in a class is based on:</strong>
            <ul>
                <li>
                    The student’s application date</li>
                <li>Compatibility with the school’s educational and spiritual objectives</li>
                <li>Suitability for the class to which they seek entry.</li>
                <li>Admission into JSS 1 is based on completion of Primary school education, attaining a minimum score in
                    our written and oral examination, attainment of a minimum age of 10 years and payment of our acceptance
                    fee.</li>

            </ul>
            <strong style="margin-top:3.5rem"><i>We do not discriminate on the basis of race, color, nationality or ethnic
                    origin in administration of
                    admissions policies, educational programs, financial aid, athletic and other school-administered
                    programs.</i></strong>
        </div>
    </section>
    <section class="details">
        <div class="overlay">
        </div>
        <div class="detail-text">
            <h1>Enroll your child now</h1>
            <p>
                We are poised towards the all-round development of the children committed into our care.
            </p>
            <div class="link">
                <router-link to="/admissions/#"><i class="bi bi-download"></i>Nursery and Primary School Form</router-link>
                <router-link to="/admissions/#"><i class="bi bi-download"></i>Secondary school form</router-link>
            </div>
            <p>After downloading and filling the application form, kindly send the filled e-copy to
                admissions@croweschools.com.ng alongside a payment receipt of ₦10,000 For the Secondary School form and
                ₦5,000 for the Nursery and Primary School as it applies to you
            </p>
            <span>ACCOUNT INFORMATION</span>
            <span>Sterling Bank</span>
            <span>
                Crowe International Schools
            </span><span>
                0081054759</span>
        </div>
    </section>
</template>
<style scoped>
@import url('../assets/animation.css');

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

.text {
    padding: 0rem 1rem;
}

.text * {
    color: #3a4f66;
    line-height: 2;
    font-size: 16px;
}

.text ul {
    padding-left: 3rem;
    margin-bottom: 2rem;
}

.details {
    background-image: url('../assets/graduants-celebrating.jpg');
    height: max-content;
    width: 100%;
    background-size: cover;
    padding: 1rem;
    text-align: center;
    position: relative;
}

.overlay {
    position: absolute;
    height: 100%;
    background-color: #000000;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0.7;
    z-index: 1;
}

.detail-text {
    display: grid;
    gap: 0.6rem;
    position: relative;
    z-index: 100;
    color: #fff;
    margin: auto;
    place-items: center;
    place-content: center;
}

.detail-text * {
    transition: animation .3s;
    animation-duration: .3s;
}

.detail-text h1 {
    font-size: 35px;
    font-weight: 600;
    text-transform: capitalize;
    animation-name: fadeInUp;
}


.detail-text p:first-of-type {
    font-weight: 500;
    font-size: 18px;
    animation-name: fadeIn !important;
    ;
}

.detail-text p,
.detail-text span {
    font-size: 15px;
    animation-name: fadeInDown;
    /* animation-duration: 1.25s; */
}

.detail-text p:last-of-type,
.detail-text span:last-of-type {
    width: calc(100% - 4rem)
}



.link {
    display: flex;
    gap: 3rem;
}

.link a {
    all: unset;
    padding: 0.4rem 1rem;
    border-radius: 35px;
    text-transform: capitalize;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    color: #fff;
    fill: var(--primary);
    transition: background .3s, transform .3s;
    display: flex;
    gap: 0.2rem;
    justify-content: center;
    align-items: baseline;
    animation-duration: .3s;
}

.link a:first-of-type {
    background-color: #eeeda8;
    fill: var(--primary);
    color: var(--primary);
    animation-name: fadeInLeft;


}

.link a:last-of-type {
    background-color: var(--primary);
    animation-name: fadeInRight;
}

.link a:hover {
    transform: scale(1.2);
}

.link a:first-of-type:hover {
    background-color: var(--primary);
    color: #fff;
    fill: #fff;
}

@media screen and (max-width:620px) {
    .link {

        flex-direction: column;
        gap: 0.5rem;
    }
}

@media screen and (min-width:1000px) {
    .section {
        padding: 4rem 3rem;
    }
}
</style>