<template>
  <b-container>
    <div class="section content-title-group">
      <h2 class="title mt-5 mb-5">Administration</h2>
    </div>

    <b-container>
      <b-row>
        <b-col>
          <router-link to="/cvList">
            <b-button>Javautvecklare</b-button>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="#">
            <b-button>Webbutvecklare</b-button>
          </router-link>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <router-link to="#">
            <b-button>Applikationsutvecklare</b-button>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="#">
            <b-button>IT-projektledare</b-button>
          </router-link>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <router-link to="#">
            <b-button size="lg">.NET-utvecklare</b-button>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="#">
            <b-button>Frontendutvecklare</b-button>
          </router-link>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <router-link to="#">
            <b-button>Mjukvarutestare</b-button>
          </router-link>
        </b-col>

        <b-col>
          <router-link to="#">
            <b-button>JavaScript-utvecklare</b-button>
          </router-link>
        </b-col>
      </b-row>
    </b-container>

    <div class="mt-5">
      <a
        href="http://www.linkedin.com/shareArticle?mini=true&amp;url=url&amp;title=title&amp;source=url/"
      >
        <i class="fa fa-linkedin">Share on linkedin</i>
      </a>
    </div>
    <div>
      <a href="https://twitter.com/share" class data-url="http://example.com">
        <i class="fa fa-twitter">Share on Twitter</i>
      </a>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "admin"
};
</script>
