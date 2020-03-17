<template>
  <div>
    <h1>Who's gonna host MLM on {{ NextHostDate }}?!?!</h1>
    <ul v-for="host in HostList" :key=host.id>
      <b>{{ host.name}}???</b>
    </ul>
  </div>
</template>

<script>

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
    fetch('./.netlify/functions/mlm-candidates')
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        console.log(data)
        vm.HostCount = data.HostCount
        vm.HostList = data.HostList
        vm.NextHostDate = data.NextHostWeek
      })
    console.log(vm.data)
  }
}
</script>

<style scoped>
h1 {
  text-align: left;
  font-family: 'Comic Sans MS';
}

ul {
  list-style-type: none;
  font-family: 'Comic Sans MS';
  text-align: left;
  padding: 0;
}
</style>
