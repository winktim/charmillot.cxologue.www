<template>
  <a
    :title="title"
    :aria-label="title"
    :href="`#${item.id}`"
    :style="`background-image: url(${item.image})`"
    :class="`flex-grow flex flex-col items-center rounded-lg p-4 m-4 relative tile-background bg-${item.bgColor} shadow-md hover:shadow-lg active:darken-5 hover:lighten-5`"
  >
    <span
      :class="`text-${item.fgColor} text-center text-xl z-10`"
      v-text="item.title"
    ></span>
    <span
      :class="`w-full md:w-1/2 lg:w-auto text-center rounded-lg py-2 md:py-4 px-12 mt-8 bg-${item.fgColor} text-${item.bgColor} z-10 select-none`"
    >
      Voir plus
    </span>
    <div
      :class="`absolute top-0 w-full h-full bg-${item.bgColor} bg-opacity-85 rounded-lg`"
    ></div>
  </a>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    title() {
      return `Aller vers la section "${this.item.title}"`
    },
  },
}
</script>
