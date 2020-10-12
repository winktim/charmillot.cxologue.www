<template>
  <div class="font-content w-screen h-screen flex overflow-x-hidden">
    <main class="flex-grow">
      <nuxt />
    </main>
    <message-box></message-box>
    <div
      v-if="isIE && !hideIEWarning"
      class="fixed bottom-0 left-0 w-full bg-orange-300 text-gray-900 text-center flex flex-col"
    >
      <i
        @click="hideIEWarning = true"
        class="material-icons clickable w-full p-4"
        >close</i
      >
      <span class="p-4 pt-0">
        Pour tirer meilleur parti de ce site web, nous recommandons
        l'utilisation de
        <a class="pink-link" href="https://www.google.ch/chrome/"
          >Google Chrome</a
        >
        ou
        <a class="pink-link" href="https://www.mozilla.org/fr/firefox/"
          >Mozilla Firefox</a
        >. Si votre entreprise ne vous permet pas de les installer, pensez à
        <a class="pink-link" href="https://www.microsoft.com/fr-fr/edge"
          >Microsoft Edge</a
        >
        qui devrait déjà se trouver sur votre ordinateur.
      </span>
    </div>
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
