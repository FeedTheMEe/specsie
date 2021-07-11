<template>
  <div class="sidebar" id="sidebar">
    <ul>
      <li v-for="tab in tabs" :key="tab.id">
        <button @click="changePage"><span>{{ tab.name }}</span></button>
      </li>
      <li><button @click="changePage"><HomeIcon class="icon" /><span>Home</span></button></li>
      <li><button @click="changePage"><InformationCircleIcon class="icon" /><span>About</span></button></li>
      <li><button @click="changePage"><HeartIcon class="icon" /><span>Support</span></button></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { HeartIcon, HomeIcon, InformationCircleIcon } from '@heroicons/vue/solid'
// eslint-disable-next-line
import { BrowserWindow } from 'electron'

export default defineComponent({
  name: 'Sidebar',
  props: {
    //  msg: String
  },
  components: {
    HeartIcon,
    HomeIcon,
    InformationCircleIcon
  },
  data () {
    return {
      tabs: [
        {
          id: 1,
          name: 'Home',
          icon: createElem('Home')
        },
        {
          id: 2,
          name: 'About',
          icon: createElem('InformationCircle')
        },
        {
          id: 3,
          name: 'Support',
          icon: createElem('Heart')
        }
      ]
    }
  },
  methods: {
    changePage (tab: Event): void {
      console.log(tab)
    }
  }
})

function createElem (elem: string): string {
  return `<${elem}Icon class="icon" />`
}
</script>

<style lang="postcss" scoped>
.sidebar {
  @apply h-screen w-64 shadow-lg object-left overflow-hidden;
}

.sidebar li, button {
  @apply h-12;
}

.sidebar li {
  @apply w-10/12 my-1 mx-auto;
}

.sidebar li button {
  @apply w-11/12 text-left pl-8 inline-flex text-xl rounded duration-100;
  @apply hover:bg-orange-300 hover:text-white hover:rounded-lg hover:w-full hover:pl-10;
  @apply focus:bg-orange-400 focus:text-white focus:rounded-lg focus:w-full focus:pl-10;
}

.sidebar li button span {
  @apply mb-auto mt-auto;
}

.sidebar li .icon {
  @apply h-5 w-5 m-0 mr-2 mb-auto mt-auto;
}
</style>
