<template>
  <header class="site-header">
    <div class="header__left">
      <g-link class="logo" to="/">
        <Logo />
      </g-link>
    </div>

    <div class="header__right">
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
  align-items: top;
  padding: 1.4rem 2rem;
  top: 0;
  z-index: 10;
  transform: translateY(-100%);
  opacity: 0;
  animation: fadeDown .8s ease-in-out forwards;

  &__left,
  &__right {
    display: flex;
    align-items: center;
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
