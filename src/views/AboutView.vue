<script setup lang="ts">
import { imageLink } from '../helpers/image-link';
import HeroImage from "../components/UI/HeroImage.vue"
import Anthem from '../components/Anthem.vue'
const arrays: { img: string, title: string, position: string }[] = [{
  img: 'director', title: 'Adetayo A. ALLI', position: 'Director'
}, { img: 'admin', title: 'Moses A. Jessey', position: 'Registrar & Head of ADMIN' },
{ img: 'bursar', title: 'Olalere P. Olaoluwa', position: 'Bursar' }, { img: 'supervisor', title: 'Adeola Kayode', position: 'Supervisor' }]
</script>
<template>
  <hero-image text="About us"></hero-image>
  <!-- <div class="hero">
    <div class="overlay"></div>
    <h2>About us</h2>
  </div> -->
  <section class="section">
    <h1>Brief History</h1>
    <div class="text">
      <p>The name <b>‘CROWE‘ </b>is derived from the name of a company registered as <b>Crown Worldwide Events
          Limited,</b>
        of which
        <b>Crowe Group of Schools</b> is a subsidiary.
        The vision of the school came in the year <b>2000.</b> The school is located in <b>Iwo City in Osun State,
          Nigeria</b> and the
        exact venue is the current location KM3, Iwo Ejigbo Road. Foundations and construction began in 2002. The school
        started academic operation on the <b>26th of September, 2009.</b>
      </p>
      <p>Before this time, <b>(precisely in 2008),</b> another portion of land was acquired in addition to the one that
        housed the
        school. About 4.5 hectares of land, which is 500 meters away from the school site. This land is to house an
        international football academy and the boarding students.</p>
      <p>Crowe schools are located in a beautiful and serene environment, conducive for teaching and learning in all
        ramifications. Amenities and infrastructural facilities are of international standard.</p>
      <p>However, the vision of the school was abrupted and brought to a halt, due to the painful demise of the principal
        founders in <b>2015</b> and <b>2016</b> respectively, This brought the school to a deteriorating state. After many
        years of poor
        management and reckless administration, the board of directors thought it good to lease the school in 2020. This
        decision pedaled in new season for the school.</p>
      <p>The new management under the leadership of <b>Mr. Adetayo A. ALLI,</b> an educational consultant and an academic
        echelon,
        has brought about new look, restructuring, and an unprecedented awakening to the school.
        The new management, among many other things done to reawaken the school is the rebranding of the school logo, a
        touch of change on the school uniform to give it a new look, creation of a continuous and relevant vision and
        mission statement for the school, renovation and revitalization of the school laboratories and ICT room, and
        hiring of highly effective and qualified teachers. Of which positive results have began to stream in.</p>
      <i>Within this short period of time under the new management, <b>CROWE SCHOOLS</b> of today, now stands shoulder to
        shoulder
        with her counterparts on academic grounds globally…</i>
    </div>
    <div class="cards">
      <div class="card">
        <div class="circle">
          <i>
            <font-awesome-icon icon="fa-solid fa-walking"></font-awesome-icon>
          </i>
        </div>
        <h3>our mission</h3>
        <p>To raise scholars with high level of excellence, through the dissemination of relevant and contemporary
          knowledge that will enhance their capacity to make the world a better place.</p>
      </div>
      <div class="card">
        <div class="circle">
          <i>
            <font-awesome-icon icon="fa-solid fa-eye"></font-awesome-icon>
          </i>
        </div>
        <h3>Our vision</h3>
        <p>Crowe Schools shall be an internationally recognized citadel of learning, that is committed to raising
          excellent and morally sound problem-solving scholars.</p>
      </div>
    </div>
    <anthem></anthem>
    <div class="management">
      <h2>Management Staff</h2>
      <h6>You will find our staff to be warm, friendly and committed when you visit our school.
        Don’t be surprised to see us being very strict, or laughing out loud! Both of these elements fit firmly within our
        values.
      </h6>
      <div class="management-cards">
        <div v-for="arr in arrays" :key="arr.title"><img :src="imageLink(arr.img)" :alt="arr.title" />
          <h3>{{ arr.title }}</h3>
          <strong>{{ arr.position }}</strong>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.section {
  padding: 4rem 1rem;
  background-color: #fafafa;
}

.section h1 {
  text-align: center;
  color: var(--primary);
  font-size: 35px;
  text-transform: capitalize;
}

.text {
  padding: 1rem;
}

.text * {
  color: #3a4f66;
  line-height: 2;
  font-size: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
}

.cards {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  flex-wrap: wrap;
}

.card {
  width: 100%;
  box-shadow: 0 5px 10px rgba(44, 62, 80, 0.2);
  border-radius: 10px;
  padding: 1rem;

}

.circle {
  border-radius: 50%;
  height: 100px;
  width: 100px;
  padding: 0.2rem;
  background-color: var(--secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

}

.circle i svg,
.anthem i svg {
  fill: var(--primary) !important;
  color: var(--primary);
}

.circle i {
  font-size: 40px;
}

.card h3 {
  color: var(--primary);
  text-transform: capitalize;
  margin-top: 1rem;
  text-align: center;
}

.card p {
  color: #3a4f66;
  text-align: center;
}



.anthem h2,
.management h2 {
  text-align: center;
  color: var(--primary);
}

.management h6 {
  font-size: 18px;
  color: #3a4f66;
  font-weight: 500;
  text-align: center;
}

.management-cards {
  display: grid;
  gap: 1.5rem;
}



.management-cards div {
  box-shadow: 0 3px 10px rgba(44, 62, 80, 0.2);
  border-radius: 10px;
  padding: 1.5rem 1rem;
  width: 100%;
  text-align: center;
}

.management-cards img {
  width: 95%;
  margin: 0 auto;
}

.management-cards h3 {
  color: var(--primary);
  font-size: 22px;

}

.management-cards strong {
  color: #3a4f66;
  font-weight: bold;
}

@media screen and (min-width:520px) {
  .card {
    width: 50%;
  }

  .cards {
    flex-wrap: nowrap;
  }

  .management-cards {
    flex-wrap: wrap;
  }



  .management-cards div {
    width: 95%;
  }

  .management-cards {
    grid-template-columns: 50% 50%;
  }
}

@media screen and (min-width:1000px) {
  .section {
    padding: 4rem 6rem;
  }



  .management-cards {
    grid-template-columns: 25% 25% 25% 25%;
  }

  .management-cards div {
    width: 100%;
  }

}
</style>
