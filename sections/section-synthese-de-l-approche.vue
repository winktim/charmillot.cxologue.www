<template>
  <app-section
    :id="section.id"
    :title="section.title"
    :image="section.image"
    :bgColor="section.alternateBgColor || section.bgColor"
    :fgColor="section.fgColor"
  >
    <p>
      L’approche sexocorporelle, créée il y a une cinquantaine d’années par le
      Dr Jean-Yves Desjardins, est une approche de sexologie clinique. La
      distinction entre santé mentale et santé sexuelle a permis son
      développement. Les protocoles de traitement offrent de nouvelles
      ressources et améliorations afin d’aider les hommes et les femmes à mieux
      vivre leur sexualité et leur vie amoureuse.<br />
      Le sexocorporel reconnaît la notion de santé sexuelle qui ancre ses bases
      autour de cinq axes de la sexualité humaine :
    </p>

    <ul>
      <li>
        Les composantes FONDAMENTALES<br />
        Identité chromosomique, identité de genre, réflexes sexuels
      </li>
      <li>
        Les composantes PHYSIOLOGIQUES<br />
        capacité à ressentir son corps, sources, modes et courbe d’excitation
      </li>
      <li>
        Les composantes COGNITIVES<br />
        Système de pensées, connaissances, croyances, idéologies, jugements de
        valeur
      </li>
      <li>
        Les composantes PERSONNELLES<br />
        Désir, imaginaire, assertivité, intensité, codes en lien avec la
        sexualité
      </li>
      <li>
        Les composantes RELATIONNELLES<br />
        Sentiment amoureux, communication, séduction, habiletés érotiques
      </li>
    </ul>

    <p>
      Le corps et l’esprit sont deux entités indissociables. L’approche
      sexocorporelle est une sexologie intégrative, construite à partir de
      connaissances et d’observations de la réalité. Elle étudie le corps et ses
      émotions dans les différentes sphères de vie (intime, privée ou
      professionnelle). Les émotions sont des réactions à nos pensées positives
      ou négatives qui trouvent leurs résonances dans le corps (comme un
      miroir). Cela veut dire qu’en modifiant le corps dans l’espace (par
      exemple la posture), nous pouvons modifier notre perception de nous-mêmes,
      du plaisir, et diminuer ou augmenter l’intensité de nos émotions et de nos
      charges sexuelles. L’un influence l’autre, et vice-versa.
    </p>

    <p>
      Grâce aux discussions lors des consultations, l’analyse et l’observation
      des divers axes permettront de dévoiler la « logique de système » de la
      personne intéressée. Il sera alors possible de restituer au client la
      compréhension de son fonctionnement dans la sphère de sa sexualité en
      déterminant précisément sa demande. La démarche sexocorporelle se veut
      bienveillante ; elle se base sur les acquis et les limites de la personne
      pour développer de nouvelles habiletés afin d’atteindre ses objectifs et
      ses besoins.
    </p>

    <p>
      Les outils thérapeutiques du sexocorporel sont d’ordre verbal (entretien
      de consultation) et corporel (programme d’exercices à réaliser à la
      maison).
    </p>
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
