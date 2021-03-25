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
    ],
    id: ''
  },
  created: function() {
    this.id = setInterval(() => {
      this.next();
    }, 1300)
  },
  methods: {
    next: function(e) {
      if (e && e.type == 'click') {
        clearInterval(this.id);
      }
      if (this.index < this.arrayImg.length - 1) {
        this.index++
      } else {
        this.index = 0;
      }
    },
    prev: function(e) {
      if (e.type == 'click') {
        clearInterval(this.id);
      }
      if (this.index > 0) {
        this.index--
      } else {
        this.index = this.arrayImg.length - 1;
      }
    },
    dotClick: function(key) {
      this.index = key;
    },
    autoplay: function() {

      if (!this.id) {
        this.id = setInterval(() => {
          this.next();
        }, 1300)
      } else {
        clearInterval(this.id)
        this.id = ''
      }
    }
  }

})
