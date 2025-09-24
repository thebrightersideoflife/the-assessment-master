// utils/gamificationUtils.js
// Confetti effect using canvas-confetti
export const createConfetti = (element) => {
  if (document.body.classList.contains('disable-effects') || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  
  import('canvas-confetti').then((confetti) => {
    const rect = element.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    const colors = ['#FFC300', '#E67E22', '#28B463', '#3498DB', '#4169E1'];
    
    const count = 3;
    const spread = 60;
    
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        confetti.default({
          particleCount: 40,
          spread: spread,
          origin: { x, y },
          colors: colors,
          shapes: ['circle', 'square'],
          gravity: 0.6,
          drift: 0.1,
          scalar: 0.8,
          ticks: 200,
          disableForReducedMotion: true
        });
      }, i * 100);
    }
  }).catch(() => {
    createCSSConfetti(element);
  });
};

// Enhanced confetti for achievement celebrations
export const createAchievementConfetti = (element, intensity = 'medium') => {
  if (document.body.classList.contains('disable-effects') || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  
  import('canvas-confetti').then((confetti) => {
    const rect = element.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    const colors = ['#FFC300', '#E67E22', '#28B463', '#3498DB', '#4169E1'];
    
    const configs = {
      low: { bursts: 3, particles: 50, spread: 70, scalar: 0.8, ticks: 200 },
      medium: { bursts: 4, particles: 70, spread: 80, scalar: 1.0, ticks: 250 },
      high: { bursts: 5, particles: 100, spread: 90, scalar: 1.2, ticks: 300 }
    };
    
    const config = configs[intensity] || configs.medium;
    
    for (let i = 0; i < config.bursts; i++) {
      setTimeout(() => {
        confetti.default({
          particleCount: config.particles,
          spread: config.spread,
          origin: { x, y },
          colors: colors,
          shapes: ['circle', 'square', 'star'],
          gravity: 0.7,
          drift: 0.2,
          scalar: config.scalar,
          ticks: config.ticks,
          disableForReducedMotion: true
        });
      }, i * 150);
    }
  }).catch(() => {
    createCSSConfetti(element, {
      particles: intensity === 'high' ? 60 : intensity === 'medium' ? 50 : 40,
      waves: intensity === 'high' ? 4 : intensity === 'medium' ? 3 : 2
    });
  });
};

// Enhanced CSS-based confetti fallback
export const createCSSConfetti = (element, options = { particles: 30, waves: 2 }) => {
  if (document.body.classList.contains('disable-effects') || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  
  const colors = ['#FFC300', '#E67E22', '#28B463', '#3498DB', '#4169E1'];
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  for (let wave = 0; wave < options.waves; wave++) {
    setTimeout(() => {
      for (let i = 0; i < options.particles; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 8 + 4; // 4-12px
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = Math.random() > 0.7 ? '0' : '50%'; // Square or circle
        
        const angle = Math.random() * 360 * (Math.PI / 180);
        const velocity = Math.random() * 200 + 150; // 150-350px
        const deltaX = Math.cos(angle) * velocity;
        const deltaY = Math.sin(angle) * velocity - 100; // Upward bias
        
        particle.style.cssText = `
          position: fixed;
          left: ${centerX}px;
          top: ${centerY}px;
          width: ${size}px;
          height: ${size}px;
          background: ${color};
          pointer-events: none;
          z-index: 9999;
          border-radius: ${shape};
          opacity: 1;
          transition: opacity 1s ease-out, transform 1s ease-out;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
          particle.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${Math.random() * 720}deg) scale(0.3)`;
          particle.style.opacity = '0';
        }, 10);
        
        setTimeout(() => particle.remove(), 1200);
      }
    }, wave * 250);
  }
};

