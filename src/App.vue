<template>
  <div id="app">
    <nav class="nav-group sidebar animate-right">
      <h5 class="nav-group-title">
        <span class="icon icon-tools" />
        Ferramentas
      </h5>
      <router-link
        to="/"
        class="nav-group-item"
        :class="$route.path == '/' ? 'active' : ''"
      >
        <span class="icon icon-info-circled"></span>
        Sobre
      </router-link>
      <router-link
        to="/csv-view"
        class="nav-group-item"
        :class="$route.path == '/csv-view' ? 'active' : ''"
      >
        <span class="icon icon-eye"></span>
        Visualizar CSV
      </router-link>
      <router-link
        to="/header-migration"
        class="nav-group-item"
        :class="$route.path == '/header-migration' ? 'active' : ''"
      >
        <span class="icon icon-shuffle"></span>
        Atualizar cabeçalho
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
      <router-view class="animate-up"></router-view>
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
@import "./assets/style/photon/css/photon.min.css";
@import "./assets/style/animations.css";

#app {
  margin: 0;
  height: 100vh;
  width: 100%;
  display: flex;
}

#app nav {
  width: 15vw;
  min-width: 230px;
}

#app main {
  width: 85vw;
  height: 100vh;
  padding: 0 30px 0 20px;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-group-item {
  cursor: pointer;
}

.nav-group-item:hover {
  background-color: #0082417b;
  color: #fff;
  transition: all .15s;
}

.nav-group-item:hover > .icon {
  color: #fff;
  transition: all .15s;
}

.active {
  background-color: #008241 !important;
  color: #fff !important;
}

.active > .icon {
  color: #fff;
}
</style>
