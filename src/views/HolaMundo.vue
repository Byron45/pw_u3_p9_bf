<template>
  <h2>Hola Mundo</h2>
  <h1>Consultando los datos del estudiante</h1>
  <button v-on:click="mostrarID(idEstudiante)">Mostrar ID</button>
  <h3>{{ idEstudiante }}</h3>
</template>

<script>
export default {
  data() {
    return {
      idEstudiante: null,
    };
  },
  created() {
    console.log(this.$route);
    console.log(this.$route.params.id);
    //this.idEstudiante = this.$route.params.id;
    console.log(this.$route.query.anio);
    console.log(this.$route.query.mes);
    console.log(this.$route.query.apellido);
  },
  methods: {
    mostrarID(id) {
      this.idEstudiante = this.$route.params.id;
    },
  },
};
</script>

<style scoped>
</style>