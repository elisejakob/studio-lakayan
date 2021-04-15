<template>
  <div class="info-card content-box">
    <div class="info-card__content">
      <h2>Services</h2>
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

<style lang="scss">
.info-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 -1rem;
  padding: 7rem 0;
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
</style>
