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

      <div v-for="(end, index) of endExtra" :key="index" class="extra_address">
      Endereço {{ index + 1 }}  <button type="button" class="btn" v-on:click="removeAddress(index)">Remover Endereço</button>
      <input type="text" v-model="endExtra[index].logradouro" name="logradouro" placeholder="Rua"/><br/>
      <input type="text" v-model="endExtra[index].cep" name="cep" placeholder="CEP"/><br/>
      <input type="text" v-model="endExtra[index].uf" name="uf" placeholder="Estado"/><br/>
      <input type="text" v-model="endExtra[index].city" name="cidade" placeholder="Cidade" /><br/>
      <input type="text" v-model="endExtra[index].bairro" name="bairro" placeholder="Bairro"/><br/>

      </div>

      <button type="button" class="btn" v-on:click="addAddress">Adicionar Endereço</button>

      <input type="submit" value="Salvar Cliente" class="btn btn-send"/> 
    </form>
    <span v-for="(erro, index) of errors" :key="index">{{ erro.field }} - {{ erro.default }}</span>
    
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/layout/Header.vue";
import Client from "@/services/clients.js";

export default {
  name: "Create",
  myvar: "dt_nascimento",
  components: {
    Header
  },
  data() {
    return {
      enderecos: [],
      endExtra: [],
      cliente: {
        nome: '',
        dtNasc: ''
      },
      test: {},
      body: {},
      errors: [],
      loading: true,
    };
  },
  mounted(){
    this.loading = false;
  },

  methods: {

    silence() {
      console.log('silence in the house');
    },

    formatDate(){
      console.log('niente');
    },

    addAddress() {
      console.log('add address');
      this.endExtra.push(
        {
        logradouro: '',
        cep: '',
        uf: '',
        cidade: '',
        bairro: '',
        status: '1',
        datInc:'2020-05-20'
        }
      );
    },

    removeAddress(index){
      this.endExtra.splice(index,1);
    },

    addCliente() {
      this.body = {
        "NOME": this.cliente.nome,
        "DT_NASCIMENTO": this.cliente.dtNasc,
        "STATUS":1,
        "DAT_INCLUSAO":"2019-10-18",
        "cliente_enderecos": this.endExtra
      },

      this.loading = true;    

      Client.cadastrar(this.body).then( res => {
        console.log('Sucesso');
        this.cliente = {};
        this.enderecos = [];
        this.endExtra = [];
      }).catch( e => {
        this.errors = JSON.parse(e);
      });

      
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
