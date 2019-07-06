import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Books from '../pages/books'
import Tv from '../pages/tv'
import Nav from '../pages/nav'
import Movie from '../pages/movie'
import Details from '../pages/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/tv',
      name: 'Tv',
      component: Tv
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    {path:'/*',redirect:"/index"},
  ]
})
