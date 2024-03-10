import './styles.css'

import Header from './components/Header'
import ActivityCard from './components/ActivityCard'
import placeHolderData from './data/placeHolderData'
import { useState,useEffect } from 'react'

export default function App() {
  /* Challenge

    Kullanıcının etkinlikleri Bored API için key olarak kaydedildi. Göreviniz, etkinlik verilerini almak için key'leri aşağıdaki gibi kullanmaktır: 
    
        1. Sayfa yüklendiğinde, aşağıdaki savedActivityKeys array'inde bulunan 20 key'in her biri için Bored API'den aktivite verileri alınmalıdır. Bu veri getirme işlemlerinin nasıl yapılacağını öğrenmek için API_Documentation.md dosyasını okuyun. 
        
        2. Veriler, activities state array'e 20 JavaScript nesnesi (her key/response/activity için bir tane) olarak kaydedilmelidir.  
           
        3. Şu anda activitiesData state olarak ayarlanmış olan placeHolderData'dan kurtulun. Bu veri sadece size gerçek verinin içeriği, biçimi ve faydası hakkında bir fikir vermek içindir. Sonunda, üzerinde API'den gerçek veriler bulunan 20 etkinlik kartı elde etmelisiniz. 
        
    Not: Tek yapmanız gereken activitiesData state'ini yukarıda açıklanan şekilde ayarlamaktır. Bunu doğru bir şekilde yaparsanız, aşağıdaki 33. satırda yer alan activityCardElements değişkeni etkinlik kartlarını sizin için oluşturacaktır. 
*/

const savedActivityKeys = [
  8364626, 4688012, 6553978, 3699502, 9908721, 3136729, 5490351, 8827573,
  9318514, 1668223, 3192099, 9008639, 4894697, 8033599, 5675880, 7114122,
  4151544, 4558850, 3561421, 4286250,
]

useEffect(() => {
  const fetchActivity = async () => {
   
      try {  
      // savedActivityKeys dizisindeki her bir anahtar için bir fetch işlemi başlatılıyor. //
        const promise = savedActivityKeys.map(async(key) => {

          // Her anahtar için bir etkinlik almak için API'ye istek gönderiliyor. //
          const response = await fetch(`https://www.boredapi.com/api/activity?key=${key}`)

          return await response.json() // Yanıt JSON olarak ayrıştırılıyor. //
        })
        // Tüm asenkron işlemleri eşzamanlı olarak çalıştırmak için Promise.all() kullanılıyor.//
        const activityData = await Promise.all(promise)
        setActivitiesData(activityData) 
      }
      catch (error) {
        // Hata durumunda konsola hata yazdırılıyor. //
        console.error('Aktivite verileri alma sırasında bir hata oluştu:', error)
      }
  }
  fetchActivity()  
  },[])

    
    const [activitiesData, setActivitiesData] = useState([])
    // placeHolderData, data klasöründeki placeHolderData.js dosyasından içe aktarılmıştır.
    
    const activityCardElements = activitiesData.map((activityData, index) => {
      const { key, ...otherProps } = activityData
      return <ActivityCard key={key} number={index + 1} {...otherProps} />
    })

  return (
    <div className='wrapper'>
      <Header />
      <div className='container'>{activityCardElements}</div>
    </div>
  )
}
   
     // 2.yapılış //

// useEffect(() => {
  // const fetchActivity = async () => {
  //   // Promise.all kullanarak, her bir anahtar için bir fetch isteği yapılır ve tüm isteklerin tamamlanmasını bekler. map fonksiyonu ile savedActivityKeys dizisindeki her bir anahtar için bir asenkron işlem oluşturulur ve bu işlemler bir diziye eklenir. //
  //   const activityData = await Promise.all(savedActivityKeys.map( async(key) => {
  //    // Promise.all() yöntemi, birden çok asenkron işlemi eşzamanlı olarak çalıştırır ve bu işlemlerin tamamının tamamlanmasını bekler. //
      
  //     try {  
  //       // Her anahtar için bir etkinlik almak için API'ye istek gönderiliyor. //
  //       const response = await fetch(`https://www.boredapi.com/api/activity?key=${key}`)
  //       return await response.json() // Yanıt JSON olarak ayrıştırılıyor. //
        
  //     }
  //     catch (error) {
  //       // Hata durumunda konsola hata yazdırılıyor. //
  //       console.error('Aktivite verileri alma sırasında bir hata oluştu:', error)
  //     }}))

  //   // Alınan veriler, durum değişkenine (activitiesData) atanıyor. //
  //   setActivitiesData(activityData) 
  
  //   }
  // fetchActivity()  
  // },[])




// for of döngüsü, sadece iterable (gezinilebilir) nesneler üzerinde çalışır. Bu nedenle, nesneler üzerinde doğrudan kullanılamaz. Eğer nesneleri dolaşmak istiyorsanız, for in döngüsünü veya Object.keys(), Object.values(), Object.entries() gibi metodları kullanabilirsiniz. //

      // 1.yapılış //

// useEffect(() => {
//   const fetchActivity = async () => {
//     const activityData = []

//     // savedActivityKeys dizisindeki her bir anahtar için bir döngü oluşturuluyor. //
//     for (const key of savedActivityKeys){

//       try{  
//        // Her anahtar için bir etkinlik almak için API'ye istek gönderiliyor. //
//         const response = await fetch(`https://www.boredapi.com/api/activity?key=${key}`)

//         const data = await response.json() // Yanıt JSON olarak ayrıştırılıyor. //

//         activityData.push(data) // Alınan veri, activityData dizisine ekleniyor. //
//       }
//       catch (error) {
//         // Hata durumunda konsola hata yazdırılıyor. //
//         console.error('Aktivite verileri alma sırasında bir hata oluştu:', error)
//       }
//     }
//     // Alınan veriler, durum değişkenine (activitiesData) atanıyor. //
//     setActivitiesData(activityData) 
//   }
//   fetchActivity()  
//   },[])






       // DENEME //
// fetch(`https://www.boredapi.com/api/activity?key=${res}`)
//  .then(response => response.json())
//  .then(data => {

//    return data
//   })
//   setActivitiesData(data)



//  const fetchActivity = async () => {
//     fetchActivity()
//   }
// try{ 
          
//   const response = await fetch(`https://www.boredapi.com/api/activity?key=${savedActivityKeys}`)
//   const data = await response.json()
//   setActivitiesData(data)
// }
// catch (error) {
//   console.error('Aktivite verileri alma sırasında bir hata oluştu:', error)
// }