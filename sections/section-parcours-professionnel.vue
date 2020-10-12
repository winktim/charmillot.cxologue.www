<template>
  <app-section
    :id="section.id"
    :title="section.title"
    :image="section.image"
    :bgColor="section.alternateBgColor || section.bgColor"
    :fgColor="section.fgColor"
  >
    <p>
      Reconnaissances<br />
      Diplôme d’études avancées (DAS) en santé sexuelle et reproductive<br />
      Éducatrice et conseillère en santé sexuelle<br />
      Formatrice en santé sexuelle<br />
      Sexologue 2ème niveau de formation en sexocorporel<br />
    </p>

    <p>
      J’anime avec beaucoup d’enthousiasme des cours d’éducation sexuelle dans
      les écoles pour la promotion et la prévention de la santé sexuelle.<br />
      Je travaille également comme conseillère en santé sexuelle au centre de
      santé sexuelle-planning familial jurassien pour informer, orienter et
      soutenir les personnes qui consultent.
    </p>

    <p>
      Dans ces activités, j’ai constaté que la sexualité et le plaisir
      améliorent la vie des gens et sont une base solide à une meilleure santé
      en général. Delà est né mon désir d’approfondir mes connaissances en
      sexologie. Comme sexologue j’aimerais faire tomber les tabous qui
      entourent les sexualités et que vous, être humain unique, puissiez venir
      me consulter en toute transparence.
    </p>

    <p>
      Je m’engage à mettre mes compétences humaines et relationnelles ainsi que
      les outils de l’approche sexocorporelle à votre disposition. Une écoute
      attentive sera ma priorité. Mon approche est authentique, bienveillante et
      respectueuse. Je m’efforcerai de prendre soin de votre intimité dans le
      secret professionnel et dans une discrétion totale.
    </p>
  </app-section>
</template>
<script>
import AppSection from '../components/app-section'
export default {
  name: 'SectionParcoursProfessionnel',
  components: { AppSection },
  computed: {
    section() {
      return this.$store.getters.sections.row1[1]
    },
  },
}
</script>
