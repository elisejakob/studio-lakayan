<template>
  <g-link class="logo" to="/">
    <svg width="111" height="111" viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.07 29.0862V0.37616H13.08V26.7262H28.8V29.0862H10.07Z" fill="#fff"/>
    <path d="M10.07 71.8362V43.1262H13.08V58.5862H13.37L29.47 43.1262H33.43L19.34 56.4062L33.37 71.8362H29.7L17.48 58.2262L13.08 62.5162V71.8362H10.07Z" fill="#fff"/>
    <path d="M84.14 43.1262H87.62L97.4 56.7562H97.69L107.47 43.1262H110.95L99.05 59.4062V71.8362H96.05V59.4062L84.14 43.1262Z" fill="#fff"/>
    <path d="M109.83 82.1462V110.856H106.9L87.41 86.8162H87.15V110.856H84.14V82.1462H87.06L106.61 106.216H106.87V82.1462H109.83Z" fill="#fff"/>
    <path d="M33.44 26.7361H0V29.0962H33.44V26.7361Z" fill="#fff"/>
    <path d="M13.08 0.37616H10.07V32.0362H13.08V0.37616Z" fill="#fff"/>
    <path d="M70.71 29.0862L59.65 1.90619L57.1 2.93616L67.74 29.0862H70.71Z" fill="#fff"/>
    <path d="M46.46 29.0862L57.1 2.93616L54.55 1.90619L43.48 29.0862H46.46Z" fill="#fff"/>
    <path d="M70.71 71.8362L59.65 44.6562L57.1 45.6962L67.74 71.8362H70.71Z" fill="#fff"/>
    <path d="M46.46 71.8362L57.1 45.6962L54.55 44.6562L43.48 71.8362H46.46Z" fill="#fff"/>
    <path d="M70.71 110.856L59.65 83.6761L57.1 84.7062L67.74 110.856H70.71Z" fill="#fff"/>
    <path d="M46.46 110.856L57.1 84.7062L54.55 83.6761L43.48 110.856H46.46Z" fill="#fff"/>
    </svg>
  </g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
svg {
  path {
    fill: var(--body-color);
  }
}
</style>
