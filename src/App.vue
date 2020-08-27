<template>
  <div id="app"  class="grid">

    <section class="item1">
      <div class="item1-body">
          <div class="logo-box">
            <img src="./assets/logo.svg" alt="Logo" class="logo-img">
          </div>
          </div>
    </section>


    <section class="item3">
    <div class="item3-body">
        <div id="nav">

            <router-link v-if="authenticated" to="/mypage" replace>Min sida</router-link>
            <router-link v-if="authenticated" to="/mypage" v-on:click.native="logout()" replace>Logga ut</router-link>
            <hr>
        </div>

        <router-view @authenticated="setAuthenticated" @user="setUser" />
    </div>
    </section>


    <section class="item4">
      <div class="item4-body">
        <p>Copyright (c) 2020 by Tugb, Aisha, Husam .</p>
      </div>
    </section>

  </div>
</template>

<script>
    export default {
        name: 'app',
        components: {

        },

        data() {
            return {
                authenticated: false,
                user: null,

            }
        },

        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "home" });
            }

        },

        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            setUser(id){
                this.user = id;
            },
            logout() {
                this.authenticated = false;
                this.setUser(null);
                this.$router.push({path: '/'})
            }
        }
    }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

  /*____________________________________________________*/

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
          "header  header header"
          "sidebar sidebar sidebar"
          "footer  footer footer";
  grid-auto-flow: dense;
  grid-gap: 5px;
}

[class^="item"] {
  text-align: center;
  background-color: #fbf8f9  ;
}

.item1 {
  grid-area: header;
}
.item1-body{
  width: 100%;
  height: 120px;
  border: 3px solid #ccc;
  display: inline-block;
  background-color: #662246;


}
.logo-box{
  float: left;
  overflow: hidden;
  height: 100%;


}
.logo-img{
  margin-left: 150px;
  width:350px;
  height: 100%;
  display: inline-block;
}

.item3 {
  grid-area: sidebar;
  display:flex;

}
.item3-body{
  border: 3px solid #ccc;
  display: inline-block;
  height: 100%;
  width: 100%;
  padding-bottom: 50px;
  padding-top: 50px;
}

.item4 {
  grid-area: footer;
}
.item4-body{
  border: 3px solid #ccc;
  display: inline-block;
  width: 100%;
  background-color: #662246;
  color: #FFFFFF;
}
a {
    color: darkslategrey;
    font-weight: bolder;
    text-decoration: none;
    padding: 0 10px;
}

a:hover,
a:visited {
    text-decoration: underline;
}


</style>
