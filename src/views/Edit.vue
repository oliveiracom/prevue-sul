<template>
  <div class="element">
    <Header />
    {{ $route.params.id }}
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/layout/Header.vue";

export default {
  name: "Edit",
  components: {
    Header
  }
};
</script>
