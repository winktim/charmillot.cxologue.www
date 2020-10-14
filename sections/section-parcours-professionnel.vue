<template>
  <app-section
    :id="section.id"
    :title="section.title"
    :image="section.image"
    :bgColor="section.alternateBgColor || section.bgColor"
    :fgColor="section.fgColor"
  >
    <div class="flex flex-col lg:flex-row lg:mb-4">
      <div>
        <p>C'XOLOGUE est oppéré par Catherine Charmillot.</p>
        <h3 class="font-bold pt-2 pb-1">Reconnaissances</h3>
        <ul class="list-disc pl-6">
          <li>
            Diplôme d’études avancées (DAS) en santé sexuelle et reproductive
          </li>
          <li>Éducatrice et conseillère en santé sexuelle</li>
          <li>Formatrice en santé sexuelle</li>
          <li>Sexologue 2ème niveau de formation en sexocorporel</li>
        </ul>
        <br />
        <p>
          J’anime avec beaucoup d’enthousiasme des cours d’éducation sexuelle
          dans les écoles pour la promotion et la prévention de la santé
          sexuelle.<br />
          Je travaille également comme conseillère en santé sexuelle au centre
          de santé sexuelle-planning familial jurassien pour informer, orienter
          et soutenir les personnes qui consultent.
        </p>
        <br />
        <p>
          Dans ces activités, j’ai constaté que la sexualité et le plaisir
          améliorent la vie des gens et sont une base solide à une meilleure
          santé en général. Delà est né mon désir d’approfondir mes
          connaissances en sexologie. Comme sexologue j’aimerais faire tomber
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
