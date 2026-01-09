<template>
  <div class="pokemon-container">
    <img :src="srcImagen" alt="No se puede renderizar la imagen" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    srcImagen() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },

  /*Desmontaje de un componente*/
  beforeUnmount() {
    console.log(
      "beforeUnmount: justo antes de desmontar el componente, se destruya"
    );
  },
  unmounted() {
    console.log(
      "unmounted: Componente ya se desmontó, fue removido del DOM y destruido"
    );
  },
};
</script>

<style scoped>
img {
  height: 200px;
  right: 32%;
}
.pokemon-container {
  height: 200px;
}
</style>