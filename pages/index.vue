<template>
  <main class="w-full relative">
    <div class="w-full h-screen header-image absolute top-0 left-0"></div>
    <app-header></app-header>
    <app-forground>
      <app-menu></app-menu>
      <section-a-quoi-sert-la-sexologie></section-a-quoi-sert-la-sexologie>
      <section-catherine-charmillot></section-catherine-charmillot>
      <section-motifs-de-consultation></section-motifs-de-consultation>
      <section-synthese-de-l-approche></section-synthese-de-l-approche>
      <section-actualites></section-actualites>
      <section-prendre-contact></section-prendre-contact>
    </app-forground>
    <app-footer></app-footer>

    <img
      src="https://analytics.naito.one/matomo.php?idsite=3&amp;rec=1&amp;action_name=Index"
      style="border: 0"
      alt=""
    />
  </main>
</template>
<script>
import AppHeader from '../components/app-header'
import AppMenu from '../components/app-menu'
import AppForground from '../components/app-forground'
import SectionAQuoiSertLaSexologie from '../sections/section-a-quoi-sert-la-sexologie'
import SectionCatherineCharmillot from '../sections/section-catherine-charmillot'
import SectionMotifsDeConsultation from '../sections/section-motifs-de-consultation'
import SectionSyntheseDeLApproche from '../sections/section-synthese-de-l-approche'
import SectionActualites from '../sections/section-actualites'
import SectionPrendreContact from '../sections/section-prendre-contact'
import AppFooter from '../components/app-footer'

export default {
  name: 'Index',
  components: {
    AppHeader,
    AppMenu,
    AppForground,
    SectionAQuoiSertLaSexologie,
    SectionCatherineCharmillot,
    SectionMotifsDeConsultation,
    SectionSyntheseDeLApproche,
    SectionActualites,
    SectionPrendreContact,
    AppFooter,
  },
  // TODO: too laggy
  /*
  mounted() {
    // look for scrolling
    // The debounce function receives our function as a parameter
    const debounce = (fn) => {
      // This holds the requestAnimationFrame reference, so we can cancel it if we wish
      let frame
      // The debounce function returns a new function that can receive a variable number of arguments
      return (...params) => {
        // If the frame variable has been defined, clear it now, and queue for next frame
        if (frame) {
          cancelAnimationFrame(frame)
        }
        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {
          // Call our function and pass any params we received
          fn(...params)
        })
      }
    }
    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
      // document.documentElement.dataset.scroll = this.$refs.scroller.scrollTop

      const current = document.documentElement.dataset.scroll
      if (this.$refs.scroller.scrollTop === 0) {
        if (current !== '0') {
          document.documentElement.dataset.scroll = '0'
        }
      } else {
        if (current !== '1') {
          document.documentElement.dataset.scroll = '1'
        }
      }

     }

    // Listen for new scroll events, here we debounce our `storeScroll` function
    this.$refs.scroller.addEventListener('scroll', debounce(storeScroll), {
      passive: true,
    })
    // Update scroll position for first time
    storeScroll()
  },
*/
}
</script>
