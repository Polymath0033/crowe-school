<script setup lang="ts">
import HeroImage from '@/components/UI/HeroImage.vue';
const startAnimation = true
//@ts-ignore
import { VueTelInput } from 'vue-tel-input'
import { ref } from 'vue';
const phone = ref(null);
const error = ref('')
const fullName = ref({ val: '', isValid: false })
const email = ref({ val: '', isValid: false })
const confirmEmail = ref({ val: '', isValid: false })
const post = ref({ val: '', isVal: false })
const validateTel: (e: boolean) => void = (e) => {
    if (e === false) {
        error.value = "Please enter a valid phone number"
    } else {
        error.value = ""
    }
}
</script>
<template>
    <hero-image text="CAREERS"></hero-image>
    <section class="section">
        <h1>Join Crowe School</h1>
        <p>Welcome to the career section of <b>Crowe International Schools.</b> We shall be delighted to work with you!</p>
        <transition name="fade">
            <form v-show="startAnimation" class="form">
                <div class="form-control">
                    <label for="full-name">Full Name <sup>*</sup> </label>
                    <input type="text" name="full-name" id="full-name" v-model="fullName.val" required minlength="5">
                </div>

                <div class="flex">
                    <div class="form-control">
                        <label for="email-address">Email Address <sup>*</sup></label>
                        <input type="email" name="email-address" v-model="email.val" required minlength="5"
                            placeholder="Enter Email" id="email-address">
                    </div>
                    <div class="form-control">
                        <label for="confirm-email">Confirm Email </label>
                        <input type="email" name="confirm-email" v-model="confirmEmail.val" required minlength="5"
                            placeholder="Confirm Email" id="confirm-email">
                    </div>
                </div>
                <div class="form-control">
                    <label for="phone-number">Phone Number<sup>*</sup></label>
                    <vue-tel-input v-model="phone" mode="international" :autoDefaultCountry="true"
                        @validate="(e) => validateTel(e.valid)"></vue-tel-input>
                    <span style="color:red;font-size: 10px;">{{ error }}</span>
                </div>
                <div class="form-control">
                    <label for="post-applying-for">Post Applying for <sup>*</sup></label>
                    <input type="text" name="post-applying-for" v-model="post.val" id="post-applying-for" required
                        minlength="5">
                </div>
                <div class="form-control">
                    <label for="resume">Upload CV/Resume <sup>*</sup></label>
                    <input type="file" required maxlength="2" multiple accept=".image/*,.doc,.pdf" name="resume"
                        id="resume">
                </div>
                <button type="submit">SUBMIT APPLICATION</button>
            </form>
        </transition>

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

.section p {
    text-align: center;
    color: #3a4f66;
}

.form {
    width: calc(100% - 2rem);
    animation-name: fadeInLeft !important;
    animation-duration: .3s;
    box-shadow: 0 0 5px #3a4f66;
    border-radius: 10px;
    padding: 2rem 1rem;
    margin-top: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;
    display: grid;
    gap: 00.5rem;
}

.form-control {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}

.form * {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

.form-control label {
    color: var(--primary);
    font-weight: 600;

}

.flex {
    display: flex;
    gap: 1rem;
}

.form-control input {
    border-radius: 2px;
    color: #333;
    display: block;
    font-size: 16px;
    border: 1px solid #ccc;
    padding: 6px 10px;
    height: 38px;
    width: 100%;
    line-height: 1.3;
}

.form-control input:focus {
    outline: none;
    border: 1px solid #000;
}

.form-control sup {
    color: red;
}

.form button[type="submit"] {
    background-color: var(--primary);
    color: #fff;
    font-family: "Jost";
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 1em;
    text-transform: uppercase;
    margin-top: 1rem;
}

.fade-enter-from {
    animation-name: fadeInLeft;
    animation-duration: .3s;
    animation-delay: 5s;
}
</style>