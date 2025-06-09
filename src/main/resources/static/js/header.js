  <script>
    document.addEventListener('DOMContentLoaded', function () {
      const bottomSection = document.querySelector('.bottom-section');
      const topSection = document.querySelector('.top-section');

      window.addEventListener('scroll', function () {
        if (window.scrollY > topSection.offsetHeight) {
          bottomSection.classList.add('fixed');
        } else {
          bottomSection.classList.remove('fixed');
        }
      });
    });
  </script>
</body>