<template>
  <app-actualite
    :id="actualite.id"
    :title="actualite.title"
    :date="actualite.date"
    :image="actualite.image"
    :light-image="actualite.lightImage"
  >
    <p class="flex flex-col mb-8">
      <span class="font-bold italic text-center"
        >«&nbsp;L'érotisme est à l'amour ce que les bulles sont au champagne…<br />il
        le sublime&nbsp;»</span
      >
      <span class="text-right">Madame Chipie</span>
    </p>
  </app-actualite>
</template>
<script>
import AppActualite from '../components/app-actualite'
export default {
  name: 'ActualiteCitation0721',
  components: { AppActualite },
  computed: {
    actualite() {
      return this.$store.getters.actualites[5]
    },
  },
}
</script>
