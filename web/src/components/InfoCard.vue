<template>
  <div class="info-card content-box">
    <div class="info-card__content">
      <h2>Services</h2>
    </div>
    <div class="info-card__content">
      <ul>
        <li>Interior design</li>
        <li>Spatial planning</li>
        <li>Who knows</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.info-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 -1rem;
  align-items: stretch;
  position: relative;
  min-height: 50vh;

  &__header {
    margin-left: calc(var(--space) * -1);
    margin-right: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    margin-top: calc(var(--space) * -1);
    overflow: hidden;

    &:empty {
      display: none;
    }
  }

  &__content {
    padding: 2rem;
    background: var(--color-olive);
    &:nth-child(even) {
      background: var(--color-darkgreen);
      color: var(--color-light);
    }
  }
  h2 {
    font-style: italic;
  }
  img {
    display: block;
  }
}
</style>
