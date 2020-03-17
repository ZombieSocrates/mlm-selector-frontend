<template>
  <div>
    <h1>There are {{ HostCount }} possible hosts...</h1>
    <ul v-for="host in HostList" :key=host.id>
      <b>{{ host.name}}</b>
    </ul>
  </div>
</template>

<script>

// import HostCandidate from '@/components/HostCandidate.vue'

export default {
  name: 'HostGrid',
  // components: { HostCandidate}
  data: function () {
    return {
      HostCount: 9,
      HostList: [
        { id: 1, name: 'Lord Farquad' },
        { id: 2, name: 'Donkey' },
        { id: 3, name: 'Shrek' },
        { id: 4, name: 'Fiona' },
        { id: 5, name: 'Puss N\' Boots' },
        { id: 6, name: 'Humpty Dumpty' },
        { id: 7, name: 'Robin Hood' },
        { id: 8, name: 'Dragon' },
        { id: 9, name: 'Gingerbread Man' }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: left;
}

ul {
  list-style-type: none;
  text-align: left;
  padding: 0;
}
</style>
