<template>
  <div class="w-screen h-screen overflow-x-hidden relative parallax-container">
    <div
      class="w-full h-screen header-image absolute z-bottom parallax-background"
    ></div>
    <app-header></app-header>
    <app-forground>
      <app-menu></app-menu>
      <section-a-quoi-sert-la-sexologie></section-a-quoi-sert-la-sexologie>
      <section-parcours-professionnel></section-parcours-professionnel>
      <section-motifs-de-consultation></section-motifs-de-consultation>
      <section-synthese-de-l-approche></section-synthese-de-l-approche>
    </app-forground>
  </div>
</template>
<script>
import AppHeader from '../components/app-header'
import AppMenu from '../components/app-menu'
import AppForground from '../components/app-forground'
import SectionAQuoiSertLaSexologie from '../sections/section-a-quoi-sert-la-sexologie'
import SectionParcoursProfessionnel from '../sections/section-parcours-professionnel'
import SectionMotifsDeConsultation from '../sections/section-motifs-de-consultation'
import SectionSyntheseDeLApproche from '../sections/section-synthese-de-l-approche.vue'

export default {
  components: {
    AppHeader,
    AppMenu,
    AppForground,
    SectionAQuoiSertLaSexologie,
    SectionParcoursProfessionnel,
    SectionMotifsDeConsultation,
    SectionSyntheseDeLApproche,
  },
}
</script>
