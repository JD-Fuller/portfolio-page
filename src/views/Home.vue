<template>
  <div class="row home">
    <div class="col-12" style="text-align: center;">
      <h1>JD Fuller</h1>
      <h2>Designer - Software - Crazy One</h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      selectedFile: null
    };
  },
  components: {}
};
</script>
<style>
h1 {
  font-family: "Permanent Marker", cursive;
  font-size: 125px;
  color: rgb(43, 42, 42);
  filter: blur(0.5px) opacity(0.8);
}

h2 {
  font-family: "Permanent Marker", cursive;
  font-size: 60px;
  color: rgb(43, 42, 42);
  filter: blur(0.5px) opacity(0.8);
}

h3 {
  font-family: "Covered By Your Grace", cursive;
}
</style>
