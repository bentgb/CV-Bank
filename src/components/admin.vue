<template>
    <b-container>
        <div class="section content-title-group">
            <h2 class="title mt-5  mb-5">Administration</h2>
        </div>
        <div class="mt-5">



            <div class="row-cols-2">
                <router-link to="/cvList">
                <b-button class="mr-0 mt-1 custom" variant="outline-secondary" size="lg">Javautvecklare</b-button>
                </router-link>
                <router-link to="#">
                <b-button class="mr-0 mt-1 custom" variant="outline-secondary" size="lg">Webbutvecklare</b-button>
                </router-link>
            </div>

            <div class="row-cols-2">
                <router-link to="#">
                    <b-button class="mr-0 mt-1 custom" variant="outline-secondary" size="lg">Applikationsutvecklare</b-button>
                </router-link>
                <router-link to="#">
                    <b-button class="mr-0 mt-1 custom" variant="outline-secondary" size="lg">IT-projektledare</b-button>
                </router-link>
            </div>

            <div class="row-cols-2">
                <router-link to="#">
                    <b-button class="mr-0 mt-1 custom" variant="outline-secondary" size="lg">.NET-utvecklare</b-button>
                </router-link>
                <router-link to="#">
                    <b-button class="mr-0 mt-1 custom" variant="outline-secondary" size="lg">Frontendutvecklare</b-button>
                </router-link>
            </div>
            <div class="row-cols-2">
                <router-link to="#">
                    <b-button class="mr-0 mt-1 custom" variant="outline-secondary" size="lg">Mjukvarutestare</b-button>
                </router-link>
                <router-link to="#">
                    <b-button class="mr-0 mt-1 custom" variant="outline-secondary" size="lg">JavaScript-utvecklare</b-button>
                </router-link>
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
        name: "admin"
    }
</script>

<style scoped>
.custom{
    width:400px;
    height: 100px;
    margin-left: 15px;
    margin-bottom: 15px;
    font-size: 23px;

}
</style>