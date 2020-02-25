<template>

  <section class="content">

    <div class="row" v-if="shipments.length > 0">

      <div class="col-sm-12 text-center">

        <template v-for="obj in shipments">
          
          <a class="btn btn-app" @click="changeCategory(obj.title,obj.data)" :class="{ active : currentCategory === obj.title}">
          
            <span class="badge bg-yellow">{{obj.count}}</span>
              
            <i class="fa fa-bullhorn"></i> {{obj.title}}
          </a>
        </template>
      </div>

      <div class="col-sm-12">

        <div class="col-md-6">
        
          <div class="box box-primary">
        
            <div class="box-body">
              
              <ul class="timeline timeline-inverse custom_timeline" v-if="!loading && timelineDetails.length > 0">
                
                <li>
                  <i class="fa fa-clock-o bg-gray"></i>
                </li><br><br>

                <li v-for="item in timelineDetails">
                  
                  <i class="fa fa-truck bg-aqua"></i>

                  <div class="timeline-item">
                    
                    <span class="time"><i class="fa fa-clock-o"></i> {{item.time}}</span>

                    <h3 class="timeline-header no-border">{{item.location}}</h3>
                  </div>
                </li>

                <li>
                  <i class="fa fa-clock-o bg-gray"></i>
                </li>
              </ul>

              <template v-if="loading">
                  
                <h4 class="text-center">Loding Data...</h4>
              </template>

              <template v-if="!loading && timelineDetails.length === 0">
                  
                <h4 class="text-center">No Data.</h4>
              </template>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          
          <div class="box box-primary">
        
            <div class="box-body">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="col-sm-12 text-center">
      
      <h3>Loading Data....</h3>
    </div>


  </section>
</template>

<script>

  import axios from 'axios'
  
  export default {
    
    name: 'Dashboard',

    data() {

      return {

        shipments : [],

        oodArr : [],

        intArr : [],

        delArr : [],

        dexArr : [],
        
        nfiArr : [],

        currentCategory : 'DEL',

        timelineData : [],

        tableData : '',

        loading : false
      }
    },

    computed : {

      timelineDetails() {

        return this.timelineData;
      }
    },

    beforeMount() {

      setTimeout(()=>{
        
        this.getData()

      },1500)
    },

    methods : {

      getData() {

        let token = 'tTU3gFVUdP';

        axios({
          method: 'post',
          url: 'https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/sakthi',
          data: { email : 'sdfghjk@dfghjk.d'},
          headers: { 'authorization': `Bearer ${token}`, 'X-Requested-With' : 'XMLHttpRequest'}
        }).then(res=>{

           res.data.data.forEach(obj => {
           
            switch(obj.current_status_code) {
              
              case 'DEL':
                this.delArr.push(obj);
                break;
              
              case 'INT':
                this.intArr.push(obj);
                break;
              
              case 'OOD':
                this.oodArr.push(obj);
                break;

              case 'DEX':
                this.dexArr.push(obj);
                break;

              case 'NFI':
                this.nfiArr.push(obj);
                break;
            }
          });

          this.shipments = [

            { title : 'DEL', count : this.delArr.length, data : this.delArr},
            { title : 'INT', count : this.intArr.length, data : this.intArr},
            { title : 'OOD', count : this.oodArr.length, data : this.oodArr},
            { title : 'DEX', count : this.dexArr.length, data : this.dexArr},
            { title : 'NFI', count : this.nfiArr.length, data : this.nfiArr},
          ];

          this.changeCategory('DEL',this.delArr)

        }).catch(err=>{

          console.log(err,'err')
        });
      },

      changeCategory(title,obj) {

        this.timelineData = [];

        this.loading = true;

        setTimeout(()=>{

          this.loading = false;
        },1000);

        let arrays = [];

        this.currentCategory = title;

        for(var i in obj){

          if(obj[i].scan){
            
            arrays.push(obj[i].scan);
          }
        }

        for (var i in arrays) {
          
          this.timelineData = this.timelineData.concat(arrays[i]);
        }

        // this.tableData = obj.data ? obj.data : [];

        // console.log(this.tableData,'table')
      }
    } 
  };
</script>

<style scoped>
  
  .active {

    background: #ddd !important;
  }

  .custom_timeline {

    height: 500px;
    overflow-x: auto;
  }
</style>
