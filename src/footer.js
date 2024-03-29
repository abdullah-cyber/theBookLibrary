class Footer {
  static callFooter() {
    const footerSection = document.createElement('footer');
    footerSection.innerHTML = `
  <footer class="text-center text-white" style="background-color: #0a4275;">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: CTA -->
      <section class="">
        <p class="d-flex justify-content-center align-items-center">
          <span class="me-3">Contact Us</span>
          <button type="button" class="btn btn-outline-light btn-rounded">
            Click 
          </button>
        </p>
      </section>
      <!-- Section: CTA -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2022 Copyright:
      <a class="text-white" href="#">abdullah-cyber</a>
    </div>
    <!-- Copyright -->
  </footer>
          `;

    return footerSection;
  }
}

export default Footer;
