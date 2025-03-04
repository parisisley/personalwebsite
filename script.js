document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio website loaded!");

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", (event) => {
            const url = new URL(link.href, window.location.href);
            if (url.origin !== window.location.origin) {
                alert(`You are leaving this site to visit ${link.textContent}`);
            }
        });
    });
});
