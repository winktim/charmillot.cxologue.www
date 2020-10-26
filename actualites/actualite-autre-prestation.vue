<template>
  <app-actualite
    :id="actualite.id"
    :title="actualite.title"
    :date="actualite.date"
    :image="actualite.image"
    :light-image="actualite.lightImage"
  >
    <p>
      Vous souhaitez organiser une conférence publique, un débat ou une
      information sur les thèmes de la sexualité humaine ou de la santé sexuelle
      ?
    </p>
    <br />
    <p>
      Je pourrais collaborer à votre événement et me tiens à disposition pour
      tout renseignement.
    </p>
  </app-actualite>
</template>
<script>
import AppActualite from '../components/app-actualite'
export default {
  name: 'ActualiteAutrePrestation',
  components: { AppActualite },
  computed: {
    actualite() {
      return this.$store.getters.actualites[2]
    },
  },
}
</script>
