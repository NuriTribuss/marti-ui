<template>
  <footer class="footer-wrapper footer-area">
    <div class="footer-top section-bg-3 py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col--6 phone-numbers">
            <h4 class="footer-top-title">Kostenloser Kundensupport</h4>
            <ul class="footer-top-list">
              <li>
                <a href="tel:+43 1 90 94 500" title=""
                  ><img
                    src="~assets/images/flags/au-circle.svg"
                    alt="Marti Reisen Osterrich"
                    width="25"
                  />
                  <span class="mx-2">+43 1 90 94 500 50</span></a
                >
              </li>
              <li>
                <a href="tel:+49 69 333 98 011" title=""
                  ><img
                    src="~assets/images/flags/de-circle.svg?v=2"
                    alt="Marti Reisen Deutschland"
                    width="25"
                  />
                  <span class="mx-2">+49 69 333 98 011 50</span></a
                >
              </li>
              <li>
                <a href="tel:+90 850 840 62 91" title=""
                  ><img
                    src="~assets/images/flags/tr-circle.png"
                    alt="Marti Reisen Türkiye"
                    width="25"
                  />
                  <span class="mx-2">+90 850 840 62 91 50</span></a
                >
              </li>
              <li>
                <a href="tel:{{ $phone }}" title=""
                  ><img
                    src="~assets/images/flags/global-circle.svg"
                    alt="Marti Reisen Global"
                    width="25"
                  />
                  <span class="mx-2">{{ $phone }}</span></a
                >
              </li>
            </ul>
          </div>
          <div class="col-md-3 col--6 my-3 my-lg-0">
            <h4 class="footer-top-title">Über Uns</h4>
            <ul class="footer-top-list">
              <li>
                <a href="/ueber-martireisen/" title="">Über Marti Reisen </a>
              </li>
              <li><a href="/buchungsablauf/" title="">Buchungsablauf </a></li>
              <li>
                <a href="https://www.martireisen.at/" title="">Startseite </a>
              </li>
              <li>
                <a href="/warum-martireisen/" title="">Warum Martireisen.at?</a>
              </li>
              <li>
                <a v-bind:href=" $t('footer.martigo.url')" title=""
                  >{{ $t('footer.martigo.text') }}</a
                >
              </li>
            </ul>
          </div>
          <div class="col-md-3 col--6 my-3 my-lg-0">
            <h4 class="footer-top-title">Service &amp; Kontakt</h4>
            <ul class="footer-top-list">
              <li><a href="/kontakt/" title="">Kontakt</a></li>
              <li>
                <a href="/haeufig-gestellte-fragen/" title=""
                  >Häufig gestellte Fragen
                </a>
              </li>
              <li>
                <a href="/allgmeine-geschaeftsbedingungen/" title=""
                  >Allgmeine Geschäftsbedingungen
                </a>
              </li>
              <li><a href="/impressum/" title="">Impressum</a></li>
              <li>
                <a href="/datenschutz/" title="">Datenschutzbestimmung</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col--12">
            <h4 class="footer-top-title light mb-4">Marti Reisen Newsletter</h4>
            <div class="contact-form-action">
              <form action="#">
                <div class="input-box">
                  
                  <div class="form-group mb-0">
                    <span class="la la-envelope form-icon"></span>
                    <input
                      class="form-control"
                      type="email"
                      name="email"
                      placeholder="Email address"
                    />
                    <button
                      class="theme-btn theme-btn-small submit-btn"
                      type="submit"
                    >
                      Subscribe
                    </button>
                    <span class="font-size-14 pt-1 text-white-50"
                      ><i class="la la-lock mr-1"></i>Don't worry your
                      info is safe with us.</span
                    >
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-top section-bg-3 py-4">
      <div class="container">
        <div class="footer-middle-container">
          <p class="footer-middle-copyright">
            Copyright © 1999 - 2022 Marti Reisen. Alle Rechte vorbehalten
          </p>
          <div class="footer-middle-social">
            <a
              class="footer-middle-social-item"
              href="https://www.facebook.com/martireisen"
              target="_blank"
              title="Social"
              ><i class="fab fa-facebook"></i
            ></a>
            <a
              class="footer-middle-social-item"
              href="https://www.instagram.com/martireisen/"
              target="_blank"
              title="Social"
              ><i class="fab fa-instagram"></i
            ></a>
            <a
              class="footer-middle-social-item"
              href="https://www.youtube.com/channel/UCtk_xNN1jfA6DH0KxmSDHfg"
              target="_blank"
              title="Social"
              ><i class="fab fa-youtube"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-2 justify-content-center text-center">
            <h4 class="footer-bottom-title">Ssl Zertifikat</h4>
            <div class="img-div d-flex justify-content-center">
              <img
                class="img-fluid"
                src="~assets/images/payment/ssl.svg"
                alt="SSL Certificate"
              />
            </div>
          </div>
          <div class="col-md-5 justify-content-center text-center">
            <h4 class="footer-bottom-title">Zahlungsmöglichkeiten</h4>
            <div class="img-div d-flex justify-content-center">
              <img
                class="img-fluid"
                src="~assets/images/payment/mastercard.svg"
                alt="MasterCard"
              />
              <img
                class="img-fluid"
                src="~assets/images/payment/visa.svg"
                alt="Visa"
              />
              <img
                class="img-fluid"
                src="~assets/images/payment/klarna.svg"
                alt="Klarna"
              />
              <img
                class="img-fluid"
                src="~assets/images/payment/paypal.svg"
                alt="Paypal"
              />
            </div>
          </div>
          <div class="col-md-5 justify-content-center text-center">
            <h4 class="footer-bottom-title">Mitgliedschaften</h4>
            <div class="img-div d-flex justify-content-center">
              <img
                class="img-fluid"
                src="~assets/images/payment/iata.svg"
                alt="Iata"
              />
              <img
                class="img-fluid"
                style="width: 150px"
                src="~assets/images/payment/OERV_Logo_4c.jpg"
                alt="ORV"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <a class="position-fixed whatsapp-button" href="https://wa.me/4312366060?text=Hallo" target="_blank">
        <i class="la la-whatsapp my-2"></i>
    </a>
    <button
        type="button"
        class=" position-fixed border-0 shadow-0 top-button " style="right:85px;"
        id="btn-back-to-top"
        >
        <i class="la la-arrow-up"></i>
      </button>
  </footer>
</template>

<script>
export default {

  mounted(){

      let mybutton = document.getElementById("btn-back-to-top");

      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
      // When the user clicks on the button, scroll to the top of the document
      mybutton.addEventListener("click", backToTop);

      function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
  }
};
</script>