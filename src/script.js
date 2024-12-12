import "./styles.css";

const navbar = document.getElementById("navbar");
const resizer = document.getElementById("resizer");

const remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

let isResizing = false;

resizer.addEventListener("mousedown", e => {
    isResizing = true;
    document.body.style.cursor = "ew-resize";
});

document.addEventListener("mousemove", e => {
    if (isResizing && e.clientX >= remSize * 10 && e.clientX <= remSize * 20){
        const newWidth = e.clientX;
        navbar.style.width = `${newWidth}px`;
    }
});

document.addEventListener("mouseup", e => {
    isResizing = false;
    document.body.style.cursor = "default";
});

