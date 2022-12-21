<template>
  <div>
    <BreadCrumbSmall :step="[breadcrumb]" />
    <section class="breadcrumb-area py-2 d-none d-lg-block">
      <div class="breadcrumb-wrap">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="my-5">
                <SearchEngine />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="card-area py-4" >
      <div class="container">
        <h3 class="title font-size-26">{{ $t['tours.title']}}</h3>
        <p>{{ $t['tours.subtitle']}}</p>
        <hr/>

        <LoaderRegion v-if="loader"/>
        <div class="row" v-if="tours">
           <div class="col-lg-6" v-for="(tour,index) in tours" :key="index">
             <div class="tour-card card-item card-item-list ">
                    <div class="card-img">
                        <a :href="'/tour/'+tour.seo_url+'?tid='+tour.id" class="d-block">
                           <img :src="'https://martireisen.at/'+tour.image" alt="Destination-img">
                        </a>
                    </div>
                    <div class="card-body ">
                        <h3 class="card-title"><a :href="'/tour/'+tour.seo_url+'?tid='+tour.id">{{ tour.title }}</a></h3>
                        <p><i class="la la-calendar text-color-6 mr-2"></i>{{  tour.period.start_date_pretty }}</p>
                        <p class="card-meta font-size-12 line-height-20">{{ tour.departure_place }} > {{ tour.destination}}</p>
                        <div class="mt-0 mt-lg-4 pb-3 ">
                          <span class="price__num font-size-20 me-5 font-weight-bold text-color-9"> € {{  parseInt(tour.price).toFixed(0) }}  </span>
                          <a :href="'/tour/'+tour.seo_url+'?tid='+tour.id" class="float-end btn theme-btn-blue rounded-0  px-5 text-white">{{ $t['tour.look']}}</a>
                        </div>
                    </div>
                </div>
           </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  props: [],
  data() {
    return {
      tours: null,
      loader: true,
    };
  },
  methods: {
    getData() {
      let vue = this;
      $fetch("/api/booking/tour/tour/?active=1&ssr=1").then(function (result) {
        if (!result.status) {
          return false;
        }
        vue.tours = result.data;
        vue.loader = false;
      });
    },
    
  },
  mounted() {
    this.getData();
  },
 
};
</script>
