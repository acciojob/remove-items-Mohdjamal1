//your JS code here. If required.
let color = document.querySelector('#colorSelect');


    
document.querySelector('input').addEventListener('click',()=>{
  // Remove the selected options
	let selectedOptions = Array.from(color.selectedOptions);
  selectedOptions.forEach(function(option) {
    color.remove(option.index);
  });
});
