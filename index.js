const selector = (x)=>{
    return document.getElementById(x);
}
const show_btn = selector('show-btn');
const hide_btn = selector('hide-btn');
const wrapper = selector('m-nav-wrapper');

show_btn.addEventListener('click', ()=>{
    wrapper.style.display = "block";
    hide_btn.style.display = "block";
    show_btn.style.display = "none";
});

hide_btn.addEventListener('click', ()=>{
    wrapper.style.display = "none";
    show_btn.style.display = "block";
    hide_btn.style.display = "none";
});
wrapper.addEventListener('click', ()=>{
    wrapper.style.display = "none";
    hide_btn.style.display = "none";
    show_btn.style.display = "block";
});