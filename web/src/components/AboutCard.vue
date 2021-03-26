<template>
  <div class="about-card content-box">
    <div class="about-card__image">
      <g-image
        :alt="$static.about.image.alt"
        v-if="$static.about.image"
        class="about-card__image"
        :src="$urlForImage($static.about.image, $static.metadata.sanityOptions).height(800).width(800).auto('format').url()"
      />
    </div>
    <div class="about-card__content">
      <h2 class="about-card__title">About Dorna</h2>
      <block-content :blocks="$static.about._rawBio" />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  about: sanityAbout (id: "about") {
    _rawBio
    image {
      asset {
        _id
        url
      }
      caption
      alt
      hotspot {
        x
        y
        height
        width
      }
      crop {
        top
        bottom
        left
        right
      }
    }
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
.about-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 -1rem;
  align-items: stretch;
  position: relative;
  min-height: 50vh;

  &__header {
    margin-left: calc(var(--space) * -1);
    margin-right: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    margin-top: calc(var(--space) * -1);
    overflow: hidden;

    &:empty {
      display: none;
    }
  }

  &__content {
    padding: 2rem;
    background: var(--color-light);
    color: var(--color-red);
  }
  img {
    display: block;
  }
}
</style>
