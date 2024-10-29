document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('#carouselExample');
    const carouselInstance = new bootstrap.Carousel(carousel, {
      interval: 3000,
      wrap: true
    });
  
    console.log("JavaScript conectado com sucesso e carrossel inicializado!");
  });