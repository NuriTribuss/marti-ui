<template>
  <a href="javascript:;"  @click="searchHotel(hotel.hotelId,hotel.name_sef)">
    <div class="card mb-3" style="max-width: 500px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img v-bind:src="image" alt="hotel-img" class="img-fluid rounded-start">
        </div>
        <div class="col-md-8">
          
          <div class="card-body">
            <h6 class="card-title">
              <!-- <a href="javascript:;"  @click="searchHotel(hotel.hotelId,hotel.name_sef)">{{hotel.name}}</a>             -->
              {{hotel.name}}
            </h6>
            <p class="card-meta">{{ hotel.region_name }}, ({{ hotel.region_name}})</p>
            <div class="card-rating pt-1">
              <span class="ratings d-flex align-items-center">
                <i class="la la-star" v-for="i in parseInt(hotel.category) || 0" :key="i"></i>
                <button type="button" @click="removeFav($event)" class="btn-close" style="margin: 5px 5px 0px auto;"></button>
              </span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  props: ["hotel"],
  data() {
    return {
      removed: false,
    }
  },
  methods:{
    removeFav(e){
      console.log("removed");
      this.removed=true;
      e.preventDefault()
      this.$emit("removeFav",this.hotel);
    },
    searchHotel(id, sef) {
      if(this.removed){return;}
        let query2  = search.get();
        query2['destination'] = {
            'code': id,
            'type': 'hotel'
        };
        query2['departure']= {
            'code': 'VIE', 
            'name': 'Wien'
        };
        query2['giataIdList']=[id];
        location.href = '/hotel/'+sef+'?f='+ JSON.stringify(query2)
        query2['giataIdList']= [];

      
    },
  },
  computed: {
    image(){
      return this.hotel.pictureUrl.replace('100','100');
    }
  },
};
</script>