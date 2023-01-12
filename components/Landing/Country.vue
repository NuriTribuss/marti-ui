<template>
  <BreadCrumbSmall :step="[meta.data.title]" />
  
  <section  class="breadcrumb-area py-2">
    <div class="breadcrumb-wrap">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="bg-rgb-6 p-4 my-4 text-white" v-show="!loader.landing">
              <h1>{{ content.title }}</h1>
              <div>{{ content.subtitle }}</div>
            </div>
            <div class="mt-4 mb-5">
              <SearchEngine :no_header="true" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div v-show="loader.landing">
          <LoaderLanding/>
      </div>
      <div class="row my-4">
        <div class="col-lg-12">
            <h2 class="text-center my-2">{{ content.second_title}}</h2>
            <p class="text-center" v-html=" content.second_subtitle"></p>
            <LandingHotelList ref="hotelList"></LandingHotelList>
        </div>
      </div>
      <div class="bg-white font-size-14 landing-content">
        <div class="my-4" v-if="content.content" v-html="content.content"></div>
      </div>
    </div>
  </section>
</template>

<script>

import search from '/modules/search';

export default {
  props: ["meta", "config"],
  components : { search },
  data() {
    return {
      record: null,
      bg_image: "",
      content: {},
      breadcrumb : '',
      loader : {
        landing : true,
      },
      error : false,
    };
  },
  methods: {
    getData() {

      let vue = this;
      $fetch("/api/landing/zone/fetch/country/",{ method : 'POST', body: this.meta.data}).then(
        function (result) {
          if (!result.status) {
            return false;
          }
          vue.record = result.data;
          vue.content = vue.translate(vue.record.translate, vue.meta.data.locale);
          vue.loader.landing = false;
         
          let query  = search.get();
          query['destination'] = {
            code : vue.record.zone_code,
            type : 'country', 
            name : ''
          }

          vue.$refs.hotelList.getResult(query,vue.content.third_title);
        }
      );
    },
    translate(data, language) {
      for (var i = 0; i < data.length; i++) {
        if (language == data[i].language) {
          return data[i];
        }
      }

      return data[0];
    },

  },
  
  mounted() {
    this.getData();
    this.bg_image = this.config.public.BASE_URL + this.meta.data.image;
  },
};
</script>
