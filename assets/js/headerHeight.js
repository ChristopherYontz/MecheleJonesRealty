// Set responsive height so the header takes up the whole screen
const documentHeight = () => {
    const header = document.querySelector('#header');
    if (header) {
      header.style.setProperty('--header-height', `${window.innerHeight}px`);
    }
  };
  
  window.addEventListener('resize', documentHeight);
  documentHeight();

// const mobileDocumentHeight = () => {
//   const header = document.querySelector('#header');
//   if (header && browser.mobile) {
//     header.style.setProperty('--header-height', `${window.innerHeight}px`);
//   }
// };
// window.addEventListener('DOMContentLoaded', mobileDocumentHeight);
// mobileDocumentHeight();

// const documentHeight = () => {
//   const header = document.querySelector('#header');
//   if (header && !browser.mobile) {
//     header.style.setProperty('--header-height', `${window.innerHeight}px`);
//   }
// };
  
//   window.addEventListener('resize', documentHeight);
//   documentHeight();