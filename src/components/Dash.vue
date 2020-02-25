<template>

  <div class="wrapper">

    <dash-header :user="user"></dash-header>
    
    <sidebar :user="user" />
  
    <div class="content-wrapper">
      
      <section class="content-header">
      
        <h1> {{$route.name.toUpperCase()}}</h1>
      </section>

      <router-view></router-view>
    </div>
    
    <dash-footer></dash-footer>
  </div>
</template>

<script>
  
  import faker from 'faker'
  
  import DashFooter from './layout/DashFooter'
  
  import DashHeader from './layout/DashHeader'
  
  import Sidebar from './layout/Sidebar'
  
  import 'hideseek'

  export default {
    
    name: 'Dash',
    
    components: {
      
      DashFooter,
      
      DashHeader,
      
      Sidebar
    },
  
    data () {
      
      return {
        
      }
    },
    
    computed: {
      
      user () {
        
        return {
          
          displayName: faker.name.findName(),
          
          avatar: faker.image.avatar(),
          
          roles: [faker.name.jobTitle(), faker.name.jobTitle()]
        }
      }
    }
  };
</script>

<style>
.wrapper.fixed_layout .main-header {
  position: fixed;
  width: 100%;
}
.wrapper.fixed_layout .content-wrapper {
  padding-top: 50px;
}
.wrapper.fixed_layout .main-sidebar {
  position: fixed;
  height: 100vh;
}

@media (max-width: 767px) {
  .wrapper.hide_logo .main-header .logo {
    display: none;
  }
}

.logo-mini,
.logo-lg {
  text-align: left;
}
.logo-mini img,
.logo-lg img {
  padding: 0.4em !important;
}

.logo-lg img {
  display: -webkit-inline-box;
  width: 25%;
}

.user-panel {
  height: 4em;
}

hr.visible-xs-block {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.17);
  height: 1px;
  border-color: transparent;
}
</style>
