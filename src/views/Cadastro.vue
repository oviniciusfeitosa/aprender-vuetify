<template>
  <v-container>
    <FormularioCadastro></FormularioCadastro>
    <Eventos></Eventos>
  </v-container>
</template>

<script>


  import Eventos from './Eventos'
  import FormularioCadastro from '../components/FormularioCadastro'

  export default {
    name: 'Cadastro',
    // mounted () {
    //   this.getEventos({ name: 'lerolero', date: 'lerolero', desc: 'lerolero' })
    //
    // }
    components: {
      Eventos,
      FormularioCadastro
    }
  }
</script>
