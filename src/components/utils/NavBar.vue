<template>
  <nav id="navbar">
    <div id="navBar">User's status</div>
  </nav>
</template>

<script>
const token = localStorage.getItem("token");
if (token == null) {
  // haven't login
} else {
  // login
}
console.log("Token: ", token);

export default {
  name: "NavBar",
};
</script>

<style>
.navBar {
  width: 100%;
  background-color: black;
}
</style>
