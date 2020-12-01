<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { IFactory } from "@/utils/IFactory";

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  async created() {
    let result = await IFactory.getProdutosData().getAll();
    console.log(result);
  }
}
</script>
