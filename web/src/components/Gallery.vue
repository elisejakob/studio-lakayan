<template>
  <div class="gallery">
    <IntersectionObserver
      id="gallery"
      @on-enter-viewport="onEnterViewport"
      class="observer"
    ></IntersectionObserver>
    <div class="image-wrapper sketch-image-wrapper" :class="{ inview: isInView}">
      <img class="sketch for-size" src="/images/sketch-black.png" />
      <div class="sketch light">
        <img src="/images/sketch-black.png" />
      </div>
      <div class="sketch dark">
        <img src="/images/sketch-white.png" />
      </div>
    </div>
    <div class="image-wrapper nature-image-wrapper" :class="{ inview: isInView}">
      <img class="nature for-size" src="/images/plant-day.jpg" />
      <div class="nature light">
        <img src="/images/plant-day.jpg" />
      </div>
      <div class="nature dark">
        <img src="/images/plant-night.jpg" />
      </div>
    </div>
  </div>
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
.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
}
.sketch-image-wrapper {
  display: block;
  position: relative;
  width: 100%;
  margin: 4rem 0 0;
  transform: translateX(-50px);
  opacity: 0;
  transition: all .8s ease-in-out;
  z-index: 10;
  > img {
    display: block;
    width: 100%;
    max-width: none;
    position: relative;
    opacity: 0;
  }
  &.inview {
    transform: translateX(0);
    opacity: 1;
  }
}
.sketch {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  transform: translateX(14%);
  transition: all .8s ease-in-out;

  &.dark {
    opacity: 0;
  }
  &.light {
    opacity: .8;
  }
}
.nature-image-wrapper {
  display: block;
  position: relative;
  width: 80%;
  margin: 4rem 0 0;
  transform: translateX(50px);
  opacity: 0;
  transition: all .8s ease-in-out;
  > img {
    display: block;
    width: 100%;
    max-width: none;
    position: relative;
    opacity: 0;
  }
  &.inview {
    transform: translateX(0);
    opacity: 1;
  }
}
.nature {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  transition: all .8s ease-in-out;

  &.dark {
    opacity: 0;
  }
  &.light {
    opacity: 1;
  }
}
.observer {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
body[data-theme="dark"] {
  .nature.dark {
    opacity: 1;
  }
  .sketch.dark {
    opacity: .8;
  }
  .sketch.light,
  .nature.light {
    opacity: 0;
  }
}

</style>