<template>
  <b-container>
    <div class="section content-title-group">
      <h2 class="title">STUDENT</h2>
    </div>
    <div class="mt-4">
      <b-card img-src="./assets/test.png" img-alt="Card image" img-left class="mb-3">
        <b-card-title>{{this.$parent.user.user}}</b-card-title>
        <b-card-sub-title class="text-left">Ålder</b-card-sub-title>
        <b-card-text class="text-left">{{this.$parent.user.age}}</b-card-text>
        <b-card-sub-title class="text-left">Klass</b-card-sub-title>
        <b-card-text class="text-left">{{this.$parent.user.class}}</b-card-text>
        <b-card-sub-title class="text-left">E-post</b-card-sub-title>
        <b-card-text class="text-left">{{this.$parent.user.userEMAIL}}</b-card-text>
        <b-card-sub-title class="text-left">ID</b-card-sub-title>
        <b-card-text class="text-left">{{this.$parent.user.userId}}</b-card-text>
      </b-card>
      <b-form-group class="text-left" label="Beskrivning" label-for="textarea-lazy">
        <b-form-textarea
                v-model="desc"
                id="textarea-lazy"
                :placeholder="this.$parent.user.description"
                lazy-formatter
                :formatter="formatter"
        ></b-form-textarea>
        <b-button class="mr-0 mt-1" size="sm" @click="saveDescription()">Save</b-button>
      </b-form-group>
      <h5 class="text-left" >Ladda upp cv</h5>
      <b-form-group id="image-group" >
        <b-form-file
                enctype="multipart/form-data"
                type="file"
                ref="file"
                v-on:change="handleFileUpload()"
                placeholder="Välj en bild eller släpp den här..."
                drop-placeholder="Släpp bilden här..."
        />
        <b-button class="mr-0 mt-1" size="sm" v-on:click="submitFile()">Spara</b-button>
      </b-form-group>
      <h5 class="text-left">Ladda upp personligt brev</h5>
      <b-form-file
              :state="Boolean(pb)"
              placeholder="Välj en fil eller dra filen hit..."
              drop-placeholder="Dra filen hit"
      ></b-form-file>
      <b-button class="mr-0 mt-1" size="sm">Spara</b-button>
      <h5 class="text-left">Ladda upp betyg</h5>
      <b-form-file
              :state="Boolean(betyg)"
              placeholder="Välj en fil eller dra filen hit..."
              drop-placeholder="Dra filen hit"
      ></b-form-file>
      <b-button class="mr-0 mt-1" size="sm">Spara</b-button>
    </div>
  </b-container>
</template>
<script>
  import axios from 'axios';

  export default {
    name: "Heroes",
    data() {
      return {
        desc:"",
        file: "",
        users: [],
        message: "test"
      };
    },
    methods: {
      cancelHero() {
        this.message = "";
      },
      saveHero() {
        this.message = JSON.stringify(this.hero, null, "\n");
      },
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      },

      async saveDescription(){

        const requestOptions = {
          method: "PUT",
          mode: 'cors',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({description: this.desc})
        };
        const response = await fetch("http://localhost:3000/api/users/"+this.$parent.user.userId, requestOptions);
        console.log(this.$parent.user.userId);
        const data = await response.json();
        if (data.length === 0) {
          alert(" felaktigt!");
        }

      },






      async submitFile(){
        let formData = new FormData();
        formData.append('file', this.file);
        await axios.post( 'http://127.0.0.1:3000/api/upload',
                formData,
        ).then(function(){
          console.log('SUCCESS!!');

        })
                .catch(function(){
                  console.log('FAILURE!!');
                });

      }
    },/*
      mounted(){
        fetch('http://127.0.0.1:3000/api/users/')
                .then((response) => {
                  return response.json();
                })
                .then((data) => {
                  console.log(data.users);
                  this.users = data.users;

                });
    }*/
  }

</script>


