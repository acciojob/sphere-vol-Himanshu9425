function volume_sphere() {
    //Write your code here
	let r1=parseInt(document.querySelector("#radius").value);
	let v = document.querySelector("#volume");

	if(isNaN(r1) || r1<0){
      v.value=NaN;
	}
	else{
		let v1=((4/3)*Math.PI*r1*r1*r1).toFixed(4);
			
	v.value=v1;
	}
	
return false;
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
