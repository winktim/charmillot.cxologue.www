<template>
  <app-section
    :id="section.id"
    :title="section.title"
    :image="section.image"
    :bgColor="section.alternateBgColor || section.bgColor"
    :fgColor="section.fgColor"
  >
    <p>
      Dans notre société, nous parlons beaucoup de l’importance de maintenir une
      bonne santé physique, mentale, relationnelle et aussi une bonne santé
      sexuelle. Mais, comment évaluer notre santé sexuelle? Quel est notre degré
      de satisfaction sexuelle, relationnelle, émotionnelle ?
    </p>

    <p>
      Une sexualité épanouie repose sur les habiletés à ressentir et à jouer
      avec son corps, son cœur et son esprit, d’une manière consentie,
      conscientisée et diversifiée.
    </p>

    <p>
      Durant notre existence,<br />
      - peuvent survenir des dysfonctionnements, des pertes, des impossibilités,
      des échecs, des dépendances<br />
      - peuvent naître de nouveaux désirs, souhaits, envies, questionnements,
      découvertes. La sexologie peut améliorer et embellir ces variations.
    </p>

    <p>
      La sexualité est apprise et évolutive, seul le réflexe neurologique
      d’excitation génitale est inné. La façon dont le corps va le mettre en
      action nécessite un apprentissage qui démarre dès la petite enfance. Quand
      une personne consulte, c’est que cet apprentissage ne lui a pas permis
      d’éclore une sexualité satisfaisante et/ou que les apprentissages sont
      lacunaires actuellement.
    </p>
  </app-section>
</template>
<script>
import AppSection from '../components/app-section'
export default {
  name: 'SectionAQuoiSertLaSexologie',
  components: { AppSection },
  computed: {
    section() {
      return this.$store.getters.sections.row1[0]
    },
  },
}
</script>
