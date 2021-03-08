<template>
  <section class="intro">
    <p>{{ $static.general.description}}</p>
  </section>
</template>

<static-query>
query {
  general: sanityGeneral (id: "general") {
    description
  }
}
</static-query>

<style lang="scss">
.logo {
  text-decoration: none;
  color: var(--body-color) !important;
  font-size: 0.9em;

  &__image {
    vertical-align: middle;
    border-radius: 99px;
    height: 40px;
    width: 40px;
    margin-right: 0.5em;
  }
}
</style>
