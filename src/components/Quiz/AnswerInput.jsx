import React, { useRef, useEffect } from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

// Enhanced confetti effect with canvas-confetti as primary, better CSS fallback
const createConfetti = (element) => {
  if (document.body.classList.contains('disable-effects')) return;

  // Try canvas-confetti first
  import('canvas-confetti').then((confetti) => {
    const rect = element.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    const colors = ['#FFC300', '#E67E22', '#28B463', '#3498DB', '#4169E1'];
    
    // Multiple sequential bursts for better effect
    const bursts = [
      { particleCount: 50, spread: 70, startVelocity: 30 },
      { particleCount: 30, spread: 60, startVelocity: 25 },
      { particleCount: 40, spread: 80, startVelocity: 35 }
    ];

    bursts.forEach((burst, index) => {
      setTimeout(() => {
        confetti.default({
          ...burst,
          origin: { x, y },
          colors: colors,
          shapes: ['circle', 'square'],
          gravity: 0.6,
          drift: 0.1,
          scalar: 1.2,
          ticks: 200
        });
      }, index * 150);
    });
  }).catch(() => {
    // Enhanced CSS fallback
    createEnhancedCSSConfetti(element);
  });
};

// Enhanced CSS confetti fallback
const createEnhancedCSSConfetti = (element) => {
  if (document.body.classList.contains('disable-effects')) return;

  const colors = ['#FFC300', '#E67E22', '#28B463', '#3498DB', '#4169E1'];
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  // Create more particles in multiple waves
  for (let wave = 0; wave < 3; wave++) {
    setTimeout(() => {
      for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 6 + 4; // 4-10px
        const color = colors[Math.floor(Math.random() * colors.length)];
        const isSquare = Math.random() > 0.6;
        
        // Random trajectory
        const angle = (Math.random() * 360) * (Math.PI / 180);
        const velocity = Math.random() * 150 + 100; // 100-250px
        const deltaX = Math.cos(angle) * velocity;
        const deltaY = Math.sin(angle) * velocity - 50; // Bias upward
        
        particle.style.cssText = `
          position: fixed;
          left: ${centerX}px;
          top: ${centerY}px;
          width: ${size}px;
          height: ${size}px;
          background: ${color};
          pointer-events: none;
          z-index: 1000;
          border-radius: ${isSquare ? '0' : '50%'};
          animation: enhanced-confetti-fall ${1.2 + Math.random() * 0.8}s ease-out forwards;
          --delta-x: ${deltaX}px;
          --delta-y: ${deltaY}px;
          --rotation: ${Math.random() * 720}deg;
        `;
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 2000);
      }
    }, wave * 150);
  }
};

// Shake effect
const createShakeEffect = (element) => {
  if (document.body.classList.contains('disable-effects')) return;
  element.style.animation = 'shake 0.5s ease-in-out';
  setTimeout(() => {
    element.style.animation = '';
  }, 500);
};

// Enhanced Sound Manager with MP3 files as primary
const soundManager = {
  enabled: true,
  volume: 0.3,
  audioCache: {},
  audioContext: null,
  useHTML5Audio: false,

  init() {
    // Initialize audio cache with MP3 files
    this.preloadAudio();
    
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.warn('Web Audio API not supported, using HTML5 audio');
      this.useHTML5Audio = true;
    }
  },

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
        
        audio.addEventListener('error', () => {
          console.warn(`Failed to load audio file: ${path}, will use generated tones`);
        });
        
        this.audioCache[key] = audio;
      } catch (error) {
        console.warn(`Error creating audio object for ${path}:`, error);
      }
    });
  },

  playCorrectSound() {
    if (!this.enabled) return;

    // Try MP3 file first
    const audio = this.audioCache.correct;
    if (audio && audio.readyState >= 2) { // HAVE_CURRENT_DATA or better
      try {
        const audioClone = audio.cloneNode();
        audioClone.volume = this.volume;
        audioClone.currentTime = 0;
        audioClone.play().catch(() => {
          // Fallback to generated tone
          this.playGeneratedTone(523.25, 0.2);
          setTimeout(() => this.playGeneratedTone(659.25, 0.2), 100);
        });
        return;
      } catch (e) {
        console.warn('MP3 playback failed, using generated tone');
      }
    }

    // Fallback to generated tones
    this.playGeneratedTone(523.25, 0.2); // C5
    setTimeout(() => this.playGeneratedTone(659.25, 0.2), 100); // E5
  },

  playIncorrectSound() {
    if (!this.enabled) return;

    // Try MP3 file first
    const audio = this.audioCache.incorrect;
    if (audio && audio.readyState >= 2) {
      try {
        const audioClone = audio.cloneNode();
        audioClone.volume = this.volume;
        audioClone.currentTime = 0;
        audioClone.play().catch(() => {
          // Fallback to generated tone
          this.playGeneratedTone(220, 0.3, 'sawtooth');
        });
        return;
      } catch (e) {
        console.warn('MP3 playback failed, using generated tone');
      }
    }

    // Fallback to generated tone
    this.playGeneratedTone(220, 0.3, 'sawtooth');
  },

  playGeneratedTone(frequency, duration, type = 'sine') {
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
      console.warn('Generated tone failed:', e);
    }
  },

  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume));
    Object.values(this.audioCache).forEach(audio => {
      if (audio) audio.volume = this.volume;
    });
  }
};

