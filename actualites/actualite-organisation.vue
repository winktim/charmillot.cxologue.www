<template>
  <app-actualite
    :id="actualite.id"
    :title="actualite.title"
    :date="actualite.date"
    :image="actualite.image"
    :light-image="actualite.lightImage"
  >
    <p>
      Je pourrais collaborer à votre événement<br />
      Et me tiens à disposition pour tout renseignement
    </p>
  </app-actualite>
</template>
<script>
import AppActualite from '../components/app-actualite'
export default {
  name: 'ActualiteOrganisation',
  components: { AppActualite },
  computed: {
    actualite() {
      return this.$store.getters.actualites[2]
    },
  },
}
</script>
