<template>
  <div class="sidebar">
    <ul>
      <li></li>
      <li><button><HomeIcon class="icon" /><span>Home</span></button></li>
      <li><button><InformationCircleIcon class="icon" /><span>About</span></button></li>
      <li><button><HeartIcon class="icon" /><span>Support</span></button></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { HeartIcon, HomeIcon, InformationCircleIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'Sidebar',
  props: {
    //  msg: String
  },
  components: {
    HeartIcon,
    HomeIcon,
    InformationCircleIcon
  }
})
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
  @apply w-11/12 text-left pl-8 inline-flex text-xl rounded duration-100 hover:bg-orange-300 hover:text-white hover:rounded-lg hover:w-full focus:bg-orange-400 focus:text-white focus:rounded-lg focus:w-full;
}

.sidebar li button span {
  @apply mb-auto mt-auto;
}

.sidebar li .icon {
  @apply h-5 w-5 m-0 mr-2 mb-auto mt-auto;
}
</style>