// Shake animation for wrong answers
export const createShakeEffect = (element) => {
  if (document.body.classList.contains('disable-effects') || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  element.style.animation = 'shake 0.5s ease-in-out';
  setTimeout(() => {
    element.style.animation = '';
  }, 500);
};

// Enhanced Sound Manager with Achievement Audio
class SoundManager {
  constructor() {
    this.enabled = true;
    this.volume = 0.3;
    this.sounds = {};
    this.audioCache = {};
    this.initSounds();
  }

  initSounds() {
    this.preloadAudio();
    
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.warn('Web Audio API not supported, using HTML5 audio');
      this.useHTML5Audio = true;
    }
  }

  preloadAudio() {
    const soundFiles = {
      correct: '/sounds/correct.mp3',
      incorrect: '/sounds/incorrect.mp3',
      goodJob: '/sounds/good-job.mp3',
      excellent: '/sounds/excellent.mp3',
      perfect: '/sounds/perfect.mp3'
    };

    Object.entries(soundFiles).forEach(([key, path]) => {
      try {
        const audio = new Audio(path);
        audio.preload = 'auto';
        audio.volume = this.volume;
        
        audio.addEventListener('error', (e) => {
          console.warn(`Failed to load audio file: ${path}`, e);
        });
        
        audio.addEventListener('canplaythrough', () => {
          console.log(`Audio file loaded: ${path}`);
        });
        
        this.audioCache[key] = audio;
      } catch (error) {
        console.warn(`Error creating audio object for ${path}:`, error);
      }
    });
  }

  // Play achievement sound based on score percentage
  playAchievementSound(accuracy) {
    if (!this.enabled) return;

    let soundKey;
    let fallbackTones;

    if (accuracy >= 100) {
      soundKey = 'perfect';
      fallbackTones = [
        { freq: 523.25, duration: 0.15, delay: 0 },     // C5
        { freq: 659.25, duration: 0.15, delay: 0.1 },   // E5
        { freq: 783.99, duration: 0.15, delay: 0.2 },   // G5
        { freq: 1046.50, duration: 0.4, delay: 0.3 }    // C6 (longer)
      ];
    } else if (accuracy >= 90) {
      soundKey = 'excellent';
      fallbackTones = [
        { freq: 523.25, duration: 0.2, delay: 0 },      // C5
        { freq: 659.25, duration: 0.2, delay: 0.15 },   // E5
        { freq: 783.99, duration: 0.3, delay: 0.3 }     // G5
      ];
    } else if (accuracy >= 80) {
      soundKey = 'goodJob';
      fallbackTones = [
        { freq: 523.25, duration: 0.2, delay: 0 },      // C5
        { freq: 659.25, duration: 0.3, delay: 0.1 }     // E5
      ];
    } else {
      soundKey = 'correct';
      fallbackTones = [
        { freq: 523.25, duration: 0.2, delay: 0 },      // C5
        { freq: 659.25, duration: 0.2, delay: 0.1 }     // E5
      ];
    }

    const audio = this.audioCache[soundKey];
    if (audio && audio.readyState >= 2) {
      try {
        const audioClone = audio.cloneNode();
        audioClone.volume = this.volume;
        audioClone.currentTime = 0;
        
        const playPromise = audioClone.play();
        if (playPromise) {
          playPromise.catch(() => {
            this.playToneSequence(fallbackTones);
          });
        }
        return;
      } catch (e) {
        console.warn(`${soundKey} MP3 playback failed, using generated tones:`, e);
      }
    }

    this.playToneSequence(fallbackTones);
  }

  // Play a sequence of tones
  playToneSequence(tones) {
    if (!this.audioContext) return;
    
    tones.forEach(({ freq, duration, delay }) => {
      setTimeout(() => {
        this.playTone(freq, duration);
      }, delay * 1000);
    });
  }

  // Generate correct answer sound
  playCorrectSound() {
    if (!this.enabled) return;
    
    const audio = this.audioCache.correct;
    if (audio && audio.readyState >= 2) {
      try {
        const audioClone = audio.cloneNode();
        audioClone.volume = this.volume;
        audioClone.currentTime = 0;
        audioClone.play().catch(() => {
          this.playTone(523.25, 0.2);
          setTimeout(() => this.playTone(659.25, 0.2), 100);
        });
        return;
      } catch (e) {
        console.warn('Correct MP3 playback failed, using generated tones:', e);
      }
    }
    
    this.playTone(523.25, 0.2);
    setTimeout(() => this.playTone(659.25, 0.2), 100);
  }

  // Generate wrong answer sound
  playIncorrectSound() {
    if (!this.enabled) return;
    
    const audio = this.audioCache.incorrect;
    if (audio && audio.readyState >= 2) {
      try {
        const audioClone = audio.cloneNode();
        audioClone.volume = this.volume;
        audioClone.currentTime = 0;
        audioClone.play().catch(() => {
          this.playTone(220, 0.3, 'sawtooth');
        });
        return;
      } catch (e) {
        console.warn('Incorrect MP3 playback failed, using generated tone:', e);
      }
    }
    
    this.playTone(220, 0.3, 'sawtooth');
  }

  // Web Audio API tone generation
  playTone(frequency, duration, type = 'sine') {
    if (!this.audioContext) return;
    
    try {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = type;
      
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(this.volume, this.audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);
      
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + duration);
    } catch (e) {
      console.warn('Error playing tone:', e);
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume));
    
    Object.values(this.audioCache).forEach(audio => {
      if (audio) {
        audio.volume = this.volume;
      }
    });
  }

  reloadAudio() {
    this.audioCache = {};
    this.preloadAudio();
  }

  testAchievementSound(accuracy) {
    this.playAchievementSound(accuracy);
  }
}

