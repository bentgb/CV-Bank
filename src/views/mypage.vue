<template>
  <b-container>
    <div class="section content-title-group">
      <h2 class="title">STUDENT</h2>
    </div>
    <b-form method="submit">
      <b-form-file v-model="img" class="mt-3" plain></b-form-file>
      <p type="submit" @click="image">Change</p>
    </b-form>

    <div class="mt-4">
      <b-card
          :img-src="require('../assets/' + form_img)"
          :img-alt="'No image selected'"
          img-left
          class="mb-3"
      >
        <b-card-title class="text-center mr-5">{{ this.$parent.user.user }}</b-card-title>
        <b-card-sub-title class="text-left ml-2 mb-2">Ålder</b-card-sub-title>
        <b-card-text class="text-left ml-4 mb-2">{{ this.$parent.user.age }}</b-card-text>
        <b-card-sub-title class="text-left ml-2 mb-2">Klass</b-card-sub-title>
        <b-card-text class="text-left ml-4 mb-2">{{ this.$parent.user.class }}</b-card-text>
        <b-card-sub-title class="text-left ml-2 mb-2">E-post</b-card-sub-title>
        <b-card-text class="text-left ml-4 mb-2">{{ this.$parent.user.userEMAIL }}</b-card-text>
        <b-card-sub-title class="text-left">ID</b-card-sub-title>
        <b-card-text class="text-left">{{ this.$parent.user.userId }}</b-card-text>
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
      <h5 class="text-left">Ladda upp cv</h5>

      <b-form-group id="image-group">
        <b-form-file
            accept=".pdf"
            enctype="multipart/form-data"
            ref="file"
            v-model="file"
            v-on:change="handleFileUpload()"
            placeholder="Välj en .pdf fil eller släpp den här ...
"
            drop-placeholder="Släpp .pdf filen här som ..."
        />
        <b-button class="mr-0 mt-1" size="sm" v-on:click="submitFile()">Spara</b-button>
      </b-form-group>
      <div v-if="fileUploaded">
        {{ this.file.name }} is uploaded
        <!--        <a href="#" onclick="window.open('./uploads/Aisha.pdf', '_blank', 'fullscreen=yes'); return false;">MyPDF</a>-->
        <!--        <a href="./uploads/Aisha.pdf">Mypdf</a>-->
        <!--
        <iframe :src="getPDFPath()" style="width:200px; height:200px; border: none;">
          Oops! an error has occurred.
        </iframe>
        -->
        <b-button class="mr-0 mt-1" size="sm" v-on:click="readFile()">open</b-button>
      </div>

      <h5 class="text-left" >Ladda upp personligt brev</h5>
      <b-form-file
          accept=".pdf"
          enctype="multipart/form-data"
          ref="file"
          v-model="file"
          v-on:change="handleFileUpload()"
          placeholder="Välj en .pdf fil eller släpp den här ...
"
          drop-placeholder="Släpp .pdf filen här som ..."
      ></b-form-file>
      <b-button class="mr-0 mt-1" size="sm" v-on:click="submitCoverLetter()" >Spara</b-button>
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
import axios from "axios";

export default {
  name: "Heroes",
  data() {
    return {
      desc: "",
      file: "",
      fileUploaded: false,
      message: "test",
      form_img: "test.png",
      img: null
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },


    async submitFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      try {
        if (this.file != "") {
          axios.post("http://127.0.0.1:3000/api/upload/" + this.$parent.user.userId, formData);
          this.message = "uploaded";
          this.fileUploaded = true;
          alert("File uploaded");
        } else {
          alert("Choose a File ");

        }
      } catch (e) {
        this.message = "Sth went wrong";
      }
    },

    async submitCoverLetter() {
      const formData = new FormData();
      formData.append("file", this.file);
      try {
        if (this.file != "") {
          axios.post("http://127.0.0.1:3000/api/coverletters/" + this.$parent.user.userId, formData);
          this.message = "uploaded";
          this.fileUploaded = true;
          alert("cover letter uploaded");
        } else {
          alert("Choose a File ");

        }
      } catch (e) {
        this.message = "Sth went wrong";
      }
    },

    async saveDescription() {
      const requestOptions = {
        method: "PUT",
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({description: this.desc})
      };
      const response = await fetch(
          "http://localhost:3000/api/users/" + this.$parent.user.userId,
          requestOptions
      );
      console.log(this.$parent.user.userId);
      const data = await response.json();
      if (data.length === 0) {
        alert(" felaktigt!");
      }
    },

    readFile() {
      window.open("http://localhost:3000/api/uploads/"+this.$parent.user.userId, "_blank"); //to open in new tab
    },


    image() {
      this.form_img = this.img.name;
    }
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
    //   })
  }

  /* getPDFPath(){
      return './uploads/Aisha.pdf'

    },*/

}
</script>

