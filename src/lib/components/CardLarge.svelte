<script>
  let { image, title, description, link } = $props();
</script>

<div class="highlight-card">
  <div class="highlight-image">
    <img src={image || "/placeholder.svg"} alt={title} />
  </div>
  <div class="highlight-content">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} class="highlight-link">Learn more</a>
  </div>
</div>

<style>
  .highlight-card {
    background-color: var(--background);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .highlight-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .highlight-image {
    height: 200px;
    overflow: hidden;
  }

  .highlight-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .highlight-card:hover .highlight-image img {
    transform: scale(1.05);
  }

  .highlight-content {
    padding: 1.5rem;
  }

  .highlight-content h3 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  .highlight-content p {
    margin-bottom: 1.25rem;
    line-height: 1.6;
  }

  .highlight-link {
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    transition: color 0.3s ease;
  }

  .highlight-link:hover {
    text-decoration: underline;
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .highlight-card {
      display: flex;
      align-items: stretch; /* Stretch items to fill height */
    }

    /* Reset hover transform for mobile */
    .highlight-card:hover {
      transform: none;
      /* Keep a subtle shadow or remove if preferred */
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    }

    .highlight-image {
      flex: 0 0 120px; /* Fixed width for image */
      height: auto; /* Adjust height automatically */
      /* Ensure the image corners match the card corners */
      border-radius: 8px 0 0 8px;
    }

    .highlight-image img {
      /* Ensure image covers the new container size */
      height: 100%;
      /* Reset hover zoom effect for mobile */
      transform: none;
    }

    .highlight-card:hover .highlight-image img {
      transform: none; /* Disable zoom on hover for mobile */
    }

    .highlight-content {
      flex: 1; /* Content takes remaining space */
      padding: 1rem; /* Adjust padding */
    }

    .highlight-content h3 {
      font-size: 1.2rem; /* Slightly smaller heading */
      margin-bottom: 0.5rem;
    }

    .highlight-content p {
      font-size: 0.9rem; /* Slightly smaller text */
      margin-bottom: 1rem;
    }

    .highlight-link {
      font-size: 0.9rem;
    }
  }

  /* Further adjustments for very small screens */
  @media (max-width: 480px) {
    .highlight-image {
      flex-basis: 100px; /* Even smaller image */
    }
    .highlight-content {
      padding: 0.75rem;
    }
    .highlight-content h3 {
      font-size: 1.1rem;
    }
    .highlight-content p {
      font-size: 0.85rem;
    }
  }
</style>
