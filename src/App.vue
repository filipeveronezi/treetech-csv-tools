<template>
  <div id="app">
    <nav class="nav-group">
      <h5 class="nav-group-title">
        <span class="icon icon-tools" />
        Ferramentas
      </h5>
      <router-link
        to="/"
        class="nav-group-item"
        @click.native="getPath"
        :class="$route.path == '/' ? 'active' : ''"
      >
        <span class="icon icon-info-circled"></span>
        Sobre
      </router-link>
      <router-link
        to="/header-migration"
        class="nav-group-item"
        :class="$route.path == '/header-migration' ? 'active' : ''"
      >
        <span class="icon icon-shuffle"></span>
        Migração de cabeçalho
      </router-link>
      <router-link
        to="/merge"
        class="nav-group-item"
        :class="$route.path == '/merge' ? 'active' : ''"
      >
        <span class="icon icon-flow-branch"></span>
        Merge CSV
      </router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  created() {
    
  },
  methods: {

  },
};
</script>

<style>
@import "./assets/photon/css/photon.min.css";

#app {
  margin: 0;
  height: 100vh;
  width: 100%;
  display: flex;
}

#app nav {
  width: 15%;
  min-width: 150px;
  margin-right: 20px;
  background: #f1f1f1;
}

#app main {
}

.nav-group-item {
  cursor: pointer;
}
</style>
