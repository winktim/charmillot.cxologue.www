<template>
  <app-section
    :id="section.id"
    :title="section.title"
    :image="section.image"
    :bg-color="section.alternateBgColor || section.bgColor"
    :fg-color="section.alternateFgColor || section.fgColor"
  >
    <p class="drop-cap">
      La démarche sexocorporelle se veut <strong>bienveillante</strong> ; elle
      se base sur les acquis et les limites de la personne. Les outils
      thérapeutiques sont d’ordre verbal (entretien de consultation) et corporel
      (programme d’exercices à réaliser à la maison).
    </p>
    <br />
    <p>
      Une évaluation précise du fonctionnement de la personne intéressée
      permettra l’établissement d’un diagnostic. Il sera alors possible de lui
      restituer la logique et la compréhension de son comportement dans la
      sphère de sa sexualité. En déterminant précisément sa demande, un plan de
      traitement sera proposé afin de développer de nouvelles habiletés
      corporelles, sensorielles ou émotionnelles.
    </p>
    <br />
    <p>
      L’approche sexocorporelle a été créée il y a une cinquantaine d’années au
      Québec par le Dr Jean-Yves Desjardins. La distinction entre santé mentale
      et santé sexuelle a permis son développement. C’est une sexologie
      intégrative, construite à partir de connaissances et d’observations de la
      réalité. Elle étudie le corps explicite (observable) et le corps implicite
      (émotions, perceptions et mentalisations) qui sont interactifs et
      indissociables.
    </p>
    <br />
    <p>
      Les protocoles de traitement offrent de nouvelles ressources et
      améliorations afin d’aider les hommes et les femmes à mieux vivre leur
      sexualité et leur vie amoureuse.<br />
      Le sexocorporel reconnaît la notion de santé sexuelle qui ancre ses bases
      autour de cinq axes de la sexualité humaine :
    </p>

    <ul class="list-disc my-6 pl-6">
      <li class="my-3">
        Les composantes FONDAMENTALES<br />
        Identité chromosomique, identité de genre, réflexes sexuels
      </li>
      <li class="my-3">
        Les composantes PHYSIOLOGIQUES<br />
        capacité à ressentir son corps, sources, modes et courbes d’excitation
      </li>
      <li class="my-3">
        Les composantes COGNITIVES<br />
        Système de pensées, connaissances, croyances, idéologies, jugements de
        valeur
      </li>
      <li class="my-3">
        Les composantes PERSONNELLES<br />
        Désir, imaginaire, assertivité, intensité, codes en lien avec la
        sexualité
      </li>
      <li class="my-3">
        Les composantes RELATIONNELLES<br />
        Sentiment amoureux, communication, séduction, habiletés érotiques
      </li>
    </ul>
  </app-section>
</template>
<script>
import AppSection from '../components/app-section'
export default {
  name: 'SectionSyntheseDeLApproche',
  components: { AppSection },
  computed: {
    section() {
      return this.$store.getters.sections.row2[0]
    },
  },
}
</script>
