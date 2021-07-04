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
        >«&nbsp;Il y a des regards qui te font perdre le fil... l'aiguille, le
        dé à coudre, le bouton<br />
        et la robe&nbsp;»</span
      >
      <span class="text-right">BlondieBarbie01</span>
    </p>
  </app-actualite>
</template>
<script>
import AppActualite from '../components/app-actualite'
export default {
  name: 'ActualiteCitation0921',
  components: { AppActualite },
  computed: {
    actualite() {
      return this.$store.getters.actualites[6]
    },
  },
}
</script>
