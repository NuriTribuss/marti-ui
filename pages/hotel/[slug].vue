<template>
  <BreadCrumbSmall title="Hotel Detay" :step="step" v-if="hotel"/>
  <div v-if="loaders.hotel" class="d-flex">
    <LoaderImage v-for="i in 5" :key="i" class="mb-1"/>
  </div>
  <HotelPhotoGallery v-if="hotel" v-bind:images="hotel.catalogData.imageList"/>

  <section class="tour-detail-area padding-bottom-90px">
    <div
      class="single-content-navbar-wrap menu section-bg"
      id="single-content-navbar"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 offset-0 col-lg-9 offset-md-3 pt-3 pt-lg-5">
            <div v-if="hotel"
              class="single-content-item pb-4 d-flex justify-content-between"
            >
              <div>
                <h3 class="title font-size-24">
                  {{ hotel.name}}
                </h3>
                <div class="d-block d-lg-flex">
                  <p class="ratings me-2" v-if="hotel.category">
                    <i class="la la-star" v-for="i in parseInt(hotel.category)" :key="i"></i>
                  </p>
                  <div class="d-flex">
                      <p>{{ hotel.location.name }}, ({{ hotel.location.region.name }})</p>
                      <a data-bs-toggle="offcanvas" data-bs-target="#map-modal" class="btn btn-light btn-xs d-block d-lg-none line-height-18" ><i class="la la-map"></i></a>
                  </div>
                </div>
              </div>
              <div class="d-flex">
                  <div class="me-0 me-lg-3 text-color-9 py-1 font-weight-bold d-lg-flex d-none">{{ $t['common.share']}} : </div> 
                  <ul class="social-profile d-flex">
                      <li class="d-lg-flex d-none"><a :href="'https://www.facebook.com/sharer/sharer.php?u='+config.BASE_URL+$route.path" target="_blank"><i class="la la-facebook-f"></i></a></li>
                      <li class="d-lg-flex d-none"><a :href="'https://twitter.com/share?url='+config.BASE_URL+$route.path" target="_blank" ><i class="la la-twitter"></i></a></li>
                      <li class="d-lg-none d-block"><a :href="'https://api.whatsapp.com/send?text='+config.BASE_URL+$route.path" target="_blank"  ><i class="la la-whatsapp"></i></a></li>
                  </ul>
              </div>
            </div>
            <div v-if="firstOffer" class="justify-content-between bg-white px-3 font-size-14 d-lg-none d-flex ">
                  <div>
                    <p class="font-weight-bold  my-1">Beliebteste Merkmale</p>
                    <span class="d-block font-size-12 line-height-18" v-for="(fact,index) in firstOffer.hotelOffer.hotel.keywordList" :key="index"
                      >
                      <span v-if="index < 3"><i class="la la-check text-success mx-2"></i> {{ $t.facility[fact] }}</span
                    ></span>
                  
                  </div>
                  <div class="text-center" v-if="firstOffer.hotelOffer.hotel.rating" data-bs-toggle="offcanvas" data-bs-target="#review-modal"  >
                    <p class="font-weight-bold text-center my-1">Gästebewertung</p>
                    <div class="">
                      <h5><i class="la la-smile text-warning"></i>{{ firstOffer.hotelOffer.hotel.rating.overall }}<span>/100</span></h5>
                      <span>{{ firstOffer.hotelOffer.hotel.rating.recommendation }} Bewertungen</span>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="single-content-box">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="sidebar single-content-sidebar mb-0">
              <div class="sidebar-widget single-content-widget d-none">
                <h3 class="title stroke-shape">Information</h3>
                <div class="sidebar-widget-item">
                  <div class="contact-form-action">
                    <form action="#">
                      <div class="input-box">
                        <label class="label-text">Reisedatum</label>
                        <div class="form-group">
                          <span class="la la-calendar form-icon"></span>
                          <input
                            class="date-range form-control"
                            type="text"
                            name="daterange-single"
                            readonly
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <!-- end sidebar-widget-item -->
                <div class="sidebar-widget-item">
                  <div
                    class="
                      qty-box
                      mb-2
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                  >
                    <label class="font-size-16"
                      >Erwachsene <span>Age 18+</span></label
                    >
                    <div class="qtyBtn d-flex align-items-center">
                      <div class="qtyDec"><i class="la la-minus"></i></div>
                      <input type="text" name="qtyInput" value="0" />
                      <div class="qtyInc"><i class="la la-plus"></i></div>
                    </div>
                  </div>
                  <!-- end qty-box -->
                  <div
                    class="
                      qty-box
                      mb-2
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                  >
                    <label class="font-size-16"
                      >Kinder <span>2-12 years old</span></label
                    >
                    <div class="qtyBtn d-flex align-items-center">
                      <div class="qtyDec"><i class="la la-minus"></i></div>
                      <input type="text" name="qtyInput" value="0" />
                      <div class="qtyInc"><i class="la la-plus"></i></div>
                    </div>
                  </div>
                  <!-- end qty-box -->
                </div>
                <!-- end sidebar-widget-item -->

                <div class="btn-box">
                  <a href="#" class="theme-btn text-center w-100 mb-2"
                    >Aktualisieren</a
                  >
                </div>
              </div>
              <!-- end sidebar-widget -->
              <HotelFilter :detail="true" :filter_data="filter_data" class="d-none d-lg-block" />

              <div
                class="
                  sidebar-widget
                  single-content-widget
                  d-none
                  mt-4
                "
              >
                <h3 class="title stroke-shape">Get a Question?</h3>
                <p class="font-size-14 line-height-24">
                  Do not hesitate to give us a call. We are an expert team and
                  we are happy to talk to you.
                </p>
                <div class="sidebar-list pt-3">
                  <ul class="list-items">
                    <li>
                      <i class="la la-phone icon-element me-2"></i
                      ><a href="#"> {{ $phone }}</a>
                    </li>
                    <li>
                      <i class="la la-envelope icon-element me-2"></i
                      ><a href="mailto:info@martireisen.at">info@martireisen.at</a>
                    </li>
                  </ul>
                </div>
                <!-- end sidebar-list -->
              </div>
              <!-- end sidebar-widget -->
            </div>
            <!-- end sidebar -->
          </div>
          <!-- end col-lg-4 -->
          <div class="col-lg-9">
            <div class="section-tab section-tab-3 pt-0 pt-lg-4">
              <ul class="nav nav-tabs hotel-tabs" id="myTab" role="tablist">
                <li class="nav-item ">
                  <a
                    class="nav-link active "
                    data-bs-toggle="tab"
                    data-bs-target="#offer"
                    role="tab"
                    aria-controls="offer"
                    aria-selected="false"
                  >
                    <i class="la la-concierge-bell me-1"></i>{{ $t['hotels.tab_1']}}
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#info"
                    role="tab"
                    aria-controls="info"
                    aria-selected="false"
                  >
                    <i class="la la-info me-1"></i>{{ $t['hotels.tab_3']}}
                  </a>
                </li>
                <li class="nav-item d-none d-lg-block">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#location"
                    role="tab"
                    aria-controls="location"
                    aria-selected="true"
                    ><i class="la la-map-marker me-1"></i>
                    Map
                  </a>
                </li>
                <li class="nav-item d-none d-lg-block">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#review"
                    role="tab"
                    aria-controls="review"
                    aria-selected="false"
                    ><i class="la la-smile me-1"></i>
                    {{ $t['hotels.tab_2']}}
                  </a>
                </li>
              </ul>
            </div>

            <div class="single-content-wrap">
              <div class="tab-content margin-bottom-40px" id="myTabcontent">
                <div
                  class="tab-pane fade fade active show"
                  id="offer"
                  role="tabpanel"
                >
                <div v-show="loaders.offer">
                  <LoaderOffer v-for="i in 10" :key="i" class="mb-1"/>
                </div>
                 <HotelOffer v-for="(offer,index) in offerList" :key="index" :index="index" v-bind:offer="offer" :search="searchData" />
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="btn-box mt-3 text-end ">
                        <button type="button" class="theme-btn theme-btn-orange w-25" v-if="total > offerList.length" @click="loadMore">
                          <i class="la la-refresh me-2"></i>{{ $t['common.show_more']}}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="info" role="tabpanel">
                  <HotelInfo v-bind:hotel="hotel"/>
                </div>
                <div class="tab-pane fade" id="location" role="tabpanel">
                  <HotelLocation v-bind:hotel="hotel"  />
                </div>
                <div class="tab-pane fade" id="review" role="tabpanel">
                  <HotelReviews v-if="firstOffer && !$isMobile" v-bind:hotel="firstOffer.hotelOffer.hotel" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->
        <div class="offcanvas offcanvas-end" id="review-modal">
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Gästebewertung</h5>
            <a
              class="btn"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              ><i class="la la-close"></i
            ></a>
          </div>
          <div class="offcanvas-body">
              <HotelReviews v-if="firstOffer && $isMobile" v-bind:hotel="firstOffer.hotelOffer.hotel" />
          </div>
        </div>
        <div class="offcanvas offcanvas-end" id="map-modal">
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Map</h5>
            <a
              class="btn"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              ><i class="la la-close"></i
            ></a>
          </div>
          <div class="offcanvas-body">
              <HotelLocation v-bind:hotel="hotel"  />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import search from '/modules/search'

