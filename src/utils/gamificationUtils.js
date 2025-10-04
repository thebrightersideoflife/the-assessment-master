import confetti from 'canvas-confetti';

export const createConfetti = (element) => {
  if (
    document.body.classList.contains('disable-effects') ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) return;
  if (!element) return;

  try {
    const rect = element.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    const colors = ['#FFC300', '#E67E22', '#28B463', '#3498DB', '#4169E1'];
    const bursts = [
      { particleCount: 50, spread: 70, startVelocity: 30 },
      { particleCount: 30, spread: 60, startVelocity: 25 },
      { particleCount: 40, spread: 80, startVelocity: 35 },
    ];
    bursts.forEach((burst, index) => {
      setTimeout(() => {
        confetti({
          ...burst,
          origin: { x, y },
          colors,
          shapes: ['circle', 'square'],
          gravity: 0.6,
          drift: 0.1,
          scalar: 1.2,
          ticks: 200,
          disableForReducedMotion: true,
        });
      }, index * 150);
    });
  } catch {
    createCSSConfetti(element);
  }
};

export const createAchievementConfetti = (element, intensity = 'medium') => {
  if (
    document.body.classList.contains('disable-effects') ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) return;
  if (!element) return;

  const rect = element.getBoundingClientRect();
  const x = (rect.left + rect.width / 2) / window.innerWidth;
  const y = (rect.top + rect.height / 2) / window.innerHeight;
  const colors = ['#FFC300', '#E67E22', '#28B463', '#3498DB', '#4169E1'];
  const configs = {
    low: { bursts: 3, particles: 50, spread: 70, scalar: 0.8, ticks: 200 },
    medium: { bursts: 4, particles: 70, spread: 80, scalar: 1.0, ticks: 250 },
    high: { bursts: 5, particles: 100, spread: 90, scalar: 1.2, ticks: 300 },
  };
  const config = configs[intensity] || configs.medium;

  for (let i = 0; i < config.bursts; i++) {
    setTimeout(() => {
      confetti({
        particleCount: config.particles,
        spread: config.spread,
        origin: { x, y },
        colors,
        shapes: ['circle', 'square', 'star'],
        gravity: 0.7,
        drift: 0.2,
        scalar: config.scalar,
        ticks: config.ticks,
        disableForReducedMotion: true,
      });
    }, i * 150);
  }
};

export const createCSSConfetti = (element, options = { particles: 30, waves: 3 }) => {
  if (
    document.body.classList.contains('disable-effects') ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) return;
  if (!element) return;

  const colors = ['#FFC300', '#E67E22', '#28B463', '#3498DB', '#4169E1'];
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let wave = 0; wave < options.waves; wave++) {
    setTimeout(() => {
      for (let i = 0; i < options.particles; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 8 + 4;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = Math.random() > 0.7 ? '0' : '50%';
        const angle = Math.random() * 360 * (Math.PI / 180);
        const velocity = Math.random() * 200 + 150;
        const deltaX = Math.cos(angle) * velocity;
        const deltaY = Math.sin(angle) * velocity - 100;

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
          transition: all 1.2s ease-out;
        `;

        document.body.appendChild(particle);
        setTimeout(() => {
          particle.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${Math.random() * 720}deg) scale(0.3)`;
          particle.style.opacity = '0';
        }, 10);
        setTimeout(() => particle.remove(), 1200);
      }
    }, wave * 150);
  }
};

export const createShakeEffect = (element) => {
  if (
    document.body.classList.contains('disable-effects') ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) return;
  if (!element) return;

  element.style.animation = 'shake 0.5s ease-in-out';
  setTimeout(() => (element.style.animation = ''), 500);
};

export const vibrateDevice = (pattern = 200) => {
  if (
    document.body.classList.contains('disable-effects') ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    !navigator.vibrate
  ) return;
  try {
    navigator.vibrate(pattern);
  } catch {}
};

class SoundManager {
  constructor() {
    this.enabled = JSON.parse(localStorage.getItem('gamification-sound') || 'true');
    this.volume = parseFloat(localStorage.getItem('gamification-volume') || '0.3');
    this.audioCache = {};
    this.audioContext = null;
    this.useHTML5Audio = false;
    this.init();
  }

