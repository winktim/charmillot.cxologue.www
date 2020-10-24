<template>
  <app-actualite
    :id="actualite.id"
    :title="actualite.title"
    :date="actualite.date"
    :image="actualite.image"
    :light-image="actualite.lightImage"
  >
    <p class="flex flex-col">
      <span class="font-bold italic text-center"
        >«&nbsp;Le sexe apaise les tensions. L'amour les provoque&nbsp;»</span
      >
      <span class="text-right">Woody Allen</span>
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
      return this.$store.getters.actualites[1]
    },
  },
}
</script>
