<template>
  <Sidebar />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from './components/Sidebar.vue'

export default defineComponent({
  name: 'App',
  components: {
    Sidebar
  }
})
</script>

<style lang="postcss">
html {
  @apply text-gray-600;
}
</style>
