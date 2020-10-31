<template>
  <app-section
    :id="section.id"
    :title="section.title"
    :image="section.image"
    :bg-color="section.alternateBgColor || section.bgColor"
    :fg-color="section.alternateFgColor || section.fgColor"
  >
    <div class="flex flex-col md:flex-row justify-center">
      <!-- first column -->
      <ul
        class="flex flex-col items-center text-gray-100 md:items-start mb-4 md:mb-0"
      >
        <li
          class="py-6 px-10 mb-4 rounded-xl shadow-md bg-c-red-3 flex flex-col items-center md:mr-4 lg:ml-16"
        >
          <h3 class="font-bold text-xl text-center mb-1">
            Apprendre sa sexualité
          </h3>
          <ul class="list-disc pl-6">
            <li>Développer de nouvelles compétences</li>
            <li>Évoluer avec sa situation et son âge</li>
            <li>S'adapter à son, sa ou ses partenaires</li>
          </ul>
        </li>
        <li
          class="py-6 px-10 my-4 rounded-xl shadow-md bg-c-violet-1 flex flex-col items-center md:mr-4"
        >
          <h3 class="font-bold text-xl text-center mb-1">
            Pallier des difficultés relationnelles
          </h3>
          <ul class="list-disc pl-6">
            <li>Questionnement amoureux</li>
            <li>Confusion</li>
            <li>Communication</li>
            <li>Séduction</li>
            <li>Orientation</li>
            <li>Identité</li>
          </ul>
        </li>

        <li
          class="py-6 px-10 mt-4 rounded-xl shadow-md bg-c-red-3 flex flex-col items-center md:mr-4 lg:ml-10"
        >
          <h3 class="font-bold text-xl text-center mb-1">
            Soigner une addiction
          </h3>
          <ul class="list-disc pl-6">
            <li>Masturbation</li>
            <li>Pornographie</li>
            <li>Pratiques sexuelles</li>
            <li>Sexualités diverses</li>
          </ul>
        </li>
      </ul>

      <!-- second column -->
      <ul
        class="flex flex-col items-center text-gray-100 md:items-end mt-4 md:mt-0"
      >
        <li
          class="py-6 px-10 mb-4 md:mb-0 md:mt-4 rounded-xl shadow-md bg-c-violet-1 flex flex-col items-center md:ml-4 md:order-1"
        >
          <h3 class="font-bold text-xl text-center mb-1">
            Remédier à un dysfonctionnement sexuel
          </h3>
          <ul class="list-disc pl-6">
            <li>Perte érection</li>
            <li>Gestion éjaculation</li>
            <li>Anorgasmie</li>
            <li>Vaginisme</li>
            <li>Douleurs</li>
            <li>Blocage</li>
          </ul>
        </li>
        <li
          class="py-6 px-10 mt-4 md:mt-0 md:mb-4 rounded-xl shadow-md bg-c-red-3 flex flex-col items-center md:ml-4 lg:mr-16"
        >
          <h3 class="font-bold text-xl text-center mb-1">
            Améliorer sa satisfaction sexuelle
          </h3>
          <ul class="list-disc pl-6">
            <li>Plaisir</li>
            <li>Désir</li>
            <li>Relation</li>
            <li>Orgasme</li>
            <li>Perturbation</li>
            <li>Variation</li>
            <li>Intensité</li>
            <li>Érotisme</li>
          </ul>
        </li>
      </ul>
    </div>
  </app-section>
</template>
<script>
import AppSection from '../components/app-section'
export default {
  name: 'SectionMotifsDeConsultation',
  components: { AppSection },
  computed: {
    section() {
      return this.$store.getters.sections.row1[2]
    },
  },
}
</script>
