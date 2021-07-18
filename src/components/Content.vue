<template>
  <div class="content">
    <div class="page" v-if="page === 'general'"><General /></div>
    <div class="page" v-else-if="page === 'system'"><System /></div>
    <div class="page" v-else-if="page === 'network'"><Network /></div>
    <div class="page" v-else-if="page === 'motherboard'"><Motherboard /></div>
    <div class="page" v-else-if="page === 'processor'"><Processor /></div>
    <div class="page" v-else-if="page === 'memory'"><Memory /></div>
    <div class="page" v-else-if="page === 'graphics'"><Graphics /></div>
    <div class="page" v-else-if="page === 'storage'"><Storage /></div>
    <div class="page" v-else-if="page === 'devices'"><Devices /></div>
    <div class="page" v-else-if="page === 'battery'"><Battery /></div>
    <div class="page" v-else-if="page === 'settings'"><Settings /></div>
    <div class="page" v-else-if="page === 'about'"><About /></div>
    <div class="page" v-else-if="page === 'support'"><Support /></div>
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

<style lang="postcss">
.content {
  @apply ml-32 h-full w-full overflow-y-auto relative;
  @apply md:ml-72;
}

.content .page {
  @apply pl-16 pt-12 h-full w-full overflow-y-auto;
}

.page h1 {
  @apply text-3xl;
}

.separator {
  @apply mt-6 mb-12 w-3/12;
}

.info-box {
  @apply text-gray-500;
}

.info-box ul hr {
  @apply w-9/12 ml-4 mt-16 mb-6;
}

.info-box li h3 {
  @apply text-2xl text-gray-600;
}

/* .basic-1 {
  background:
      linear-gradient(currentColor 0 0)
      0 100% /var(--d, 0) 3px
    no-repeat;
  transition:0.5s;
}

.basic-1:hover {
  --d: 100%;
} */

.info-box .list {
  @apply mt-4 mb-8 text-xl;
}

.info-box .list li {
  @apply ml-8;
}
</style>
