<template>
  <app-actualite
    :id="actualite.id"
    :title="actualite.title"
    :date="actualite.date"
    :image="actualite.image"
    :light-image="actualite.lightImage"
  >
    <p>
      Les ingrédients intellectuels, émotionnels et corporels sont en constante
      interaction pour votre satisfaction sexuelle.<br />
      Je pourrais être la balance qui pèse et soupèse le dosage essentiel.
    </p>
  </app-actualite>
</template>
<script>
import AppActualite from '../components/app-actualite'
export default {
  name: 'ActualiteCitationSousLaFleur',
  components: { AppActualite },
  computed: {
    actualite() {
      return this.$store.getters.actualites[1]
    },
  },
}
</script>
