<template>
  <b-container>
    <div class="section content-title-group">
      <h2 class="title">STUDENT</h2>
    </div>
    <b-form method="submit">
      <b-form-file v-model="img" class="mt-3" plain></b-form-file>
      <b-button type="submit" @click="image">Spara</b-button>
    </b-form>

    <div class="mt-4">
      <b-card
        :img-src="require('../assets/' + form_img)"
        img-alt="No image selected"
        img-left
        class="mb-3"
      >
        <b-card-title class="text-center ml-3">{{this.$parent.user.user}}</b-card-title>
        <b-card-sub-title class="text-left ml-3 mb-2">Ålder</b-card-sub-title>
        <b-card-text class="text-left ml-4 mb-2">{{this.$parent.user.age}}</b-card-text>
        <b-card-sub-title class="text-left ml-3 mb-2">Klass</b-card-sub-title>
        <b-card-text class="text-left ml-4 mb-2">{{this.$parent.user.class}}</b-card-text>
        <b-card-sub-title class="text-left ml-3 mb-2">E-post</b-card-sub-title>
        <b-card-text class="text-left ml-4 mb-2">{{this.$parent.user.userEMAIL}}</b-card-text>
      </b-card>

      <b-form-group class="text-left" label="Beskrivning" label-for="textarea-lazy">
        <b-form-textarea
          id="textarea-lazy"
          placeholder="Skriv lite om dig själv.."
          lazy-formatter
          :formatter="formatter"
        ></b-form-textarea>
      </b-form-group>
      <h5 class="text-left">Ladda upp cv</h5>
      <b-form-group id="image-group">
        <b-form-file
          id="image"
          v-model="form.cv"
          placeholder="Välj en bild eller släpp den här..."
          drop-placeholder="Släpp bilden här..."
        />
      </b-form-group>
      <b-button class="mr-0 mt-1" size="sm">Spara</b-button>
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
export default {
  name: "Heroes",
  data() {
    return {
      users: [],
      form: {
        cv: null,
        betyg: null,
        pb: null
      },
      form_img: "test.png",
      message: "test",
      img: null
    };
  },
  methods: {
    cancelHero() {
      this.message = "";
    },
    saveHero() {
      this.message = JSON.stringify(this.hero, null, "\n");
    },
    image() {
      this.form_img = this.img.name;
      // fetch("api/users", {
      //   body: JSON.stringify({
      //     form_img: this.img.name
      //   }),
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   method: "POST"
      // })
      //   .then(response => response.json())
      //   .then(result => {
      //     // if()
      //   });
    }
  }
  /*
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
};
</script>

