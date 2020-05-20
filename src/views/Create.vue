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

    formatDate(){
      
    },

    addCliente() {
      this.body = {
        "NOME": this.cliente.nome,
        "DT_NASCIMENTO":"1983-02-07",
        "STATUS":1,
        "DAT_INCLUSAO":"2019-10-18",
        "cliente_enderecos":[  
            {  
              "LOGRADOURO":"rua quaiz quaiz , 100",
              "CEP":"06670707",
              "UF":"SP",
              "CIDADE":"SAO PAULO",
              "BAIRRO":"CENTRO",
              "STATUS":1,
              "DAT_INCLUSAO":"2019-10-18"
            }
        ]
      },

      this.loading = true;
      this.test =  JSON.stringify(this.body)      

      Client.cadastrar(this.body).then( res => {
        console.log(res)
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
