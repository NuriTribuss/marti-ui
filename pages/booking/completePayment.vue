<template>
    <BreadCrumbStep step="3"  class="mt-4" v-if="booking.data.payment_received == 1"/>
    <section class="payment-area  padding-top-40px padding-bottom-70px">
        <div class="container">
            <div class="row" v-if="booking.data.payment_received == 1">
                <div class="col-lg-12">
                    <h4>{{$t('booking.code')}} </h4>
                    <div class="form-box payment-received-wrap my-4">
                        <div class="d-flex align-items-center form-content">
                            <i class="la la-check icon-element bg-3 flex-shrink-0 mr-3 ml-0 mx-5"></i>
                            <div class="ms-4 ms-lg-0">
                                <h3 class="title pb-1">{{ booking.data.code }}</h3>
                                <p class="pb-1" v-html="$t('booking.thankyou_payment')"></p>
                                <br/>
                                <strong>{{ $t("booking.payment_informations") }}</strong><br/><br/>
                                <strong>{{ $t("booking.payment_type") }}: </strong>{{ booking.data.payment.title }}
                                <br />
                                <strong>{{ $t("booking.payment_date") }}: </strong>{{ booking.data.payment["created-at"] }}
                                <br />
                                <strong>{{ $t("booking.payment_amount") }}: </strong>{{ $n(parseFloat(booking.data.amount)) }} {{ booking.data.currency }}   
                            </div>
                        </div>
                    
                    </div>
                    <h4>{{$t('booking.title')}} </h4>
                    <div class="form-box payment-received-wrap my-4">
                        <div class="form-content">
                            <div class="row">
                                <div class="col-6 col-lg-3 border-end p-3">
                                    <img class="img-fluid" src="~/assets/images/hotel-complete.jpg"  />
                                    <h3 class="title py-3 text-color-9 font-weight-bold text-center ">{{ booking.data.hotel_name }} </h3>
                                    <small class="">{{ booking.data.travel_city }}</small>
                                    
                                </div>
                                <div class="col-6 col-lg-3 border-end p-3">
                                    <h3 class="title text-color-6 font-weight-bold mb-3">{{ $t('offer.services')}}</h3>
                                    <div v-if="booking.data.offer"><i class="la la-check me-1"></i>{{booking.data.offer.commonOffer.hotelOffer.boardType.name }}</div>
                                    <div v-if="booking.data.offer"><i class="la la-check me-1"></i>{{booking.data.offer.commonOffer.hotelOffer.roomType.name }}</div>
                                    <div v-if="booking.data.offer"><i class="la la-check me-1"></i>{{booking.data.offer.commonOffer.hotelOffer.inclusiveList.join(',') }}</div>
                                    <h3 class="title text-color-6 font-weight-bold mb-2 mt-4 ">{{ $t('offer.operator')}}</h3>
                                    <div class="d-flex"> 
                                        <img :src="'https://media.traffics-switch.de/vadata/logo/png/h50/'+booking.data.operator.toLowerCase()+'.png'"/>
                                        <div>{{ booking.data.operator}}</div>
                                    </div>

                                </div>
                                <div class="col-6 col-lg-3 border-end p-3">
                                    <h3 class="title text-color-6 font-weight-bold mb-3">{{ $t('booking.complete_date')}}</h3>
                                    <div class="font-size-14">
                                        <div>Von :  {{ $date(booking.data.start).format('DD.MM.YYYY') }} </div>
                                        <div>Bis :   {{ $date(booking.data.end).format('DD.MM.YYYY') }}</div>     
                                        <div>Dauer :  {{ booking.data.duration }} {{ $t('common.days')}}</div>    
                                    </div>   
                                    <h3 class="title text-color-6 font-weight-bold mb-1 mt-4">{{ $t('booking.complete_personal')}}</h3>
                                    <div>{{ booking.data.name}} {{ booking.data.surname}}</div> 
                                    <div>{{ booking.data.email}}</div>   
                                    <div>{{ booking.data.phone}}</div>                                
                                </div>
                                <div class="col-6 col-lg-3 p-3">
                                    <h3 class="title text-color-6 font-weight-bold pb-2 mb-3">{{ $t('booking.complete_travellers')}}</h3>
                                    <ul class="font-size-14">
                                        <li v-for="(person,index) in booking.data.travellers" :key="index">{{index+1}}.{{person.name}} {{ person.surname }}</li>
                                    </ul>
                                    <hr>
                                    <div class="d-flex justify-content-between">
                                        <div> <span class="title">{{ $t('offer.amount') }}</span> <br> <small> {{ $t('offer.amount_text') }}</small></div>
                                        <div class="font-weight-bold">{{ $n(parseFloat(booking.data.amount)) }} {{ booking.data.currency }}</div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <div class="row">
                        <div class="col-6 col-lg-3">
                            <div class="card">
                                <div class="card-body text-center py-4">
                                    <img  src="~assets/images/marti-small.png"  />
                                    <p class="font-size-12 line-height-22 mt-4">{{ $t('booking.complete.step1') }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="card">
                                <div class="card-body text-center py-4">
                                    <img  src="~assets/images/marti-small.png"  />
                                    <p class="font-size-12 line-height-22 mt-4 ">{{ $t('booking.complete.step2') }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="card">
                                <div class="card-body text-center py-4 ">
                                    <img  src="~assets/images/marti-small.png"  />
                                    <p class="font-size-12 line-height-22 mt-4">{{ $t('booking.complete.step3') }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="card">
                                <div class="card-body text-center py-4">
                                    <img  src="~assets/images/marti-small.png"  />
                                    <p class="font-size-12 line-height-22 mt-4">{{ $t('booking.complete.step4') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- end col-lg-12 -->
            
            </div><!-- end row -->
            <div class="row" v-else>
                <div class="alert alert-danger" role="alert">
                    <h4 class="alert-heading">{{$t("booking.payment_fail_title")}}</h4>
                    <p>{{$t("booking.payment_fail_text")}}</p>
                    <hr>
                    <p class="mb-0">{{$t("booking.payment_fail_desc")}}</p>
                </div>
            </div>
        </div><!-- end container -->
    </section>

</template>

<script setup>
const route  = useRoute();
const { $pixel , $dataLayer } = useNuxtApp();
const { data: booking } = await useFetch(`/api/booking/booking/`+route.query.booking, {
  pick: ["data"],
});

onMounted(() => {

    let data = booking._rawValue.data;
    try {
        let orderData = {
            contents : [
                {
                    id : data.hotel_giata_code,
                    quantity : 1,
                    name : data.hotel_name,
                    checkin_date : data.start,
                    checkout_date : data.end,
                    num_adults : data.adult_count,
                    num_children : data.children_count
                }],
            currency : data.currency,
            value : data.amount,
        }
        $pixel.complete(orderData);
    }catch(e) {
        console.log(e)
    }

    try {
        $dataLayer.complete(booking._rawValue.data);
    }catch(e) {
        console.log(e)
    }
})

</script> 