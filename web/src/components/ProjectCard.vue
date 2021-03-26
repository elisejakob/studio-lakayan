<template>
  <div class="project-card content-box">
    <div class="project-card__header">
      <g-image
        alt="Cover image"
        v-if="project.mainImage"
        class="project-card__image"
        :src="$urlForImage(project.mainImage, $page.metadata.sanityOptions).height(440).width(800).auto('format').url()"
      />
    </div>
    <div class="project-card__content">
      <h2 class="project-card__title" v-html="project.title" />
      <block-content :blocks="project._rawExcerpt" />

      <g-link class="project-card__link" :to="project.slug.current">Link</g-link>
    </div>
  </div>
</template>

<script>
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    BlockContent
  },
  props: {
    project: Object
  }
}
</script>

<style lang="scss">
.project-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 -1rem;
  align-items: stretch;
  position: relative;

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

  &__image {
    min-width: 100%;
    min-height: 100%;
    display: block;
  }

  &__content {
    padding: 2rem;
    background: var(--bg-content-color);
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>
