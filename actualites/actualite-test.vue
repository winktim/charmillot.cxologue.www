<template>
  <app-actualite
    :id="actualite.id"
    :title="actualite.title"
    :date="actualite.date"
    :image="actualite.image"
    :light-image="actualite.lightImage"
  >
    <p>Je suis une actualité de test (1)</p>
  </app-actualite>
</template>
<script>
import AppActualite from '../components/app-actualite'
export default {
  name: 'ActualiteLancementDuSite',
  components: { AppActualite },
  computed: {
    actualite() {
      return this.$store.getters.actualites[1]
    },
  },
}
</script>
