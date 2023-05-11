<template>
<div>
    <div class="tab-content search-fields-container" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="hotel"
        role="tabpanel"
        aria-labelledby="hotel-tab"
      >
        <div class="row align-items-center">
          <div class="col-lg-3 pe-0">
            <div class="input-box">
              <label class="label-text">{{ $t('tour.station_select')}}</label>
              <div class="form-group">
                  <!-- <button type="button" @click="isModal=!isModal" data-bs-target="#destination-modal" class="text-start form-control d-block d-lg-none font-size-16"   :placeholder="$t('tour.station_select')">{{ filterList.source || $t('tour.station_select') }}</button> -->
                  <input type="text" autocomplete="off"  autofocus class="form-control d-block d-lg-block font-size-16" id="source_input" :value="filterList.source" :placeholder="$t('tour.station_select')" data-bs-toggle="dropdown" />
                  <SearchCommonDropDown v-if="!$isMobile" class="desktop-dropdown" @select="select_source" :data="source_list_data"/>
                  <SearchCommonDropDown v-if="$isMobile" class="mobile-dropdown" @select="select_source" :data="source_list_data"/>
              </div>
              <!-- <SearchCommonDropDownMobile 
              :selectedval="filterList.source" 
              :itemlist="filterList.sourceList"
              name='source'
              :objplaceholder="$t('tour.station_select')"
              /> -->
            </div>
          </div>
          <div class="col-lg-3 pe-0">
            <div class="input-box">
              <label class="label-text">{{ $t('tour.rotate_and_city_select')}}</label>
              <div class="form-group">
                  <!-- <button type="button" @click="isModal=!isModal" data-bs-target="#destination-modal" class="text-start form-control d-block d-lg-none font-size-16"   :placeholder="$t('tour.rotate_and_city_select')">{{ filterList.destination || $t('tour.rotate_and_city_select') }}</button> -->
                  <input type="text" autocomplete="off"  autofocus class="form-control d-block d-lg-block font-size-16" id="destination_input" :value="filterList.destination" :placeholder="$t('tour.rotate_and_city_select')" data-bs-toggle="dropdown" />
                  <SearchCommonDropDown v-if="!$isMobile" class="desktop-dropdown" @select="select_destination" :data="destination_list_data"/>
                  <SearchCommonDropDown v-if="$isMobile" class="mobile-dropdown" @select="select_destination" :data="destination_list_data"/>
              </div>
            </div>
          </div>
          <div class="col-lg-3 pe-0">
            <div class="input-box">
              <label class="label-text">{{ $t('tour.date_select')}}</label>
              <div class="form-group">
                  <!-- <button type="button" @click="isModal=!isModal" data-bs-target="#destination-modal" class="text-start form-control d-block d-lg-none font-size-16"   :placeholder="$t('tour.date_select')">{{ filterList.date || $t('tour.date_select') }}</button> -->
                  <input type="text" autocomplete="off"  autofocus class="form-control d-block d-lg-block font-size-16" id="date_input" :value="filterList.date" :placeholder="$t('tour.date_select')" data-bs-toggle="dropdown" />
                  <SearchCommonDropDown v-if="!$isMobile" class="desktop-dropdown" @select="select_date" :data="date_list_data"/>
                  <SearchCommonDropDown v-if="$isMobile" class="mobile-dropdown" @select="select_date" :data="date_list_data"/>
              </div>
            </div>
          </div>
          <div class="col-lg-2 btn-box">
            <button v-if="isTour_slug || $isMobile"
                @click="doSearchTour"
                class="
                  theme-btn theme-btn-orange
                  font-weight-bold
                  px-3
                  mt-4
                  w-100
                  text-center
                "
                >{{ $t('tour.search_offers') }}
              </button>
              <button v-if="isTour"
              @click="clear"
                class="
                  theme-btn theme-btn-orange
                  font-weight-bold
                  px-3
                  mt-4 d-lg-flex
                "
                >{{ $t('search.clear') }}
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>


export default {
  props : [ 'filterList' ],
  data() {
    return {
      isTour: false,
      isTour_slug: false
    };
  },
  methods: {
    select_source(obj){
        this.filterList.source = obj.value; // obj = {title,value}
        this.loadSearchResults()
    },
    select_destination(obj){
        this.filterList.destination = obj.value; // obj = {title,value}
        this.loadSearchResults()
    },
    select_date(obj){
        this.filterList.date = obj.value; // obj = {title,value}
        this.loadSearchResults()
    },
    loadSearchResults() {
      this.$emit('change',this.filterList)
    },
    clear(){
      this.filterList.source = null
      this.filterList.destination = null
      this.filterList.date = null
      this.source_show = null
      this.$router.replace({'query': null});
      this.loadSearchResults()
    },
    doSearchTour(){
      let query = '';
      if(this.filterList.source != null){
        query = query + 'source=' + this.filterList.source;
      }
      if(this.filterList.destination != null){
        if(query != ''){
          query = query + '&';
        }
        query = query + 'destination=' + this.filterList.destination;
      }
      if(this.filterList.date != null){
        if(query != ''){
          query = query + '&';
        }
        query = query + 'date=' + this.filterList.date;
      }
      location.href= '/tour/?' + query;
    }
  },
  computed:{
    source_list_data(){
      if(!this.filterList.sourceList)
        return []
      return this.filterList.sourceList.map((item)=>{return {title:item,value:item}})
    },
    destination_list_data(){
      if(!this.filterList.destinationList)
        return []
      return this.filterList.destinationList.map((item)=>{return {title:item,value:item}})
    },
    date_list_data(){
      if(!this.filterList.dateList)
        return []
      return this.filterList.dateList.map((item)=>{return {title:item,value:item}})
    }
  },
  mounted() {
    if(this.$route.name == 'tour')
    {
      this.isTour = true;
    }
    if(this.$route.name == 'tour-slug')
    {
      this.isTour_slug = true;
    }
  },
  
};
</script>
