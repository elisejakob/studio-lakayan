<template>
  <div class="info-card content-box">
    <div class="info-card__content info-card__title">
      <h2>Services</h2>
      <div class="sketch-image-wrapper">
        <img class="sketch for-size" src="/images/chair-day.png" />
        <div class="sketch light">
          <img src="/images/chair-day.png" />
        </div>
        <div class="sketch dark">
          <img src="/images/chair-night.png" />
        </div>
      </div>
    </div>
    <div class="info-card__content">
      <ul class="services">
        <li>
          <h3 class="service-heading">Interior Architecture and Design</h3>
          <ul class="service-list">
            <ServiceItem text="Residential" />
            <ServiceItem text="Commercial" />
            <ServiceItem text="Hospitality" />
          </ul>
        </li>
        <li>
          <h3 class="service-heading">Product Design</h3>
          <ul class="service-list">
            <ServiceItem text="Furniture" />
            <ServiceItem text="Lighting" />
            <ServiceItem text="Textiles and Rugs" />
            <ServiceItem text="Home Decor" />
          </ul>
        </li>
        <li>
          <h3 class="service-heading">Architecture</h3>
          <ul class="service-list">
            <ServiceItem text="Design of small scale buildings" />
            <ServiceItem text="Planning" />
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ServiceItem from '~/components/ServiceItem'

export default {
  components: {
    ServiceItem
  }
}
</script>

<style lang="scss" scoped>
.info-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 -1rem;
  padding: 7rem 0;
  align-items: stretch;
  position: relative;
  min-height: 50vh;

  &__title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

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
    background: inherit;
    &:nth-child(even) {
      background: inherit;
      color: inherit;
    }
  }
  h2 {
    font-style: normal;
  }
  img {
    display: block;
  }

  .services {
    list-style: none;
    margin: 0 0 1rem;
    padding: 0;
  }
  .service {
    &-list {
      list-style: none;
      margin: 0 0 4rem;
      padding: 0;
    }
    &-heading {
      font-style: normal;
      font-size: 2rem;
    }
  }
}
.sketch-image-wrapper {
  display: block;
  position: relative;
  width: 14rem;
  margin: 4rem 0 2rem;
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
body[data-theme="dark"] {
  .sketch.dark {
    opacity: .8;
  }
  .sketch.light {
    opacity: 0;
  }
}
@media (max-width: 1000px) {
  .info-card {
    padding: 2rem 0;
  }
}
@media (max-width: 700px) {
  .info-card {
    display: block;
  }
}
</style>
