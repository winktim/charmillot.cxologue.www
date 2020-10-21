<template>
  <app-actualite
    :id="actualite.id"
    :title="actualite.title"
    :date="actualite.date"
    :image="actualite.image"
    :light-image="actualite.lightImage"
  >
    <p>
      Bienvenue sur le nouveau site
      <img
        class="inline h-8 ml-1"
        src="/images/logo-colors.svg"
        alt="C'XOLOGUE"
      />
    </p>
    <br />
    <p>
      A tout âge la sexualité s’apprend et se développe semblable à un
      savoir-faire corporel.
    </p>
    <br />
    <p class="text-c-violet-3 font-bold italic">
      Dans l’interprétation de votre partition de musique sexuelle, je pourrais
      être le diapason parfois nécessaire afin de réajuster les notes.
    </p>
  </app-actualite>
</template>
<script>
import AppActualite from '../components/app-actualite'
export default {
  name: 'ActualiteLancementDuSite',
  components: { AppActualite },
  computed: {
    actualite() {
      return this.$store.getters.actualites[0]
    },
  },
}
</script>
