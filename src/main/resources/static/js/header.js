<script>
  window.addEventListener('DOMContentLoaded', () => {
    const blueBar = document.querySelector('.bottom-section');
    const blueBarTop = blueBar.offsetTop;

    window.addEventListener('scroll', () => {
      if (window.scrollY >= blueBarTop - 70) {
        blueBar.classList.add('fixed-bluebar');
      } else {
        blueBar.classList.remove('fixed-bluebar');
      }
    });
  });
</script>
