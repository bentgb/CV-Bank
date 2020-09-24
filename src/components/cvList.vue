<template>
    <b-container>
        <div class="section content-title-group">
            <h2 class="title mt-5 mb-5"> Javautvecklare CVs</h2>
        </div>

            <div class="mt-5">
            <div class="row" >
              <b-list-group>
                <b-list-group-item v-for="user in users" :key="user.userId"  :href="`http://localhost:3000/api/uploads/resumes/${user.userId}`">{{ user.user }} : {{user.description}}</b-list-group-item>
              </b-list-group>


            </div>


<!--            <div class="row">-->
<!--                    <b-card-title>Aisha</b-card-title>-->
<!--                    <b-button class="mr-0 mt-3 " >Öppna</b-button>-->
<!--            </div>-->
<!--            <div class="row">-->
<!--                    <b-card-title>Husam</b-card-title>-->
<!--                    <b-button class="mr-0 mt-3 " >Öppna</b-button>-->
<!--            </div>-->
<!--            <div class="row">-->
<!--                    <b-card-title>Tugba</b-card-title>-->
<!--                    <b-button class="mr-0 mt-3 " >Öppna</b-button>-->
<!--                </div>-->


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
        name: "CV-list",
      data() {
        return {
          users: [],





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
            });
      },

        methods: {


            }

        }






</script>

<style scoped>

</style>