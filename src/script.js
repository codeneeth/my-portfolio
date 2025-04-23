function updateParticlesTheme(theme) {
  const particlesConfig = {
      particles: {
          number: { value: 100 }, // Number of particles
          color: { value: ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"] }, 
          shape: {
              type: "circle",
          },
          size: {
              value: 12, 
              random: true,
              anim: {
                  enable: true,
                  speed: 2, 
              },
          },
          line_linked: {
              enable: true,
              distance: 150, // Adjust line distance
              color: theme === 'light' ? '#000000' : '#ffffff', 
              opacity: 0.4, 
              width: 1, 
          },
          move: {
              enable: true,
              speed: 3, 
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out", 
              bounce: false,
              attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
              },
          },
      },
      interactivity: {
          detect_on: "canvas",
          events: {
              onhover: {
                  enable: true,
                  mode: "repulse", 
              },
              onclick: {
                  enable: true,
                  mode: "push", 
              },
              resize: true, 
          },
          modes: {
              grab: {
                  distance: 140, 
                  line_linked: {
                      opacity: 1, 
                  },
              },
              repulse: {
                  distance: 120, 
                  duration: 0.4, 
              },
              push: {
                  particles_nb: 4, 
              },
              remove: {
                  particles_nb: 2, 
              },
          },
      },
      retina_detect: true,
  };


  particlesJS('particles-js', particlesConfig);
}

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

  const phrases = [" Web Development.", " Coding.", "You. Lol.", " Design.", " Creativity.", "Open source."];
  let i = 0;
  let j = 0;
  let currentPhrase = [];
  let isDeleting = false;
  let isEnd = false;

  function loop() {
      isEnd = false;
      document.getElementById('animated-text').innerHTML = currentPhrase.join('');

      if (i < phrases.length) {
          if (!isDeleting && j <= phrases[i].length) {
              currentPhrase.push(phrases[i][j]);
              j++;
              document.getElementById('animated-text').innerHTML = currentPhrase.join('');
          }

          if (isDeleting && j <= phrases[i].length) {
              currentPhrase.pop(phrases[i][j]);
              j--;
              document.getElementById('animated-text').innerHTML = currentPhrase.join('');
          }

          if (j == phrases[i].length) {
              isEnd = true;
              isDeleting = true;
          }

          if (isDeleting && j === 0) {
              currentPhrase = [];
              isDeleting = false;
              i++;
              if (i === phrases.length) {
                  i = 0;
              }
          }
      }
      const speed = isEnd ? 2000 : isDeleting ? 50 : 100;
      setTimeout(loop, speed);
  }

  loop();


  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;
  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      body.classList.add(savedTheme);
      themeIcon.className = savedTheme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
      updateParticlesTheme(savedTheme);
  }
  
  themeToggle.addEventListener('click', () => {
      if (body.classList.contains('light')) {
          body.classList.remove('light');
          body.classList.add('dark');
          themeIcon.className = 'fa-solid fa-sun';
          localStorage.setItem('theme', 'dark');
          updateParticlesTheme('dark');
      } else {
          body.classList.remove('light');
          body.classList.add('light');
          themeIcon.className = 'fa-solid fa-moon';
          localStorage.setItem('theme', 'light');
          updateParticlesTheme('light');
      }
  });
  
