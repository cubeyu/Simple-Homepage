<template>
  <div id="particles-js" class="particles-container" aria-hidden="true"></div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

// 获取主题颜色 - 移到外部作用域以便全局访问
const getThemeColor = () => {
  const theme = document.body.getAttribute('theme') || 'light';
  return theme === 'dark' ? '#60a5fa' : '#3b82f6';
};

// 创建自己实现的简化版粒子效果，避免particles.js的严格模式问题
const initParticles = () => {
  const canvas = document.createElement('canvas');
  const container = document.getElementById('particles-js');
  if (!container) return;
  
  // 清空容器
  container.innerHTML = '';
  container.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  // 声明为全局变量以便在外部访问
  window.__particles = [];
  let particles = window.__particles;
  let animationId = null;
  
  // 设置canvas尺寸
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // getThemeColor函数已移至外部作用域
  
  // 创建粒子
  const createParticles = () => {
    particles = [];
    const particleCount = 50;
    const color = getThemeColor();
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: color,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  };
  
  // 绘制粒子
  const drawParticles = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const color = getThemeColor();
    
    particles.forEach((particle, index) => {
      // 使用粒子自己的颜色属性，主题变化时会通过外部更新
      
      // 绘制粒子
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.opacity;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      // 连接粒子
      ctx.strokeStyle = color;
      for (let j = index + 1; j < particles.length; j++) {
        const dx = particles[j].x - particle.x;
        const dy = particles[j].y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          ctx.globalAlpha = (150 - distance) / 150 * 0.2;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
      
      // 更新粒子位置
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // 边界检查
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX *= -1;
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY *= -1;
      }
    });
    
    ctx.globalAlpha = 1;
  };
  
  // 动画循环
  const animate = () => {
    drawParticles();
    animationId = requestAnimationFrame(animate);
  };
  
  // 初始化
  createParticles();
  animate();
  
  // 清理函数
  return () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    window.removeEventListener('resize', resizeCanvas);
  };
};

let cleanup = null;

// 主题变化观察器
let themeObserver = null;

onMounted(() => {
  cleanup = initParticles();
  
  // 监听主题变化
  themeObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === 'theme') {
        // 只更新粒子颜色，不重新初始化整个系统
        const newColor = getThemeColor();
        if (window.__particles) {
          window.__particles.forEach(particle => {
            particle.color = newColor;
          });
        }
      }
    });
  });
  themeObserver.observe(document.body, { attributes: true });
});

onUnmounted(() => {
  if (themeObserver) {
    themeObserver.disconnect();
  }
  if (cleanup) {
    cleanup();
  }
});
</script>

<style scoped>
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}

.particles-container canvas {
  display: block;
}
</style>