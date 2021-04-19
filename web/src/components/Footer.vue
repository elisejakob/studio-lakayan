<template>
  <footer class="site-footer" id="contact">
    <div class="footer-grid">
      <div class="block contact">
        <h2>Contact</h2>
        <ul>
          <li><a class="link" href="mailto:studio@lakayan.no?subject=✉️" target="_blank"><div class="before"><Arrow /></div>studio@lakayan.no</a></li>
          <li><a class="link" href="tel:004745919489" target="_blank"><div class="before"><Arrow /></div>+47 459 19 489</a></li>
        </ul>
      </div>
      <div class="block social">
        <h2>Social</h2>
        <ul>
          <li><a class="link" href="https://instagram.com/studiolakayan" target="_blank"><div class="before"><Arrow /></div>Instagram</a></li>
          <li><a class="link" href="https://facebook.com/studiolakayan" target="_blank"><div class="before"><Arrow /></div>Facebook</a></li>
          <li><a class="link" href="https://linkedin.com/studiolakayan" target="_blank"><div class="before"><Arrow /></div>LinkedIn</a></li>
        </ul>
      </div>
      <div class="block text">
        <p>Studio Lakayan was founded in 2021. If you would like to see previous projects by Dorna, <a href="mailto:dorna@lakayan.no" target="_blank">request a presentation</a> or visit <a href="https://dorna.no" target="_blank">dorna.no</a> for an overview.</p>
      </div>
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
  padding: 0 12rem;
  position: relative;
}
.footer-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 4rem;
  font-size: 0.8em;
  padding: 14rem 2rem 2rem;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1400px;

  .block {
    grid-column: span 2;
  }

  .link {
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
  .text {
    grid-column: span 4;
  }
  p {
    a {
      display: inline;
      text-decoration: underline;
    }
  }

  h2 {
    margin-top: 0;
    font-style: normal;
    font-size: 2rem;
  }

  ul {
    list-style: none;
    margin: 1rem 0 7rem;
    padding: 0;
    li {
      margin: 0 0 .7rem;
    }
  }
}
.top-link {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
@media (max-width: 1000px) {
  .site-footer {
    padding: 1.5vw 1.4rem 0;
  }
  .footer-grid {
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