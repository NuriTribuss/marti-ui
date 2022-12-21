import locale from '@/locales/locale'


export default defineNuxtPlugin((nuxtApp) => {
  const cookie = useCookie('language')
  
  return{
    provide:{
      n: (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      },
      t: locale('de')
    }
  }
})

