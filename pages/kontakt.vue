<template>
  <BreadCrumb v-if="record" :title="record.data.translate[0].name" :steps="['Marti Reisen bietet einen 24/7 Kundensupport an']" />
  <section class="about-area padding-bottom-90px my-5 overflow-hidden">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="card form-box my-3">
            <div class="card-body py-5"  v-if="record"   v-html="record.data.translate[0].content">

            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div v-for="(item,index) in branches.data" :key="index" v-show="item.domain == 'martireisen.at' && item.active == 1" class="card card-body mb-3 bg-light rounded-0"> 
            <div class="row">
              <div class="col-lg-4 col-10 d-flex ">
                <i class="la la-map-marker font-size-30 mt-3 me-4 text-color-12 font-weight-bold"></i>
                <div>
                  <div class="font-weight-bold">{{ item.name }}</div>
                   <div><span class="text-decoration-line-through" v-if="item.old_address !=''">{{ item.old_address }}</span>{{ item.address }}</div>
                </div>
              </div>
              <div class="col-lg-3 col-8 ">
                <div><b>Tel :</b> {{ item.phone}}</div>
                <div><b>Fax :</b> {{ item.fax}}</div>
              </div>
              <div class="col-lg-2 col-4 ">
                <a :href="'mailto:'+item.email" >Email</a>
              </div>
              <div class="col-lg-2 col-6 ">
                <div v-if="item.old_address == ''">
                   Mo-Fr : {{ item.week_hours }}
                   Sams.  :{{ item.weekend_hours}}
                   <span class="d-block" v-if="item.id == 3">So. : {{ item.weekend_hours}}</span>
                </div>
                 <div v-if="item.old_address != ''">
                 Umgesiedelt
                 </div>
              </div>
              
            </div>
          </div>
        </div>
        <div class="col-lg-12">
            <div class="content mt-5 mb-5">
                <iframe src="https://maps.google.at/maps/ms?msid=202480250804355678001.0004c99314ffc4b0607a1&msa=0&ie=UTF8&t=m&ll=48.209803,16.352806&spn=0.102956,0.257149&z=12&output=embed" name="gmap" width="100%" height="450" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
    
const { data: branches } = await useFetch(`/api/crm/branch?limit=50&sort=sort_number:asc`, {
  pick: ["data"],
});

const { data: record } = await useFetch(`/api/content/page/64`, {
  pick: ["data"],
});


</script> 
