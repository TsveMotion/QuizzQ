<template>
    <div class="home">
      <!-- Hero Section -->
      <section class="hero">
        <h1 class="hero-title">Transform Learning with QuizzQ</h1>
        <p class="hero-subtitle">Empowering Year 7-11 Students with AI-Driven Education</p>
        <button class="cta-button" @click="showDemo = true">Try Demo</button>
      </section>
  
      <template>
  <!-- Features Section -->
  <section class="features">
    <div class="feature-card" @mouseenter="showAiChatPopup = true" @mouseleave="showAiChatPopup = false">
      <div class="feature-icon">🤖</div>
      <h2>AI Study Buddy</h2>
      <p>24/7 personalized help with homework and exam prep</p>
      <div v-if="showAiChatPopup" class="popup">
        <h3>Smart AI Assistant</h3>
        <ul>
          <li>Instant answers to academic questions</li>
          <li>Step-by-step problem solving</li>
          <li>Multiple subject expertise</li>
        </ul>
      </div>
    </div>

    <div class="feature-card" @mouseenter="showQuizPopup = true" @mouseleave="showQuizPopup = false">
      <div class="feature-icon">📝</div>
      <h2>AI Quiz Generator</h2>
      <p>Custom quizzes aligned with UK curriculum</p>
      <div v-if="showQuizPopup" class="popup">
        <h3>Smart Quiz Creation</h3>
        <ul>
          <li>Curriculum-aligned questions</li>
          <li>Adaptive difficulty</li>
          <li>Progress tracking</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- New Subjects Section -->
  <section class="subjects">
    <h2 class="section-title">Core Subjects</h2>
    <div class="subject-grid">
      <div class="subject-card" v-for="subject in subjects" :key="subject.name">
        <div class="subject-icon">{{ subject.icon }}</div>
        <h3>{{ subject.name }}</h3>
        <p>{{ subject.description }}</p>
        <button class="explore-btn">Explore</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showAiChatPopup: false, // Initialize showAiChatPopup variable
      showQuizPopup: false,   // Initialize showQuizPopup variable
      subjects: [
        { name: 'Math', icon: '➗', description: 'Learn algebra, geometry, and more.' },
        { name: 'Science', icon: '🔬', description: 'Explore biology, chemistry, and physics.' },
        { name: 'History', icon: '📜', description: 'Dive into historical events and figures.' },
        { name: 'English', icon: '📚', description: 'Improve your reading and writing skills.' }
      ]
    };
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>

  
      <!-- New Testimonials Section -->
      <section class="testimonials">
        <h2 class="section-title">Student Success Stories</h2>
        <div class="testimonial-carousel">
          <div class="testimonial-card" v-for="testimonial in testimonials" :key="testimonial.id">
            <div class="quote">"{{ testimonial.quote }}"</div>
            <div class="author">
              <div class="author-avatar">{{ testimonial.avatar }}</div>
              <div class="author-info">
                <h4>{{ testimonial.name }}</h4>
                <p>{{ testimonial.school }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- New How It Works Section -->
      <section class="how-it-works">
        <h2 class="section-title">How QuizzQ Works</h2>
        <div class="steps">
          <div class="step" v-for="(step, index) in steps" :key="index">
            <div class="step-number">{{ index + 1 }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </section>
  
      <!-- Stats Section -->
      <section class="stats">
        <div class="stat-item" v-for="stat in stats" :key="stat.label">
          <h3>{{ stat.value }}</h3>
          <p>{{ stat.label }}</p>
        </div>
      </section>
  
      <!-- New Call to Action Section -->
      <section class="cta-section">
        <div class="cta-content">
          <h2>Ready to Transform Your Learning Journey?</h2>
          <p>Join thousands of students achieving their academic goals with QuizzQ</p>
          <div class="cta-buttons">
            <button class="primary-btn">Start Free Trial</button>
            <button class="secondary-btn">Watch Demo</button>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'Home',
    data() {
      return {
        showDemo: false,
        showAiChatPopup: false,
        showQuizPopup: false,
        subjects: [
          { name: 'Mathematics', icon: '📐', description: 'Master algebra, geometry, and calculus with interactive lessons' },
          { name: 'Science', icon: '🧬', description: 'Explore biology, chemistry, and physics through virtual experiments' },
          { name: 'English', icon: '📚', description: 'Improve comprehension and writing skills with AI feedback' },
          { name: 'History', icon: '🏛️', description: 'Journey through time with immersive historical content' }
        ],
        testimonials: [
          { id: 1, quote: 'QuizzQ helped me improve my math grade from a C to an A!', name: 'Sarah P.', school: 'Year 10, London', avatar: '👩' },
          { id: 2, quote: 'The AI tutor is like having a personal teacher 24/7', name: 'James M.', school: 'Year 8, Manchester', avatar: '👦' },
          { id: 3, quote: 'Finally understanding science thanks to the interactive quizzes', name: 'Emma L.', school: 'Year 11, Birmingham', avatar: '👧' }
        ],
        steps: [
          { title: 'Sign Up', description: 'Create your personalized account in minutes' },
          { title: 'Set Goals', description: 'Choose your subjects and target grades' },
          { title: 'Learn & Practice', description: 'Use AI-powered tools to master your subjects' },
          { title: 'Track Progress', description: 'Monitor your improvement with detailed analytics' }
        ],
        stats: [
          { value: '95%', label: 'Student Satisfaction' },
          { value: '50K+', label: 'Active Students' },
          { value: '1M+', label: 'Quizzes Generated' },
          { value: '85%', label: 'Grade Improvement' }
        ]
      }
    };
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
  
  .home {
    font-family: 'Space Grotesk', sans-serif;
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .section-title {
    font-size: 2.5rem;
    color: #4a90e2;
    text-align: center;
    margin: 4rem 0 2rem;
  }
  
  .subject-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }
  
  .subject-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
  }
  
  .subject-card:hover {
    transform: translateY(-5px);
  }
  
  .subject-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .explore-btn {
    background: linear-gradient(135deg, #4a90e2 0%, #7e57c2 100%);
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 20px;
    margin-top: 1rem;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .testimonial-carousel {
    display: flex;
    gap: 2rem;
    overflow-x: auto;
    padding: 2rem 0;
    scroll-snap-type: x mandatory;
  }
  
  .testimonial-card {
    min-width: 300px;
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    scroll-snap-align: start;
  }
  
  .quote {
    font-size: 1.1rem;
    font-style: italic;
    margin-bottom: 1.5rem;
  }
  
  .author {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .author-avatar {
    font-size: 2rem;
  }
  
  .steps {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }
  
  .step {
    text-align: center;
    padding: 2rem;
  }
  
  .step-number {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #4a90e2 0%, #7e57c2 100%);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    font-weight: bold;
  }
  
  .cta-section {
    background: linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(126, 87, 194, 0.1) 100%);
    border-radius: 20px;
    padding: 4rem 2rem;
    text-align: center;
    margin: 4rem 0;
  }
  
  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
  }
  
  .primary-btn {
    background: linear-gradient(135deg, #4a90e2 0%, #7e57c2 100%);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 25px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .secondary-btn {
    background: transparent;
    border: 2px solid #4a90e2;
    color: #4a90e2;
    padding: 1rem 2rem;
    border-radius: 25px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .secondary-btn:hover {
    background: rgba(74, 144, 226, 0.1);
  }
  
  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }
  
    .cta-buttons {
      flex-direction: column;
    }
  
    .testimonial-carousel {
      padding: 1rem;
    }
  }
  </style>
  