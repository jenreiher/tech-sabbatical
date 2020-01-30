<template>
  <div class="theme-container">
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />
    <Home v-if="$page.frontmatter.home" />
    <Content
      v-else
    />
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'

export default {
  name: 'Layout',
  components: {
    Home,
    Navbar
  }
}
</script>
