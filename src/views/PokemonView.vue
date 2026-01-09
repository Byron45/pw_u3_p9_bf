<template>
  <div>
    <PokemonImagen :pokemonId="pokemonGanador" />
    <PokemonOpciones
      v-on:seleccionado="evaluarGanador($event)"
      :listaPokemon="pokemonArr"
    />
    <h1 v-if="mensaje" :class="mensaje.tipo">{{ mensaje.texto }}</h1>
    <button @click="destruir()">Destruir</button>
  </div>
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";
import {
  obtenerAleatorioFachada,
  obtenerVectorPokemonFachada,
} from "../clients/PokemonClient.js";

export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  data() {
    return {
      pokemonArr: [],
      pokemonGanador: null,
      mensaje: null,
      mostrar: true,
    };
  },
  /*Crea el componente*/
  beforeCreate() {
    console.log("beforeCreate: Apenas inicia la instancia del componente");
  },
  created() {
    console.log("created: ya se resolvieron data, computed, methods, watch");
  },

  /*Monta el componente: Renderiza o se visualiza el componente*/
  beforeMount() {
    console.log(
      "beforeMount: justo antes de montar el componente, renderizar un elemento html"
    );
  },
  mounted() {
    console.log("mounted: Componente ya se renderizo");
    this.iniciarJuego();
  },

  /*Actualizacion de un componente*/
  beforeUpdate() {
    console.log(
      "beforeUpdate: cuando cambio data/prop y Vue esta por renderizar"
    );
  },
  updated() {
    console.log(
      "updated: cuando el omponente ya se actualizo tras la re-renderizacion"
    );
  },

  methods: {
    async iniciarJuego() {
      this.pokemonArr = await obtenerVectorPokemonFachada();

      const idAleatorio = obtenerAleatorioFachada(0, 3);
      this.pokemonGanador = this.pokemonArr[idAleatorio].id;
    },
    destruir() {
      this.mostrar = false;
    },

    evaluarGanador(idGanador) {
      console.log("Valor recibido desde padre");
      console.log(idGanador);
      if (idGanador === this.pokemonGanador) {
        console.log("Ganador");
        this.mensaje = {
          texto: "¡Ganaste!",
          tipo: "ganador",
        };
      } else {
        console.log("Perdedor");
        this.mensaje = {
          texto: "¡Perdiste!",
          tipo: "perdedor",
        };
      }
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 20px;
}
h1.ganador {
  color: green;
}
h1.perdedor {
  color: red;
}
</style>