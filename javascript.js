document.addEventListener('DOMContentLoaded', function() {
    // Función para inicializar un carrusel dado un ID
    function initializeSlider(sliderId) {
        const slider = document.getElementById(sliderId);
        const slides = slider.querySelectorAll('.slider img');
        const navLinks = slider.querySelectorAll('.slider-nav a');

        // Agregamos eventos de clic para los enlaces de navegación
        navLinks.forEach((link, index) => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                goToSlide(index);
            });
        });

        // Evento de desplazamiento para sincronizar el enlace de navegación con la imagen activa
        slider.querySelector('.slider').addEventListener('scroll', function() {
            const activeIndex = Math.round(slider.querySelector('.slider').scrollLeft / slides[0].offsetWidth);
            setActiveLink(activeIndex);
        });

        // Función para ir a una diapositiva específica
        function goToSlide(index) {
            // Establecemos el ancho del contenedor deslizante multiplicado por el índice para mostrar la diapositiva deseada
            slider.querySelector('.slider').scrollLeft = slides[index].offsetLeft;
        }

        // Función para establecer el enlace de navegación activo
        function setActiveLink(index) {
            // Quitamos la clase 'active' de todos los enlaces de navegación
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Añadimos la clase 'active' al enlace de navegación correspondiente
            navLinks[index].classList.add('active');
        }

        // Llamamos a setActiveLink para establecer el enlace activo al cargar la página
        setActiveLink(0); // Establecer el primer enlace activo al inicio
    }

    // Inicializamos cada carrusel
    initializeSlider('slider1');
    initializeSlider('slider2');
    initializeSlider('slider3');
    initializeSlider('slider4');
    initializeSlider('slider5');
    initializeSlider('slider6');
    initializeSlider('slider7');
    initializeSlider('slider8');
});



document.querySelectorAll('.slider-wrapper').forEach(wrapper => {
    wrapper.addEventListener('scroll', () => {
      const scrollAmount = wrapper.scrollLeft;
      const imageWidth = wrapper.querySelector('.slider img').offsetWidth;
      const currentIndex = Math.floor(scrollAmount / imageWidth);
      wrapper.scrollTo({
        left: currentIndex * imageWidth,
        behavior: 'smooth'
      });
    });
});
  


function clickDay(){
    let Element = document.getElementById('night')
    Element.classList.toggle("active_night")
}

function clickNight(){
    let Element = document.getElementById('day')
    Element.classList.toggle("active_day")
}

function colorFont(){
    let Element = document.getElementById('font')
    Element.classList.toggle("active_font")
}





//informacion

function toggleClass() {
    var element = document.getElementById("sliderContent1");
    // Alternar la clase "content1"
    element.classList.toggle("content1");
}

function opcion2() {
    var element = document.getElementById("sliderContent2");
    // Alternar la clase "content1"
    element.classList.toggle("content2");
}

function opcion3() {
    var element = document.getElementById("sliderContent3");
    // Alternar la clase "content1"
    element.classList.toggle("content3");
}

function opcion4() {
    var element = document.getElementById("sliderContent4");
    // Alternar la clase "content1"
    element.classList.toggle("content4");
}

function opcion5() {
    var element = document.getElementById("sliderContent5");
    // Alternar la clase "content1"
    element.classList.toggle("content5");
}

function opcion6() {
    var element = document.getElementById("sliderContent6");
    // Alternar la clase "content1"
    element.classList.toggle("content6");
}

function opcion7() {
    var element = document.getElementById("sliderContent7");
    // Alternar la clase "content1"
    element.classList.toggle("content7");
}

function opcion8() {
    var element = document.getElementById("sliderContent8");
    // Alternar la clase "content1"
    element.classList.toggle("content8");
}

