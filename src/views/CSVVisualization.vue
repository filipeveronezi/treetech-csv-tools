<template>
  <div id="csv-view">
    <OpenFile id="open-file"/>
    <Table id="csv-table"/>
  </div>
</template>

<script>
import OpenFile from '../components/OpenFile'
import Table from '../components/Table'

export default {
  components: {
    OpenFile, Table
  }
}
</script>

<style scoped>
#csv-view{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 10vh 1fr;
}
</style>