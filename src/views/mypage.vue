<template xmlns:http="http://www.w3.org/1999/xhtml">
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

          <!----------   user info    ------------->
        <b-card-title class="text-center mr-5">{{ this.$parent.user.user }}</b-card-title>
        <b-card-sub-title class="text-left ml-2 mb-2">Ålder</b-card-sub-title>
        <b-card-text class="text-left ml-4 mb-2">{{ this.$parent.user.age }}</b-card-text>
        <b-card-sub-title class="text-left ml-2 mb-2">Klass</b-card-sub-title>
        <b-card-text class="text-left ml-4 mb-2">{{ this.$parent.user.class }}</b-card-text>
        <b-card-sub-title class="text-left ml-2 mb-2">E-post</b-card-sub-title>
        <b-card-text class="text-left ml-4 mb-2">{{ this.$parent.user.userEMAIL }}</b-card-text>
        <b-card-sub-title class="text-left">ID</b-card-sub-title>
        <b-card-text class="text-left">{{ this.$parent.user.userId }}</b-card-text> </b-card>

        <!----------   Description    ------------->
        <b-form-group class="text-left" label="Description" label-for="textarea-lazy">
        <b-form-textarea
            v-model="desc"
            id="textarea-lazy"
            :placeholder="this.$parent.user.description"
            lazy-formatter

        ></b-form-textarea>
        <b-button class="mr-0 mt-1" size="sm" @click="saveDescription()">Save</b-button>
      </b-form-group>

       <!----------   CV    ------------->
       <h5 class="text-left">Upload CV</h5>
       <b-form-group id="image-group">
        <b-form-file name="resume"
            accept=".pdf"
            enctype="multipart/form-data"
            ref="file"
            v-model="file"
            v-on:change="handleFileUpload()"
            placeholder="Select a pdf file or drop it here ..."
            drop-placeholder="Släpp .pdf filen här som ..."
        />
        <b-button class="mr-0 mt-1" size="sm" v-on:click="submitFile()">Save</b-button>
       </b-form-group>
        <!--<div v-show="checkResume">
            <b-button  v-on:click="readResume()"> My CV</b-button>
        </div>-->
       <div v-if="fileUploaded">
     {{ this.file.name }} is uploaded

<!--                <a -->
<!--                    href=`http://localhost:3000/api/uploads/resumes/${this.$parent.user.userId}`-->
<!--                >Mypdf</a>-->
        <!--
        <iframe :src="getPDFPath()" style="width:200px; height:200px; border: none;">
          Oops! an error has occurred.
        </iframe>
        -->
        <b-button class="mr-0 mt-1" size="sm" v-on:click="showModal">Open</b-button>
      </div>
        <div>
            <b-modal ref="my-modal" hide-footer>
                <div class="d-block text-center">
                    <b-embed
                            type="iframe"
                            aspect="16by9"
                            src="http://localhost:3000/api/uploads/resumes/10"
                    ></b-embed>
                </div>
            </b-modal>
        </div>


        <!----------   cover letter    ------------->
        <h5 class="text-left">Upload cover letter</h5>
        <b-form-file name="coverletter"
                   accept=".pdf"
                   enctype="multipart/form-data"
                   ref="file"
                   v-model="fileCoverLetter"
                   v-on:change="handleFileUpload()"
                   placeholder="Select a pdf file or drop it here ..."
                   drop-placeholder="Släpp .pdf filen här som ..."
      ></b-form-file>
        <b-button class="mr-0 mt-1" size="sm" v-on:click="submitCoverLetter()">Save</b-button>
         <div v-if="coverletterUploaded">
        {{ this.fileCoverLetter.name }} is uploaded

        <b-button class="mr-0 mt-1" size="sm" v-on:click="readCoverLetter()">Open</b-button>
      </div>


        <!----------   certificate    ------------->
        <h5 class="text-left">Upload Certicate</h5>
      <b-form-file name="certificate"
                   accept=".pdf"
                   enctype="multipart/form-data"
                   ref="file"
                   v-model="fileBetyg"
                   v-on:change="handleFileUpload()"
                   placeholder="Select a pdf file or drop it here ..."
                   drop-placeholder="Släpp .pdf filen här som ..."
      ></b-form-file>
      <b-button class="mr-0 mt-1" size="sm" v-on:click="submitCertificate()">Save</b-button>
      <div v-if="betygUploaded">
        {{ this.fileBetyg.name }} is uploaded
        <b-button class="mr-0 mt-1" size="sm" v-on:click="readCertificate()">Open</b-button>
      </div>
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
      file: null,
      fileCoverLetter: null,
      fileBetyg: null,
      fileUploaded: false,
      betygUploaded: false,
      coverletterUploaded: false,
        message: "test",
      form_img: "test.png",
      img: null
    };
  },
    computed: {
        // a computed getter
        checkResume: function () {
            const fs = require('fs')
            const path = `../resumes/${this.$parent.user.userId}resume.pdf`;
// See if the file exists
                if(fs.existsSync(path)){
                    return true;

                }else{
                    return false;
                }
            },

        },
      methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },

    async submitFile() {
      const formData = new FormData();
      formData.append("resume", this.file);
      try {
        if (this.file != "") {
          axios.post("http://127.0.0.1:3000/api/upload/resume/" + this.$parent.user.userId, formData);
          this.message = "uploaded";
          this.fileUploaded = true;
        } else {
          alert("Choose a File ");

        }
      } catch (e) {
        this.message = "Sth went wrong";
      }
    },

    async submitCoverLetter() {
      const formData = new FormData();
      formData.append("coverletter", this.fileCoverLetter);
      try {
        if (this.file != "") {
          axios.post("http://127.0.0.1:3000/api/upload/coverletter/" + this.$parent.user.userId, formData);
          this.message = "uploaded";
          this.coverletterUploaded = true;
          alert("cover letter uploaded");
        } else {
          alert("Choose a File ");

        }
      } catch (e) {
        this.message = "Sth went wrong";
      }
    },

    async submitCertificate() {
      const formData = new FormData();
      formData.append("certificate", this.fileBetyg);
      try {
        if (this.fileBetyg != "") {
          axios.post("http://127.0.0.1:3000/api/upload/certificate/" + this.$parent.user.userId, formData);
          this.message = "uploaded";
          this.betygUploaded = true;
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

    readResume() {
        "http://localhost:3000/api/uploads/resumes/" + this.$parent.user.userId;
      //to open in new tab
    },

    readCoverLetter() {
      window.open("http://localhost:3000/api/uploads/coverletters/" + this.$parent.user.userId, "_blank"); //to open in new tab
    },


    readCertificate() {
      window.open("http://localhost:3000/api/uploads/certificates/" + this.$parent.user.userId, "_blank"); //to open in new tab
    },

    showModal() {
              this.$refs["my-modal"].show();
          },

    hideModal() {
              this.$refs["my-modal"].hide();
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


}
</script>

