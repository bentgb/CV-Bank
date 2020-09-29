<template>
  <b-container>
    <div class="section content-title-group">
      <h2 class="title mt-5 mb-5">Administration</h2>
    </div>
    <b-row class="mt-5 d-flex justify-content-center">
      <b-row align-h="around">
        <b-col>
          <router-link to="/javaList">
            <b-button class="mr-0 mt-1 custom" variant="outline-secondary" size="lg">Javautvecklare</b-button>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/testerList">
            <b-button class="mr-0 mt-1 custom" variant="outline-secondary" size="lg">Testare</b-button>
          </router-link>
        </b-col>
      </b-row>

      <b-row align-h="around">
        <b-col>
          <router-link to="/webList">
            <b-button class="mr-0 mt-1 custom" variant="outline-secondary" size="lg">Webbutvecklare</b-button>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="#">
            <b-button
              class="mr-0 mt-1 custom"
              variant="outline-secondary"
              size="lg"
            >IT-projektledare</b-button>
          </router-link>
        </b-col>
      </b-row>

      <b-row align-h="around">
        <b-col>
          <router-link to="#">
            <b-button class="mr-0 mt-1 custom" variant="outline-secondary" size="lg">.NET-utvecklare</b-button>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/webList">
            <b-button
              class="mr-0 mt-1 custom"
              variant="outline-secondary"
              size="lg"
            >Frontendutvecklare</b-button>
          </router-link>
        </b-col>
      </b-row>

      <b-row align-h="around">
        <b-col>
          <router-link to="#">
            <b-button class="mr-0 mt-1 custom" variant="outline-secondary" size="lg">Mjukvarutestare</b-button>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="#">
            <b-button
              class="mr-0 mt-1 custom"
              variant="outline-secondary"
              size="lg"
            >JavaScript-utvecklare</b-button>
          </router-link>
        </b-col>
      </b-row>

      <!--            <b-row >-->

      <!--                <a class="" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=url&amp;title=title&amp;source=url/">-->
      <!--                    <i class="fa fa-linkedin">Share on linkedin</i>-->
      <!--                </a>-->
      <!--            </b-row>-->
      <!--            <b-row >-->
      <!--                <a href="https://twitter.com/share" class="" data-url="http://example.com">-->
      <!--                    <i class="fa fa-twitter"> Share on Twitter</i>-->
      <!--                </a>-->

      <!--            </b-row>-->
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "admin"
};
</script>
