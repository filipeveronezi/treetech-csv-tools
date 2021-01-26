<template>
  <div id="open-file">
    <input
      type="text"
      class="form-control"
      placeholder="exemplo.csv"
      disabled
    />
    <button class="btn btn-large btn-default">Importar</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
#open-file {
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
}
#open-file input {
  width: 40%;
  height: 2rem;
  background: #f1f1f1;
  border-radius: 15px 0 0 15px;
  letter-spacing: .07rem;
}

#open-file button {
  height: 2rem;
  border-radius: 0 15px 15px 0;
  cursor: pointer;
  border-left: 0;
  background: #008241;
  color: #fff;
  letter-spacing: .07rem;
}
</style>
