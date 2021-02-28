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
        >«&nbsp;L’érotisme est l’une des bases de la connaissance de soi, aussi
        indispensable que la poésie&nbsp;»</span
      >
      <span class="text-right">Anaïs Nin</span>
    </p>

    <p>Apprenons à réaliser des vers et des rimes dans la sexualité.</p>
  </app-actualite>
</template>
<script>
import AppActualite from '../components/app-actualite'
export default {
  name: 'ActualiteCitation0321',
  components: { AppActualite },
  computed: {
    actualite() {
      return this.$store.getters.actualites[4]
    },
  },
}
</script>
