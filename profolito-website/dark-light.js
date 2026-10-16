
// light mode function
function lightFunction () {
    // root
    const root = document.documentElement;
//current --bg value 
    const currentBg = getComputedStyle(root).getPropertyValue('--bg').trim();
// current theme check
    let lightMode = true
 // conditional check    
    if (currentBg === 'beige') {
    lightMode = true;
}
    else {
    lightMode = false;
}
    
    if (lightMode) {
    // DARK MODE
    root.style.setProperty('--bg', '#222');
    root.style.setProperty('--text', 'white');
    root.style.setProperty('--section-bg', '#333');
    root.style.setProperty('--border', '#555');
} else {
    // LIGHT MODE
    root.style.setProperty('--section-bg', 'beige');
    root.style.setProperty('--bg', 'beige');
    root.style.setProperty('--text', 'black');
    root.style.setProperty('--border', 'rgb(180, 170, 160)');
}}

//grabs button 
const btn = document.querySelector('button');

btn.onclick = lightFunction;