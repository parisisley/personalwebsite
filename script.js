document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio website loaded!");

    // Example: Alert when clicking social media links
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            alert(`You are leaving this page to visit ${link.textContent}`);
        });
    });
});
