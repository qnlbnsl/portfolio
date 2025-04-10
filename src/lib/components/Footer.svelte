<script>
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-secondary text-secondary-content pt-12 pb-6 px-4 mt-2">
  <div class="footer-content max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
    <div class="footer-info md:col-span-1">
      <h2 class="font-secondary text-2xl mb-3 font-semibold">Kunal Bansal</h2>
      <p class="opacity-80 max-w-xs text-sm leading-relaxed">Innovating at the intersection of AR/VR, healthcare, and AI</p>
    </div>

    <div class="footer-links md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
      <div class="link-group">
        <h3 class="text-lg mb-4 font-medium relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-[30px] after:h-0.5 after:bg-accent">
          Navigation
        </h3>
        <a href="/" class="block text-sm mb-3 opacity-80 transition-opacity hover:opacity-100 hover:text-accent no-underline">Home</a>
        <a href="/projects" class="block text-sm mb-3 opacity-80 transition-opacity hover:opacity-100 hover:text-accent no-underline">Projects & Blog</a>
        <a href="/experience" class="block text-sm mb-3 opacity-80 transition-opacity hover:opacity-100 hover:text-accent no-underline">Work Experience</a>
        <a href="/contact" class="block text-sm mb-3 opacity-80 transition-opacity hover:opacity-100 hover:text-accent no-underline">Contact</a>
      </div>

      <div class="link-group">
        <h3 class="text-lg mb-4 font-medium relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-[30px] after:h-0.5 after:bg-accent">
          Connect
        </h3>
        <a href="https://github.com/qnlbnsl" target="_blank" rel="noopener noreferrer" class="block text-sm mb-3 opacity-80 transition-opacity hover:opacity-100 hover:text-accent no-underline">GitHub</a>
        <a href="https://linkedin.com/in/qnlbnsl" target="_blank" rel="noopener noreferrer" class="block text-sm mb-3 opacity-80 transition-opacity hover:opacity-100 hover:text-accent no-underline">LinkedIn</a>
        <a href="https://kunalbans.al" target="_blank" rel="noopener noreferrer" class="block text-sm mb-3 opacity-80 transition-opacity hover:opacity-100 hover:text-accent no-underline">Website</a>
      </div>

      <!-- Add more link groups if needed, adjusting grid columns -->

    </div>
  </div>

  <div class="footer-bottom max-w-screen-xl mx-auto border-t border-base-300/30 mt-1 pt-6 text-center">
    <p class="text-xs opacity-70">&copy; {currentYear} Kunal Bansal. All rights reserved.</p>
  </div>
</footer>
