<template>
  <section class="intro">
    <div class="lead"><block-content :blocks="$static.general._rawIntro" /></div>
    <button class="button">Get in touch</button>
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

<style lang="scss" scoped>
.intro {
  margin: 1rem 0 4rem;
  position: relative;
  z-index: 10;
}
.lead {
  font-family: var(--font-serif);
  font-weight: 200;
  line-height: 1.1;
  font-size: 3.2rem;
  text-align: center;
  max-width: 18em;
  width: 80%;
  margin: 1rem auto 4rem;

  p {
    font-size: 3.2rem;
  }
}
.button {
  display: block;
  background: var(--body-color);
  color: var(--bg-color);
  font-family: inherit;
  font-size: 1.2rem;
  border: none;
  padding: 1rem 2rem;
  margin: 0 auto;
  width: 80%;
  max-width: 400px;
  transition: all .4s ease-in-out;
  cursor: pointer;
  &:hover {
    background: var(--link-color);
  }
}
</style>
