<template>
  <div :class="parenClasses">
    <div :class="classes">
      <span class="text-center w-full" v-text="lastMessage"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MessageBox',
  computed: {
    classes() {
      return [
        'w-5/6',
        'md:w-auto',
        this.isError ? 'bg-red-600' : 'bg-green-600',
        'text-gray-100',
        'p-4',
        'rounded-md',
        'shadow',
        'flex',
        'transition-opacity-200',
      ].concat(
        this.show
          ? ['opacity-1', 'pointer-events-auto', 'notice-me-senpai']
          : ['opacity-0']
      )
    },
    parenClasses() {
      return [
        'z-50',
        'fixed',
        'top-0',
        'left-0',
        'mt-16',
        'flex',
        'justify-center',
        'w-full',
        'pointer-events-none',
      ]
    },
    /**
     * @returns {boolean}
     */
    show() {
      return this.$store.state.messageBox.show
    },
    /**
     * @returns {string}
     */
    lastMessage() {
      return this.$store.state.messageBox.lastMessage
    },
    /**
     * @returns {boolean}
     */
    isError() {
      return this.$store.state.messageBox.isError
    },
  },
}
</script>
