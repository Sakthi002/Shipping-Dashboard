<template>

  <section class="content">

    <div class="col-sm-12">

      <a class="btn btn-app">
        
        <span class="badge bg-yellow">3</span>
          
        <i class="fa fa-bullhorn"></i> Notifications
      </a>
    </div>
  </section>
</template>

<script>

  import axios from 'axios'
  
  export default {
    
    name: 'Dashboard',

    data() {

      return {

        shipments : ''
      }
    },

    beforeMount() {

      this.getData()
    },

    methods : {

      getData() {

        let token = 'tTU3gFVUdP';

        axios({
          method: 'post',
          url: 'https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/sakthi',
          data: { email : 'sdfghjk@dfghjk.d'},
          headers: { 'authorization': `Bearer ${token}` }
        }).then(res=>{

          console.log(res,'sss')
        }).catch(err=>{

          console.log(err,'err')
        });
      }
    } 
  };
</script>
