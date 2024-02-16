<script>
import {store} from '../store'

export default {
    name: "Movies",
    props: ['propsItem'],
        data(){
            return{
                store
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
            <p>
               {{ (propsItem.release_date) ? propsItem.release_date : propsItem.first_air_date }} 
            </p>
            <p>
                {{ propsItem.overview }}
            </p>
            <p>
                {{ (propsItem.vote_average) ? (propsItem.vote_average * 10) : (propsItem.vote_average * 10) }}
            </p>
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
        width: 500px;
        position: relative;
        

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