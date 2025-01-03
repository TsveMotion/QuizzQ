<template>
    <header class="header">
      <div class="header-content">
        <img src="@/assets/images/svg/QuizzqLogo.svg" alt="QuizzQ Logo" class="logo" />
        <nav class="navigation">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About Us</router-link>
          <router-link to="/contact" class="nav-link">Contact Us</router-link>
          <router-link to="/login" class="nav-link login-btn">Login</router-link>
        </nav>
      </div>
    </header>
  </template>
  
  <script lang="ts">
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
    width: 100%;
  }
  
  .header {
    background: linear-gradient(90deg, #4a90e2 0%, #7e57c2 100%);
    color: white;
    padding: 0; /* Removed padding to eliminate spacing */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    font-family: 'Space Grotesk', sans-serif;
  }
  
  .header-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0; /* Removed padding to eliminate spacing */
  }
  
  .logo {
    height: 5cqw;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));
  }
  
  .navigation {
    display: flex;
    gap: 2rem;
  }
  
  .nav-link {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
    border-radius: 25px;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.1);
    font-weight: 500;
    letter-spacing: 0.5px;
    backdrop-filter: blur(5px);
  }
  
  .nav-link:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .login-btn {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.4);
  }
  
  .login-btn:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  
  @media (max-width: 768px) {
    .header-content {
      flex-direction: column;
      gap: 1.5rem;
    }
  
    .navigation {
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }
  }
  </style>
  