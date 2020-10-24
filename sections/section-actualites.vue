<template>
  <div class="w-full mb-16 lg:mb-8">
    <app-section
      class="mb-2 lg:mb-0"
      :id="section.id"
      :title="section.title"
      :image="section.image"
      :bg-color="section.alternateBgColor || section.bgColor"
      :fg-color="section.alternateFgColor || section.fgColor"
      :min-height-screen="false"
      :padding-bottom="false"
    >
      <div
        class="w-full sm:w-120 mx-auto flex justify-between items-center select-none"
      >
        <button
          aria-label="Actualité précédente"
          title="Actualité précédente"
          :disabled="singleActualite"
          class="material-icons text-6xl disabled:text-gray-500"
          @click="previous"
        >
          arrow_left
        </button>
        <div class="flex">
          <a
            :aria-label="`Accéder à l'actualité ${i}`"
            :title="`Accéder à l'actualité ${i}`"
            v-for="i in numActualites"
            :key="i"
            :href="`#actualite-${i}`"
            @click="$event.preventDefault() || goTo(i)"
            :class="`material-icons p-4 ${
              current === i ? 'text-gray-900' : 'text-gray-500'
            }`"
            >lens</a
          >
        </div>
        <button
          aria-label="Actualité suivante"
          title="Actualité suivante"
          :disabled="singleActualite"
          class="material-icons text-6xl disabled:text-gray-500"
          @click="next"
        >
          arrow_right
        </button>
      </div>
    </app-section>
    <div class="relative mx-2 sm:w-120 mx-auto">
      <div
        class="absolute w-full h-full transparent-borders z-10 pointer-events-none"
      ></div>
      <div ref="scroller" class="slider w-full flex overflow-x-auto">
        <actualite-lancement-du-site-web></actualite-lancement-du-site-web>
        <actualite-citation-sous-la-fleur></actualite-citation-sous-la-fleur>
      </div>
    </div>
  </div>
</template>
<script>
import { debounce } from '../assets/utils'
import AppSection from '../components/app-section'
import ActualiteLancementDuSiteWeb from '../actualites/actualite-lancement-du-site-web'
import ActualiteCitationSousLaFleur from '../actualites/actualite-citation-sous-la-fleur'
export default {
  name: 'SectionActualites',
  components: {
    AppSection,
    ActualiteLancementDuSiteWeb,
    ActualiteCitationSousLaFleur,
  },
  data() {
    return {
      current: 1,
      ratio: 0,
    }
  },
  mounted() {
    this.ratio = this.$refs.scroller.scrollWidth / this.numActualites

    window.onresize = () => {
      this.ratio = this.$refs.scroller.scrollWidth / this.numActualites
    }

    this.setFromHash(this.$route.hash)

    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const onscroll = () => {
      const raw = this.$refs.scroller.scrollLeft / this.ratio
      const round = Math.round(raw)
      const last = this.current - 1
      this.current = round + 1

      // only when we are finished scrolling do we store
      // otherwise, infinite loop
      if (raw === round && round !== last) {
        this.setToHash(this.current)
      }
    }

    // Listen for new scroll events, here we debounce our `storeScroll` function
    this.$refs.scroller.addEventListener(
      'touchend',
      () => {
        setTimeout(() => {
          const round = Math.round(this.$refs.scroller.scrollLeft / this.ratio)
          this.current = round + 1
          this.setToHash()
        }, 500)
      },
      {
        passive: true,
      }
    )
  },
  methods: {
    setFromHash(hash) {
      if (hash.startsWith('#actualite-')) {
        const current = parseInt(hash.replace('#actualite-', ''))
        if (!isNaN(current)) {
          this.current = current
          this.scrollToCurrent()
        }
      }
    },

    setToHash(current) {
      const hash = `#actualite-${this.current}`
      history.replaceState({}, '', hash)
    },
    previous() {
      // removing two then adding one at the end because modulo is zero based. js modulo can return negative values
      this.current = Math.abs((this.current - 2) % this.numActualites) + 1

      this.scrollToCurrent()
    },
    next() {
      // adding one at the end because modulo is zero based
      this.current = (this.current % this.numActualites) + 1

      this.scrollToCurrent()
    },
    goTo(i) {
      this.current = i
      this.scrollToCurrent()
    },
    scrollToCurrent() {
      this.$refs.scroller.scrollTo({
        left: (this.current - 1) * this.ratio,
        behavior: 'smooth',
      })
      this.setToHash()
    },
  },
  computed: {
    section() {
      return this.$store.getters.sections.row2[1]
    },
    numActualites() {
      return this.$store.getters.actualites.length
    },
    singleActualite() {
      return this.numActualites <= 1
    },
  },
}
</script>
