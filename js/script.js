document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let current = 0;
    
    function changeSlide() {
        slides.forEach(slide => slide.classList.remove('active'));
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }
    
    setInterval(changeSlide, 5000);
});
document.querySelectorAll('.steam-container').forEach(container => {
    // Erstelle 3-5 zufällige Dampfwellen
    for(let i = 0; i < 3 + Math.floor(Math.random() * 2); i++) {
      const wave = document.createElement('div');
      wave.className = 'steam-wave';
      wave.style.setProperty('--i', i);
      wave.style.left = `${20 + Math.random() * 60}%`;
      wave.style.animationDelay = `${Math.random() * 0.5}s`;
      wave.style.animationDuration = `${3 + Math.random() * 2}s`;
      container.appendChild(wave);
    }
  });