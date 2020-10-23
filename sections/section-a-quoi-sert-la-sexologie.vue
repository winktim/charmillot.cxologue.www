<template>
  <app-section
    :id="section.id"
    :title="section.title"
    :image="section.image"
    :bg-color="section.alternateBgColor || section.bgColor"
    :fg-color="section.alternateFgColor || section.fgColor"
  >
    <p class="drop-cap">
      Dans notre société, nous parlons beaucoup de l’importance de maintenir une
      bonne santé physique, mentale, relationnelle et aussi une bonne
      <u>santé sexuelle</u>. Mais, comment évaluer notre santé sexuelle? Quel
      est notre degré de satisfaction sexuelle, relationnelle, émotionnelle ?
    </p>
    <br />
    <p>
      Une sexualité épanouie repose sur les habiletés à ressentir et à jouer
      avec son corps, son cœur et son esprit, d’une manière
      <strong>consentie, conscientisée et diversifiée</strong>.
    </p>
    <br />
    <p>Durant notre existence,</p>
    <ul class="list-disc pl-6 mb-6">
      <li>
        peuvent survenir des dysfonctionnements, des pertes, des impossibilités,
        des échecs, des dépendances
      </li>
      <li>
        peuvent naître de nouveaux désirs, souhaits, envies, questionnements,
        découvertes.
      </li>
    </ul>
    <p>
      La sexologie peut améliorer et embellir ces variations.
      <br />
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
