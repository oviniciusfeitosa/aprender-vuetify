<template>
  <v-container>
    <v-data-table
        :headers="headers"
        :items="obterEventos"
        hide-actions
        class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.date }}</td>
        <td class="text-xs-right">{{ props.item.desc }}</td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>

  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Eventos',
    data () {
      return {
        headers: [
          {
            text: 'Nome',
            align: 'center',
            sortable: true,
            value: 'name'
          },
          { text: 'Data', value: 'date' },
          { text: 'Descrição', value: 'fat' },
        ]
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
    mounted () {
      this.getEventos({ name: 'lerolero', date: 'lerolero', desc: 'lerolero' })

    },
    computed: {
      ...mapGetters({ obterEventos: 'eventos/obterEventos' })
    }
  }
</script>
