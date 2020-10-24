<template>
  <app-section
    :id="section.id"
    :title="section.title"
    :image="section.image"
    :bg-color="section.alternateBgColor || section.bgColor"
    :fg-color="section.alternateFgColor || section.fgColor"
  >
    <div class="flex flex-col lg:flex-row lg:mb-4">
      <div>
        <ul class="list-disc pl-6">
          <li>
            Diplôme d’études avancées (DAS) en santé sexuelle et reproductive,
            volet éducation (2006-2008)
          </li>
          <li>Formation passerelle volet conseil en santé sexuelle (2013)</li>
          <li>Formatrice en santé sexuelle (2015)</li>
          <li>Sexologue 2 niveaux de formation en sexocorporel (2016-2020)</li>
        </ul>

        <br />
        <p>
          Depuis 2008, j’anime avec beaucoup d’enthousiasme des cours
          d’éducation sexuelle dans les écoles pour la promotion et la
          prévention de la santé sexuelle.<br />
          Depuis 2015, je travaille comme conseillère en santé sexuelle au
          centre de santé sexuelle-planning familial jurassien pour informer,
          orienter et soutenir les personnes qui consultent.
        </p>
        <br />
        <p>
          Dans ces activités, j’ai constaté que la sexualité et le plaisir
          améliorent la vie des gens et sont une base solide à une meilleure
          santé en général. De là est né mon désir d’approfondir mes
          connaissances en sexologie. Comme sexologue, j’aimerais faire tomber
          les tabous qui entourent les sexualités et que vous, être humain
          unique, puissiez venir me consulter en toute transparence.
        </p>
      </div>
      <img
        class="rounded-lg shadow-md my-4 lg:my-0 lg:ml-8 md:w-100 md:mx-auto lg:h-100 lg:w-auto lg:mx-0"
        src="/images/profil.jpg"
        alt="Profil de Catherine Charmillot"
      />
    </div>
    <p>
      <strong>
        Je m’engage à mettre mes compétences humaines et relationnelles ainsi
        que les outils de l’approche sexocorporelle à votre disposition. Une
        écoute attentive sera ma priorité. Mon approche est authentique,
        bienveillante et respectueuse. Je m’efforcerai de prendre soin de votre
        intimité dans le secret professionnel et dans une discrétion totale.
      </strong>
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
