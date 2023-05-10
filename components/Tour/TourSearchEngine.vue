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
              <label class="label-text">{{ $t('search.destination')}}</label>
              <div class="form-group">
                  <button type="button" @click="isModal=!isModal" data-bs-target="#destination-modal" class="text-start form-control d-block d-lg-none font-size-16"   :placeholder="$t('common.beliebig')">{{ query || $t('common.beliebig') }}</button>
                  <input type="text" autocomplete="off"  autofocus class="form-control d-none d-lg-block font-size-16" id="destination_input" :value="source_show" :placeholder="$t('common.beliebig')" data-bs-toggle="dropdown" />
                  <SearchCommonDropDown class="desktop-dropdown" @select="select_source" :data="source_list_data"/>
              </div>
            </div>
          </div>
          <div class="col-lg-3 pe-0">
            <div class="input-box">
              <label class="label-text">{{ $t('search.destination')}}</label>
              <div class="form-group">
                  <button type="button" @click="isModal=!isModal" data-bs-target="#destination-modal" class="text-start form-control d-block d-lg-none font-size-16"   :placeholder="$t('common.beliebig')">{{ query || $t('common.beliebig') }}</button>
                  <input type="text" autocomplete="off"  autofocus class="form-control d-none d-lg-block font-size-16" id="destination_input" :value="filterList.distnation" :placeholder="$t('common.beliebig')" data-bs-toggle="dropdown" />
                  <SearchCommonDropDown class="desktop-dropdown" @select="select_distnation" :data="distnation_list_data"/>
              </div>
            </div>
          </div>
          <div class="col-lg-3 pe-0">
            <div class="input-box">
              <label class="label-text">{{ $t('search.destination')}}</label>
              <div class="form-group">
                  <button type="button" @click="isModal=!isModal" data-bs-target="#destination-modal" class="text-start form-control d-block d-lg-none font-size-16"   :placeholder="$t('common.beliebig')">{{ query || $t('common.beliebig') }}</button>
                  <input type="text" autocomplete="off"  autofocus class="form-control d-none d-lg-block font-size-16" id="destination_input" :value="filterList.date" :placeholder="$t('common.beliebig')" data-bs-toggle="dropdown" />
                  <SearchCommonDropDown class="desktop-dropdown" @select="select_date" :data="date_list_data"/>
              </div>
            </div>
          </div>
          <div class="col-lg-2 btn-box">
            <button
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
      source_show:null
    };
  },
  methods: {
    select_source(obj){
        this.source_show = obj.title
        this.filterList.source = obj.value; // obj = {title,value}
        this.loadSearchResults()
    },
    select_distnation(obj){
        this.filterList.distnation = obj.value; // obj = {title,value}
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
      this.filterList.distnation = null
      this.filterList.date = null
      this.source_show = null
      this.loadSearchResults()
    }
  },
  computed:{
    source_list_data(){
      if(!this.filterList.sourceList)
        return []
      return this.filterList.sourceList.map((item)=>{return {title:item.station,value:item.id}})
    },
    distnation_list_data(){
      if(!this.filterList.distnationList)
        return []
      return this.filterList.distnationList.map((item)=>{return {title:item,value:item}})
    },
    date_list_data(){
      if(!this.filterList.dateList)
        return []
      return this.filterList.dateList.map((item)=>{return {title:item,value:item}})
    }
  },
  created(){

  },
  
};
</script>
