<template>
  <section :class="`bg-${bgColor} text-${fgColor} rounded-md`">
    <h2 class="font-heading" v-text="title"></h2>
    <slot></slot>
  </section>
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
