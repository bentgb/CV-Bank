<template>
  <b-container>
    <div class="section content-title-group">
      <h2 class="title">STUDENT</h2>
    </div>

    <div class="mt-4">
      <b-card>
        <b-card-img
          :src="require('../assets/test.png')"
          alt="Card image"
          class="mb-3 w-25 h-50 img-left"
        ></b-card-img>
        <b-card-title>{{hero.firstName}}</b-card-title>
        <b-card-sub-title class="text-left">Ålder</b-card-sub-title>
        <b-card-text class="text-left">{{hero.age}}</b-card-text>

        <b-card-sub-title class="text-left">Klass</b-card-sub-title>
        <b-card-text class="text-left">{{hero.klass}}</b-card-text>

        <b-card-sub-title class="text-left">E-post</b-card-sub-title>
        <b-card-text class="text-left">{{hero.email}}</b-card-text>
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
      hero: {
        id: 20,
        firstName: "Elif Kubra",
        lastName: " Arslan",
        description: "10 yasinda",
        email: "test@example.com",
        klass: "webb/cms",
        age: 21,
        active: true
      },
      form: {
        cv: null,
        betyg: null,
        pb: null
      },
      message: "test"
    };
  },
  methods: {
    cancelHero() {
      this.message = "";
    },
    saveHero() {
      this.message = JSON.stringify(this.hero, null, "\n");
    }
  }
};
</script>

