<template>
  <div class="content-container">
    <div class="section content-title-group">
      <h2 class="title">STUDENTS</h2>
    </div>
    <div class="columns">
      <div class="column is-8">
        <div class="card edit-detail">
          <header class="card-header">
            <p class="card-header-title">{{hero.firstName}}</p>
          </header>
          <div class="card-content">
            <div class="content">
              <img src="../assets/test.png" alt="Logo" />

              <h3>Namn</h3>
              <p>Test</p>

              <h3>Ålder</h3>
              <p>Test</p>
              <h3>Klass</h3>
              <p>Test</p>
              <h3>E-post</h3>
              <p>Test</p>
              <div class="field">
                <label class="label" for="description">Beskrivning</label>
                <textarea class="input" id="description" type="text" />
                <input type="button" value="Spara" />
              </div>

              <h3>Document</h3>

              <div>
                <h5>CV</h5>
                <input type="button" value="Lägg till" />
              </div>

              <div>
                <h5>Personligt brev</h5>
                <input type="button" value="Lägg till" />
              </div>

              <div>
                <h5>Betyg</h5>
                <input type="button" value="Lägg till" />
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
export default {
  name: "Heroes",
  data() {
    return {
      hero: {
        id: 20,
        firstName: "Elif Kubra",
        lastName: " Arslan",
        description: "10 yasinda",
        capeColor: "",
        power: "",
        active: true
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

<style scoped lang="scss">
@import "@/design/index.scss";
</style>
