<template>
  <v-container>
    <FormularioCadastro></FormularioCadastro>
    <Eventos></Eventos>
  </v-container>
</template>

<script>

  import { mapActions, mapGetters } from 'vuex'
  import Eventos from './Eventos'
  import FormularioCadastro from '../components/FormularioCadastro'

  export default {
    name: 'Cadastro',
    components: { FormularioCadastro, Eventos },
    data () {
      return {
        name: 'teste',
        nameRules: [true],
        date: '2018-03-02',
        desc: '',
        modal: false
      }
    },
    methods: {
      ...mapActions({ getEventos: 'eventos/eventos' }),
      salvar () {
        const params = { name: this.name, date: this.date, desc: this.desc }
        this.getEventos(params)
      },
      allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0
    },
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
