<template>
  <div class="row home">
    <div class="col-12" style="text-align: left;">
      <h1>I'm JD</h1>
      <h2>
        Designer - <span style="color: red;">Developer</span> - Storyteller
      </h2>
    </div>
    <div class="col-12" style="text-align: right;">
      <h4><span> About</span></h4>
    </div>
    <div class="col-12" style="text-align: right;">
      <h4>
        Projects
      </h4>
    </div>
    <div class="col-12" style="text-align: right;">
      <h4>
        <span> Contact</span>
      </h4>
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
  font-family: "Bowlby One SC", cursive;
  font-size: 200px;
  color: rgb(239, 239, 239);
}

h2 {
  font-family: "Bowlby One SC", cursive;
  color: rgb(239, 239, 239);
  filter: blur(0.5px) opacity(0.8);
}

h3 {
  font-family: "Covered By Your Grace", cursive;
}

h4 {
  font-family: "Rubik Mono One", sans-serif;
  color: rgb(239, 239, 239);
  filter: blur(0.5px) opacity(0.8);
}

.col-12 {
  border: 1px solid red;
}
.row {
  border: 1px solid green;
}
</style>
