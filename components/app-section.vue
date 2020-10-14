<template>
  <div class="sm:p-2 lg:p-8 xl:px-40 my-16 lg:my-8 z-10">
    <section
      :class="`relative bg-${bgColor} text-${fgColor} sm:rounded-lg shadow-md min-h-screen sm:min-h-0`"
    >
      <div
        class="tile-background h-24 sm:rounded-t-lg"
        :style="`background-image: url(${image})`"
      ></div>
      <div
        :class="`absolute top-0 w-full h-24 bg-${bgColor} bg-opacity-50 sm:rounded-t-lg`"
      ></div>
      <!-- content -->
      <div class="p-8 pb-16 md:px-16 md:pb-24">
        <h2 class="font-heading text-2xl text-center mb-8" v-text="title"></h2>
        <slot></slot>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'AppSection',
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      required: true,
    },
    fgColor: {
      type: String,
      required: true,
    },
  },
}
</script>
