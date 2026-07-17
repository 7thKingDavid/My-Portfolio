// This is a comment to help GitHub detect JavaScript

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.animated');
    
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function handleScroll() {
      elements.forEach(element => {
        if (isInViewport(element)) {
          element.classList.add('visible');
        }
      });
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
  });
  document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

