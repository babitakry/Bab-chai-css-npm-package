const MyTailwind = () => {
    console.log("Chai Tailwind Loaded!");
    document.addEventListener("DOMContentLoaded", () => {

        const elements = document.querySelectorAll("*");
        console.log("start");
        elements.forEach(el => {
            console.log(el);
            const classes = el.classList;
            console.log(classes);

            classes.forEach(cls => {
                if (cls.startsWith("chai-")) {
                    applyUtility(el, cls);
                }
            });
        });

    });
}


function applyUtility(el, cls) {
    const parts = cls.split("-");

    // chai-p-10 (padding)
    if (parts[1] === "p") {
        el.style.padding = parts[2] + "px";
    }

    // chai-m-10 (margin)
    if (parts[1] === "m") {
        el.style.margin = parts[2] + "px";
    }

    // chai-pt-10 (padding-top)
    if (parts[1] === "pt") {
        el.style.paddingTop = parts[2] + "px";
    }

    // chai-mt-10 (margin-top)
    if (parts[1] === "mt") {
        el.style.marginTop = parts[2] + "px";
    }

    // chai-bg-red (background color)
    if (parts[1] === "bg") {
        el.style.backgroundColor = parts[2];
    }

    // chai-text-blue (text color)
    if (parts[1] === "text") {
        el.style.color = parts[2];
    }

    // chai-fs-20 (font size)
    if (parts[1] === "fs") {
        el.style.fontSize = parts[2] + "px";
    }

    // chai-fw-bold (font weight)
    if (parts[1] === "fw") {
        if (parts[2] === "bold") el.style.fontWeight = "700";
        if (parts[2] === "light") el.style.fontWeight = "300";
    }

    // chai-center (text center)
    if (parts[1] === "center") {
        el.style.textAlign = "center";
    }

    // chai-rounded-10 (border radius)
    if (parts[1] === "rounded") {
        el.style.borderRadius = parts[2] + "px";
    }

    // chai-border-2 (border width)
    if (parts[1] === "border") {
        el.style.border = parts[2] + "px solid black";
    }

    // chai-w-200 (width)
    if (parts[1] === "w") {
        el.style.width = parts[2] + "px";
    }

    // chai-h-200 (height)
    if (parts[1] === "h") {
        el.style.height = parts[2] + "px";
    }

    // chai-flex
    if (parts[1] === "flex") {
        el.style.display = "flex";
    }

    // chai-justify-center
    if (parts[1] === "justify" && parts[2] === "center") {
        el.style.justifyContent = "center";
    }

    // chai-items-center
    if (parts[1] === "items" && parts[2] === "center") {
        el.style.alignItems = "center";
    }

    // chai-d-block
    if (parts[1] === "d" && parts[2] === "block") {
        el.style.display = "block";
    }

    // chai-d-none
    if (parts[1] === "d" && parts[2] === "none") {
        el.style.display = "none";
    }
    
}

export default MyTailwind;

