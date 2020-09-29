<template>
    <b-container>
        <div class="section content-title-group">
            <h2 class="title mt-5 mb-5"> Javautvecklare </h2>
        </div>

            <div class="mt-5">
            <div class="row d-flex justify-content-center" >
              <b-list-group style="max-width: 1100px;" display="center">
                <b-list-group-item
                        class="d-flex align-items-center"
                        v-for="user in users" :key="user.userId" >

                    <b-avatar variant="info"  :src="`http://localhost:3000/api/uploads/images/${user.userId}`" class="mr-3"></b-avatar>
                    <span class="mr-auto"> {{ user.user }} : {{user.description}}</span>

                    <b-link :href="`http://localhost:3000/api/uploads/resumes/${user.userId}`" target="popup">Resume </b-link>
                    <b-link :href="`http://localhost:3000/api/uploads/certificates/${user.userId}`" target="popup">Certicate   </b-link>
                    <b-link :href="`http://localhost:3000/api/uploads/coverletters/${user.userId}`" target="popup">Cover letter </b-link>

                    <span class="ml-5"> {{ user.userRole }} </span>

                </b-list-group-item>
              </b-list-group>
            </div>

            <div class="mt-5" >
                <a class="" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=url&amp;title=title&amp;source=url/">
                    <i class="fa fa-linkedin">Share on linkedin</i>
                </a>
            </div>
            <div >
                <a href="https://twitter.com/share" class="" data-url="http://example.com">
                    <i class="fa fa-twitter"> Share on Twitter</i>
                </a>
            </div>

        </div>
    </b-container>
</template>

<script>
    export default {
        name: "javaList",
      data() {
        return {
          users: [],
          javaClass: "Java",
        }

      },

      mounted(){
        fetch('http://127.0.0.1:3000/api/users/')
            .then((response) => {
              return response.json();})
            .then((data) => {
                    this.users = data.users.filter(users =>
                    users.class.includes(this.javaClass))
        });


      },

        methods: {



            }

        }






</script>

<style scoped>

</style>