// Initialize sound manager
soundManager.init();

// Inject enhanced animations
const injectAnimations = () => {
  if (document.getElementById('gamification-styles')) return;

  const style = document.createElement('style');
  style.id = 'gamification-styles';
  style.textContent = `
    @keyframes enhanced-confetti-fall {
      0% {
        opacity: 1;
        transform: translate(0, 0) scale(1) rotate(0deg);
      }
      100% {
        opacity: 0;
        transform: translate(var(--delta-x), calc(var(--delta-y) + 400px)) scale(0.3) rotate(var(--rotation));
      }
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

    .success-pulse {
      animation: pulse-success 0.6s ease-out;
    }

    .error-flash {
      animation: flash-error 0.4s ease-in-out;
    }

    .disable-effects .success-pulse,
    .disable-effects .error-flash {
      animation: none !important;
    }
  `;
  document.head.appendChild(style);
};

// Auto-inject animations
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectAnimations);
  } else {
    injectAnimations();
  }
}

const AnswerInput = ({ value, onChange, onSubmit, disabled, isCorrect, correctAnswer }) => {
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  // Trigger effects when answer is submitted
  useEffect(() => {
    if (disabled && isCorrect !== null) {
      if (isCorrect) {
        // Correct answer effects - synchronized timing
        if (inputRef.current) {
          // Start sound first, then confetti after brief delay
          soundManager.playCorrectSound();
          
          setTimeout(() => {
            createConfetti(inputRef.current);
            inputRef.current.classList.add('success-pulse');
            setTimeout(() => {
              inputRef.current?.classList.remove('success-pulse');
            }, 600);
          }, 30); // 50ms delay for better sync
        }
      } else {
        // Wrong answer effects - synchronized timing
        if (containerRef.current) {
          // Start sound and shake simultaneously
          soundManager.playIncorrectSound();
          
          setTimeout(() => {
            createShakeEffect(containerRef.current);
            if (inputRef.current) {
              inputRef.current.classList.add('error-flash');
              setTimeout(() => {
                inputRef.current?.classList.remove('error-flash');
              }, 400);
            }
          }, 30); // Slight delay for audio context setup
        }
      }
    }
  }, [disabled, isCorrect]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !disabled) {
      onSubmit();
    }
  };

  const getInputClasses = () => {
    let classes = "flex-1 min-w-48 p-4 border-2 rounded-xl text-lg transition-all bg-white ";
    
    if (disabled) {
      if (isCorrect === true) {
        classes += "border-[#28B463] bg-[#28B463]/10";
      } else if (isCorrect === false) {
        classes += "border-[#C0392B] bg-[#C0392B]/10";
      }
    } else {
      classes += "border-gray-300 focus:border-[#4169E1] focus:shadow-lg focus:shadow-[#4169E1]/20";
    }
    
    return classes;
  };

  const getFeedbackMessage = () => {
    if (!disabled) return null;
    
    if (isCorrect) {
      return (
        <div className="text-[#28B463] font-semibold mt-4 flex items-center gap-2">
          <AiOutlineCheck className="w-5 h-5" />
          Correct! Well done.
        </div>
      );
    } else {
      return (
        <div className="text-[#C0392B] font-semibold mt-4 flex items-center gap-2">
          <AiOutlineClose className="w-5 h-5" />
          Incorrect. The answer was: {correctAnswer}
        </div>
      );
    }
  };

  return (
    <div className="space-y-4" ref={containerRef}>
      <div className="flex gap-4 flex-wrap">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={disabled}
          placeholder="Enter your answer..."
          className={getInputClasses()}
          aria-label="Answer input"
        />
        
        {!disabled && (
          <button
            onClick={onSubmit}
            className="bg-gradient-to-r from-[#4169E1] to-[#3498DB] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all min-w-36 hover:from-[#3498DB] hover:to-[#4169E1]"
          >
            Check Answer
          </button>
        )}
      </div>
      
      {getFeedbackMessage()}
    </div>
  );
};

export default AnswerInput;