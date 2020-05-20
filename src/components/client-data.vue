<template>
    <div>
        Id: {{ id }}
        Dados do cliente {{ nome }}
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Client from "@/services/clients.js";

@Component
export default class ClientData extends Vue {
   @Prop() private id!: string;

   /*data() {
    return {
      clients: [],
      group: {},
      loading: true
    };
  },
  mounted(){
    Client.obter().then( res => {
      console.log(res.data);
      this.clients = res.data;
      this.loading = false;
    })
  }*/
}
</script>