<script>
import {store} from '../store'

export default {
    name: "Movies",
    props: ['propsItem'],
        data(){
            return{
                store
            }
        },
        methods: {
            changeFlags(language){
                switch(language){
                    case 'en':
                        return 'us'
                    
                    default: 
                        return 'language'
                }
            }
        }
}
</script>

<template>

    <div class="list">
        <div class="card-movie">
            <img class="copertina" :src="'https://image.tmdb.org/t/p/w342' + propsItem.poster_path" alt="">
        
        <div class="container-hover">
                <h3 class="text-center p-2">
                    {{ ( propsItem.original_Title )  ? propsItem.original_Title : propsItem.original_name }}
                </h3>
                <h5>
                    Release Date
                </h5>
                <p>
                {{ (propsItem.release_date) ? propsItem.release_date : propsItem.first_air_date }} 
                </p>
                <h5>
                    Overview
                </h5>
                <p>
                    {{ (propsItem.overview) ? propsItem.overview : propsItem.overview }}
                </p>
                
                <h5>
                    Vote
                </h5>
                <p>
                    {{ propsItem.vote_average }}
                </p>

                  


                    <figure class="flag">
                        <h5>
                            Language
                        </h5>
                        <img :src="`https://flagsapi.com/${ changeFlags(propsItem.original_language).toUpperCase() }/flat/24.png`" alt="flag language">
                    </figure>
          
            </div>       
        </div>

    </div>

</template>

<style lang="scss" scoped>
.list{
    border: 1px solid  black;
    width: 300px;
    display: flex;


    .card-movie{
        height: 500px;
        width: 500px;
        position: relative;
        display: flex;
        

        .copertina{
            width: 100%;
        }

        .container-hover{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            
            opacity: 0;
            transform: translateY(-100%);

            background-color: rgba(0, 0, 0, 0.8);
        }

        &:hover .container-hover{
            opacity: 1;
            transform: translateY(0);
            color: white;
        }
    }

}

</style>