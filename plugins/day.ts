import dayjs from 'dayjs'

export default defineNuxtPlugin((nuxtApp) => {
    return{
        provide:{
            date: dayjs
        }
    }
})