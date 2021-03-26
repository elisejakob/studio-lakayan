<template>
  <div id="app">
    <header class="site-header">
      <div class="header__left">
        <!--<header-logo v-if="showLogo" />-->
        <Logo />
      </div>

      <div class="header__right">
        <toggle-theme />
      </div>
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <div class="contact">
        <h2>Contact</h2>
        <ul>
          <li>Email: <strong>studio@lakayan.no</strong></li>
          <li>Phone: <strong>+47 459 19 489</strong></li>
        </ul>
      </div>
      <div class="contact">
        <h2>Social</h2>
        <ul>
          <li>Instagram: <strong>@studiolakayan</strong></li>
          <li>Facebook: <strong>@studiolakayan</strong></li>
          <li>LinkedIn: <strong>@studiolakayan</strong></li>
        </ul>
      </div>
      <div class="contact">
        <h2>Contact</h2>
        <ul>
          <li>Email: <strong>studio@lakayan.no</strong></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import ToggleTheme from '~/components/ToggleTheme'

export default {
  props: {
    showLogo: {
      type: Boolean,
      default: true
    }
  },
  components: {
    Logo,
    ToggleTheme
  }
}
</script>

<style lang="scss">
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: top;
  padding: 1.4rem;
  top: 0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

.footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;
  padding: 2rem 2rem 14rem;
  background: var(--body-color);
  color: var(--bg-color);

  a {
    color: inherit;
  }

  h2 {
    margin-top: 0;
    text-align: left;
  }
}
</style>
