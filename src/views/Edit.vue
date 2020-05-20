<template>
  <div class="element">
    <Header />

    <h1>Editar Cadastro {{ $route.params.id }}</h1>

    <span class="loading" v-if="loading"></span>
    <form @submit.prevent="addCliente">
      <!-- <input type="text" v-model="cliente.nome" min="20" name="cliente" placeholder="Nome Completo:" required/><br/>
      
      <input type="text" v-model="cliente.dtNasc" name="dt_nascimento" placeholder="Data de Nascimento" required/><br/>
      Endereço Principal:<br/>

      <div class="enderecos" v-for="address of cliente_Enderecos" :key="client.id"></div>
      <input type="text" v-model="enderecos.logradouro" name="logradouro" placeholder="Rua" required/><br/>
      <input type="text" v-model="enderecos.cep" name="cep" placeholder="CEP" required/><br/>
      <input type="text" v-model="enderecos.uf" name="uf" placeholder="Estado" required/><br/>
      <input type="text" v-model="enderecos.city" name="cidade" placeholder="Cidade" required /><br/>
      <input type="text" v-model="enderecos.bairro" name="bairro" placeholder="Bairro" required/><br/> -->
      <input type="submit" value="Salvar Cliente" class="btn btn-send"/> 
    </form>
    <span v-for="(erro, index) of errors" :key="index">{{ erro.field }} - {{ erro.default }}</span>
    
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";

export default {
  name: 'Edit',
  components: {
    Header
  },
  mounted() {
   console.log('fim')
  }
};
</script>
