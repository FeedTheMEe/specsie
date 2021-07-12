<template>
  <div class="app">
    <Sidebar :appName="appName" @sendTabId="changePage"/>
    <Content :page="page"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Content from './components/Content.vue'

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
    Content
  },
  data () {
    return {
      appName: 'Specsie',
      page: 'system'
    }
  },
  methods: {
    changePage: function (value: string) {
      this.page = value
    }
  }
})
</script>

<style lang="postcss">
html {
  @apply text-gray-600;
}

.app {
  @apply min-h-screen flex flex-row;
}

/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #ffffff;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
  margin-top: 2px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #777;
}
</style>
