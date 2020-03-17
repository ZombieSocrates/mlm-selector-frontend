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
      HostCount: 0,
      HostList: [],
      NextHostDate: ''
    }
  },
  created: function () {
    const vm = this
    fetch('./.netlify/functions/foo-bar')
      .then(function (response) {
        // response.text().then(console.log(text))
        return response.json()
      })
      .then(function (data) {
        console.log(data)
        vm.HostCount = data.HostCount
        vm.HostList = data.HostList
        vm.NextHostDate = data.NextHostDate
      })
    console.log(vm.data)
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
