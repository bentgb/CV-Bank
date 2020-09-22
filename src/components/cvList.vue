<template>
  <b-container>
    <div class="section content-title-group">
      <h2 class="title mt-5 mb-5">Studenter Javautvecklare</h2>
    </div>

    <div class="mt-5">
      <div class="row mb-3" v-for="user in users" :key="user.name">
        <h5 class="mt-2">{{users.user}}</h5>
        <router-link :to="`mypage${users.userId}`">
          <b-button>Gå till</b-button>
        </router-link>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "CV-list",
  data() {
    return {
      users: this.$parent.user
    };
  }
};
</script>

<style scoped>
</style>