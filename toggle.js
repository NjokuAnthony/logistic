const themeButton = document.getElementById('toggle');
const darkTheme = "darker";

//icon//
const icon = 'fa-toggle-on';
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//method//
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(icon) ? 'fa-toggle-on' : 'fa-toggle-off'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-toggle-off' ? 'add' : 'remove'](icon)
  }
  
  // Activate / deactivate the theme manually with the button
  themeButton.addEventListener('click', () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme)
      themeButton.classList.toggle(icon)
      // We save the theme and the current icon that the user chose
      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())
  })
  

  function showarrow(){
      let arroW = document.querySelector('#arrow');
      if(this.scrollY >= 560){
          arroW.classList.add("showarrow");
        }
          else{
            arroW.classList.remove("showarrow");
          }
  }
  window.addEventListener("scroll", showarrow);


  let menuBar = document.querySelector('.bx-menu');

menuBar.onclick = () => {
    cart.classList.add("active"); 
};