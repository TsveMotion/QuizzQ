<template>
    <footer class="footer" :class="{ 'visible': isVisible }">
      <div class="footer-content">
        <p class="copyright">&copy; 2025 Kristiyan Tsvetanov. All rights reserved.</p>
        <div class="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-link">Twitter</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="social-link">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-link">LinkedIn</a>
        </div>
      </div>
    </footer>
  </template>
  
  <script lang="ts">
  export default {
    name: 'Footer',
    data() {
      return {
        isVisible: true, // Set to true for testing
      };
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
  
  .footer {
    background: linear-gradient(90deg, #4a90e2 0%, #7e57c2 100%);
    color: white;
    padding: 1.5rem 0;
    box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.1);
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    font-family: 'Space Grotesk', sans-serif;
    transition: bottom 0.3s ease;
    opacity: 1;
  }
  
  .footer-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .copyright {
    font-size: 0.95rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    letter-spacing: 0.5px;
  }
  
  .social-links {
    display: flex;
    gap: 1.5rem;
  }
  
  .social-link {
    color: white;
    text-decoration: none;
    font-size: 0.95rem;
    padding: 0.6rem 1.2rem;
    border-radius: 25px;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.1);
    font-weight: 500;
    letter-spacing: 0.5px;
    backdrop-filter: blur(5px);
  }
  
  .social-link:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      text-align: center;
      padding: 1rem;
    }
  
    .social-links {
      margin-top: 1rem;
    }
  }
  </style>
  