export default {
  data() {
    return {
      hotel: null,
      firstOffer: null,
      offerList : [],
      filter_data : null,
      searchData : {},
      total : 0,
      limit : 10,
      current_page : 1,
      loaders : {
        hotel : true,
        offer : true,
      },
      step : []
    };
  },
  components : {
    search,
  },
  methods: {

    getHotel() {

       let vue = this;
       $fetch("/api/engine/hotel/detail/"+this.searchData.destination.code).then(function(result){
         
          if(!result.status) {
            return false;
          }
          vue.hotel = result.data.response.hotel;
          vue.loaders.hotel = false;
          vue.step.push(vue.hotel.location.region.name,vue.hotel.location.name,vue.hotel.name)
      })
    },

    loadMore(){
      this.current_page+=1;
      this.getOffer();
    },  

    getOffer() {

       let vue = this;
       vue.loaders.offer = true;
       $fetch("/api/engine/offer/get",{ method: 'POST', body: {page : this.current_page , ...search.get()} }).then(function(result){
         
          if(!result.status) {
            return false;
          }
          if(vue.current_page == 1){
            vue.offerList = result.data.response.offerList;
            if(vue.offerList.length > 0 ){
              vue.firstOffer = vue.offerList[0];
            }
            vue.filter_data = result.data.response;
            vue.total = result.data.response.totalResultCount;
          }else{
            vue.offerList = vue.offerList.concat(result.data.response.offerList);
          }
          
          vue.loaders.offer = false;
      })

    },

  },

  watch: {
    '$route.query'() {
      this.current_page = 1;
      this.getOffer();
    }
  },

  mounted() {
    this.searchData = search.get();
    this.getHotel()
    this.getOffer()
  },
};
</script>

<script setup>
const config = useRuntimeConfig();
</script>