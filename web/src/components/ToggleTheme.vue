<template>
  <button
    role="button"
    aria-label="Toggle dark/light"
    @click.prevent="toggleTheme"
    class="toggle-theme"
  >
    <svg
      v-if="darkTheme"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 89 89"
      class="feather feather-moon"
    >
      <path d="M52.6255 1.27433C57.4494 8.12399 60.0297 16.658 59.3566 25.8657C57.8982 43.6075 43.5385 57.9805 25.8133 59.4403C16.6142 60.2263 8.08811 57.6437 1.24484 52.7029C0.683917 52.2538 -0.101376 52.8152 0.0108086 53.489C4.61038 74.9363 24.3549 90.6568 47.465 88.8602C69.4532 87.1758 87.1784 69.4341 88.8612 47.4253C90.6561 24.406 74.8381 4.643 53.5229 0.0391332C52.7377 -0.185446 52.2889 0.600588 52.6255 1.27433Z" fill="currentColor" />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 89 89"
      class="feather feather-sun"
    >
      <path d="M35.4324 54.3111L22.9039 85.4661L31.5232 88.9322L44.0517 57.7772L35.4324 54.3111Z" fill="currentColor" />
      <path d="M53.5663 54.3789L44.947 57.8459L57.4789 89.0009L66.0981 85.5339L53.5663 54.3789Z" fill="currentColor" />
      <path d="M57.5124 -5.30045e-06L44.9839 31.155L53.6031 34.6211L66.1316 3.46609L57.5124 -5.30045e-06Z" fill="currentColor" />
      <path d="M31.4747 0.000326042L22.8555 3.46735L35.3873 34.6223L44.0065 31.1553L31.4747 0.000326042Z" fill="currentColor" />
      <path d="M3.51988 22.8532L0.0528564 31.4725L31.2078 44.0043L34.6749 35.3851L3.51988 22.8532Z" fill="currentColor" />
      <path d="M31.155 44.9105L0 57.439L3.46609 66.0582L34.6211 53.5297L31.155 44.9105Z" fill="currentColor" />
      <path d="M57.829 44.9315L54.3629 53.5507L85.5179 66.0792L88.984 57.4599L57.829 44.9315Z" fill="currentColor" />
      <path d="M85.534 22.8229L54.379 35.3514L57.8451 43.9706L89.0001 31.4421L85.534 22.8229Z" fill="currentColor" />
    </svg>
  </button>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: false
    }
  },
  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme

      // This is using a script that is added in index.html
      window.__setPreferredTheme(this.darkTheme ? 'dark' : 'light')
    }
  },
  mounted() {
    if (window.__theme == 'dark') this.darkTheme = true
  }
}
</script>

<style lang="scss">
.toggle-theme {
  background-color: transparent;
  border: 0;
  color: var(--body-color);
  transition: all .3s ease-in-out;
  cursor: pointer;
  padding: 0;
  margin: 0;

  &:hover {
    color: var(--link-color);
  }
  &:focus {
    outline: none;
  }

  svg {
    width: 1.6rem;
    height: 1.66rem;
  }
}
</style>
