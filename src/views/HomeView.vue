<script setup lang="ts">
import { onBeforeMount, onMounted, ref, type Ref, computed } from 'vue';
import Anthem from '../components/Anthem.vue'
import { imageLink } from '@/helpers/image-link';
import Carousel from '@/components/carousel/Carousel.vue'
import CarouselItem from '@/components/carousel/CarouselItem.vue'
const images: Ref<string[]> = ref(['Male-Students-Group-2', 'Female-Students-Group-1', 'Students-Strolling-2'])
const current: Ref<number> = ref(0);
const direction = ref('left')
const interval: Ref<null | number> = ref(null)
const currentSlide = (index: number) => {
  current.value = index
}
const transition = computed(() => direction.value === 'right' ? 'slide-out' : 'slide-in')
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
  <main>
    <div class="hero">
      <div class="overlay"></div>
      <div class="container">
        <h2>Welcome to</h2>
        <h1 class="animated-text">Crowe international schools</h1>
        <p><b>MOTTO</b>:Leading with Cognition</p>
        <div class="link">
          <router-link to="/admissions">Admissions</router-link>
          <router-link to="/contact">Contact us</router-link>
        </div>
      </div>
    </div>
    <div class="div">
      <div class="card">
        <img src="../assets/parading-with-guns.jpg" />
        <div class="circle">
          <i class="bi bi-images"></i>
        </div>
        <h2>Crowe News</h2>
        <router-link to="/admissions">View More</router-link>
      </div>
      <div class="card">
        <img src="../assets/Students-Dancing-1024x731.jpg" />
        <div class="circle">
          <i class="bi bi-megaphone"></i>
        </div>
        <h2>Our Gallery</h2>
        <router-link to="/admissions">View More</router-link>
      </div>
      <div class="card">
        <img src="../assets/Pupils-Boxing-pvlhr8w2km7qcz3kgie7ujgze2h9voabcbf5z1l8co.jpg" />
        <div class="circle">
          <i class="bi bi-newspaper"></i>
        </div>
        <h2>Crowe Events</h2>
        <router-link to="/admissions">View More</router-link>
      </div>
    </div>
    <div class="welcome">
      <div class="img">
        <img src="../assets/Director-2.jpg" />
      </div>
      <div class="message">
        <h2>Welcome Message</h2>
        <p>
          Welcome to Crowe International Schools, we are a private Nursery, Primary and Secondary School located in Iwo,
          Osun State of Nigeria.</p>
        <p>Over the years we have continued to facilitate the development of young minds and our academic success is
          recognised nationally.</p>
        <p>We are a place where students thrive knowing that they are loved, here they develop a thirst for learning and a
          sincere love for God.</p>
        <p>At Crowe International Schools, we inspire each child to achieve their God given individual personal
          excellence.
          As a result, they grow to become valuable members of our global community.
          Guided by the Nigerian Education Curriculum, we cater for children aged 18 months to young adults aged 18 years.
        </p>
      </div>
    </div>
    <section class="available">
      <h2>Available Classes</h2>
      <p>See classes available at <b>Crowe International Schools</b> for your child enrollment.</p>
      <div class="available-cards">
        <div class="available-card">
          <div class="available-circle">
            <i> <font-awesome-icon icon="fa fa-eraser"></font-awesome-icon></i>
          </div>
          <h3>Creche</h3>
        </div>
        <div class="available-card">
          <div class="available-circle">
            <i> <font-awesome-icon icon="fa fa-pencil"></font-awesome-icon></i>
          </div>
          <h3>Nursery</h3>
        </div>
        <div class="available-card">
          <div class="available-circle">
            <i> <font-awesome-icon icon="fa fa-book-open"></font-awesome-icon></i>
          </div>
          <h3>Primary</h3>
        </div>
        <div class="available-card">
          <div class="available-circle">
            <i> <font-awesome-icon icon="fa fa-book-open-reader"></font-awesome-icon></i>
          </div>
          <h3>Secondary</h3>
        </div>
      </div>
    </section>
    <section class="about-us">
      <div class="left">
        <h2>About us</h2>
        <p><strong>Crowe International Schools,</strong> Iwo, Osun State is a Government Approved Elementary, Middle and
          High School
          Committed to Building and Grooming Future Leaders, Facilitating Creative and Innovative Ideas, Promoting
          Religious
          and Ethnic Tolerance and Setting the Pace for others to model.</p>
        <p>It is not just an Institution excellent in Learning but also in Character.</p>
        <div class="about-div">
          <div>
            <h2>Our Mission</h2>
            <p>To raise scholars with high level of excellence, through the dissemination of relevant and contemporary
              knowledge that will enhance their capacity to make the world a better place.</p>
          </div>
          <div>
            <h2>Our Vision</h2>
            <p>Crowe School shall be an internationally recognized citadel of learning, that’s committed to raising
              excellent and morally sound problem-solving scholars.</p>
          </div>
        </div>
        <router-link to="/about-us">More about us</router-link>
      </div>
      <div class="right">
        <div class="image">
          <i @click="prev(-1)" class="bi bi-chevron-left"></i>
          <i @click="next(1)" class="bi bi-chevron-right"></i>
          <img v-for="(img, index) in images" v-show="index === current" :src="imageLink(img)" :alt="img" />
          <div class="dot">
            <div v-for="(img, index) in images" @click="switchSlide(index)"
              :class="index === current ? 'active-dot' : ''">
            </div>
          </div>
        </div>
      </div>
    </section>
    <anthem></anthem>
    <carousel-item></carousel-item>
  </main>
