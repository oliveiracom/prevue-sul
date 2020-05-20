<template>
  <nav class="navbar">    
    <router-link to="/"> <img alt="Previsul" class="navbar-brand" src="@/assets/previsul.svg" /></router-link> 
    <div class="navbar-nav">
      <router-link to="/create"><button class="btn btn-info nav-item">Cadastrar novo cliente</button></router-link> 
      <router-link to="/list"><button class="btn nav-item">Consultar</button></router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style>
.header img {
  max-width: 400px;
}
</style>
