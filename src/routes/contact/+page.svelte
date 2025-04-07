<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  let visible = false;
  let name = "";
  let email = "";
  let message = "";
  let isSubmitting = false;
  /**
   * @type {{ success: any; message: any; } | null}
   */
  let submitStatus = null;

  onMount(() => {
    visible = true;
  });

  /**
   * @param {{ preventDefault: () => void; }} event
   */
  async function handleSubmit(event) {
    event.preventDefault();
    isSubmitting = true;

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real implementation, you would send the form data to a server
      // For example with SvelteKit's form actions:
      // const formData = new FormData(event.target);
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   body: formData
      // });

      submitStatus = {
        success: true,
        message: "Your message has been sent successfully! I will get back to you soon.",
      };

      // Reset form
      name = "";
      email = "";
      message = "";
    } catch (error) {
      submitStatus = {
        success: false,
        message: "There was an error sending your message. Please try again later.",
      };
    } finally {
      isSubmitting = false;

      // Clear status after 5 seconds
      setTimeout(() => {
        submitStatus = null;
      }, 5000);
    }
  }
</script>

<svelte:head>
  <title>Contact | Kunal Bansal</title>
  <meta
    name="description"
    content="Get in touch with Kunal Bansal for collaborations, projects, or inquiries related to AR/VR, healthcare tech, and AI."
  />
</svelte:head>

{#if visible}
  <section class="contact" in:fade={{ duration: 800 }}>
    <div class="contact-header" in:fly={{ y: 50, duration: 800 }}>
      <h1>Get in Touch</h1>
      <p>Have a project in mind or want to discuss potential collaborations? I'd love to hear from you!</p>
    </div>

    <div class="contact-container">
      <div class="contact-info" in:fly={{ x: -50, duration: 800, delay: 200 }}>
        <div class="info-card">
          <h2>Contact Information</h2>
          <div class="info-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              ></path>
            </svg>
            <p>813-573-9075</p>
          </div>
          <div class="info-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <p>qnlbnsl@gmail.com</p>
          </div>
          <div class="info-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p>Alabama, USA</p>
          </div>

          <div class="social-links">
            <a href="https://github.com/qnlbnsl" target="_blank" rel="noopener noreferrer" class="social-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                ></path>
              </svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/qnlbnsl" target="_blank" rel="noopener noreferrer" class="social-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
            <a href="https://kunalbans.al" target="_blank" rel="noopener noreferrer" class="social-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              Website
            </a>
          </div>

          <!-- <div class="consulting-info">
            <h3>AAKU Consulting</h3>
            <p>
              We solve complex problems around AR/VR, healthcare tech, and AI. Let's talk about how we can help your organization scale
              globally!
            </p>
          </div> -->
        </div>
      </div>

      <div class="contact-form" in:fly={{ x: 50, duration: 800, delay: 200 }}>
        <form on:submit={handleSubmit}>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" bind:value={name} required disabled={isSubmitting} />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" bind:value={email} required disabled={isSubmitting} />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" bind:value={message} rows="6" required disabled={isSubmitting}></textarea>
          </div>

          <button type="submit" class="submit-button" disabled={isSubmitting}>
            {#if isSubmitting}
              Sending...
            {:else}
              Send Message
            {/if}
          </button>

          {#if submitStatus}
            <div class="status-message {submitStatus.success ? 'success' : 'error'}" transition:fade>
              {submitStatus.message}
            </div>
          {/if}
        </form>
      </div>
    </div>
  </section>
{/if}

<style>
  .contact {
    padding: 4rem 1rem;
  }

  .contact-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .contact-header h1 {
    font-family: var(--font-secondary);
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .contact-header p {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto;
    color: var(--text);
    opacity: 0.8;
  }

  .contact-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .contact-info {
    background-color: var(--background);
  }

  .info-card {
    background-color: var(--secondary);
    border-radius: 8px;
    padding: 2rem;
    height: 100%;
  }

  .info-card h2 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }

  .info-item svg {
    color: var(--accent);
  }

  .info-item p {
    margin: 0;
  }

  .social-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 2rem 0;
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text);
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    background-color: var(--background);
    transition: all 0.3s ease;
  }

  .social-link:hover {
    background-color: var(--accent);
    color: white;
  }

  .consulting-info {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
  }

  .consulting-info h3 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }

  .consulting-info p {
    line-height: 1.6;
  }

  .contact-form {
    background-color: var(--background);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    font-weight: 500;
  }

  input,
  textarea {
    padding: 0.75rem;
    border: 1px solid var(--border);
    border-radius: 4px;
    background-color: var(--background);
    color: var(--text);
    font-family: var(--font-primary);
    transition: border-color 0.3s ease;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: var(--accent);
  }

  .submit-button {
    background-color: var(--accent);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .submit-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .submit-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .status-message {
    padding: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
    text-align: center;
  }

  .status-message.success {
    background-color: rgba(16, 185, 129, 0.1);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.2);
  }

  .status-message.error {
    background-color: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.2);
  }

  @media (min-width: 768px) {
    .contact-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 768px) {
    .contact-header h1 {
      font-size: 2.25rem;
    }
  }
</style>
