import React, { useState, useEffect } from 'react';
import { AiOutlineSound, AiOutlineEye, AiOutlineClose } from 'react-icons/ai';
import { soundManager } from '../../utils/gamificationUtils';

const GamificationSettings = ({ isOpen, onClose }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [effectsEnabled, setEffectsEnabled] = useState(true);
  const [volume, setVolume] = useState(0.3);

  useEffect(() => {
    // Load settings from localStorage
    const savedSound = localStorage.getItem('gamification-sound');
    const savedEffects = localStorage.getItem('gamification-effects');
    const savedVolume = localStorage.getItem('gamification-volume');

    if (savedSound !== null) setSoundEnabled(JSON.parse(savedSound));
    if (savedEffects !== null) setEffectsEnabled(JSON.parse(savedEffects));
    if (savedVolume !== null) {
      const vol = parseFloat(savedVolume);
      setVolume(vol);
      soundManager.setVolume(vol);
    }

    // Set initial sound state
    if (savedSound === 'false') {
      soundManager.enabled = false;
    }
  }, []);

  const handleSoundToggle = () => {
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    soundManager.enabled = newState;
    localStorage.setItem('gamification-sound', JSON.stringify(newState));
  };

  const handleEffectsToggle = () => {
    const newState = !effectsEnabled;
    setEffectsEnabled(newState);
    localStorage.setItem('gamification-effects', JSON.stringify(newState));
    
    // You can add logic here to disable/enable visual effects
    document.body.classList.toggle('disable-effects', !newState);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    soundManager.setVolume(newVolume);
    localStorage.setItem('gamification-volume', newVolume.toString());
  };

  const testSound = () => {
    soundManager.playCorrectSound();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-[#FFC300]/20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#4169E1]">Gamification Settings</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <AiOutlineClose className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Sound Settings */}
          <div className="border-b border-gray-200 pb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <AiOutlineSound className="w-5 h-5 text-[#3498DB]" />
                <span className="font-medium text-gray-800">Sound Effects</span>
              </div>
              <button
                onClick={handleSoundToggle}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  soundEnabled ? 'bg-[#28B463]' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    soundEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            
            {soundEnabled && (
              <div className="ml-8 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Volume</span>
                  <button
                    onClick={testSound}
                    className="text-xs text-[#4169E1] hover:text-[#3498DB] transition-colors"
                  >
                    Test
                  </button>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #FFC300 0%, #FFC300 ${volume * 100}%, #e5e7eb ${volume * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Quiet</span>
                  <span>Loud</span>
                </div>
              </div>
            )}
          </div>

          {/* Visual Effects Settings */}
          <div className="pb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <AiOutlineEye className="w-5 h-5 text-[#3498DB]" />
                <span className="font-medium text-gray-800">Visual Effects</span>
              </div>
              <button
                onClick={handleEffectsToggle}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  effectsEnabled ? 'bg-[#28B463]' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    effectsEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <p className="ml-8 text-sm text-gray-600">
              Confetti, shake effects, and visual feedback
            </p>
          </div>

          {/* Accessibility Note */}
          <div className="bg-[#3498DB]/10 p-4 rounded-lg border border-[#3498DB]/20">
            <p className="text-sm text-gray-700">
              <strong className="text-[#4169E1]">Accessibility:</strong> Effects can be disabled for users with motion sensitivity or focus preferences. Settings are saved automatically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamificationSettings;