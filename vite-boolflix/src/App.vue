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
                store,
            }

        },
    }
</script>

<template>
<header>
<AppHeader></AppHeader>
</header>

<AppMain></AppMain>


</template>

<style>

</style>