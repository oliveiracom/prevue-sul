<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    Olá Corretor! O que deseja fazer?
    <router-link to="/create">Cadastrar Novo Cliente</router-link> |
    <router-link to="/create">Listar Clientes</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
