<template>
  <div class="contact-container">
    <nuxt-link to="/" class="navigation-icon"><font-awesome-icon icon="arrow-left"/></nuxt-link>
    <h1 class="header">Contact</h1>
    <div class="contact-description">
      <p>
      I am currently available for work in Prague, Czech Republic while I’m also interested in a remote experience.
      </p>
      <br/>
      <p>
      You can contact me on any of the links below.
      </p>
    </div>
    <div class="contact-links-container">
      <a href="https://www.linkedin.com/in/ondrej-hladik" target="_blank" class="contact-link">
        <span class="contact-link-icon">
          <font-awesome-icon :icon="['fab', 'linkedin']"/>
        </span>
        <span class="contact-link-label">Ondřej Hladík</span>
      </a>
      <a href="https://github.com/ohladik" target="_blank" class="contact-link">
        <span class="contact-link-icon">
          <font-awesome-icon :icon="['fab', 'github']"/>
        </span>
        <span class="contact-link-label">ohladik</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  flex-shrink: 0;
  flex-grow: 1;
  margin-top: 72px;
  margin-bottom: 72px;
}

.navigation-icon {
  color: #9da6ba;
  font-size: 30px;
}

.navigation-icon:hover {
  color: #626875;
}

.header {
  font-weight: 500;
  font-size: 48px;
  letter-spacing: 1px;
  margin-top: 16px;
}

.contact-description {
  margin-top: 32px;
  font-weight: 500;
  font-size: 22px;
  letter-spacing: 1px;
}

.contact-links-container {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
}

.contact-link-icon,
.contact-link-label {
  font-size: 16px;
  color: #000;
}

.contact-link-label {
  margin-left: 12px;
  line-height: 36px;
  font-weight: 300;
  letter-spacing: 1px;
}

@media (max-width: 600px) {
  .contact-container {
    margin-top: 36px;
  }

  .navigation-icon {
    font-size: 20px;
  }

  .header {
    font-weight: 500;
    line-height: 36px;
    font-size: 26px;
    letter-spacing: 1px;
  }

  .contact-description {
    max-width: 300px;
    margin-top: 16px;
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 0px;
    line-height: 20px;
  }
}
</style>
