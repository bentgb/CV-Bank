<template>
    <div id="home">
        <div class="welcoming" >
            <br>
            <br>
            <h1>Välkommen till App the CVBank</h1>
            <p>Students! Login to upload our CV and personal info for finding LIA plats</p>
            <p>Companies! Administrators! Login to see the list of CVs </p>

        </div>

    </div>
</template>

<script>

    export default {
        name: 'home',
        components: {

        },
        data: function () {
            return {


            }
        },
        props: {},
        methods: {},}
</script>

<style scoped>
    h1 {
        margin-top: 30px;
        text-shadow: 2px 2px dimgray;
        font-family: Arial, sans-serif;
        font-size: 40px;
    }

    p {
        font-family: Arial, sans-serif;
        color: #2c3e50;
        font-size: large;
        font-weight: 800;
        margin-left: 50px;
        margin-right: 50px;
    }

    #home {
        position: relative;
        width: 800px;
        height: 70%;
        margin: 20px auto;
    }

    #home:after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        background-image: url(../assets/interns.jpg);
        -webkit-background-size: contain;
        -moz-background-size: contain;
        -o-background-size: contain;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: auto;
        min-height: 500px;
        opacity: 0.4;
        z-index: -1;
        border-radius: 5px;
    }




    @media only screen and (max-width: 768px) {

        #home {
            width: auto;
        }



        h1 {
            font-size: 22px;
        }

        p {
            font-size: 15px;
        }
    }
</style>