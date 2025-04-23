/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area":1000
        }
      },
      "color": {
        "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
      },
      
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#fff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.6,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 20,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 15,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#ffffff",
        "opacity": 0.8,
        "width": 1
      },
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });


  document.addEventListener('DOMContentLoaded', () => {
    const message = document.querySelector('.message');
  
    // Add click interaction to words
    const words = document.querySelectorAll('.word1, .word2, .word3, .word4');
    words.forEach(word => {
      word.addEventListener('click', () => {
        word.style.transform = 'scale(1.1)';
        setTimeout(() => {
          word.style.transform = 'scale(1)';
        }, 200);
      });
    });
  
    // Easter egg: Double click to add sparkle effect
    message.addEventListener('dblclick', () => {
      createSparkle(message);
    });
  
    function createSparkle(element) {
      const sparkle = document.createElement('span');
      sparkle.textContent = '✨';
      sparkle.style.position = 'absolute';
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.top = Math.random() * 100 + '%';
      sparkle.style.animation = 'sparkle 1s forwards';
      element.appendChild(sparkle);
  
      setTimeout(() => {
        sparkle.remove();
      }, 1000);
    }
  });

  
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
  });