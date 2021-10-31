
const devices = {
    "galaxy": {
        0: {
            name: "Galaxy Note 20L",
            width: "412px",
            height: "915px"
        },
        1: {
            name: "Galaxy Note 20 Ultra Linux",
            width: "412px",
            height: "883px"
        },
        2: {
            name: "Galaxy S10/S10+ Linux",
            width: "360px",
            height: "760px"
        },
        3: {
            name: "Galaxy S20 Linux",
            width: "360px",
            height: "800px"
        },
        4: {
            name: "Galaxy S20 Ultra",
            width: "412px",
            height: "915px"
        },
        5: {
            name: "Galaxy S20+ Linux",
            width: "384px",
            height: "854px"
        },
    },
    "iphone": {
        0: {
            name: "iPhone 11 ProiOS 14.6",
            width: "375px",
            height: "812px"
        },
        1: {
            name: "iPhone 11 Pro MaxiOS 14.6",
            width: "414px",
            height: "896px"
        },
        2: {
            name: "iPhone 12/13 + ProiOS 14.6",
            width: "390px",
            height: "844px"
        },
        3: {
            name: "iPhone 12/13 miniiOS 14.6",
            width: "375px",
            height: "812px"
        },
        4: {
            name: "iPhone 12/13 Pro MaxiOS 14.6",
            width: "428px",
            height: "926px"
        },
        5: {
            name: "iPhone 6/7/8iOS 11",
            width: "375px",
            height: "667px"
        },
        6: {
            name: "iPhone SE 2nd geniOS 14.6",
            width: "375px",
            height: "667px"
        },
    },
    "tablet": {
        0: {
            name: "iPad",
            width: "810px",
            height: "1080px"
        },
        1: {
            name: "iPad Pro (11-inch)",
            width: "834px",
            height: "1194px"
        },
        2: {
            name: "iPad Pro (12.9-inch)",
            width: "1024px",
            height: "1366px"
        },
        3: {
            name: "Kindle Fire HDX",
            width: "800px",
            height: "1280px"
        }
    }
};

function loadSite() {
    var iframeVar = 0;
    var restVar = 0;
    var site = document.querySelector(".input").value == "" ? "https://www.wikipedia.org" : document.querySelector(".input").value;
    for (type in devices) {
        for (item in devices[type]) {
            let clone = type == "tablet" ? document.getElementById("tpl-t").content.cloneNode(true) : document.getElementById("tpl").content.cloneNode(true);
            document.querySelector("." + type).appendChild(clone);
            document.getElementsByClassName("device")[restVar].innerHTML = devices[type][item].name;
            document.getElementsByClassName("wah")[restVar].innerHTML = `Width: ${devices[type][item].width} - Height: ${devices[type][item].height}`;
            restVar++
            document.getElementsByTagName("iframe")[iframeVar].width = devices[type][item].width;
            document.getElementsByTagName("iframe")[iframeVar].height = devices[type][item].height;
            document.getElementsByTagName("iframe")[iframeVar].src = site;
            iframeVar++
            document.getElementsByTagName("iframe")[iframeVar].width = devices[type][item].height;
            document.getElementsByTagName("iframe")[iframeVar].height = devices[type][item].width;
            document.getElementsByTagName("iframe")[iframeVar].src = site;
            iframeVar++
        }
    }
}

document.querySelector(".input").addEventListener("keydown", (key) => {
    if (key.keyCode == "13") {
        loadSite()
    }
});

const display = {
    "galaxy": true,
    "iphone": true,
    "tablet": true
}

document.querySelectorAll(".btn").forEach(btn =>
    btn.addEventListener("click", () => {
       if (display[btn.id]) {
           document.querySelector("."+btn.id).style.display = "none";
           display[btn.id] = false;
       } else  {
        document.querySelector("."+btn.id).style.display = "inherit";
        display[btn.id] = true;
    }
    }),
);

loadSite();