</template>
<style scoped>
main {
  background-color: #fafafa;
}

.hero {
  background-image: url('../../assets/graduants-celebrating.jpg');
  width: 100%;
  height: max-content;
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
  padding: 2rem 1rem;
}

@keyframes background {
  0% {

    background-image: url('../assets/graduants-celebrating.jpg');
  }

  20% {
    background-image: url('../assets/Crowe-Schools-2D.png');
  }

  40% {
    background-image: url('../assets/Crowe-with-Students-2.jpg');
  }

  60% {
    background-image: url('../assets/Male-Students-Group-2.jpg');
  }

  80% {
    background-image: url('../assets/Female-Students-Group-1.jpg');
  }

  100% {
    background-image: url('../assets/Students-Strolling-2.jpg');
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

.container {
  position: relative;
  z-index: 100;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: #fff;
  /* Add your desired styling for the container */
}

.container h1 {
  font-size: 55px;
}

.container h2 {
  font-size: 40px;

}

.container p,
.container b {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  font-size: 18px;
}

.container h1,
.container h2 {
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 1.2;
}

.animated-text {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.1em solid #fff;
  animation: typing 2s steps(20) infinite;
}

.link {
  display: flex;
  gap: 3rem;
  justify-content: center;

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

.div {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.card {
  width: 30%;
  border-radius: 10px;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation-duration: .3s;
}

.circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--secondary);
  display: flex;

  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: -1.5rem;
  position: relative;
  z-index: 10;
}

.circle i {
  font-size: 30px;
  font-weight: 900;
  color: var(--primary);
  fill: var(--primary);
}

.card img {
  width: 100%;
}

.card h2 {
  text-align: center;
  color: var(--primary);
}

.card a {
  all: unset;
  color: var(--primary);
  background-color: var(--secondary);
  border-radius: 35px;
  text-align: center;
  padding: 0.5rem;
  font-weight: bold;
  transition: all .3s;
  cursor: pointer;
}

.card:nth-child(1) {
  animation-name: fadeInLeft;
}

.card:nth-child(2) {
  animation-name: fadeInRight;
}

.card:nth-child(3) {
  animation-name: fadeInDown;
}

.card a:hover {
  transform: scale(1.1);
  background-color: var(--primary);
  color: var(--secondary);
}

.welcome {
  display: flex;
  width: calc(100% - 2rem);
  margin: 2rem auto;
  gap: 2rem;
  padding: 1rem;
}

.message {
  width: 60%;
}

.img {
  width: 35%;
  background-color: var(--secondary);
  padding: 1rem;
  border-radius: 35px 0 35px 0;
}

.img img {
  width: 100%;
  height: 100%;
  border-radius: 35px 0 35px 0;
}

.message h2,
.available h2,
.about-us h2 {
  text-align: center;
  color: var(--primary);
  font-size: 40px;
}

.message p {
  color: #3a4f66;
  font-size: 18px;
  word-wrap: break-word;

  font-weight: 400;
}

.available-cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: calc(100% - 2rem);
  flex-wrap: wrap;
  margin: 2rem auto;
  padding: 2rem;
}

.available p {
  text-align: center;
  font-size: 18px;
  color: #3a4f66;
}

.available-card {
  border-radius: 15px;
  box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  animation-duration: .3s;
}

.available-circle {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary);
}

