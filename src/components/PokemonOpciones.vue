<template>
  <div class="opciones-container">
    <ul>
      <li
        v-on:click="pasarPadre(pokemon.id)"
        v-for="pokemon in listaPokemon"
        :key="pokemon.id"
      >
        {{ pokemon.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    listaPokemon: {
      type: Array,
      required: true,
    },
  },
  methods: {
    pasarPadre(id) {
      console.log("Pokemon seleccionado: " + id);
      this.$emit("seleccionado", id);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
li {
  background-color: white;
  border-radius: 5px;
  border: solid 1px black;
  cursor: pointer;
  width: 250px;
  margin-top: 10px;
}
.opciones-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>