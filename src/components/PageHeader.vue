<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
    name: 'PageHeader'
}
</script>

<template>
    <div class="pageHeader">
        <header class="header">
            <strong>
                <g-link to="/">{{ $static.metadata.siteName }}</g-link>
            </strong>
            <nav class="nav">
                <g-link class="nav__link" to="/">Home</g-link>
            </nav>
        </header>
    </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>