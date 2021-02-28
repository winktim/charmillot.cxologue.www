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
        >«&nbsp;Le sexe, c’est comme l’air qu’on respire&nbsp;: ça ne semble pas
        important jusqu’à ce qu’il n’y en ait plus&nbsp;»</span
      >
      <span class="text-right">Anonyme</span>
    </p>
  </app-actualite>
</template>
<script>
import AppActualite from '../components/app-actualite'
export default {
  name: 'ActualiteCitation0121',
  components: { AppActualite },
  computed: {
    actualite() {
      return this.$store.getters.actualites[3]
    },
  },
}
</script>
