function detectPlatform() {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("linux")) return "linux";
    if (ua.includes("windows")) return "windows";
    if (ua.includes("mac os") || ua.includes("macintosh")) return "mac";
    return "source";
}

function prioritizeDownloadBox() {
    const platform = detectPlatform();
    const main = document.querySelector("main.downloads-section");
    const boxes = Array.from(main.querySelectorAll(".download-box"));
    let targetBox = null;

    for (const box of boxes) {
        const label = box.querySelector("p")?.textContent?.toLowerCase();
        if (platform === "source" && label.includes("source")) {
            targetBox = box;
            break;
        }
        if (label && label.includes(platform)) {
            targetBox = box;
            break;
        }
    }

    if (targetBox) {
        main.insertBefore(targetBox, main.firstChild);
    }
}

window.addEventListener("DOMContentLoaded", prioritizeDownloadBox);