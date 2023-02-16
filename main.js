let form = document.querySelector("form");


form.addEventListener("submit", function(e){
  e.preventDefault();
  
  let text = Number(document.getElementById("temp").value);
  let result = document.getElementById("result");

  if(text < 0){
     result.innerHTML = "Freezing weather";
	 result.style.color="blue";
	 }
   else if(text >=0 && text<10){
       result.innerHTML = "Very cold weather";
	    result.style.color="skyblue";
	   }
   else if(text>=10 && text<20){
      result.innerHTML = "Cold weather";
	   result.style.color="yellow";
	}
	else if(text>=20 && text<30){
	    result.innerHTML = "Normal weather";
		 result.style.color="green";
	}
	else if(text>=30 && text <40){
	     result.innerHTML = "Hot weather";
		  result.style.color="orange";
	}
	else{
	     result.innerHTML="Very hot weather";
		  result.style.color="red";
	}
     
});

