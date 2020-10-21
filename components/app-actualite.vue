<template>
  <div class="slide w-full flex-shrink-0 flex justify-center">
    <section
      class="relative bg-gray-100 text-gray-900 rounded-lg shadow-md mx-2 sm:mx-12 w-full"
    >
      <div
        class="tile-background h-76 rounded-t-lg"
        :style="`background-image: url(${image})`"
      ></div>
      <div
        :class="`absolute top-0 w-full h-70 ${
          lightImage ? 'bg-gradient-corner-light' : 'bg-gradient-corner-dark'
        } rounded-t-lg`"
      ></div>
      <span
        :class="`absolute top-0 w-full text-right font-bold p-8 ${
          lightImage ? 'text-gray-900' : 'text-gray-100'
        }`"
        v-text="date"
      ></span>
      <!-- content -->
      <div class="p-8 pb-16">
        <h3
          class="font-heading text-2xl text-c-violet-3 text-center mb-8"
          v-text="title"
        ></h3>
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
    date: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    lightImage: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
