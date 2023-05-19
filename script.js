//your JS code here. If required.
let color = document.querySelector('#colorSelect');
let selectedColor="";
color.onchange = (ev) =>{
  const index = color.selectedIndex;
  selectedColor = color.options[index];
}
    
document.querySelector('input').addEventListener('click',()=>{
 selectedColor.remove();
});