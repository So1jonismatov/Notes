document.addEventListener("click",(event)=>{
    const el = event.target.classList;
    const area = document.getElementById('area');
    const color = document.getElementById('color-p').value;
    if(el.contains("plus")){
        const note = document.createElement("div");
        note.classList.add("note");
        note.innerHTML = `<div class="notch" style = "background-color: ${color};"></div>
          <button class="x">X</button>
          <textarea class="txt" wrap="hard"></textarea>`;
        area.appendChild(note);
    }else if(el.contains("x")){
        area.removeChild(event.target.parentNode);
    }
});

let startMouse = {
    x : null,
    y : null
};

let siljituvchiElement = {
    dom : undefined,
    x : null,
    y : null
}
let offsetMouse = {
    x : null,
    y : null
}


document.addEventListener("mousedown",(event)=>{
    const el = event.target;
    if(el.classList.contains('notch')){
        el.style.cursor = 'grabbing';
        startMouse.x = event.clientX;
        startMouse.y = event.clientY;
        siljituvchiElement.dom = el.parentNode;
        siljituvchiElement.x = el.parentNode.offsetLeft;
        siljituvchiElement.y = el.parentNode.offsetTop;
        offsetMouse.x = startMouse.x - siljituvchiElement.x;
        offsetMouse.y = startMouse.y - siljituvchiElement.y;
    }
});

document.addEventListener("mouseup",(event)=>{
    const el = event.target;

    startMouse.x = null;
    startMouse.y = null;
    
    siljituvchiElement.dom = undefined;
    siljituvchiElement.x = null;
    siljituvchiElement.y = null;

    offsetMouse.x = null;
    offsetMouse.y = null;

    if(el.classList.contains('notch')){
        el.style.cursor = 'grab';
    }
});

document.addEventListener("mousemove",(event)=>{
    console.log(event);
    if (siljituvchiElement.dom === undefined) return;
    siljituvchiElement.dom.style.top = event.clientY - offsetMouse.y + "px";
    siljituvchiElement.dom.style.left = event.clientX - offsetMouse.x + "px";
});
