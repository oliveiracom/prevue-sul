<template>
  <div class="element">
    <Header />

    <h1>Cadastre um novo cliente</h1>

    <span class="loading" v-if="loading"></span>
    <form @submit.prevent="addCliente">
      <input type="text" v-model="cliente.nome" min="20" name="cliente" placeholder="Nome Completo:" required/><br/>
      
      <input type="text" v-model="cliente.dtNasc" name="dt_nascimento" placeholder="Data de Nascimento" required/><br/>
      Endereço Principal:<br/>
      <input type="text" v-model="enderecos.logradouro" name="logradouro" placeholder="Rua" required/><br/>
      <input type="text" v-model="enderecos.cep" name="cep" placeholder="CEP" required/><br/>
      <input type="text" v-model="enderecos.uf" name="uf" placeholder="Estado" required/><br/>
      <input type="text" v-model="enderecos.city" name="cidade" placeholder="Cidade" required /><br/>
      <input type="text" v-model="enderecos.bairro" name="bairro" placeholder="Bairro" required/><br/>
      <button class="btn">Adicionar Endereço</button>
      <input type="submit" value="Salvar Cliente" class="btn btn-send"/> 
    </form>
    <span v-for="(erro, index) of errors" :key="index">{{ erro.field }} - {{ erro.default }}</span>
    
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Client from "@/services/clients.js";

export default {
  name: "Create",
  components: {
    Header
  },
  data() {
    return {
      enderecos: {
        logradouro: '',
        cep: '',
        uf: '',
        cidade: '',
        bairro: '',
        status: '',
        datInc:''
      },
      cliente: {
        nome: '',
        dtNasc: '',
      },
      body: {},
      errors: [],
      loading: true,
    };
  },
  mounted(){
    this.loading = false;
  },

  methods: {

    addCliente() {
      this.body = {
      }
      this.loading = true;
      this.cliente.clienteEnd =  JSON.stringify(this.enderecos)
      this.body = JSON.stringify(this.cliente)

      console.log(this.body);

      /*Client.cadastrar().then( res => {
        alert(res);
      }).catch( e => {
        this.errors = JSON.parse(e);
      });*/

      this.loading = false;
    }

  }
};

/*
cliente: {
        nome: '',
        dt_nascimento: '',
        status: '',
        dat_inclusao: '',
        cliente_enderecos: '',        
      }

enderecos: {
        logradouro: '',
        cep: '',
        uf: '',
        cidade: '',
        bairro: '',
        status: '',
        dat_inclusao:''
      },*/
</script>
