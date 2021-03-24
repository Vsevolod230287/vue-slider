// Applicare l'autoplay allo slider: ogni 3 secondi,
// cambia immagine automaticamente.

var app = new Vue({
  el: '#root',
  data: {
    index: 0,
    arrayImg: [
      './img/christiann.jpg',
      './img/ferrari.jpg',
      './img/kia_forte.jpg'
    ]

  },
  methods: {
    next: function() {
      if (this.index < this.arrayImg.length - 1) {
        this.index++
      } else {
        this.index = 0;
      }
    },

    prev: function() {
      if (this.index > 0) {
        this.index--
      } else {
        this.index = this.arrayImg.length-1;
      }
    }
  }


})
