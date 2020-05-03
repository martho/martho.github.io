<script>
import PageHeader from '../components/PageHeader.vue'

export default {
  components: {
    PageHeader
  }
}
</script>

<template>
  <div class="layout">
    <PageHeader />
    <slot/>
  </div>
</template>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
