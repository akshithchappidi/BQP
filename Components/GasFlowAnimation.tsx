// GasFlowBackground.tsx

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  mass: number;
  radius: number;
  color: string;
}

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    function createParticle(x: number, y: number, mass: number): Particle {
      return {
        x,
        y,
        dx: Math.random() * 2 - 1,
        dy: Math.random() * 2 - 1,
        mass,
        radius: Math.sqrt(mass) * 2,
        color: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
      };
    }

    function initializeParticles(numParticles: number) {
      const particles: Particle[] = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push(createParticle(Math.random() * width, Math.random() * height, Math.random() * 10));
      }
      return particles;
    }

    let particles = initializeParticles(200); // Adjust number of particles

    function updateParticles() {
      for (const particle of particles) {
        // Update position based on velocity
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Handle wall collisions (bounce with slight friction)
        if (particle.x + particle.radius > width) {
          particle.x = width - particle.radius;
          particle.dx *= -0.9; // Apply friction
        } else if (particle.x - particle.radius < 0) {
          particle.x = particle.radius;
          particle.dx *= -0.9;
        }

        if (particle.y + particle.radius > height) {
          particle.y = height - particle.radius;
          particle.dy *= -0.9;
        } else if (particle.y - particle.radius < 0) {
          particle.y = particle.radius;
          particle.dy *= -0.9;
        }

        // Basic pressure simulation (particles push away from each other)
        for (const otherParticle of particles) {
          if (particle !== otherParticle) {
            const dx = otherParticle.x - particle.x;
            const dy = otherParticle.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const force = 10 / distance; // Adjust force for desired pressure effect

            particle.dx += (dx / distance) * force;
            particle.dy += (dy / distance) * force;
          }
        }
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, width, height);

      for (const particle of particles) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      }
    }

    function animate() {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500 to-violet-500 z-[-2]">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-[-4]" />
    </div>
  );
};

export default Background;
