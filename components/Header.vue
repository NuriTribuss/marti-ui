<template>
  <header class="header-area sticky-top">
    <div class="header-top-bar padding-right-100px padding-left-100px">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="header-top-content">
              <div class="header-left">
                <ul class="list-items">
                  <li>
                    <a :href="'tel:'+$phone"
                      ><i class="la la-phone mr-1"></i>{{ $phone }}</a
                    >
                  </li>
                  <li>
                    <a href="mailto:info@martireisen.at"
                      ><i class="la la-envelope mr-1"></i>info@martireisen.at</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
           
            <div class="header-top-content">
              <div
                class="
                  header-right
                  d-flex
                  align-items-center
                  justify-content-end
                "
              >
                <div class="header-right-action">
                  <div class=" w-auto bg-white me-2">
                     <button class="btn btn-sm dropdown-toggle" type="button" id="language" data-bs-toggle="dropdown" aria-expanded="false">
                        {{ $i18n.locale }}
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="language">
                        <li><a class="dropdown-item" @click="changeLanguage('de')">Deutsch</a></li>
                        <li><a class="dropdown-item" @click="changeLanguage('tr')">Türkçe</a></li>
                      </ul>
                  </div>
                </div>
                <div class="header-right-action">
                  <div class=" w-auto bg-white me-2">
                      <button class="btn btn-sm dropdown-toggle" type="button" id="currency" data-bs-toggle="dropdown" aria-expanded="false">
                        EUR
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="currency">
                        <li><a class="dropdown-item" href="#">EUR</a></li>
                      </ul>
                  </div>
                </div>
                <div class="header-right-action">
               
                  <a
                    href="#"
                    class="btn btn-primary btn-sm rounded-0"
                    data-bs-toggle="offcanvas" data-bs-target="#login-modal"
                    >Login</a
                  >
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div
      class="header-menu-wrapper padding-right-100px padding-left-100px py-2 py-lg-4"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="menu-wrapper d-flex justify-content-between">
             
              <div class="logo">
                <a href="/"
                  ><img src="~assets/images/logo.png" alt="logo"
                /></a>
              </div>
              <div class="d-flex">
                <a class="text-white btn d-lg-none me-1" data-bs-toggle="offcanvas" data-bs-target="#login-modal" aria-controls="loginRight"> 
                    <i class="la la-user font-size-26"></i>
                </a>
                <div class="menu-toggler text-white" data-bs-toggle="offcanvas" data-bs-target="#mobile-menu" aria-controls="mobileRight"> 
                    <i class="la la-bars"></i>
                    <i class="la la-times"></i>
                </div>
              </div>
              <div class="slogan text-white d-none d-lg-block " >
                <h4>{{ $t('header.slogan_one') }}</h4>
                <p>{{ $t('header.slogan_two') }}</p>
              </div>

              <div class="header-contact  align-items-center justify-content-center  d-none d-lg-flex">
                <div class="phone d-flex align-items-center justify-content-center">
                  <h5>{{ $t('header.contact_info') }}</h5>
                  <p>
                    <a class="text-white" href="tel:qweqw">{{ $phone }}</a>
                  </p>
                </div>
              </div>
            </div>

          
            
          </div>
          <!-- end col-lg-12 -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container-fluid -->
    </div>
    <!-- end header-menu-wrapper -->
    <div class="header-menu-subwrapper ">

      
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="">
              <div class="main-menu-content">
                <nav>
                  <ul v-if="menu">
                    <li v-for="(item,index) in menu.data" v-bind:key="index">
                       
                      <a :href="url(item.translate.url)" class="text-white font-weight-bold py-3 px-3">
                        <i :class="item.image_url" class="la mr-1"></i>
                        {{ item.translate.name}}
                      </a>
                      <div class="dropdown-menu-item mega-menu pb-3" v-if="item.children && item.children.length > 0">
                          <div class="position-absolute w-100 opacity-75">
                            <img class="float-end" src="https://www.martireisen.at/data/image/menu/Hotels.jpg"/>
                          </div>
                          <div class="px-3 py-2 mt-2 text-color-7">{{ item.translate.title_1 }}</div>
                          <ul class="row no-gutters">
                              <li class="col-lg-3 mega-menu-item">
                                  <ul>
                                      <li v-show="children.location == 0" v-for="(children,subindex) in item.children" :key="subindex">
                                        <a :href="children.translate.url"><i class="la la-angle-right me-1"></i> {{ children.translate.name }} </a>
                                        </li>
                                  </ul>
                              </li>
                              <li class="col-lg-3 mega-menu-item">
                                  <ul>
                                      <li v-show="children.location == 1" v-for="(children,subindex) in item.children" :key="subindex">
                                        <a :href="children.translate.url"><i class="la la-angle-right me-1"></i> {{ children.translate.name }} </a>
                                      </li>
                                  </ul>
                              </li>
                              <li class="col-lg-3 mega-menu-item">
                                  <ul>
                                      <li v-show="children.location == 2" v-for="(children,subindex) in item.children" :key="subindex">
                                        <a :href="children.translate.url"><i class="la la-angle-right me-1"></i> {{ children.translate.name }} </a>
                                      </li>
                                  </ul>
                              </li>
                              <li class="col-lg-3 mega-menu-item">
                                  
                              </li>
                          </ul>
                      </div>
                      
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <MobileMenu :menu="menu"  v-if="menu"/>
  <UserLoginPopup/>
  <UserRegisterPopup/>
</template>

<script setup>

const config = useRuntimeConfig();
const language = useCookie("store-language");
const currency = useCookie("currency");

const changeLanguage = (param) => {
  language.value = param;
  location.reload();
};
const changeCurrency = (param) => {
  currency.value = param;
  location.reload();
};

const { data: menu } = await useFetch(
  `/api/front/menu?hl=`+ (language.value || 'de' ), { pick : ["data"]}
); 

const url = (url) => {
  let map = {
    "https://www.martigo.at/" : "/redirect/flight",
    "/rent-car/" : "/redirect/rent",
  };
  if (map[url]) {
    return map[url];
  }
  return url;
};

</script>
