<template>
  <div class="color-palette">
    <div class="color color1">
      <Logo />
    </div>
    <div class="color color2">
      <Logo />
    </div>
    <div class="color color3">
      <Logo />
    </div>
    <div class="color color4">
      <Logo />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/graphics/Logo'
export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
.color-palette {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  .color {
    padding: 4rem 2rem 2rem 2rem;
  }
  .color1 {
    background: var(--color-olive);
  }
  .color2 {
    background: var(--color-dorna);
  }
  .color3 {
    background: var(--color-night);
  }
  .color4 {
    background: var(--color-earth);
  }
}
</style>