.available-circle i {
  fill: var(--primary);
  color: var(--primary);
  font-size: 30px;
}

.available-card h3 {
  color: var(--primary);
  text-transform: capitalize;
}

.available-card:nth-child(1),
.available-card:nth-child(2) {
  animation-name: fadeInLeft;
}

.available-card:nth-child(3),
.available-card:nth-child(4) {
  animation-name: fadeInRight;
}

.about-us {
  display: flex;
  width: calc(100% - 2rem);
  margin: 2rem auto;
  gap: 1rem;
  justify-content: center;

}

.left {
  width: 50%;
}

.right {
  background-color: var(--secondary);
  width: 40%;
  border-radius: 10px;
  padding: 1rem;
}

.about-us p {
  color: #3a4f66;
  text-align: start;
}

.about-div {
  display: flex;
  gap: 1.5rem;
}

.about-div div {
  width: 50%;
}

.about-us a {
  all: unset;
  text-align: center;
  color: var(--primary);
  background-color: var(--secondary);
  padding: 0.6rem 1.5rem;
  margin: 0 auto;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  width: max-content;
  cursor: pointer;
  transition: all .3s;
  font-weight: 600;
}

.about-us a:hover {
  background-color: var(--primary);
  color: var(--secondary);
}

.image {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.image img {
  width: 100%;
  height: 100%;
  transition: all .3s;
  animation-name: slide;
  animation-duration: .3s;
}

@keyframes slide {
  0% {
    transform: translate3d(100%, 0, 0);
  }

  100% {
    transform: none;
  }
}

.image i {
  color: var(--primary);
  fill: var(--primary);
  font-size: 25px;
  font-weight: 900;
  cursor: pointer;
}

.image i:first-child {
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 10;
}

.image i:last-of-type {
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 100;
}

.dot {
  position: absolute;
  bottom: 4px;
  display: flex;
  z-index: 10;
  justify-content: center;
  gap: 0.4rem;
  left: 50%;
  transform: translate(-50%, -50%);
}

.dot div {
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background-color: var(--secondary);
  cursor: pointer;
}

.active-dot {
  background-color: var(--primary) !important;
}



@keyframes typing {
  0% {
    width: 0;
    /* Start with no width (hidden) */
  }

  100% {
    width: 100%;
    /* Gradually reveal the whole text */
  }
}

@media screen and (max-width:900px) {
  .about-us {
    flex-direction: column;
  }

  .left,
  .right {
    width: 100%
  }
}

@media screen and (max-width:785px) {
  .card {
    width: 50%;
  }

  .hero h1 {
    font-size: 30px;
  }

  .div,
  .about-div div {
    width: 100%;
  }

}

@media screen and (max-width:630px) {
  .img {
    display: none;
  }

  .available-card {
    width: 50;
  }

  .message {
    width: 100%;
  }

}

@media screen and (max-width:520px) {
  .hero h1 {
    font-size: 18px;
  }

  .card {
    width: calc(95% - 2rem);
    margin: auto;
  }

  .welcome {
    width: calc(100% - 2rem);
    padding: 1rem 0;
  }

  .card img {
    height: 200px;
  }

  .available-card {
    width: 95%;
  }
}

/* Carousel Animation */
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}

.slide-in-enter-from {
  transform: translateX(-100%);
}

.slide-in-leave-to {
  transform: translateX(100%);
}

.slide-out-enter-from {
  transform: translateX(100%);
}

.slide-out-leave-to {
  transform: translateX(-100%);
}
</style>
