// print square
function square(num, charector){
    let string ="";
    const column = num;
    
  
    for (let i = 0 ; i < num; i++){        //external loop for rows
    	string = "";                       // empty the string variable
      for (let j = 0; j < column ; j++){  // add specific charectors for the column to thi string variable
        if (charector){
        	string += charector;
        }
        if (!charector){
        	string += "#" ;
      }
    }
    console.log(string);		// print column
  }
}

square(4,);
