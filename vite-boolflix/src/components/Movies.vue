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
            <h3>
                {{ propsItem.media_type }}
            </h3>
            <h3>
                {{ propsItem.title }}
            </h3>
        </div>

    </div>

</template>

<style lang="scss" scoped>
.list{
    border: 2px solid  black;

    .card-movie{
        width: 250px;
        background-color: blue;

        .copertina{
            width: 100%;
        }
    }
}

</style>