<template>
  <Layout :show-logo="false">
    <Intro />
    <!--<ColorPalette />-->
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
    <div class="gallery">
      <div class="image-wrapper sketch-image-wrapper">
        <img class="sketch for-size" src="/images/sketch-black.png" />
        <div class="sketch light">
          <img src="/images/sketch-black.png" />
        </div>
        <div class="sketch dark">
          <img src="/images/sketch-white.png" />
        </div>
      </div>
      <div class="image-wrapper nature-image-wrapper">
        <img class="nature for-size" src="/images/plant-day.jpg" />
        <div class="nature light">
          <img src="/images/plant-day.jpg" />
        </div>
        <div class="nature dark">
          <img src="/images/plant-night.jpg" />
        </div>
      </div>
    </div>
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
import ColorPalette from '~/components/graphics/ColorPalette'

export default {
  components: {
    Intro,
    ProjectCard,
    InfoCard,
    AboutCard,
    ColorPalette
  },
  metaInfo: {
    title: 'Studio Lakayan'
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
  transition: all .8s ease-in-out;

  img {
    display: block;
    width: 100%;
    max-width: none;
    position: relative;
  }

  &:after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(var(--bg-color), transparent, transparent, transparent);
  }

  &.dark {
    opacity: 0;
    margin-top: 0;
    &:after {
      background: linear-gradient(var(--color-night), transparent, transparent, transparent);
    }
  }
  &.light {
    opacity: 1;
  }
}
.sketch-image-wrapper {
  display: block;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 4rem 0 0;
  transform: translateX(14%);
  z-index: 10;
  > img {
    display: block;
    width: 100%;
    max-width: none;
    position: relative;
    opacity: 0;
  }
}
.sketch {
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
    opacity: .8;
  }
}
.nature-image-wrapper {
  display: block;
  position: relative;
  width: 80%;
  max-width: 600px;
  margin: 4rem 0 0;
  > img {
    display: block;
    width: 100%;
    max-width: none;
    position: relative;
    opacity: 0;
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
.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
body[data-theme="dark"] {
 	.intro-image.dark,
  .nature.dark,
  .villa.dark {
    opacity: 1;
  }
  .sketch.dark {
    opacity: .8;
  }
  .intro-image.light,
  .sketch.light,
  .nature.light,
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