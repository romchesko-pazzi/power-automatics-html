ymaps.ready(init)
      function init() {
        const myMap = new ymaps.Map('map', {
          center: [52.809399, 27.569637], // Координаты центра карты
          zoom: 16
        })

        const myPlacemark = new ymaps.Placemark(
          [52.809399, 27.569637], // Координаты метки
          {},
          {
            preset: 'islands#blueDotIcon' // Синий кружок
          }
        )

        myMap.geoObjects.add(myPlacemark)
      }