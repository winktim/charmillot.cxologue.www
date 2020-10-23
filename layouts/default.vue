<template>
  <div class="font-content w-full flex overflow-x-hidden">
    <nuxt />
    <message-box></message-box>
    <div
      v-if="isIE && !hideIEWarning"
      class="fixed bottom-0 left-0 w-full bg-orange-300 text-gray-900 text-center flex flex-col z-10"
    >
      <i
        @click="hideIEWarning = true"
        class="material-icons clickable w-full p-4"
        >close</i
      >
      <span class="p-4 pt-0">
        Pour tirer meilleur parti de ce site web, nous recommandons
        l'utilisation de
        <a class="violet-link" href="https://www.google.ch/chrome/"
          >Google Chrome</a
        >
        ou
        <a class="violet-link" href="https://www.mozilla.org/fr/firefox/"
          >Mozilla Firefox</a
        >. Si votre entreprise ne vous permet pas de les installer, pensez à
        <a class="violet-link" href="https://www.microsoft.com/fr-fr/edge"
          >Microsoft Edge</a
        >
        qui devrait déjà se trouver sur votre ordinateur.
      </span>
    </div>

    <!-- back to top -->
    <a
      title="Revenir en haut de la page"
      aria-label="Revenir en haut de la page"
      href="#"
      class="select-none back-to-top transition-opacity-200 opacity-1 pointer-events-auto fixed bottom-0 right-0 mb-12 mr-4 md:mr-8 p-6 rounded-full shadow-lg bg-gray-100 border-solid border-4 border-gray-300 flex items-center hover:lighten-5 z-10"
    >
      <i class="material-icons text-xl">arrow_upward</i>
    </a>
  </div>
</template>
<script>
import MessageBox from '../components/message-box'

export default {
  components: { MessageBox },
  data() {
    return {
      hideIEWarning: false,
    }
  },
  computed: {
    isIE() {
      return typeof document !== 'undefined' && !!document.documentMode
    },
  },
}
</script>