  init() {
    this.preloadAudio();

    // ✅ Preload all sounds on page load to avoid delays
    window.addEventListener('load', () => {
      Object.values(this.audioCache).forEach(audio => {
        if (audio && typeof audio.load === 'function') audio.load();
      });
    });

    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const resumeAudioContext = () => {
        if (this.audioContext?.state === 'suspended') {
          this.audioContext.resume().catch(() => (this.useHTML5Audio = true));
        }
        document.removeEventListener('click', resumeAudioContext);
        document.removeEventListener('touchstart', resumeAudioContext);
      };
      document.addEventListener('click', resumeAudioContext);
      document.addEventListener('touchstart', resumeAudioContext);
    } catch {
      this.useHTML5Audio = true;
    }
  }

  preloadAudio() {
    const soundFiles = {
      correct: '/sounds/correct.mp3',
      incorrect: '/sounds/incorrect.mp3',
      goodJob: '/sounds/good-job.mp3',
      excellent: '/sounds/excellent.mp3',
      perfect: '/sounds/perfect.mp3',
    };

    Object.entries(soundFiles).forEach(([key, path]) => {
      try {
        const audio = new Audio(path);
        audio.preload = 'auto';
        audio.volume = this.volume;

        // ✅ Handle missing files gracefully
        audio.onerror = () => {
          console.warn(`⚠️ Missing sound file: ${path}`);
          this.audioCache[key] = null;
        };

        this.audioCache[key] = audio;
      } catch {
        this.audioCache[key] = null;
      }
    });
  }

  playAchievementSound(accuracy) {
    if (!this.enabled) return;
    let soundKey, fallbackTones;

    if (accuracy >= 100) {
      soundKey = 'perfect';
      fallbackTones = [
        { freq: 523.25, duration: 0.15, delay: 0 },
        { freq: 698.46, duration: 0.15, delay: 0.1 },
        { freq: 880.0, duration: 0.15, delay: 0.2 },
        { freq: 1046.5, duration: 0.4, delay: 0.3 },
      ];
    } else if (accuracy >= 90) {
      soundKey = 'excellent';
      fallbackTones = [
        { freq: 523.25, duration: 0.2, delay: 0 },
        { freq: 659.25, duration: 0.2, delay: 0.15 },
        { freq: 783.99, duration: 0.3, delay: 0.3 },
      ];
    } else {
      soundKey = 'goodJob';
      fallbackTones = [
        { freq: 523.25, duration: 0.2, delay: 0 },
        { freq: 659.25, duration: 0.3, delay: 0.1 },
      ];
    }

    const audio = this.audioCache[soundKey];
    if (audio && audio.readyState >= 2) {
      try {
        const clone = audio.cloneNode();
        clone.volume = this.volume;
        clone.currentTime = 0;
        clone.play().catch(() => this.playToneSequence(fallbackTones));
        return;
      } catch {}
    }
    this.playToneSequence(fallbackTones);
  }

  playCorrectSound() {
    if (!this.enabled) return;
    vibrateDevice(100);
    const audio = this.audioCache.correct;
    if (audio && audio.readyState >= 2) {
      try {
        const clone = audio.cloneNode();
        clone.volume = this.volume;
        clone.currentTime = 0;
        clone.play().catch(() =>
          this.playToneSequence([
            { freq: 523.25, duration: 0.2, delay: 0 },
            { freq: 659.25, duration: 0.2, delay: 0.1 },
          ])
        );
        return;
      } catch {}
    }
    this.playToneSequence([
      { freq: 523.25, duration: 0.2, delay: 0 },
      { freq: 659.25, duration: 0.2, delay: 0.1 },
    ]);
  }

  playIncorrectSound() {
    if (!this.enabled) return;
    vibrateDevice([100, 50, 100]);
    const audio = this.audioCache.incorrect;
    if (audio && audio.readyState >= 2) {
      try {
        const clone = audio.cloneNode();
        clone.volume = this.volume;
        clone.currentTime = 0;
        clone.play().catch(() => this.playTone(220, 0.3, 'sawtooth'));
        return;
      } catch {}
    }
    this.playTone(220, 0.3, 'sawtooth');
  }

  playToneSequence(tones) {
    if (!this.audioContext || !this.enabled) return;
    tones.forEach(({ freq, duration, delay }) => {
      setTimeout(() => this.playTone(freq, duration), delay * 1000);
    });
  }

  playTone(frequency, duration, type = 'sine') {
    if (!this.audioContext || !this.enabled) return;
    try {
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      osc.connect(gain);
      gain.connect(this.audioContext.destination);
      osc.frequency.value = frequency;
      osc.type = type;
      gain.gain.setValueAtTime(0, this.audioContext.currentTime);
      gain.gain.linearRampToValueAtTime(this.volume, this.audioContext.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);
      osc.start(this.audioContext.currentTime);
      osc.stop(this.audioContext.currentTime + duration);
    } catch {}
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('gamification-sound', JSON.stringify(this.enabled));
    return this.enabled;
  }

  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume));
    localStorage.setItem('gamification-volume', this.volume.toString());
    Object.values(this.audioCache).forEach((audio) => {
      if (audio) audio.volume = this.volume;
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

export const soundManager = new SoundManager();

export const injectAnimations = () => {
  if (document.getElementById('gamification-styles')) return;
  const style = document.createElement('style');
  style.id = 'gamification-styles';
  style.textContent = `
    @keyframes confetti-fall {
      0% { opacity: 1; transform: translate(0, 0) scale(1) rotate(0deg); }
      100% { opacity: 0; transform: translateY(400px) scale(0.3) rotate(720deg); }
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
      20%, 40%, 60%, 80% { transform: translateX(4px); }
    }
    @keyframes pulse-success {
      0% { box-shadow: 0 0 0 0 rgba(40, 180, 99, 0.4); }
      70% { box-shadow: 0 0 0 15px rgba(40, 180, 99, 0); }
      100% { box-shadow: 0 0 0 0 rgba(40, 180, 99, 0); }
    }
    @keyframes flash-error {
      0% { border-color: inherit; }
      50% { border-color: #C0392B; box-shadow: 0 0 10px rgba(192, 57, 43, 0.3); }
      100% { border-color: inherit; }
    }
    @keyframes achievement-glow {
      0% { box-shadow: 0 0 5px rgba(255, 195, 0, 0.3); transform: scale(1); }
      50% { box-shadow: 0 0 20px rgba(255, 195, 0, 0.6); transform: scale(1.02); }
      100% { box-shadow: 0 0 5px rgba(255, 195, 0, 0.3); transform: scale(1); }
    }
    .success-pulse { animation: pulse-success 0.6s ease-out; }
    .error-flash { animation: flash-error 0.4s ease-in-out; }
    .achievement-glow { animation: achievement-glow 1.5s ease-in-out; }
    .disable-effects .success-pulse,
    .disable-effects .error-flash,
    .disable-effects .achievement-glow { animation: none !important; }
  `;
  document.head.appendChild(style);
};

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectAnimations);
  } else {
    injectAnimations();
  }
}
