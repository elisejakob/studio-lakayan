<template>
  <header class="site-header">
    <div class="site-header__left">
      <g-link class="logo" to="/">
        <Logo />
      </g-link>
    </div>

    <div class="site-header__right">
      <!--<nav class="site-nav">
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>-->
      <ToggleTheme />
    </div>
  </header>
</template>

<script>
import Logo from '~/components/graphics/Logo'
import ToggleTheme from '~/components/ToggleTheme'

export default {
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
  top: 0;
  height: 0;
  z-index: 10;
  overflow: visible;
  transform: translateY(-100%);
  opacity: 0;
  animation: fadeDown .8s ease-in-out forwards;
  margin-bottom: 9rem;

  &__left,
  &__right {
    padding: 1.4rem 2rem;
    display: flex;
    align-items: flex-start;
    position: relative;
  }

  @media screen and (min-width: 1000px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}
@keyframes fadeDown {
  from {
    transform: translateY(-5rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
