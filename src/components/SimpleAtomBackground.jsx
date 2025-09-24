import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SimpleAtomBackground = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());
  const mouseRef = useRef({ x: 0, y: 0 });
  const atomsRef = useRef([]);

  // Device detection
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  const settings = {
    atomCount: isMobile ? 15 : 25,
    atomSpeed: 0.3,
    atomSize: 0.08,
    mouseInfluence: 0.2,
    colorScheme: {
      primary: new THREE.Color(0xff0000),
      secondary: new THREE.Color(0xff4444),
      background: new THREE.Color(0xffffff)
    }
  };

  const init = () => {
    const container = mountRef.current;
    if (!container) return;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      scene.background = settings.colorScheme.background;
      sceneRef.current = scene;
      
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;
      scene.add(camera);

      const renderer = new THREE.WebGLRenderer({
        antialias: !isMobile,
        alpha: true
      });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0xffffff, 1);
      renderer.outputColorSpace = THREE.SRGBColorSpace;

      const canvas = renderer.domElement;
      canvas.style.cssText = `
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        z-index: 0 !important;
        display: block !important;
      `;

      container.appendChild(canvas);
      rendererRef.current = renderer;

      // Create atoms
      createAtoms(scene);

      // Add lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      // Initialize mouse position
      onPointerMove({
        clientX: window.innerWidth / 2,
        clientY: window.innerHeight / 2
      });

    } catch (error) {
      console.error('Error initializing 3D scene:', error);
    }
  };

  const createAtoms = (scene) => {
    atomsRef.current = [];

    for (let i = 0; i < settings.atomCount; i++) {
      try {
        // Create atom geometry
        const geometry = new THREE.SphereGeometry(settings.atomSize, 8, 8);
        
        // Create atom material
        const material = new THREE.MeshPhongMaterial({
          color: settings.colorScheme.primary,
          emissive: settings.colorScheme.secondary,
          emissiveIntensity: 0.1,
          transparent: true,
          opacity: 0.8
        });

        const atom = new THREE.Mesh(geometry, material);
        
        // Random position
        atom.position.set(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8
        );

        // Store animation data
        atom.userData = {
          originalPosition: atom.position.clone(),
          phase: Math.random() * Math.PI * 2,
          speed: 0.5 + Math.random() * 0.5
        };

        scene.add(atom);
        atomsRef.current.push(atom);

      } catch (error) {
        console.error('Error creating atom:', error);
      }
    }
  };

  const onPointerMove = (event) => {
    mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  const onWindowResize = () => {
    if (!rendererRef.current || !sceneRef.current) return;

    try {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const camera = sceneRef.current.children.find(child => child instanceof THREE.PerspectiveCamera);
      if (camera) {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }

      rendererRef.current.setSize(width, height);

    } catch (error) {
      console.error('Error resizing:', error);
    }
  };

  const animate = () => {
    if (!sceneRef.current || !rendererRef.current) {
      return;
    }

    try {
      const elapsedTime = clockRef.current.getElapsedTime();
      const camera = sceneRef.current.children.find(child => child instanceof THREE.PerspectiveCamera);

      // Update atoms
      atomsRef.current.forEach((atom, index) => {
        if (!atom || !atom.userData) return;
        
        const userData = atom.userData;
        const time = elapsedTime * userData.speed;
        const phase = userData.phase + (index / atomsRef.current.length) * Math.PI * 2;
        
        // Simple orbital movement
        const radius = 1.5 + Math.sin(time + phase) * 0.3;
        const x = Math.cos(time + phase) * radius;
        const y = Math.sin(time + phase * 1.2) * radius;
        const z = Math.sin(time + phase * 0.8) * 0.5;
        
        // Mouse influence
        const mouseX = mouseRef.current.x * settings.mouseInfluence;
        const mouseY = mouseRef.current.y * settings.mouseInfluence;
        
        // Update position
        atom.position.x = x + mouseX + userData.originalPosition.x;
        atom.position.y = y + mouseY + userData.originalPosition.y;
        atom.position.z = z + userData.originalPosition.z;
        
        // Simple pulsing
        const pulse = Math.sin(elapsedTime * 2 + phase) * 0.1 + 1;
        atom.scale.setScalar(pulse);
      });

      // Render
      if (camera) {
        rendererRef.current.render(sceneRef.current, camera);
      }

      animationIdRef.current = requestAnimationFrame(animate);

    } catch (error) {
      console.error('Error in animation loop:', error);
      // Stop animation on error
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    }
  };

  useEffect(() => {
    init();

    const handleMouseMove = (event) => onPointerMove(event);
    const handleTouchStart = (event) => {
      event.preventDefault();
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        onPointerMove({ clientX: touch.clientX, clientY: touch.clientY });
      }
    };
    const handleTouchMove = (event) => {
      event.preventDefault();
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        onPointerMove({ clientX: touch.clientX, clientY: touch.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('resize', onWindowResize, { passive: true });

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', onWindowResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      // Cleanup
      try {
        atomsRef.current.forEach(atom => {
          if (atom && atom.geometry) {
            atom.geometry.dispose();
          }
          if (atom && atom.material) {
            atom.material.dispose();
          }
        });
        
        if (rendererRef.current) {
          rendererRef.current.dispose();
        }
        
        if (sceneRef.current) {
          sceneRef.current.clear();
        }
      } catch (error) {
        console.error('Error during cleanup:', error);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
};

export default SimpleAtomBackground;
