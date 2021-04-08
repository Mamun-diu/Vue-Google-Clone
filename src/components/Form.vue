<template>
    <div class="formContainer">
        <div class="formContainer__section">
            <div class="formContainer__section-img">
                <img src="../assets/googlelogo.png" alt="not found">

            </div>
            <form @submit.prevent="search" class="formContainer__form">
                <input v-model="keyword" type="text" class="formContainer__input" placeholder="">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" fill="currentColor" class="bi bi-search searchIcon" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" fill="currentColor" class="bi bi-mic microphone" viewBox="0 0 16 16">
                    <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
                    <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"/>
                </svg>

                <input type="submit" value="Google Search" class="btn-google">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Form",
    data(){
        return{
            keyword:""
        }
    },
    methods:{
        search(){
            let newQuery = this.keyword.split(" ").join('-')
            if(newQuery != ""){
                this.$router.push({
                    name: 'Result',
                    params:{query: newQuery},
                })
            }
            
            
        }
    }
}
</script>

<style>
    .formContainer{
        width : 100%;
        height : 100vh;
        display : flex;
        align-items: center;
        justify-content: center;
    }
    .formContainer__section{
        width : 40%;
        text-align: center;
    }
    .formContainer__section-img{
        margin-bottom: 12px;;
    }
    .formContainer__input{
        width : 100%;
        border-radius: 24px;
        height : 50px;
        padding : 0 50px;
        border : 1px solid #dfe1ef;
        outline : none;
        font-size: 18px;
    }
    .formContainer__form{
        position : relative;
    }
    .searchIcon{
        position : absolute;
        left : 25px;
        top : 18px;
        color : #9aa0ab;
    }
    .microphone{
        position : absolute;
        right : 25px;
        top : 16px;
        color : #4285f4;
    }
    .btn-google{
        background : #f2f2f2;
        color : #5f6368;
        padding : 10px 16px;
        border : none;
        outline : none;
        border-radius: 3px;
        margin-top : 20px;
    }
</style>