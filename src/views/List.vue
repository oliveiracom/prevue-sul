<template>
  <div class="element">
    <Header />

    <h1>Consulta de Clientes</h1>

    <span class="loading" v-if="loading"></span>
    <div class="client_list" v-for="client of clients" :key="client.id">
      <div class="card">
        <div class="top">
          <h2>{{ client.nome }}</h2>
          <router-link  :to="{ path: '/edit/'+ client.id}"><button class="btn">Editar</button></router-link> 
          <span><button class="btn btn-danger" v-on:click="excluir(client.id)">Excluir</button></span>
          <button class="down"></button>
        </div>

        <div class="hidden" v-bind:class="client.id">
          <ClientData :id="client.id"/>
        </div>
        
      </div>

  </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/layout/Header.vue";
import ClientData from "@/components/client-data.vue";
import Client from "@/services/clients.js";

export default {
  name: "List",
  components: {
    Header,
    ClientData
  },
  data() {
    return {
      clients: [],
      group: {},
      loading: true
    };
  },
  methods: {
    excluir(id) {
      this.loading = true;
      alert("Cliente será excluido");
      
      Client.deletar(id).then( res => {
      console.log('Cliente excluído - ', id);
      });
      this.clients = [],
      this.listar();
    },

    listar() {
        Client.obterTodos().then( res => {
            console.log(res.data);
            this.clients = res.data;
            this.loading = false;
        })
    }
  },

  mounted(){
    this.listar();
  }
};
</script>
