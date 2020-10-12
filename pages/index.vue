<template>
  <h1>Hello World</h1>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$store.dispatch('showMessage', {
        message: 'Hello from the messages',
        isError: false,
        time: 5000,
      })
    }, 500)
  },
}
</script>
