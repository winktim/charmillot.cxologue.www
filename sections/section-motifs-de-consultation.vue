<template>
  <app-section
    :id="section.id"
    :title="section.title"
    :image="section.image"
    :bgColor="section.alternateBgColor || section.bgColor"
    :fgColor="section.fgColor"
  >
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
