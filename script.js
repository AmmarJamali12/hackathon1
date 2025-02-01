setInterval(() => {
  let transition = document.getElementById("Ar")
  transition.style.transition = 'transform 1s ease';

  // Apply transform after 1 second
  setTimeout(() => {
      transition.style.transform = 'translateX(-300px)';
  }, 1000);
  let transition2 = document.getElementById("Ag")
  transition2.style.transition = 'transform 1s ease';

  // Apply transform after 1 second
  setTimeout(() => {
      transition2.style.transform = 'translateX(300px)';
  }, 1000);
  
}, 1000);
