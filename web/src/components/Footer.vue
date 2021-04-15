<template>
  <footer class="site-footer" id="contact">
    <div class="block contact">
      <h2>Contact</h2>
      <ul>
        <li><a href="mailto:studio@lakayan.no" target="_blank"><div class="before"><Arrow /></div>studio@lakayan.no</a></li>
        <li><a href="tel:004745919489" target="_blank"><div class="before"><Arrow /></div>+47 459 19 489</a></li>
      </ul>
    </div>
    <div class="block social">
      <h2>Social</h2>
      <ul>
        <li><a href="https://instagram.com/studiolakayan" target="_blank"><div class="before"><Arrow /></div>Instagram</a></li>
        <li><a href="https://facebook.com/studiolakayan" target="_blank"><div class="before"><Arrow /></div>Facebook</a></li>
        <li><a href="https://linkedin.com/studiolakayan" target="_blank"><div class="before"><Arrow /></div>LinkedIn</a></li>
      </ul>
    </div>
    <div class="block text">
      <p class="lead">This is a new studio! We don't have any projects! See Dorna's previous projects at dorna.no</p>
    </div>
    <div class="top-link">
      <ToTop />
    </div>
  </footer>
</template>

<script>
import Arrow from '~/components/graphics/Arrow'
import ToTop from '~/components/ToTop'

export default {
  components: {
    Arrow,
    ToTop
  }
}
</script>

<style lang="scss">
.site-footer {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 4rem;
  padding: 2rem;
  font-size: 0.8em;
  padding: 14rem 2rem 2rem;
  min-height: 100vh;

  .block {
    grid-column: span 2;
  }

  a {
    color: inherit;
    display: block;
    font-size: 1.4rem;
    font-weight: 300;
    text-decoration: none;
    position: relative;
    transition: all .4s ease-in-out;
    padding-left: 0;
    .before {
      height: .7em;
      width: .7em;
      display: inline-block;
      position: absolute;
      left: 0;
      opacity: 0;
      transform: translateX(-100%);
      transition: all .4s ease-in-out;
    }
    &:hover {
      padding-left: 2rem;
      color: var(--link-color);
      .before {
        transform: translateX(0);
        opacity: 1;
        path {
          fill: var(--link-color);
        }
      }
    }
  }

  h2 {
    margin-top: 0;
    font-style: normal;
    font-size: 2rem;
  }

  ul {
    list-style: none;
    margin: 1rem 0 14rem;
    padding: 0;
    li {
      margin: 0 0 .7rem;
    }
  }

  .top-link {
    grid-column: 7 / span 1;
    text-align: right;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
}
@media (max-width: 1000px) {
  .site-footer {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    .block {
      grid-column: span 2;
    }
    .text {
      grid-column: 1 / span 3;
      margin: 4rem 0 14rem;
    }
    ul {
      margin-bottom: 4rem;
    }
  }
}
@media (max-width: 600px) {
  .site-footer {
    display: block;
  }
}
</style>