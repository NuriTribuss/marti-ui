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
                <span
                  class="la la-map-marker form-icon text-color-12 z-index-1"
                ></span>
                  <button type="button" @click="isModal=!isModal" data-bs-target="#destination-modal" class="text-start form-control d-block d-lg-none font-size-16"   :placeholder="$t('common.beliebig')">{{ query || $t('common.beliebig') }}</button>
                  <input type="text" autocomplete="off"  autofocus class="form-control d-none d-lg-block font-size-16" id="destination_input" v-model="query" :placeholder="$t('common.beliebig')"  @keyup="loadSearchResults" data-bs-toggle="dropdown" />

                  <SearchCommonDropDown class="desktop-dropdown"/>
                  
                  <div v-if="isModal" class="autocomplete-popup" style="position: fixed;
                      top: 0;
                      left: 0;
                      width: 100vw;
                      height: 100%;
                      background: #fff;
                      z-index: 999;">
                    <SearchMobileDestinationWithInput class="mobile-dropdown" />
                  </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 btn-box">
            <button
            @click="loadSearchResults"
              class="
                theme-btn theme-btn-orange
                font-weight-bold
                px-3
                mt-4
                d-none d-lg-flex
              "
              >{{ $t('search.search_offers') }}
            </button>
            <button
              @click="loadSearchResults"
              class="
                theme-btn theme-btn-orange
                font-weight-bold
                px-3
                mt-4
                w-100
                text-center
                d-lg-none
              "
              >{{ $t('search.search_offers') }}
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
    };
  },
  methods: {
    loadSearchParams(){

    },
    loadSearchResults() {
      
    },

  },
  created(){

  },
  
};
</script>