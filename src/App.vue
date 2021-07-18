<template>
  <div class="app" v-if="isLoaded">
    <Sidebar :appName="appName" @sendTabId="changePage"/>
    <Content :page="page"/>
  </div>
  <div v-else>
    <h1>Loading...</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Content from './components/Content.vue'
import { LOAD_DATA, IS_DATA_LOADED } from './channels'

declare global {
  interface Window { api: any }
}

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
    Content
  },
  mounted () {
    window.api.send(LOAD_DATA, '')

    window.api.receive(IS_DATA_LOADED, (data: any) => {
      console.log('received')
      this.isLoaded = data
      console.log(this.isLoaded)
    })
  },
  data () {
    return {
      appName: 'Specsie',
      isLoaded: false,
      page: 'general'
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
