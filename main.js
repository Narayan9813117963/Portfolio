window.sections = [...document.querySelectorAll('.section')];
window.lastScrollTop = window.pageYOffset;

// Add another div to change background color
window.additionalDiv = document.querySelector('.additional-div');

document.body.style.background = window.sections[0].getAttribute('data-bg');
window.additionalDiv.style.background = window.sections[0].getAttribute('data-bg');

window.addEventListener('scroll', onScroll);

function onScroll() {
  const scrollTop = window.pageYOffset;

  const section = window.sections
    .map(section => {
      const el = section;
      const rect = el.getBoundingClientRect();
      return { el, rect };
    })
    .find(section => section.rect.bottom >= (window.innerHeight * 0.5));

  document.body.style.background = section.el.getAttribute('data-bg');
  window.additionalDiv.style.background = section.el.getAttribute('data-bg');

  updateActiveLink(section.el);
}

function updateActiveLink(section) {
  // Implementation for updating active link if needed
}


// cube animate
const cube = document.querySelector('.cube-container .cube');

cube.addEventListener('mousemove', (e) => {
  const { offsetWidth: width, offsetHeight: height } = cube;
  const { offsetX: x, offsetY: y } = e;

  const rotateX = (y / height - 0.5) * 360;
  const rotateY = (x / width - 0.5) * -360;

  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// sticky line
document.addEventListener('scroll', function() {
  var line = document.getElementById('line');
  var parent = line.parentElement;
  var parentRect = parent.getBoundingClientRect();

  if (parentRect.bottom <= 100) {
    line.style.height = '0px';
  } else if (parentRect.top < 100) {
    line.style.height = (parentRect.bottom - 100) + 'px';
  } else {
    line.style.height = '100%';
  }
});

// Function to update active class on navbar links
function updateActiveLink(activeSection) {
  var navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function (navLink) {
    var sectionId = navLink.getAttribute('href').substring(1); // Remove '#'
    var section = document.getElementById(sectionId);

    navLink.classList.toggle('active', section === activeSection);
  });
}

// Initial call to set the active link based on the current scroll position
updateActiveLink(window.sections[0]);

// Add click event to handle active link when clicked
document.querySelectorAll('.nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    document.querySelectorAll('.nav-link').forEach(function (navLink) {
      navLink.classList.remove('active');
    });
    link.classList.add('active');
  });
});

// sticky top
  document.addEventListener("DOMContentLoaded", function() {
    const stickyElement = document.querySelector(".sticky-top");
    let classAdded = false; // Flag to track if class has been added

    window.addEventListener("scroll", function() {
      if (classAdded) return; // Exit if class has already been added

      const stickyTopPosition = stickyElement.getBoundingClientRect().top;
      const triggerOffset = 400; // Adjust this value to trigger earlier

      if (stickyTopPosition <= triggerOffset) {
        stickyElement.classList.add("sticky-reached");
        classAdded = true; // Set flag to true once class is added
      }
    });
  });