// Create singleton sound manager
export const soundManager = new SoundManager();

// CSS animations
export const injectAnimations = () => {
  if (document.getElementById('gamification-styles')) return;
  
  const style = document.createElement('style');
  style.id = 'gamification-styles';
  style.textContent = `
    @keyframes confetti-fall {
      0% {
        opacity: 1;
        transform: translateY(0) scale(1) rotate(0deg);
      }
      100% {
        opacity: 0;
        transform: translateY(300px) scale(0.5) rotate(720deg);
      }
    }
    
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
      20%, 40%, 60%, 80% { transform: translateX(3px); }
    }
    
    @keyframes pulse-success {
      0% { box-shadow: 0 0 0 0 rgba(40, 180, 99, 0.4); }
      70% { box-shadow: 0 0 0 10px rgba(40, 180, 99, 0); }
      100% { box-shadow: 0 0 0 0 rgba(40, 180, 99, 0); }
    }
    
    @keyframes flash-error {
      0% { border-color: inherit; }
      50% { border-color: #C0392B; }
      100% { border-color: inherit; }
    }
    
    @keyframes achievement-glow {
      0% { 
        box-shadow: 0 0 5px rgba(255, 195, 0, 0.3);
        transform: scale(1);
      }
      50% { 
        box-shadow: 0 0 20px rgba(255, 195, 0, 0.6), 0 0 30px rgba(255, 195, 0, 0.4);
        transform: scale(1.02);
      }
      100% { 
        box-shadow: 0 0 5px rgba(255, 195, 0, 0.3);
        transform: scale(1);
      }
    }
    
    .success-pulse {
      animation: pulse-success 0.6s ease-out;
    }
    
    .error-flash {
      animation: flash-error 0.4s ease-in-out;
    }
    
    .achievement-glow {
      animation: achievement-glow 1.5s ease-in-out;
    }
    
    .disable-effects .success-pulse,
    .disable-effects .error-flash,
    .disable-effects .achievement-glow {
      animation: none !important;
    }
  `;
  
  document.head.appendChild(style);
};

// Initialize animations on load
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectAnimations);
  } else {
    injectAnimations();
  }
}