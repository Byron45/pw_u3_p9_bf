<template>
  <div>
    <img v-if="imagen" :src="imagen" alt="No se puede visualizar la imagen" />
    <div class="oscuro"></div>
    <div class="pregunta-container">
      <input v-model="pregunta" type="text" placeholder="Hazme una Pregunta" />
      <p>Recuerda Terminar con el signo de Interrogación (?)</p>
      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta }}</h1>
    </div>
  </div>
</template>

<script>
import { consumirAPIFacade } from "../clients/YesNoClient.js";

export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
      Imagen: null,
    };
  },
  watch: {
    pregunta(value, oldValue) {
      if (value.includes("?")) {
        //Llamar al API
        this.respuesta = "Pensando.....";
        this.consumir();
      }
    },
  },
  methods: {
    async consumir() {
      const resp = await consumirAPIFacade();
      console.log("Respuesta Final ");
      console.log(resp);
      console.log(resp.answer);
      this.respuesta = resp.answer;
      this.imagen = resp.image;
    },
  },
};
</script>

<style scoped>
img,
.oscuro {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 1; /* Asegura que la imagen y el fondo oscuro estén detrás */
}

.oscuro {
  background-color: rgba(0, 0, 0, 0.5);
}

.pregunta-container {
  position: relative;
  color: white;
  display: flex;
  flex-direction: column; /* elementos uno debajo del otro */
  justify-content: center; /* centrado vertical */
  align-items: center; /* centrado horizontal */
  padding: 20px;
  z-index: 2; /* Asegura que el contenedor de la pregunta esté encima */
}

input {
  width: 300px;
  padding: 10px 15px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
}

input:focus {
  outline: none;
}

p {
  font-size: 20px;
}

h2 {
  font-size: 40px;
  margin-top: 150px;
}
</style>