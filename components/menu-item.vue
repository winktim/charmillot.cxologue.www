<template>
  <a
    :href="`#${item.id}`"
    :style="`background-image: url(${item.image})`"
    :class="`flex-grow flex flex-col items-center rounded-md p-4 m-4 relative tile-background shadow-md hover:shadow-lg active:darken-5 hover:lighten-5`"
  >
    <span
      :class="`text-${item.fgColor} text-center text-xl z-10`"
      v-text="item.title"
    ></span>
    <span
      :class="`w-full md:w-1/2 lg:w-auto text-center rounded-md py-2 md:py-4 px-12 mt-8 bg-${item.fgColor} text-${item.bgColor} z-10`"
    >
      Voir plus
    </span>
    <div
      :class="`absolute top-0 w-full h-full bg-${item.bgColor} bg-opacity-85 rounded-md`"
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
}
</script>
