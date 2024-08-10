// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    
    // Header Text Animation
    const headerTitle = document.querySelector("header h1");
    headerTitle.style.opacity = 0;
    headerTitle.style.transform = "translateY(-20px)";
    
    setTimeout(() => {
        headerTitle.style.transition = "all 1s ease-in-out";
        headerTitle.style.opacity = 1;
        headerTitle.style.transform = "translateY(0)";
    }, 500);

    // Navigation Link Hover Effect
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#fff";
            link.style.transition = "color 0.3s ease-in-out";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "#FFD700";
        });
    });

    // Movie Sections Fade-In Animation
    const movieSections = document.querySelectorAll(".movie");
    movieSections.forEach((section, index) => {
        section.style.opacity = 0;
        section.style.transform = "translateY(30px)";
        setTimeout(() => {
            section.style.transition = "all 1s ease-in-out";
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }, index * 300);
    });

    // Image Hover Zoom Animation
    const images = document.querySelectorAll(".gallery-grid img");
    images.forEach(image => {
        image.addEventListener("mouseover", () => {
            image.style.transform = "scale(1.1)";
            image.style.transition = "transform 0.5s ease";
        });
        image.addEventListener("mouseout", () => {
            image.style.transform = "scale(1)";
        });
    });

    // Video Container Fade-In Animation
    const videos = document.querySelectorAll(".video-container iframe");
    videos.forEach((video, index) => {
        video.style.opacity = 0;
        video.style.transform = "translateY(30px)";
        setTimeout(() => {
            video.style.transition = "all 1s ease-in-out";
            video.style.opacity = 1;
            video.style.transform = "translateY(0)";
        }, index * 300);
    });

    // Footer Social Links Hover Effect
    const socialLinks = document.querySelectorAll("footer .social-links a");
    socialLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#fff";
            link.style.transform = "scale(1.2)";
            link.style.transition = "all 0.3s ease-in-out";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "#FFD700";
            link.style.transform = "scale(1)";
        });
    });

    // Scroll to Section Smoothly
    const navItems = document.querySelectorAll("nav ul li a");
    navItems.forEach(item => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = item.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});
