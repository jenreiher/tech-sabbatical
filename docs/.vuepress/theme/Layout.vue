<template>
  <div class="theme-container">
    <Home v-if="$page.frontmatter.home" />
    <Content
      v-else
    />
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'

export default {
  name: 'Layout',
  components: {
    Home,
  }
}
</script>
