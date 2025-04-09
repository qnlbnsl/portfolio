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
  <section class="contact py-12 md:py-16 px-4" in:fade={{ duration: 800 }}>
    <div class="contact-header text-center mb-12 max-w-2xl mx-auto" in:fly={{ y: 50, duration: 800 }}>
      <h1 class="font-secondary text-4xl md:text-5xl mb-4">Get in Touch</h1>
      <p class="text-lg md:text-xl text-base-content/80">
        Have a project in mind or want to discuss potential collaborations? I'd love to hear from you!
      </p>
    </div>

    <div class="contact-container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-screen-lg mx-auto">
      <div class="contact-info" in:fly={{ x: -50, duration: 800, delay: 200 }}>
        <div class="info-card bg-secondary text-secondary-content rounded-lg p-6 md:p-8 h-full flex flex-col">
          <h2 class="text-2xl md:text-3xl font-semibold mb-6">Contact Information</h2>
          <div class="info-item flex items-center gap-4 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <p class="m-0">813-573-9075</p>
          </div>
          <div class="info-item flex items-center gap-4 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <p class="m-0">qnlbnsl@gmail.com</p>
          </div>
          <div class="info-item flex items-center gap-4 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p class="m-0">Alabama, USA</p>
          </div>

          <div class="social-links flex flex-wrap gap-3 my-8">
            <a href="https://github.com/qnlbnsl" target="_blank" rel="noopener noreferrer" class="social-link btn btn-outline btn-sm rounded-full normal-case gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/qnlbnsl" target="_blank" rel="noopener noreferrer" class="social-link btn btn-outline btn-sm rounded-full normal-case gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
            <a href="https://kunalbans.al" target="_blank" rel="noopener noreferrer" class="social-link btn btn-outline btn-sm rounded-full normal-case gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
        <form on:submit={handleSubmit} class="flex flex-col gap-6">
          <div class="form-group form-control w-full">
            <label for="name" class="label">
              <span class="label-text">Name</span>
            </label>
            <input type="text" id="name" bind:value={name} required disabled={isSubmitting} class="input input-bordered w-full" />
          </div>

          <div class="form-group form-control w-full">
            <label for="email" class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" id="email" bind:value={email} required disabled={isSubmitting} class="input input-bordered w-full" />
          </div>

          <div class="form-group form-control w-full">
            <label for="message" class="label">
              <span class="label-text">Message</span>
            </label>
            <textarea id="message" bind:value={message} rows="6" required disabled={isSubmitting} class="textarea textarea-bordered w-full h-36"></textarea>
          </div>

          <button type="submit" class="submit-button btn btn-accent w-full" disabled={isSubmitting}>
            {#if isSubmitting}
              <span class="loading loading-spinner loading-sm"></span> Sending...
            {:else}
              Send Message
            {/if}
          </button>

          {#if submitStatus}
            <div class="status-message alert {submitStatus.success ? 'alert-success' : 'alert-error'} mt-4 shadow-lg" transition:fade>
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                {#if submitStatus.success}
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                {:else}
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                {/if}
              </svg>
              <span>{submitStatus.message}</span>
            </div>
          {/if}
        </form>
      </div>
    </div>
  </section>
{/if}
