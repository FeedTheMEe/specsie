<template>
  <div class="content">
    <div class="page" v-if="page === 'general'"><General /></div>
    <div class="page" v-if="page === 'system'"><System /></div>
    <div class="page" v-if="page === 'network'"><Network /></div>
    <div class="page" v-if="page === 'motherboard'"><Motherboard /></div>
    <div class="page" v-if="page === 'processor'"><Processor /></div>
    <div class="page" v-if="page === 'memory'"><Memory /></div>
    <div class="page" v-if="page === 'graphics'"><Graphics /></div>
    <div class="page" v-if="page === 'storage'"><Storage /></div>
    <div class="page" v-if="page === 'devices'"><Devices /></div>
    <div class="page" v-if="page === 'battery'"><Battery /></div>
    <div class="page" v-if="page === 'settings'"><Settings /></div>
    <div class="page" v-if="page === 'about'"><About /></div>
    <div class="page" v-if="page === 'support'"><Support /></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import General from './pages/General.vue'
import System from './pages/System.vue'
import Network from './pages/Network.vue'
import Motherboard from './pages/Motherboard.vue'
import Processor from './pages/Processor.vue'
import Memory from './pages/Memory.vue'
import Graphics from './pages/Graphics.vue'
import Storage from './pages/Storage.vue'
import Devices from './pages/Devices.vue'
import Battery from './pages/Battery.vue'
import Settings from './pages/Settings.vue'
import About from './pages/About.vue'
import Support from './pages/Support.vue'

export default defineComponent({
  name: 'Content',
  props: {
    page: String
  },
  components: {
    General,
    System,
    Network,
    Motherboard,
    Processor,
    Memory,
    Graphics,
    Storage,
    Devices,
    Battery,
    Settings,
    About,
    Support
  }
})
</script>

<style lang="postcss" scoped>
.content {
  @apply ml-32 h-full w-full overflow-y-auto fixed;
  @apply md:ml-72;
}

.content .page {
  @apply ml-16 mt-12 h-full w-8/12 overflow-y-auto;
}
</style>

<style lang="postcss">
.page h1 {
  @apply text-3xl;
}

.separator {
  @apply mt-6 mb-12 w-3/12;
}

.info-box {
  @apply bg-orange-100;
}
</style>
