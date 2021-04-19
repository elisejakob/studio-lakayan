<template>
  <div class="color-palette">
    <div class="color color1">
      Light<br>
      #FDF4E4
    </div>
    <div class="color color2">
      Dorna<br>
      #F80934
    </div>
    <div class="color color3">
      Night<br>
      #111014
    </div>
    <div class="color color4">
      Earth<br>
      #352A2A
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
    background: var(--color-light);
    color: var(--color-earth);
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
