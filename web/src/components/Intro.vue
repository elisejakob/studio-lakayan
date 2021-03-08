<template>
  <section class="intro lead">
    <block-content :blocks="$static.general._rawIntro" />
  </section>
</template>

<static-query>
query {
  general: sanityGeneral (id: "general") {
    _rawIntro
  }
}
</static-query>

<script>
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    BlockContent
  }
}
</script>

<style lang="scss">
.intro {
  margin: 2rem 10% 4rem 0;
}
</style>
