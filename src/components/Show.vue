<template>
    <!-- <div v-for="(data,id) in allData" :key="id">
        {{ data.title }}
    </div> -->
    <div class="show">
        <div v-for="(data,index) in allData" :key="index" class="show__result">
            <p class="topLink">{{data.link}}</p>
            <p class="link">
                <a :href="data.link">{{ data.title }} </a>
            </p>
            <p class="description">
                {{ data.snippet }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Show",
    props:["allData"],
    data(){
        return{

        }
    },
    
}
</script>

<style>
    .show{
        width : 1200px;
        margin : 20px auto;
    }
    .show__result{
        width : 700px;
        margin-top: 20px;
    }
    .topLink{
        color : #202124;
        font-size: 14px;
        margin-bottom : 6px;
    }
    .link{
        font-size : 20px;
        text-decoration: none;
        color : #609;
        margin-bottom : 10px;
    }
    .description{
        color : #4d5156;
    }
</style>