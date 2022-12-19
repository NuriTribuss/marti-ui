
export default defineNuxtConfig({
    runtimeConfig: {
        PANEL_URL: process.env.PANEL_URL,
        BASE_URL: process.env.MODE === 'dev' ? process.env.DEV_URL : process.env.PROD_URL,
    },
    css: [
        '@/assets/css/bootstrap.min.css',
        '@/assets/css/line-awesome.css',
        '@/assets/css/style.css',
    ],
    app : {
        head : {
            title : 'Urlaub & Pauschal, Last Minute Urlaub, Reiseangebote Günstig Buchen!',
            meta: [
                {
                  name: "description",
                  content: "Urlaub zum Tiefpreis buchen: Pauschalreisen, Last Minute, Städtereisen, Hotels mit eigener Anreise, Kreuzfahrten, Mietwagen.",
                },
            ],
            script: [
                { src: '/bootstrap.bundle.min.js' },
            ],
        }
    },
   
})
