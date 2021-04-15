<template>
  <div id="app">
    <Header />

    <main class="site-main">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import ToggleTheme from '~/components/ToggleTheme'
import Footer from '~/components/Footer'

export default {
  props: {
    showLogo: {
      type: Boolean,
      default: true
    }
  },
  components: {
    Header,
    ToggleTheme,
    Footer
  }
}
</script>

<style lang="scss">
.site-main {
  margin: 0 auto;
  padding: 1.5vw 10rem 0;
  opacity: 0;
  animation: fadeIn .8s ease-in-out forwards;
  animation-delay: .4s;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (max-width: 1000px) {
  .site-main {
    padding: 1.5vw 1.4rem 0;
  }
}
</style>
