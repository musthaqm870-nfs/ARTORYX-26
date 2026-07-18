import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CustomVideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
}

export function CustomVideoPlayer({ src, poster, title = 'MARKHINS Highlights' }: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [isCenterAnim, setIsCenterAnim] = useState<'play' | 'pause' | null>(null);

  // Time formatting helper
  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds) || timeInSeconds === Infinity) return '00:00';
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Play/Pause handler
  const togglePlay = () => {
    if (!videoRef.current) return;

    if (hasEnded) {
      videoRef.current.currentTime = 0;
      setHasEnded(false);
    }

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      setIsCenterAnim('pause');
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setIsCenterAnim('play');
      }).catch((err) => {
        console.error('Playback failed:', err);
      });
    }
  };

  // Trigger brief central animation when play state changes
  useEffect(() => {
    if (isCenterAnim) {
      const timer = setTimeout(() => setIsCenterAnim(null), 600);
      return () => clearTimeout(timer);
    }
  }, [isCenterAnim]);

  // Update progress
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    if (total > 0) {
      setProgress((current / total) * 100);
    }
    setCurrentTime(formatTime(current));
  };

  // Handle when video loaded metadata
  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(formatTime(videoRef.current.duration));
  };

  // Seek handler
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const value = parseFloat(e.target.value);
    const total = videoRef.current.duration;
    const newTime = (value / 100) * total;
    videoRef.current.currentTime = newTime;
    setProgress(value);
    setCurrentTime(formatTime(newTime));
    if (hasEnded) setHasEnded(false);
  };

  // Volume change handler
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const value = parseFloat(e.target.value);
    videoRef.current.volume = value;
    setVolume(value);
    setIsMuted(value === 0);
  };

  // Toggle mute handler
  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMutedState = !isMuted;
    videoRef.current.muted = newMutedState;
    setIsMuted(newMutedState);
    if (newMutedState) {
      videoRef.current.volume = 0;
    } else {
      videoRef.current.volume = volume > 0 ? volume : 0.5;
      if (volume === 0) setVolume(0.5);
    }
  };

  // Replay handler
  const handleReplay = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().then(() => {
      setIsPlaying(true);
      setHasEnded(false);
    });
  };

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    if (!playerRef.current) return;
    
    if (!document.fullscreenElement) {
      playerRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Handle video ending
  const handleEnded = () => {
    setIsPlaying(false);
    setHasEnded(true);
  };

  // Auto-hide controls timer
  useEffect(() => {
    if (!isPlaying) {
      setShowControls(true);
      return;
    }

    let hideTimer: NodeJS.Timeout;
    if (isHovered) {
      setShowControls(true);
      hideTimer = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    } else {
      setShowControls(false);
    }

    return () => clearTimeout(hideTimer);
  }, [isPlaying, isHovered, progress]);

  // Sync state if video pauses/plays externally (e.g. native full screen controls)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);

    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
    };
  }, []);

  return (
    <div 
      id="custom-video-player"
      ref={playerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={() => setIsHovered(true)}
      className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-brand-dark group select-none border border-brand-dark/10"
    >
      {/* Actual HTML5 Video element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onClick={togglePlay}
        playsInline
        preload="metadata"
        className="w-full h-full object-contain cursor-pointer"
      />

      {/* Video Overlay Thumbnail/State Cover */}
      <AnimatePresence>
        {!isPlaying && !hasEnded && poster && progress === 0 && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10 bg-cover bg-center flex items-center justify-center pointer-events-none"
            style={{ backgroundImage: `url(${poster})` }}
          >
            {/* Soft tint over poster for high contrast text */}
            <div className="absolute inset-0 bg-brand-dark/30 backdrop-blur-[1px]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Information (Title/Badge) */}
      <AnimatePresence>
        {showControls && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-brand-dark/80 to-transparent z-20 pointer-events-none flex justify-between items-center"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-widest text-brand-yellow uppercase">Official Video</span>
              <h4 className="text-lg font-serif font-bold text-brand-white tracking-wide drop-shadow-md">{title}</h4>
            </div>
            <div className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full bg-brand-green text-brand-white border border-brand-green/20">
              HD 1080p
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Replay Overlay */}
      <AnimatePresence>
        {hasEnded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-30 bg-brand-dark/70 backdrop-blur-sm flex flex-col items-center justify-center gap-4 text-brand-white"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReplay}
              className="p-5 bg-brand-yellow hover:bg-brand-green text-brand-dark hover:text-brand-white rounded-full shadow-lg transition-colors"
              title="Watch Again"
            >
              <RotateCcw size={32} />
            </motion.button>
            <p className="font-serif font-bold text-xl tracking-wide">Watch the full highlight again</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Middle Screen Play/Pause Animated Feedback */}
      <AnimatePresence>
        {isCenterAnim && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="absolute inset-0 m-auto w-20 h-20 bg-brand-yellow/80 backdrop-blur-sm text-brand-dark rounded-full flex items-center justify-center z-20 pointer-events-none"
          >
            {isCenterAnim === 'play' ? <Play size={36} className="ml-1" /> : <Pause size={36} />}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover Center Play Button (Large and prominent for engagement) */}
      <AnimatePresence>
        {!isPlaying && !hasEnded && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePlay}
            className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-brand-yellow hover:bg-brand-green text-brand-dark hover:text-brand-white flex items-center justify-center shadow-2xl z-20 transition-all border-4 border-brand-white/20 hover:border-brand-yellow/40 cursor-pointer"
          >
            <Play size={32} className="ml-1 fill-current" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Video Player Controls Panel */}
      <AnimatePresence>
        {showControls && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brand-dark/90 via-brand-dark/70 to-transparent z-20 flex flex-col gap-4"
          >
            {/* Progress / Seek Bar */}
            <div className="flex items-center gap-3 w-full group/seek">
              <span className="text-xs text-brand-white/80 font-mono select-none">{currentTime}</span>
              <div className="relative flex-1 flex items-center h-4">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={progress} 
                  onChange={handleSeek}
                  className="w-full accent-brand-yellow h-1 rounded-lg appearance-none cursor-pointer bg-brand-white/30 hover:bg-brand-white/40 focus:outline-none transition-all"
                  style={{
                    background: `linear-gradient(to right, #F5C04A 0%, #F5C04A ${progress}%, rgba(255,255,255,0.3) ${progress}%, rgba(255,255,255,0.3) 100%)`
                  }}
                />
              </div>
              <span className="text-xs text-brand-white/80 font-mono select-none">{duration}</span>
            </div>

            {/* Bottom Controls Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Play/Pause Button */}
                <button 
                  onClick={togglePlay}
                  className="p-2 text-brand-white hover:text-brand-yellow transition-colors hover:scale-105"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause size={22} className="fill-current" /> : <Play size={22} className="fill-current" />}
                </button>

                {/* Mute/Volume Controls */}
                <div className="flex items-center gap-2 group/volume">
                  <button 
                    onClick={toggleMute}
                    className="p-2 text-brand-white hover:text-brand-yellow transition-colors hover:scale-105"
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted || volume === 0 ? <VolumeX size={22} /> : <Volume2 size={22} />}
                  </button>
                  
                  {/* Sliding Volume bar */}
                  <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.05"
                    value={isMuted ? 0 : volume} 
                    onChange={handleVolumeChange}
                    className="w-0 group-hover/volume:w-20 accent-brand-yellow h-1 rounded-lg appearance-none cursor-pointer bg-brand-white/30 transition-all duration-300"
                    style={{
                      background: `linear-gradient(to right, #F5C04A 0%, #F5C04A ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.3) ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.3) 100%)`
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Fullscreen Trigger */}
                <button 
                  onClick={toggleFullscreen}
                  className="p-2 text-brand-white hover:text-brand-yellow transition-colors hover:scale-105"
                  title="Fullscreen"
                >
                  <Maximize size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
