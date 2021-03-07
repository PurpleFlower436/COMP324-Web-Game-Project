<script> 

  // This is how we can generate random numbers using javascript
// Function to generate random number 
function randomNumber(min, max) { 
	min = Math.ceil(min); 
	max = Math.floor(max); 
	return Math.floor(Math.random() * (max - min + 1)) + min; 
} 

document.write("Random Number between 1 and 10: ") 

// Function call 
document.write( randomNumber(6, 10) ); 
</script>								 
