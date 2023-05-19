//your JS code here. If required.
let color = document.querySelector('#colorSelect');
let selectedOptions = Array.from(color.selectedOptions);

    
document.querySelector('input').addEventListener('click',()=>{
  // Remove the selected options
  selectedOptions.forEach(function(option) {
    color.remove(option.index);
  });
});
