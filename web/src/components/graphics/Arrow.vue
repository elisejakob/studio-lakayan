<template>
  <div class="arrow" to="/">
    <svg viewBox="0 0 93 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M92.5227 35.993L4.28113 0.342285L0.669984 9.28049L88.9116 44.9312L92.5227 35.993Z" fill="black"/>
    <path d="M92.5104 53.872L88.8993 44.9338L0.657668 80.5845L4.26881 89.5227L92.5104 53.872Z" fill="black"/>
    </svg>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
svg {
  width: 100%;
  path {
    fill: var(--body-color);
    transition: all .3s ease-in-out;
  }
}
</style>
