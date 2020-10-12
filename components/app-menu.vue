<template>
  <div class="font-heading xl:mx-32">
    <ul class="flex flex-col lg:flex-row">
      <li class="flex w-full" v-for="(item, i) of sections.row1" :key="i">
        <menu-item :item="item"></menu-item>
      </li>
    </ul>
    <ul class="flex flex-col lg:flex-row">
      <li class="flex w-full" v-for="(item, i) of sections.row2" :key="i">
        <menu-item :item="item"></menu-item>
      </li>
    </ul>
  </div>
</template>
<script>
import MenuItem from './menu-item'
export default {
  name: 'AppMenu',
  components: { MenuItem },
  computed: {
    sections() {
      return this.$store.getters.sections
    },
  },
}
</script>
