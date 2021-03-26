<template>
  <Layout>
    <div class="project-title">
      <h1 class="project-title__text">{{ $page.project.title }}</h1>

      <project-meta :project="$page.project" v-if="$page.project" />
    </div>

    <div class="project">
      <div class="project__header">
        <img
          alt="Cover image"
          v-if="$page.project.mainImage"
          :src="$urlForImage($page.project.mainImage, $page.metadata.sanityOptions).width(600).auto('format').url()"
        />
      </div>

      <block-content
        class="project__content"
        :blocks="$page.project._rawBody"
        v-if="$page.project._rawBody"
      />
    </div>
  </Layout>
</template>

<script>
import BlockContent from '~/components/BlockContent'
import ProjectMeta from '~/components/ProjectMeta'

export default {
  components: {
    ProjectMeta,
    BlockContent
  },
  metaInfo() {
    return {
      title: this.$page.project.title,
      meta: [
        {
          name: 'description',
          content: this.$page.project.description
        }
      ]
    }
  }
}
</script>

<page-query>
query project ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  project: sanityProject (id: $id) {
    title
    publishedAt (format: "D. MMMM YYYY")
    categories {
      id
      title
    }
    _rawExcerpt
    _rawBody
    mainImage {
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
</page-query>

<style lang="scss">
.project-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
}

.project {
  padding-bottom: var(--space);
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}
</style>
