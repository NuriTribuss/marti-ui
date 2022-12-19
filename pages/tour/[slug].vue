<template>
  <div>
    <BreadCrumbSmall  v-if="record" :step="[record.title]" />
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
    <section class="card-area py-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <LoaderHotel v-if="loader" class="my-5" />
            <div v-if="record" class="single-content-wrap form-box p-3 p-lg-4">
              <div id="description" class="page-scroll">
                <div class="single-content-item pb-3">
                  <h3 class="title font-size-26">
                    {{ record.title }}
                  </h3>
                 
                </div>
                <!-- end single-content-item -->
                <div class="section-block"></div>
                <div class="single-content-item py-4">
                  <div class="row">
                    <div class="col-6 col-lg-4">
                      <div
                        class="
                          single-tour-feature
                          d-flex
                          align-items-center
                          mb-3
                        "
                      >
                        <div
                          class="
                            single-feature-icon
                            icon-element
                            mx-1 mx-lg-3 
                            flex-shrink-0
                          "
                        >
                          <i class="la la-clock-o"></i>
                        </div>
                        <div class="single-feature-titles">
                          <h3 class="title font-size-15 font-weight-medium">
                            Duration
                          </h3>
                          <span class="font-size-13">3 Days</span>
                        </div>
                      </div>
                      <!-- end single-tour-feature -->
                    </div>
                    <!-- end col-lg-4 -->
                    <div class="col-6 col-lg-4">
                      <div
                        class="
                          single-tour-feature
                          d-flex
                          align-items-center
                          mb-3
                        "
                      >
                        <div
                          class="
                            single-feature-icon
                            icon-element
                            mx-1 mx-lg-3 
                            flex-shrink-0
                          "
                        >
                          <i class="la la-users"></i>
                        </div>
                        <div class="single-feature-titles">
                          <h3 class="title font-size-15 font-weight-medium">
                            {{ $t["tour.reservation_count"] }}
                          </h3>
                          <span class="font-size-13">30 People</span>
                        </div>
                      </div>
                      <!-- end single-tour-feature -->
                    </div>
                    <!-- end col-lg-4 -->
                    <div class="col-6 col-lg-4">
                      <div
                        class="
                          single-tour-feature
                          d-flex
                          align-items-center
                          mb-3
                        "
                      >
                        <div
                          class="
                            single-feature-icon
                            icon-element
                            mx-1 mx-lg-3 
                            flex-shrink-0
                          "
                        >
                          <i class="la la-globe"></i>
                        </div>
                        <div class="single-feature-titles">
                          <h3 class="title font-size-15 font-weight-medium">
                            {{ $t["tour.tour_type"] }}
                          </h3>
                          <span class="font-size-13">Adventures Tour</span>
                        </div>
                      </div>
                      <!-- end single-tour-feature -->
                    </div>
                    <!-- end col-lg-4 -->
                    <div class="col-6 col-lg-4">
                      <div
                        class="
                          single-tour-feature
                          d-flex
                          align-items-center
                          mb-3
                        "
                      >
                        <div
                          class="
                            single-feature-icon
                            icon-element
                            mx-1 mx-lg-3 
                            flex-shrink-0
                          "
                        >
                          <i class="la la-calendar"></i>
                        </div>
                        <div class="single-feature-titles">
                          <h3 class="title font-size-15 font-weight-medium">
                            {{ $t["tour.date"] }}
                          </h3>
                          <span class="font-size-13">Jan 19' - Dec 21'</span>
                        </div>
                      </div>
                      <!-- end single-tour-feature -->
                    </div>
                    <!-- end col-lg-4 -->
                    <div class="col-6 col-lg-4">
                      <div
                        class="
                          single-tour-feature
                          d-flex
                          align-items-center
                          mb-3
                        "
                      >
                        <div
                          class="
                            single-feature-icon
                            icon-element
                            mx-1 mx-lg-3 
                            flex-shrink-0
                          "
                        >
                          <i class="la la-user"></i>
                        </div>
                        <div class="single-feature-titles">
                          <h3 class="title font-size-15 font-weight-medium">
                            {{ $t["tour.age_group"] }}
                          </h3>
                          <span class="font-size-13">10+</span>
                        </div>
                      </div>
                      <!-- end single-tour-feature -->
                    </div>
                    <!-- end col-lg-4 -->
                    <div class="col-6 col-lg-4">
                      <div
                        class="
                          single-tour-feature
                          d-flex
                          align-items-center
                          mb-3
                        "
                      >
                        <div
                          class="
                            single-feature-icon
                            icon-element
                            mx-1 mx-lg-3 
                            flex-shrink-0
                          "
                        >
                          <i class="la la-plane"></i>
                        </div>
                        <div class="single-feature-titles">
                          <h3 class="title font-size-15 font-weight-medium">
                            {{ $t["tour.departure"] }}
                          </h3>
                          <span class="font-size-13">Airport</span>
                        </div>
                      </div>
                      <!-- end single-tour-feature -->
                    </div>
                    <!-- end col-lg-4 -->
                  </div>
                  <!-- end row -->
                </div>
                <!-- end single-content-item -->
                <div class="section-block"></div>
                <div
                  class="
                    single-content-item
                    padding-top-20px padding-bottom-20px
                  "
                >
                  <h3 class="title font-size-20 mb-3">Description</h3>
                  <div v-html="record.content" class="mb-4 font-size-14"></div>

                  <!-- end row -->
                  <div class="row">
                    <div class="col-lg-6 responsive-column">
                      <h3 class="title font-size-15 font-weight-medium pb-3">
                        Included
                      </h3>
                      <ul class="list-items">
                        <li
                          v-for="(property, index) in record.properties"
                          :key="index"
                          v-show="property.is_free"
                        >
                          <i class="la la-check text-success me-2"></i
                          >{{ property.title }}
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-6 responsive-column">
                      <h3 class="title font-size-15 font-weight-medium pb-3">
                        Not Included
                      </h3>
                      <ul class="list-items">
                        <li
                          v-for="(property, index) in record.properties"
                          :key="index"
                          v-show="property.is_free == 0"
                        >
                          <i class="la la-times text-danger me-2"></i
                          >{{ property.title }}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- end row -->
                </div>
                <!-- end single-content-item -->
                <div class="section-block"></div>
              </div>
              <!-- end description -->
              <div id="itinerary" class="page-scroll">
                <div
                  class="
                    single-content-item
                    padding-top-40px padding-bottom-40px
                  "
                >
                  <h3 class="title font-size-20">{{ $t["tour.tour_plan"] }}</h3>
                  <div
                    class="accordion accordion-item padding-top-20px border-0"
                    id="accordionExample"
                  >
                    <div
                      class="card"
                      v-for="(day, index) in record.plans"
                      :key="index"
                    >
                      <div class="card-header" :id="'day' + index">
                        <h2 class="mb-0">
                          <a
                            class="
                              btn btn-link
                              d-flex
                              align-items-center
                              justify-content-between
                              font-size-16
                            "
                            type="button"
                            data-bs-toggle="collapse"
                            :data-bs-target="'#dayCollapse' + index"
                            aria-expanded="true"
                            aria-controls="faqCollapseOne"
                          >
                            <span>{{ day.title }}</span>
                          </a>
                        </h2>
                      </div>
                      <div
                        :id="'dayCollapse' + index"
                        class="collapse" :class="{'show' : index == 0}"
                        aria-labelledby="faqHeadingOne"
                        data-parent="#accordionExample"
                      >
                        <div class="card-body d-flex align-items-center">
                          <p>
                            {{ day.content }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end single-content-item -->
                <div class="section-block"></div>
              </div>
              <!-- end itinerary -->
        
              <!-- end faq -->
              <div id="location-map" class="page-scroll">
                <div
                  class="
                    single-content-item
                    padding-top-40px padding-bottom-40px
                  "
                >
                  <h3 class="title font-size-20">{{ $t["tour.map"] }}</h3>
                  <div class="gmaps padding-top-30px" v-html="record.map"></div>
                </div>
                <!-- end single-content-item -->
                <div class="section-block"></div>
              </div>
              <!-- end location-map -->
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-box">
              <div class="form-title-wrap py-3">
                <h3 class="title text-color-6 font-weight-bold">
                  Buchungsauftrag
                </h3>
              </div>
              <div class="form-content">
                <div class="row mb-4">
                    <div class="col-12">
                        <label class="label-text font-size-12">{{ $t['tour.tour_date']}}</label>
                        <div class="form-group">
                        <select class="form-control" >
                            <option>1</option>
                        </select>
                        </div>
                    </div>
                    <div class="col-12">
                        <label class="label-text font-size-12">{{ $t['tour.departure']}}</label>
                        <div class="form-group">
                        <select class="form-control" >
                            <option>1</option>
                        </select>
                        </div>
                    </div>
                    <div class="col-6">
                        <label class="label-text font-size-12">{{ $t['tour.adult_count']}}</label>
                        <div class="form-group">
                        <select class="form-control" >
                            <option>1</option>
                        </select>
                        </div>
                    </div>
                    <div class="col-6">
                        <label class="label-text font-size-12">{{ $t['tour.children_count']}}</label>
                        <div class="form-group">
                        <select class="form-control" >
                            <option>1</option>
                        </select>
                        </div>
                    </div>
                </div>
                <button class="btn btn-block w-100 btn-primary rounded-0">
                  {{ $t["tour.make_a_reservation"] }}
                </button>
                <div class="text-center my-2">{{ $t["tour.or"] }}</div>
                <button class="btn btn-block w-100 btn-success rounded-0">
                  <i class="la la-whatsapp me-2"></i>{{ $t["tour.whatsapp"] }}
                </button>
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
      record: null,
      loader: true,
    };
  },
  methods: {
    getData() {
      let vue = this;
      $fetch("/api/booking/tour/tour/fetch/63").then(function (result) {
        if (!result.status) {
          return false;
        }
        vue.record = result.data;
        vue.loader = false;
      });
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
  },
};
</script>

