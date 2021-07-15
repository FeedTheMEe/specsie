<template>
  <div class="sidebar" id="sidebar">
    <h1 class="app-title">{{ appName }}</h1>
    <ul id="tabs">
      <li><button @click="select($event)" id="general"><HomeIcon class="icon" /><span>General</span></button></li>
      <li><button @click="select($event)" id="system"><DeviceTabletIcon class="icon" /><span>System</span></button></li>
      <li><button @click="select($event)" id="network"><GlobeAltIcon class="icon" /><span>Network</span></button></li>
      <hr class="divider">
      <li><button @click="select($event)" id="motherboard"><QrcodeIcon class="icon" /><span>Motherboard</span></button></li>
      <li><button @click="select($event)" id="processor"><ChipIcon class="icon" /><span>CPU</span></button></li>
      <li><button @click="select($event)" id="memory"><TableIcon class="icon" /><span>RAM</span></button></li>
      <li><button @click="select($event)" id="graphics"><DesktopComputerIcon class="icon" /><span>Graphics</span></button></li>
      <li><button @click="select($event)" id="storage"><FolderIcon class="icon" /><span>Storage</span></button></li>
      <li><button @click="select($event)" id="devices"><ServerIcon class="icon" /><span>Devices</span></button></li>
      <li><button @click="select($event)" id="battery"><LightningBoltIcon class="icon" /><span>Battery</span></button></li>
      <hr class="divider">
      <li><button @click="select($event)" id="settings"><CogIcon class="icon" /><span>Settings</span></button></li>
      <li><button @click="select($event)" id="about"><InformationCircleIcon class="icon" /><span>About</span></button></li>
      <li><button @click="select($event)" id="support"><HeartIcon class="icon" /><span>Support</span></button></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ChipIcon, CogIcon, DesktopComputerIcon, DeviceTabletIcon, FolderIcon, GlobeAltIcon, HeartIcon, HomeIcon, InformationCircleIcon, LightningBoltIcon, QrcodeIcon, ServerIcon, TableIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'Sidebar',
  props: {
    appName: String
  },
  components: {
    ChipIcon,
    CogIcon,
    DesktopComputerIcon,
    DeviceTabletIcon,
    FolderIcon,
    GlobeAltIcon,
    HeartIcon,
    HomeIcon,
    InformationCircleIcon,
    LightningBoltIcon,
    QrcodeIcon,
    ServerIcon,
    TableIcon
  },
  data () {
    return {
      activePage: 'system'
    }
  },
  mounted () {
    // Make it so the first element loads
    return document.getElementById('tabs')?.firstElementChild?.firstElementChild?.classList.add('active')
  },
  methods: {
    // Selects the active button
    select: function (e: Event) {
      const currElem = e.currentTarget as Element
      const elems: Element[] = Array.from(document.getElementsByClassName('active'))
      elems.forEach((el: Element) => { el.classList.remove('active') })
      currElem.classList.add('active')
      this.activePage = currElem.id

      // Send the id to content
      this.$emit('sendTabId', this.activePage)
    },

    tellme: function () {
      console.log('happened')
    }
  }
})
</script>

<style lang="postcss" scoped>
.sidebar {
  @apply h-full w-32 shadow-lg object-left overflow-y-auto pb-4 fixed;
  @apply md:w-72;
}

.sidebar li, button {
  @apply h-12;
}

.sidebar li {
  @apply w-10/12 my-1 mx-auto;
}

.sidebar li button {
  @apply w-11/12 text-left pl-8 inline-flex text-xl rounded duration-100;
  @apply hover:bg-orange-300 hover:text-white hover:rounded-lg hover:w-full;
  @apply md:hover:pl-10;
}

.sidebar .active {
  @apply bg-orange-400 text-white rounded-lg w-full;
  @apply hover:bg-orange-400;
  @apply md:pl-10;
}

.sidebar li button span {
  @apply mb-auto mt-auto hidden;
  @apply md:inline;
  @apply lg:inline;
}

.sidebar li .icon {
  @apply h-5 w-5 m-0 mr-2 mb-auto mt-auto ml-3;
}

.app-title {
  @apply text-center text-xl m-6 text-gray-400;
  @apply md:text-3xl;
}

.divider {
  @apply my-4 w-7/12 m-auto;
  @apply md:w-9/12
}
</style>
