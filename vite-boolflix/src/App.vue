<script>
    import AppHeader from './components/AppHeader.vue'
    import ListMovies from './components/ListMovies.vue'
    import axios from 'axios'
    import {store} from './store'

    export default{
        components:{
            AppHeader,
            ListMovies
        },
        data(){
            return{
                store
            }
        },
        mounted(){

        },
        methods: {

            getMoviesSeries(){
                axios.get(`${store.endpointAll}?api_key=${store.apiKey}&query=${store.searchText}`)
                .then(res=>{
                    store.list = (res.data.results.filter( i => ['tv', 'movie'].indexOf( i.media_type ) != -1))
                    console.log(res.data.results)
                })

                
            },
            
            search(){
                this.getMoviesSeries()
            }

        //     getMovies(){
        //         axios.get(`${store.endpointMovies}?api_key=${store.apiKey}&query=${store.searchTitle}`).then(response =>{

        //         store.moviesArray = (response.data.results)
        //         console.log(response.data.results)
        //         })

        //     },

        //     getSeries(){
        //         if(store.searchTitle){
        //             axios.get(`${store.endpointSeries}?api_key=${store.apiKey}&query=${store.searchTitle}`).then(response =>{
    
        //             store.seriesArray = (response.data.results)
        //             console.log(response.data.results)
        //             })
        //         }
        //     },

        //     search(){
        //         this.getMovies()
        //         this.getSeries()
        //     }
        }


    }
</script>

<template>

<AppHeader @getMovies="search"></AppHeader>
<ListMovies></ListMovies>





</template>

<style>
body{
    background-color: black;
}

</style>