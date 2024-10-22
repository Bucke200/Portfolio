/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  
  $(function() {
    // This will select everything with the class smoothScroll
    // This should prevent problems with carousel, scrollspy, etc...
    $('.smoothScroll').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1300); // The number here represents the speed of the scroll in milliseconds
          return false;
        }
      }
    });
  });
  window.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('skills');
    const htmlSkill = document.querySelector('.html-skill');
    const cssSkill = document.querySelector('.css-skill');
    const jsSkill = document.querySelector('.js-skill');
    const javaSkill = document.querySelector('.java-skill');
    const pythonSkill = document.querySelector('.python-skill');
    const sqlSkill = document.querySelector('.sql-skill');
    const djangoSkill = document.querySelector('.django-skill');

    if (skillsSection.getBoundingClientRect().top < window.innerHeight) {
        htmlSkill.style.width = '90%';
        cssSkill.style.width = '85%';
        jsSkill.style.width = '75%';
        javaSkill.style.width = '80%';
        pythonSkill.style.width = '88%';
        sqlSkill.style.width = '70%';
        djangoSkill.style.width = '78%';
    }
});

  // Change the speed to whatever you want
  // Personally i think 1000 is too much
  // Try 800 or below, it seems not too much but it will make a difference
