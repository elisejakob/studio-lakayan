<template>
  <div class="about-card content-box">
    <div class="about-card__image">
      <g-image
        :alt="$static.about.image.alt"
        v-if="$static.about.image"
        class="about-card__image"
        :src="$urlForImage($static.about.image, $static.metadata.sanityOptions).height(800).width(500).auto('format').url()"
      />
    </div>
    <div class="about-card__header">
      <h2 class="about-card__title">About Dorna</h2>
      <p class="lead"><!--{{ $static.about.lead }}-->
        Dorna Lakayan is an interior architect and designer with a refined and holistic approach to architecture, interiors and product design that combines her Persian heritage, with modern and minimal Scandinavian design language.
      </p>
    </div>
    <div class="about-card__content">
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
  padding: 2rem;

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 4rem;
    h2, p {
      margin: 0;
    }
    h2 {
      font-style: normal;
    }
  }
  &__content {
    grid-column: 1 / span 2;
    padding-top: 7rem;
    
    p {
      max-width: 28em;
      margin: 0 auto 1rem;
    }
  }
  img {
    display: block;
  }
}
@media (min-width: 1000px) {
  .about-card {
    &__image {
      order: 2;
    }
    &__header {
      order: 1;
    }
    &__content {
      order: 3;
    }
  }
}
@media (max-width: 1000px) {
  .about-card {
    grid-template-columns: 1fr;
    &__image {
      margin-bottom: 2rem;
    }
    &__header {
      display: block;
      h2, p {
        margin-bottom: 4rem;
      }
    }
    &__content {
      grid-column: span 1;
      padding-top: 0;

      p {
        margin-left: 0;
      }
    }
  }
}
</style>
