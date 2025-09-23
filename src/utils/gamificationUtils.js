// utils/gamificationUtils.js

// Confetti effect using canvas-confetti
export const createConfetti = (element) => {
  // Check if effects are disabled
  if (document.body.classList.contains('disable-effects')) return;

  // Dynamic import for canvas-confetti (you'll need to install: npm install canvas-confetti)
  import('canvas-confetti').then((confetti) => {
    const rect = element.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    // Logo color palette confetti
    const colors = ['#FFC300', '#E67E22', '#28B463', '#3498DB', '#4169E1'];
    
    // Create multiple bursts for more impact
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
        });
      }, i * 100);
    }
  }).catch(() => {
    // Fallback CSS confetti if library fails to load
    createCSSConfetti(element);
  });
};

// CSS-based confetti fallback
export const createCSSConfetti = (element) => {
  if (document.body.classList.contains('disable-effects')) return;

  const colors = ['#FFC300', '#E67E22', '#28B463', '#3498DB', '#4169E1'];
  const rect = element.getBoundingClientRect();
  
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: fixed;
      left: ${rect.left + rect.width / 2}px;
      top: ${rect.top + rect.height / 2}px;
      width: 6px;
      height: 6px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      pointer-events: none;
      z-index: 1000;
      border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
      animation: confetti-fall ${0.8 + Math.random() * 0.4}s ease-out forwards;
      transform: translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 100}px) rotate(${Math.random() * 360}deg);
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => particle.remove(), 1200);
  }
};

// Shake animation for wrong answers
export const createShakeEffect = (element) => {
  if (document.body.classList.contains('disable-effects')) return;

  element.style.animation = 'shake 0.5s ease-in-out';
  setTimeout(() => {
    element.style.animation = '';
  }, 500);
};

// Enhanced Sound Manager with HTML5 Audio fallback
class SoundManager {
  constructor() {
    this.enabled = true;
    this.volume = 0.3;
    this.sounds = {};
    this.audioCache = {}; // Cache for HTML5 audio
    this.initSounds();
  }

  initSounds() {
    // Preload audio files
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
      incorrect: '/sounds/incorrect.mp3'
    };

    Object.entries(soundFiles).forEach(([key, path]) => {
      try {
        const audio = new Audio(path);
        audio.preload = 'auto';
        audio.volume = this.volume;
        
        // Handle loading errors gracefully
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

  // Generate correct answer sound (pleasant chime)
  playCorrectSound() {
    if (!this.enabled) return;

    if (this.useHTML5Audio) {
      this.playToneHTML5(523.25, 0.2); // C5 note
      setTimeout(() => this.playToneHTML5(659.25, 0.2), 100); // E5 note
    } else {
      this.playTone(523.25, 0.2); // C5 note
      setTimeout(() => this.playTone(659.25, 0.2), 100); // E5 note
    }
  }

  // Generate wrong answer sound (gentle buzz)
  playIncorrectSound() {
    if (!this.enabled) return;

    if (this.useHTML5Audio) {
      this.playToneHTML5(220, 0.3, 'sawtooth'); // Lower, gentler buzz
    } else {
      this.playTone(220, 0.3, 'sawtooth');
    }
  }

  // Web Audio API tone generation
  playTone(frequency, duration, type = 'sine') {
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

  // HTML5 Audio fallback with pre-recorded sounds
  playToneHTML5(frequency, duration, type = 'sine') {
    try {
      const soundKey = frequency > 400 ? 'correct' : 'incorrect';
      const audio = this.audioCache[soundKey];
      
      if (!audio) {
        console.warn(`Audio file not found for ${soundKey}`);
        return;
      }

      // Create a new instance to avoid conflicts with concurrent plays
      const audioClone = audio.cloneNode();
      audioClone.volume = this.volume;
      audioClone.currentTime = 0;
      
      const playPromise = audioClone.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn('Audio playback failed:', error);
          // Fallback to generated tone if file playback fails
          this.playGeneratedTone(frequency, duration, type);
        });
      }

      // Optional: Stop after duration if the file is longer
      setTimeout(() => {
        if (!audioClone.paused) {
          audioClone.pause();
        }
      }, duration * 1000);

    } catch (error) {
      console.warn('HTML5 audio playback failed:', error);
      // Fallback to generated tone
      this.playGeneratedTone(frequency, duration, type);
    }
  }

  // Fallback tone generation for when audio files fail
  playGeneratedTone(frequency, duration, type = 'sine') {
    try {
      // Create a simple beep using oscillating data
      const sampleRate = 8000; // Lower sample rate for smaller files
      const beepLength = Math.floor(sampleRate * duration);
      const buffer = new ArrayBuffer(beepLength * 2);
      const view = new Int16Array(buffer);
      
      for (let i = 0; i < beepLength; i++) {
        let sample;
        switch (type) {
          case 'sawtooth':
            sample = ((i * frequency / sampleRate) % 1 - 0.5) * this.volume * 16383;
            break;
          case 'square':
            sample = (Math.sin(2 * Math.PI * frequency * i / sampleRate) > 0 ? 1 : -1) * this.volume * 16383;
            break;
          default: // sine
            sample = Math.sin(2 * Math.PI * frequency * i / sampleRate) * this.volume * 16383;
        }
        view[i] = Math.max(-32768, Math.min(32767, sample));
      }
      
      // Convert to blob and create audio URL
      const wavHeader = this.createWavHeader(beepLength, sampleRate);
      const wavBuffer = new ArrayBuffer(wavHeader.length + buffer.byteLength);
      const wavView = new Uint8Array(wavBuffer);
      
      wavView.set(wavHeader);
      wavView.set(new Uint8Array(buffer), wavHeader.length);
      
      const blob = new Blob([wavBuffer], { type: 'audio/wav' });
      const audioUrl = URL.createObjectURL(blob);
      
      const audio = new Audio(audioUrl);
      audio.volume = this.volume;
      audio.play().catch(e => console.warn('Generated audio play failed:', e));
      
      // Cleanup
      setTimeout(() => {
        URL.revokeObjectURL(audioUrl);
      }, duration * 1000 + 100);
    } catch (error) {
      console.warn('Generated tone creation failed:', error);
    }
  }

  // Create WAV file header for generated tones
  createWavHeader(dataLength, sampleRate) {
    const header = new ArrayBuffer(44);
    const view = new DataView(header);
    
    // WAV file header
    const writeString = (offset, string) => {
      for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    };
    
    writeString(0, 'RIFF');
    view.setUint32(4, 36 + dataLength * 2, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(36, 'data');
    view.setUint32(40, dataLength * 2, true);
    
    return new Uint8Array(header);
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume));
    
    // Update cached audio volumes
    Object.values(this.audioCache).forEach(audio => {
      if (audio) {
        audio.volume = this.volume;
      }
    });
  }

  // Method to reload audio files if needed
  reloadAudio() {
    this.audioCache = {};
    this.preloadAudio();
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

    .success-pulse {
      animation: pulse-success 0.6s ease-out;
    }

    .error-flash {
      animation: flash-error 0.4s ease-in-out;
    }

    /* Disable effects class */
    .disable-effects .success-pulse,
    .disable-effects .error-flash {
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