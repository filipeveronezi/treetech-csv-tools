<template>
  <div id="header-migration">
    <OpenFile/>
  </div>
</template>

<script>
import OpenFile from '../components/OpenFile'

export default {
  components: {
    OpenFile
  }
}
</script>

<style scoped>
  #header-migration {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
