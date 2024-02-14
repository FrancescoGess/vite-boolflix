import {reactive} from 'vue'


export const store = reactive({

        searchText: '',
        movies: [],
        series: [],
        apiKey: '7f8416bf0db8b52c5b3e2aea53aa1923',
        endpointMovies: 'https://api.themoviedb.org/3/movie',
        endpointSeries: ''
})