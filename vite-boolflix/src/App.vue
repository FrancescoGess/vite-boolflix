<script>

    import AppHeader from './components/AppHeader.vue';
    import AppMain from './components/AppMain.vue';
    import SingleCard from './components/SingleCard.vue';

    import { store } from './store';
    import axios from 'axios';

    export default{
        name: 'App',
        components: {
            AppHeader,
            AppMain,
            SingleCard
        },
        data(){
            return{
                store
            }

        },
        methods: {

            getData(){

            if (store.searchText){
            
                axios.get(`${store.endpointMovies}?api_key=${store.apiKey}&query=${store.searchText}`)
                .then((res)=>{
                    console.log(res.data)
                })
            }
                
            }
        }
    }
</script>

<template>
<header>
<AppHeader @emitGetData="getData"></AppHeader>
</header>

<AppMain></AppMain>


</template>

<style>

</style>