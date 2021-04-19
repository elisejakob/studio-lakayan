<template>
  <Layout :show-logo="false">
    <Intro />
    <!--<div class="projects">
      <project-card
        v-for="edge in $page.projects.edges"
        :key="edge.node.id"
        :project="edge.node"
        :metadata="$page.metadata"
      />
    </div>-->
    <div class="intro-image-wrapper">
      <img class="for-size" src="/images/day.jpg" />
      <div class="intro-image light">
        <img src="/images/day.jpg" />
      </div>
      <div class="intro-image dark">
        <img src="/images/night.jpg" />
      </div>
    </div>
    <InfoCard />
    <AboutCard />
    <Gallery />
  </Layout>
</template>

<page-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  projects: allSanityProject(sortBy: "publishedAt") {
    edges {
      node {
        id
        title
        slug {
          current
        }
        categories {
          id
          title
        }
        publishedAt(format: "D. MMMM YYYY")
        _rawExcerpt
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
  }
}

</page-query>

<script>
import Intro from '~/components/Intro'
import ProjectCard from '~/components/ProjectCard'
import InfoCard from '~/components/InfoCard'
import AboutCard from '~/components/AboutCard'
import Gallery from '~/components/Gallery'

export default {
  components: {
    Intro,
    ProjectCard,
    InfoCard,
    AboutCard,
    Gallery
  },
  metaInfo: {
    title: "",
    titleTemplate: "Studio Lakayan"
  }
}
</script>

<style lang="scss" scoped>
.intro-image-wrapper {
  display: block;
  width: calc(100% + 20rem);
  max-width: none;
  margin: -7rem -10rem 0;
  position: relative;
  > img {
    display: block;
    width: 100%;
    max-width: none;
    position: relative;
    opacity: 0;
  }
}
.intro-image {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  transition: opacity .8s ease-in-out;

  img {
    display: block;
    width: 100%;
    max-width: none;
    position: relative;
  }

  &.dark {
    opacity: 0;
    margin-top: 0;
  }
  &.light {
    opacity: 1;
  }
}
body[data-theme="dark"] {
 	.intro-image.dark,
  .villa.dark {
    opacity: 1;
  }
  .intro-image.light,
  .villa.light {
    opacity: 0;
  }
}
@media (max-width: 1000px) {
  .intro-image-wrapper {
    display: block;
    width: calc(100% + 3.4rem);
    max-width: none;
    margin: -7rem -2rem 0;
  }
}
</style>