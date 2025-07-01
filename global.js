<script>
  const toggleButton = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.main-nav');

  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');

    // 可選：更新 aria 屬性（無障礙設計）
    const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', !expanded);
  });
</script>
