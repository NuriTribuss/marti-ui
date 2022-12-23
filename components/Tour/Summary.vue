<template>
    <div class="form-content">
      <div class="card-item shadow-none radius-none mb-0 " v-if="tour">
        <div class="card-img pb-4">
          <a href="#" class="d-block">
            <img :src="$url+tour.image" alt="tour-img" />
          </a>
        </div>
        <div class="card-body p-0">
          <div class="d-flex justify-content-between">
            <div>
              <h3 class="card-title">
                {{ tour.title }}
              </h3>
              <p class="card-meta">
                {{ tour.departure_place }} >
                {{ tour.destination }}
              </p>
              <div class="card-rating pt-1">
                <span class="ratings d-flex align-items-center">
                  <i
                    class="la la-star"
                    v-for="i in 5"
                    :key="i"
                  ></i>
                </span>
              </div>
            </div>
          </div>
  
          <div class="section-block"></div>
          
       <ul class="list-items list-items-2 py-2 font-size-14"  >
            <li>
              <span>Check in:</span>{{ (tour.period.start_date_pretty) }}
            </li>
            <li>
              <span>{{ $t['search.duration']}}:</span>{{ tour.plans.length }}
              {{ $t["common.days"] }}
            </li>
           
          </ul>
           
          <div class="section-block"></div>
          <h3 class="title text-color-6 font-weight-bold my-3">
            {{ $t["offer.services"] }}
          </h3>
       
          <div class="font-size-14" v-for="(property,index) in tour.properties" :key="index">
            <i class="la la-check me-1"></i
            >{{property.title }}
          </div>
        
        </div>
      </div>
      <!-- end card-item -->
    </div>
  </template>
  
  <script>
  import dayjs from 'dayjs'
  
  export default {
    components : { dayjs },
    props: ["tour"],
    methods : {
      format(date){
          return dayjs(date).format('DD-MM-YYYY')
      }
    }
  };
  </script>
  