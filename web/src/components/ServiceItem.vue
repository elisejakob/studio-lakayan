<template>
  <li class="service-item">
    <IntersectionObserver
      id="test"
      @on-enter-viewport="onEnterViewport"
    ></IntersectionObserver>
    <span
      class="service-text"
      :class="{ inview: isInView}"
    >
      <div class="before"><Arrow /></div>
      {{ text }}
    </span>
  </li>
</template>

<script>
import IntersectionObserver from '~/components/tools/IntersectionObserver'
import Arrow from '~/components/graphics/Arrow'

export default {
  components: {
    IntersectionObserver,
    Arrow
  },
  props: {
    text: String
  },
  data() {
    return {
      isInView: false,
    }
  },
  methods: {
    onEnterViewport(value) {
      this.isInView = value;
    },
  }
}
</script>

<style lang="scss" scoped>
.service-text {
  display: block;
  padding-left: 2rem;
  font-family: var(--font-sans);
  font-size: 1.4rem;
  font-weight: 200;
  position: relative;
  opacity: 0;
  transform: translateX(-50px);
  transition: all .8s ease-in-out;
  .before {
    height: .7em;
    width: .7em;
    display: inline-block;
    position: absolute;
    left: 0;
    opacity: 0;
    transform: translateX(-100px);
    transition: all .8s ease-in-out;
  }
  &.inview {
    transform: translateX(0);
    opacity: 1;
    .before {
      transform: translateX(0);
      opacity: 1;
    }
  }
}

</style>