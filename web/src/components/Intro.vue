<template>
  <section class="intro">
    <div class="test">Art — Design – Architecture</div>
    <div class="lead"><block-content :blocks="$static.general._rawIntro" /></div>
    <button>Get in touch</button>
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
  margin: 2rem 0 4rem;
}
.test {
  font-size: .8rem;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  color: var(--color-green);
}
.lead {
  font-size: 3.2rem;
  text-align: center;
  max-width: 16em;
  margin: 2rem auto 3rem;
}
button {
  display: block;
  background: var(--body-color);
  color: var(--bg-color);
  font-family: inherit;
  border: none;
  padding: 1rem 2rem;
  margin: 0 auto;
}
</style>
