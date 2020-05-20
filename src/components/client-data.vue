<template>
    <div>
        <p><small>cadastrado em:</small> </p>
        <p><strong>Data de Nascimento:</strong> - <strong>Idade:</strong></p>

        <div class="address"> <!-- v-for="address of cliente.cliente_Enderecos
 -->        <p><strong>Logradouro:</strong> - <strong>Bairro:</strong></p>
            <p><strong>Cidade:</strong> - <strong>UF:</strong> - <strong>CEP:</strong></p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Client from "@/services/clients.js";

@Component
export default class ClientData extends Vue {
   @Prop() private id!: string;

 
  mounted(){
    Client.obter(this.id).then( res => {
      console.log(res.data);
      this.clients = res.data;
      this.loading = false;
    })
  }
}
//duplicado pra consumir todas rotas
</script>