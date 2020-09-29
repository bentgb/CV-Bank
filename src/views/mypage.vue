<template xmlns:http="http://www.w3.org/1999/xhtml">
  <b-container>
    <div class="section content-title-group">
      <h2 class="title">STUDENT</h2>
    </div>
    <b-form>
      <b-form-file name="image" v-model="img" class="mt-3" plain v-on:change="handleFileUpload()"></b-form-file>
      <b-button class="mr-0 mt-1" size="sm" v-on:click="submitImage()">Save / Update</b-button>
    </b-form>

    <!----------   user info    ------------->
    <div class="mt-4">
      <b-card>
        <b-card-title class="text-center ml-5 mb-0">{{ this.$parent.user.user }}</b-card-title>
        <b-card-img id="img" :src="imgUrl" alt="alt image" class="mb-3 mr-3 float-left"></b-card-img>
        <b-card-sub-title class="text-left mt-1 ml-2 mb-2">Ålder</b-card-sub-title>
        <b-card-text class="text-left ml-4 mb-2">{{ this.$parent.user.age }}</b-card-text>
        <b-card-sub-title class="text-left ml-2 mb-2">Klass</b-card-sub-title>
        <b-card-text class="text-left ml-4 mb-2">{{ this.$parent.user.class }}</b-card-text>
        <b-card-sub-title class="text-left ml-2 mb-2">E-post</b-card-sub-title>
        <b-card-text class="text-left ml-4 mb-2">{{ this.$parent.user.userEMAIL }}</b-card-text>
        <b-card-sub-title class="text-left ml-2 mb-2">ID</b-card-sub-title>
        <b-card-text class="text-left ml-4 mb-2">{{ this.$parent.user.userId }}</b-card-text>
      </b-card>

      <!----------   Description    ------------->
      <b-form-group class="text-left" label="Description" label-for="textarea-lazy">
        <b-form-textarea
          v-model="desc"
          id="textarea-lazy"
          :placeholder="this.$parent.user.description"
          lazy-formatter
        ></b-form-textarea>
        <b-button class="mr-0 mt-1" size="sm" @click="saveDescription()">Save / Update</b-button>
      </b-form-group>

      <!----------   CV    ------------->
      <h4 class="text-left">CV</h4>
      <h6 class="text-left" v-if="checkCv()">
        <a href="#" v-on:click="readResume()">Click to see your previously uploaded Cv</a>
      </h6>

      <b-form-group id="image-group">
        <b-form-file
          name="resume"
          accept=".pdf"
          enctype="multipart/form-data"
          ref="file"
          v-model="file"
          v-on:change="handleFileUpload()"
          placeholder="Select a pdf file or drop it here ..."
          drop-placeholder="Släpp .pdf filen här som ..."
        />
        <b-button class="mr-0 mt-1" size="sm" v-on:click="submitFile()">Save / Update</b-button>
      </b-form-group>
      <!--<div v-show="checkResume">
            <b-button  v-on:click="readResume()"> My CV</b-button>
      </div>-->
      <div v-if="fileUploaded">
        {{ this.file.name }} is uploaded
        <!--        <b-button class="mr-0 mt-1" size="sm" v-on:click="showModal">Open</b-button>-->
      </div>
      <!--     <div>
            <b-modal ref="my-modal" hide-footer>
                <div class="d-block text-center">
                    <b-embed
                            type="iframe"
                            aspect="16by9"
                            src="http://localhost:3000/api/uploads/resumes/10"
                    ></b-embed>
                </div>
            </b-modal>
      </div>-->

      <!----------   cover letter    ------------->
      <h4 class="text-left">Cover Letter</h4>
      <h6 class="text-left" v-if="checkCoverletter()">
        <a
          href="#"
          v-on:click="readCoverLetter()"
        >Click to see your previously uploaded cover letter</a>
      </h6>

      <b-form-file
        name="coverletter"
        accept=".pdf"
        enctype="multipart/form-data"
        ref="file"
        v-model="fileCoverLetter"
        v-on:change="handleFileUpload()"
        placeholder="Select a pdf file or drop it here ..."
        drop-placeholder="Släpp .pdf filen här som ..."
      ></b-form-file>
      <b-button class="mr-0 mt-1" size="sm" v-on:click="submitCoverLetter()">Save / Update</b-button>
      <div v-if="coverletterUploaded">
        {{ this.fileCoverLetter.name }} is uploaded
        <!--        <b-button class="mr-0 mt-1" size="sm" v-on:click="readCoverLetter()">Open</b-button>-->
      </div>

      <!----------   certificate    ------------->
      <h4 class="text-left">Certificate</h4>
      <h6 class="text-left" v-if="checkCertificate()">
        <a href="#" v-on:click="readCertificate()">Click to see your previously uploaded certificate</a>
      </h6>

      <b-form-file
        name="certificate"
        accept=".pdf"
        enctype="multipart/form-data"
        ref="file"
        v-model="fileBetyg"
        v-on:change="handleFileUpload()"
        placeholder="Select a pdf file or drop it here ..."
        drop-placeholder="Släpp .pdf filen här som ..."
      ></b-form-file>

      <b-button class="mr-0 mt-1" size="sm" v-on:click="submitCertificate()">Save / Update</b-button>
      <div v-if="betygUploaded">
        {{ this.fileBetyg.name }} is uploaded
        <!--        <b-button class="mr-0 mt-1" size="sm" v-on:click="readCertificate()">Open</b-button>-->
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
      fileUploaded: false,
      betygUploaded: false,
      coverletterUploaded: false,
      message: "test",
      img: null,
      respoCertificate: null,
      respoCoverLetter: null,
      respoCv: null,
      imgUrl:
        "http://127.0.0.1:3000/api/uploads/images/" + this.$parent.user.userId

      // "http://127.0.0.1:3000/api/uploads/images/" + this.$parent.user.userId+"image.jpg"
    };
  },
  methods: {
    imgUrlAlt(event) {
      event.target.src = "require('../assets/test.jpg')";
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },

    async submitFile() {
      const formData = new FormData();
      formData.append("resume", this.file);
      try {
        if (this.file != "") {
          axios.post(
            "http://127.0.0.1:3000/api/upload/resume/" +
              this.$parent.user.userId,
            formData
          );
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
        if (this.fileCoverLetter != "") {
          axios.post(
            "http://127.0.0.1:3000/api/upload/coverletter/" +
              this.$parent.user.userId,
            formData
          );
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
          axios.post(
            "http://127.0.0.1:3000/api/upload/certificate/" +
              this.$parent.user.userId,
            formData
          );
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

    async submitImage() {
      const formData = new FormData();
      formData.append("image", this.img);
      try {
        if (this.file != "") {
          axios.post(
            "http://127.0.0.1:3000/api/upload/image/" +
              this.$parent.user.userId,
            formData
          );
          this.message = "uploaded";
          this.fileUploaded = true;
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: this.desc })
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
      window.open(
        "http://localhost:3000/api/uploads/resumes/" + this.$parent.user.userId,
        "popup",
        "width=600,height=750"
      ); //to open in new tab
      //to open in new tab
    },

    readCoverLetter() {
      window.open(
        "http://localhost:3000/api/uploads/coverletters/" +
          this.$parent.user.userId,
        "popup",
        "width=600,height=750"
      ); //to open in new tab
    },

    readCertificate() {
      window.open(
        "http://localhost:3000/api/uploads/certificates/" +
          this.$parent.user.userId,
        "popup",
        "width=600,height=750"
      ); //to open in new tab
    },

    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    checkCertificate() {
      /*        axios.get("http://localhost:3000/api/uploads/certificates/" + this.$parent.user.userId)
                  .then(response => (this.respoCertificate = response))
                  .catch (function (error) {
                  console.log(error);
              });

        if(this.respoCertificate===null){
                   return false
               }else { return true}*/
      // axios.get("http://localhost:3000/api/uploads/certificates/" + this.$parent.user.userId)
      //     .then(response => (this.respoCertificate = response.status))
      //     .catch (function (error) {
      //         console.log(error);
      //     });
      //
      // if(this.respoCertificate===200){
      //     return true
      // }else { return false}
    },
    checkCoverletter() {
      /*     axios.get("http://localhost:3000/api/uploads/coverletters/" + this.$parent.user.userId)
                  .then(response => (this.respoCoverLetter = response))

              if(this.respoCoverLetter===null){
                  return false
              }else { return true}
*/
    },
    checkCv() {
      axios
        .get(
          "http://localhost:3000/api/uploads/resumes/" +
            this.$parent.user.userId
        )
        .then(response => (this.respoCv = response.status));

      if (this.respoCv === null) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style>
#img {
  width: 200px;
  height: 200px;
}
</style>

