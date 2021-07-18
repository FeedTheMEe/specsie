<template>
  <div class="general">
    <h1>General</h1>
    <hr class="separator">
    <!--  -->
    <div class="info-box type-1">
      <ul>
        <li><h3 class="basic-1">System</h3></li>
        <ul class="list">
          <li>OS: {{ os }}</li>
        </ul>
        <hr>
        <li><h3>Hardware</h3></li>
        <ul class="list">
          <li>OS: Linux</li>
        </ul>
        <hr>
        <li><h3>Other</h3></li>
        <ul class="list">
          <li>OS: Linux</li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'General',
  data () {
    return {
      os: '',
      distro: ''
    }
  }
})
</script>
