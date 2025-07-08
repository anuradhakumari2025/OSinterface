function timeDate() {
  let time = document.querySelector(".time .timeText");
  let dateText = document.querySelector(".time .dateText");
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  time.innerHTML = `${hours > 12 ? hours - 12 : hours}:${String(
    minutes
  ).padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;
  let month = today.getMonth();
  let year = today.getFullYear();
  let date = today.getDate();
  dateText.innerHTML = `${month + 1}/${date}/${year}`;
}
setInterval(() => {
  timeDate();
}, 1000);
let overlayNotificationDiv = document.querySelector(
  ".notification .overlayNotification"
);
let isOpen = false;

//Notification open div
function notificationOpen() {
  let notificationIcon = document.querySelector(".notification i");
  notificationIcon.addEventListener("click", () => {
    if (!isOpen) {
      overlayNotificationDiv.classList.add("active");
      isOpen = true;
    } else {
      overlayNotificationDiv.classList.remove("active");
      isOpen = false;
    }
  });
}
notificationOpen();

//brightness Controller
function brightnessController() {
  let brightnessSlider = document.querySelector(
    ".brightness #brightnessSlider"
  );
  let nightLight = document.querySelector(
    ".right .notification .overlayNotification .nightLight"
  );
  let overlay = document.querySelector(".filter-overlay");
  brightnessSlider.addEventListener("input", () => {
    const value = brightnessSlider.value;
    overlay.style.backdropFilter = `brightness(${value}%)`;
  });

  //Night light controller
  let toggle = false;
  nightLight.addEventListener("click", () => {
    if (!toggle) {
      nightLight.style.backgroundColor = "teal";
      overlay.style.backgroundColor = "rgb(127 89 42 / 20%)"; // soft orange filter

      toggle = true;
    } else {
      // main.classList.remove("night-active");
      overlay.style.backgroundColor = "rgba(255, 153, 0, 0)";

      toggle = false;
      nightLight.style.backgroundColor = "";
    }
  });
}
brightnessController();

let windowOpen = document.querySelector(".window");

//function for This PC
function thisPCfunctionality() {
  let thisPC = document.querySelector(".thisPC");
  let thisPCwindow = document.querySelector(".thisPCwindow");
  thisPC.addEventListener("dblclick", () => {
    thisPCwindow.style.display = "block";
    document
      .querySelector(".thisPCwindow .nav .icons .close")
      .addEventListener("click", () => {
        thisPCwindow.style.display = "none";
      });
    let maximize = false;
    const maximizeDiv = document.querySelector(
      ".thisPCwindow .nav .icons .maximize"
    );
    maximizeDiv.addEventListener("click", () => {
      const maximizeIcon = document.querySelector(
        ".thisPCwindow .nav .icons .maximize i"
      );

      const sidebar = document.querySelector(".thisPCwindow .five .sidebar");
      const thisPCcontent = document.querySelector(
        ".thisPCwindow .five .right"
      );
      if (!maximize) {
        thisPCwindow.style.width = "100%";
        thisPCwindow.style.top = "0";
        thisPCwindow.style.left = "0";
        thisPCwindow.style.height = "100%";
        maximizeIcon.classList.remove("ri-square-line");
        maximizeIcon.classList.add("ri-file-copy-line");
        sidebar.style.width = "12%";
        thisPCcontent.style.width = "88%";
        maximize = true;
      } else {
        thisPCwindow.style.width = "40rem";
        thisPCwindow.style.top = "10%";
        thisPCwindow.style.left = "20%";
        thisPCwindow.style.height = "30rem";
        maximizeIcon.classList.remove("ri-file-copy-line");
        maximizeIcon.classList.add("ri-square-line");
        thisPCcontent.style.width = "75%";
        sidebar.style.width = "20%";
        maximize = false;
      }
    });
  });
  const nav = document.querySelector(".thisPCwindow .nav");

  nav.addEventListener("mousedown", (e) => {
    const isSpan = e.target.closest("span");
    const isWindowControls = e.target.closest(".icons");

    if (!isSpan && !isWindowControls) {
      dragElement(thisPCwindow);
    }
  });
}
thisPCfunctionality();

//function for file explorer
function fileExplorerFunctionality() {
  let fileExplorer = document.querySelector(".fileExplorer");
  let fileExplorerWindow = document.querySelector(".fileExplorerWindow");

  fileExplorer.addEventListener("dblclick", () => {
    fileExplorerWindow.style.display = "block";
    const close = document.querySelector(
      ".fileExplorerWindow .nav .icons .close"
    );

    close.addEventListener("click", () => {
      fileExplorerWindow.style.display = "none";
    });
    let maximize = false;
    const maximizeDiv = document.querySelector(
      ".fileExplorerWindow .nav .icons .maximize"
    );

    maximizeDiv.addEventListener("click", () => {
      const maximizeIcon = document.querySelector(
        ".fileExplorerWindow .nav .icons .maximize i"
      );

      const sidebar = document.querySelector(
        ".fileExplorerWindow .five .sidebar"
      );
      const fileExplorerContent = document.querySelector(
        ".fileExplorerWindow .five .right"
      );
      if (!maximize) {
        maximizeIcon.classList.remove("ri-square-line");
        maximizeIcon.classList.add("ri-file-copy-line");
        fileExplorerWindow.style.width = "100%";
        fileExplorerWindow.style.top = "0";
        fileExplorerWindow.style.left = "0";
        fileExplorerWindow.style.height = "100%";
        sidebar.style.width = "12%";
        fileExplorerContent.style.width = "88%";
        maximize = true;
      } else {
        maximizeIcon.classList.remove("ri-file-copy-line");
        maximizeIcon.classList.add("ri-square-line");
        fileExplorerWindow.style.width = "40rem";
        fileExplorerWindow.style.top = "10%";
        fileExplorerWindow.style.left = "20%";
        fileExplorerWindow.style.height = "30rem";
        fileExplorerContent.style.width = "75%";
        sidebar.style.width = "20%";
        maximize = false;
      }
    });
  });
  const nav = document.querySelector(".fileExplorerWindow .nav");

  nav.addEventListener("mousedown", (e) => {
    const isSpan = e.target.closest("span");
    const isWindowControls = e.target.closest(".icons");

    if (!isSpan && !isWindowControls) {
      dragElement(fileExplorerWindow);
    }
  });
}
fileExplorerFunctionality();

function dragElement(elem) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elem.id + "Header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elem.id + "Header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elem.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elem.style.top = elem.offsetTop - pos2 + "px";
    elem.style.left = elem.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//change wallpaper
const wallpapersLink = [
  "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1507187632231-5beb21a654a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8MHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1690068867587-d7572f95ff33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGxhcHRvcCUyMHRocmVlJTIwZCUyMHdhbGxwYXBlcnxlbnwwfDB8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1670292781125-f4192924f3e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwdGhyZWUlMjBkJTIwd2FsbHBhcGVyfGVufDB8MHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1685916643856-393b0119eac6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDA%3D",
  "./assets/window.jpg",
];

const main = document.querySelector("main");
const contextMenu = document.querySelector(".contextMenu");

// Show context menu on right click
main.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  contextMenu.style.display = "block";
  contextMenu.style.left = `${e.clientX}px`;
  contextMenu.style.top = `${e.clientY}px`;
});

document.addEventListener("click", (e) => {
  // Check if click target is NOT inside the context menu
  if (!contextMenu.contains(e.target)) {
    contextMenu.style.display = "none"; // or use a class to hide it
  }
});

main.addEventListener("click", (e) => {
  // Check if click target is NOT inside the context menu
  if (!overlayNotificationDiv.contains(e.target)) {
    overlayNotificationDiv.classList.remove("active");
    isOpen = false;
  }
});

function wallpaperFunctionality() {
  const footer = document.querySelector("footer");
  const changeWallpaper = document.querySelector(
    ".contextMenu .changeWallpaper"
  );
  let count = JSON.parse(localStorage.getItem("wallpaperIndex") || 0);
  const currentWallpaper = wallpapersLink[count];

  // ✅ Preload current wallpaper first
  const img = new Image();
  img.src = wallpapersLink[count];
  img.onload = () => {
    main.style.backgroundImage = `url(${currentWallpaper})`;
    // Now show the main UI after background is ready
    loader.style.display = "none";
    main.style.display = "block";
    footer.style.display = "flex";
  };

  // ✅ Preload all wallpapers in background (optional but useful for smooth switching)
  wallpapersLink.forEach((src) => {
    const preloadImg = new Image();
    preloadImg.src = src;
  });

  changeWallpaper.addEventListener("click", () => {
    count = (count + 1) % wallpapersLink.length;
    main.style.backgroundImage = `url(${wallpapersLink[count]})`;
    localStorage.setItem("wallpaperIndex", JSON.stringify(count));
    contextMenu.style.display = "none";
  });
}
// wallpaperFunctionality();

const refresh = document.querySelector(".contextMenu .refresh");
refresh.addEventListener("click", () => {
  location.reload();
  contextMenu.style.display = "none";
});

function newFolderFunctionality() {
  const newFolder = document.querySelector(".contextMenu .newFolder");
  let folders = JSON.parse(localStorage.getItem("folders") || "[]");

  // Create a new folder with default name and position
  function createFolder(name = "New Folder", x = 60, y = 10) {
    const folder = document.createElement("div");
    folder.classList.add("newFolder");
    folder.style.position = "absolute";
    folder.style.left = x + "px";
    folder.style.top = y + "px";
    folder.innerHTML = `
    <img src="./assets/newFolder.png" alt="" />
    <p>${name}</p>
  `;

    main.appendChild(folder);

    // Make it draggable
    let offsetX,
      offsetY,
      isDragging = false;

    folder.addEventListener("mousedown", (e) => {
      isDragging = true;
      offsetX = e.clientX - folder.getBoundingClientRect().left;
      offsetY = e.clientY - folder.getBoundingClientRect().top;
      folder.style.zIndex = 10; // bring to front
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      folder.style.left = e.clientX - offsetX + "px";
      folder.style.top = e.clientY - offsetY + "px";
    });

    document.addEventListener("mouseup", () => {
      if (!isDragging) return;
      isDragging = false;
      folder.style.zIndex = "";

      // Update position in localStorage
      const index = folders.findIndex(
        (f) => f.name === name && f.x === x && f.y === y
      );
      if (index !== -1) {
        folders[index].x = parseInt(folder.style.left);
        folders[index].y = parseInt(folder.style.top);
        localStorage.setItem("folders", JSON.stringify(folders));
      }
    });

    folder.addEventListener("click", () => {
      const p = folder.querySelector("p");
      const input = document.createElement("input");
      input.style = `
    font-size: 0.6rem;
    text-align: center;
    border: none;
    outline: none;
    background: transparent;
    color: white;
    font-weight: 400;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0;
    margin: 0;
  `;
      input.type = "text";

      folder.replaceChild(input, p);
      input.focus();

      input.addEventListener("blur", () => {
        const newName = input.value.trim() || "New Folder";
        const newP = document.createElement("p");
        newP.textContent = newName;
        folder.replaceChild(newP, input);

        // Update folder name in localStorage
        const index = folders.findIndex((f) => f.x === x && f.y === y);
        if (index !== -1) {
          folders[index].name = newName;
          localStorage.setItem("folders", JSON.stringify(folders));
        }
      });

      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          input.blur();
        }
      });
    });
  }

  newFolder.addEventListener("click", () => {
    const spacing = 80; // pixels between folders
    const count = folders.length;
    const x = 60 + ((count * spacing) % (window.innerWidth - 100));
    const y =
      10 + Math.floor((count * spacing) / (window.innerWidth - 100)) * spacing;

    folders.push({ name, x, y });
    localStorage.setItem("folders", JSON.stringify(folders));
    createFolder("New Folder", x, y);
    contextMenu.style.display = "none";
  });

  // ⬇️ Load folders on page load
  window.addEventListener("DOMContentLoaded", () => {
    folders.forEach(({ name, x, y }) => {
      createFolder(name, x, y);
    });
  });
}
newFolderFunctionality();

function startMenuOpen() {
  let start = document.querySelector("footer .left .start i");
  let startMenu = document.querySelector("footer .left .start .start-menu");
  start.addEventListener("click", () => {
    startMenu.classList.add("active");
    main.addEventListener("click", (e) => {
      // Check if click target is NOT inside the context menu
      if (!startMenu.contains(e.target)) {
        startMenu.classList.remove("active");
      }
    });
  });
}
startMenuOpen();

function vsCodeFunctionality() {
  let vsCodeDiv = document.querySelector("footer .left .vsCode");
  let vsCodeWindow = document.querySelector("footer .left .vsCode .vscode-ui");
  let topBar = document.querySelector(
    "footer .left .vsCode .vscode-ui .top-bar"
  );

  vsCodeDiv.addEventListener("dblclick", () => {
    vsCodeWindow.style.display = "flex";
  });

  let close = document.querySelector(
    "footer .left .vsCode .vscode-ui .top-bar .window-controls .close"
  );

  close.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent bubbling up to vsCodeDiv
    vsCodeWindow.style.display = "none";
  });
  let maximize = document.querySelector(
    "footer .left .vsCode .vscode-ui .top-bar .window-controls .maximize"
  );

  let maximizeIcon = document.querySelector(
    "footer .left .vsCode .vscode-ui .top-bar .window-controls .maximize i"
  );

  let isMaximize = false;
  maximize.addEventListener("click", (e) => {
    if (!isMaximize) {
      maximizeIcon.classList.remove("ri-square-line");
      maximizeIcon.classList.add("ri-file-copy-line");
      vsCodeWindow.style.width = "100%";
      vsCodeWindow.style.top = "0";
      vsCodeWindow.style.left = "0";
      vsCodeWindow.style.height = "92%";
      isMaximize = true;
    } else {
      maximizeIcon.classList.remove("ri-file-copy-line");
      maximizeIcon.classList.add("ri-square-line");
      vsCodeWindow.style.width = "40rem";
      vsCodeWindow.style.top = "10%";
      vsCodeWindow.style.left = "20%";
      vsCodeWindow.style.height = "30rem";
      isMaximize = false;
    }
  });

  topBar.addEventListener("mousedown", (e) => {
    const isMenu = e.target.closest(".menu");
    const isWindowControls = e.target.closest(".window-controls");

    if (!isMenu && !isWindowControls) {
      dragElement(vsCodeWindow);
    }
  });
}
vsCodeFunctionality();

//Run code in vs code
const runBtn = document.querySelector(".vscode-ui .main .editor .tabs .run");
const codeArea = document.querySelector(".vscode-ui .main .editor #code-area");
const output = document.querySelector("#terminalOutput");

runBtn.addEventListener("click", () => {
  const code = codeArea.value;
  let result = "";

  const originalConsoleLog = console.log;

  // Override console.log temporarily to capture output
  console.log = function (...args) {
    result += args.join(" ") + "\n";
  };

  try {
    eval(code); // ⚠️ Use only for controlled/test environments
  } catch (e) {
    result += "Error: " + e.message;
  }

  // Restore original console.log
  console.log = originalConsoleLog;

  output.textContent = result.trim() || " ";
});

function cameraFunctionality() {
  let cameraIcon = document.querySelector(".camera");
  let cameraUI = document.querySelector(".camera-ui");
  let close = document.querySelector(".camera-ui .nav .icons .close");
  const video = document.getElementById("video");
  const canvas = document.getElementById("canvas");
  const clickBtn = document.getElementById("clickPhoto");
  const capturedImage = document.getElementById("capturedImage");
  cameraIcon.addEventListener("click", () => {
    cameraUI.style.display = "flex";

    // Step 1: Request access to the camera
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch((err) => {
        alert("Camera access denied: " + err.message);
      });

    // Step 2: Click photo and show it
    clickBtn.addEventListener("click", () => {
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageDataURL = canvas.toDataURL("image/png");

      capturedImage.src = imageDataURL;
    });
  });

  close.addEventListener("click", () => {
    cameraUI.style.display = "none";

    // Stop the camera stream
    const video = document.getElementById("video");
    const stream = video.srcObject;

    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      video.srcObject = null;
    }
  });
}
cameraFunctionality();
