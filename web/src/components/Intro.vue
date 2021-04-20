<template>
  <section class="intro">
    <div class="lead"><block-content :blocks="$static.general._rawIntro" /></div>
    <button class="button" @click="scrollToContact()">Get in touch</button>
    <div class="readmore">
      <button class="button" @click="visible = !visible">
        <template v-if="visible">Read less</template>
        <template v-else>Read more</template>
      </button>
      <div class="content" :class="{ visible: visible }"><block-content :blocks="$static.general._rawBody" /></div>
    </div>
  </section>
</template>

<static-query>
query {
  general: sanityGeneral (id: "general") {
    _rawIntro
    _rawBody
  }
}
</static-query>

<script>
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    BlockContent
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    scrollToContact() {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth'});
    }
  }
}
</script>

<style lang="scss" scoped>
.intro {
  margin: 1rem 0 4rem;
  position: relative;
  z-index: 100;
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
  text-decoration: none;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 200;
  border: none;
  padding: .6rem 2rem;
  margin: .2rem auto;
  width: 80%;
  max-width: 400px;
  transition: all .4s ease-in-out;
  cursor: pointer;
  &:hover {
    background: var(--link-color);
  }
}
.readmore {
  font-size: 1.4rem;
  font-weight: 200;
  display: block;
  margin: 1rem auto;

  .button {
    background: none;
    color: var(--body-color);
    border: 1px solid var(--body-color);
    &:hover {
      border-color: var(--link-color);
      color: var(--link-color);
    }
  }

  .content {
    padding-top: 4rem;
    overflow: hidden;
    max-height: .1rem;
    transition: none;
    
    p {
      max-width: 28em;
      margin: 0 auto 1rem;
    }
    &.visible {
      max-height: 100rem;
      transition: max-height 0.8s ease-in-out;
      margin-bottom: 4rem;
    }
  }
}
@media (max-width: 700px) {
  .intro {
    margin-top: 4rem;
    padding: 0 2rem;
  }
  .lead {
    max-width: none;
    width: 100%;
    p {
      font-size: 2.4rem;
    }
  }
}
@media (max-width: 500px) {
  .button {
		width: 100%;
		max-width: none;
	}
}
</style>
