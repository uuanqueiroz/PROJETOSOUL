gsap.from("#m1",{
    scrollTrigger : {
      scrub: true
    },
    y: 100,
  })
  gsap.from("#m2",{
    scrollTrigger : {
      scrub: true
    },
    y: 50,
  })
  gsap.from("#t2",{
    scrollTrigger : {
      scrub: true
    },
    x: -50,
  })
  gsap.from("#t1",{
    scrollTrigger : {
      scrub: true
    },
    x: 50,
  })
  gsap.from("#man",{
    scrollTrigger : {
      scrub: true
    },
    x: -250,
  })
  gsap.from("#plants",{
    scrollTrigger : {
      scrub: true
    },
    x: -50,
  })
  gsap.from("#text",{
    scrollTrigger : {
      scrub: true
    },
    x: 600,
  })

  // JavaScript to show/hide the button on scroll and handle the click
  window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {document.getElementById('back-to-top').style.display = 'block';} else {document.getElementById('back-to-top').style.display = 'none';}
  });
document.getElementById('back-to-top').addEventListener('click', function() {
// Smooth scroll to top
window.scrollTo({
    top: 0,
    behavior: 'smooth' // For a smooth scrolling animation
});
});


