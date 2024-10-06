document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.getElementById("scrollToTop");
    const darkModeToggleBtn = document.getElementById("darkModeToggle");
    const body = document.body;
    const searchBar = document.getElementById("searchBar");
    const searchSuggestions = document.getElementById("searchSuggestions");
    const messagesBtn = document.getElementById("messagesBtn");
    const messageBox = document.getElementById("messageBox");
    const extraMenuBtn = document.getElementById("extraMenuBtn");
    const extraMenu = document.getElementById("extraMenu");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });
  
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  
    darkModeToggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
    });
  
    searchBar.addEventListener("focus", () => {
      searchSuggestions.style.display = "block";
    });
  
    document.addEventListener("click", (e) => {
      if (!searchBar.contains(e.target)) {
        searchSuggestions.style.display = "none";
      }
    });
  
    messagesBtn.addEventListener("click", () => {
      messageBox.style.display = messageBox.style.display === "none" ? "block" : "none";
    });
  
    extraMenuBtn.addEventListener("click", () => {
      extraMenu.style.display = extraMenu.style.display === "none" ? "block" : "none";
    });
  
    document.addEventListener("click", (e) => {
      if (!extraMenuBtn.contains(e.target)) {
        extraMenu.style.display = "none";
      }
    });
  });
  