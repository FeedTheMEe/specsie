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
import systeminformation from 'systeminformation'

export default defineComponent({
  name: 'General',
  mounted () {
    this.getData()
  },
  data () {
    return {
      os: '',
      distro: ''
    }
  },
  methods: {
    getData: function () {
      console.log('test 1') // Gets printed out
      systeminformation.cpu()
        .then(data => console.log(data)) // All of these do nothing
        .catch(reason => console.log(reason))
        .finally(() => console.log('test 1.5'))
      console.log('test 2') // Gets printed out
    }
  }
})
</script>
