<template>
  <div id="mypage" class="content-container">
    <div class="section content-title-group">
      <h2 class="title">MY PROFILE </h2>
    </div>
    <div class="columns">
      <div class="column is-8">
        <div class="card edit-detail">

          <div class="card-content">
            <div class="content">
              <img src="../assets/test.png" alt="Logo" />
              <table class="info">
                <tr>
                  <td> <label class="label">Namn</label>&nbsp;</td>
                  <td><label>
                    <li v-for="user in users" v-bind:key="user.userId">{{ user.user }}</li>

                  </label></td>
                </tr>
                <tr>
                  <td> <label class="label">Ålder</label>&nbsp;</td>
                  <td><label>{{users[2].namn}}</label></td>
                </tr>
                <tr>
                  <td> <label class="label">Klass</label>&nbsp;</td>
                  <td><label>xx</label></td>
                </tr>
                <tr>
                  <td> <label class="label">E-post</label>&nbsp;</td>
                  <td><label>xx</label></td>
                </tr>
                <tr>
                  <td> &nbsp;</td>

                </tr>


              </table>
              <br>
              <h1 class="title">Beskrivning</h1>
              <br>
              <div class="textarea">
              <textarea class="input" id="description" type="text" />
              <br>
              <input type="button"  class="btn-save" value="Spara" />

              </div>

              <br>

                <h1 class="title">Document</h1>
              <br>

              <table class="info">
               <tr>
                 <td> <label class="label">CV</label>&nbsp;</td>
                 <td>                <input type="button" class="btn-save" value="Lägg till" />
                 </td>
               </tr>
               <tr>
                 <td> <label class="label">Personligt brev</label>&nbsp;</td>
                 <td>                <input type="button" class="btn-save" value="Lägg till" />
                 </td>
               </tr>
               <tr>
                 <td> <label class="label">Betyg</label>&nbsp;</td>
                 <td>                <input type="button" class="btn-save" value="Lägg till" />
                 </td>
               </tr>
             </table>

              <div>
                <br>
                <br>
                <br>
                <br>

                <FileReader>
                <textarea rows="10" v-model="text"></textarea>
                <br>
                <text-reader @load="text = $event"></text-reader>
                </FileReader>
              </div>

            </div>
          </div>
          <footer class="card-footer">
            <button class="link card-footer-item cancel-button" @click="cancelHero">
              <i class="fas fa-undo"></i>
              <span>Cancel</span>
            </button>
            <button class="link card-footer-item save-button" @click="saveHero">
              <i class="fas fa-save"></i>
              <span>Save</span>
            </button>
          </footer>
        </div>
        <div class="notification is-info">
          <pre> {{message}}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FileReader from "../components/FileReader";


export default {
  name: "mypage",
  data() {
    return {
      users:[],
      namn:"",
id:0,
      message: "test",
      text: ""
    };
  },
  components: {
    FileReader
  },
  methods: {
    cancelHero() {
      this.message = "";
    },
    saveHero() {
      this.message = JSON.stringify(this.hero, null, "\n");
    }
  },
  mounted(){
    fetch('http://127.0.0.1:3000/api/users/')
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data.users);
              this.users = data.users;
              this.id=data.user.id

            });
  }
};
</script>

<style scoped >
.title{
  font-family: Calibri, monospace;
  color: #f0f3f5;
  background-color: #7c235b;
  padding: 5px;
  margin: auto;
}
.content{
}
table{
  width: 30%;
  margin: 0 auto ;
  text-align: left;
}
.textarea{
  width: 30%;
  margin: 0 auto ;
  text-align: center;
}
.info{
}
  .label{
    margin: auto;
    color: #cc459a;
    background: transparent;
    border-radius: 0;
    font-family: Calibri, monospace;
    font-size: 26px;
    text-align: left;
    padding-left: 7px;
  }
  textarea{
    width: 100%;
    height: 150px;
  }
  .btn-save{
    margin-top: 2px;
    margin-bottom: 2px;
    background-color: #7c235b;
    font-family: Calibri, monospace;
    font-weight: bold;
    color: #f0f3f5;
    border: 1px solid black;
    width: 150px;
    height: 40px;
    cursor: pointer;


  }
  .btn
  {

  }

</style>
