let c = (x) => console.log(x);

function pyramid(num){
	let space="";
	let m; 
	let lengthOfFirstLine;
	let numberOfSpaces; 		//Total spaces in a line
	let spacesBeforeString;  		//the number of spaces before a string prints 
	let string = "";  // string will hold the  
	let LengthLastLine = (num*2)-1;  // length of the lastline

	while(num > 0){
		string+="#";
		if (string.length < LengthLastLine){
			numberOfSpaces = (LengthLastLine - string.length);
			spacesBeforeString = numberOfSpaces / 2;
			spacesBeforeString = spacesBeforeString;
			
		}
		c(spacesBeforeString);
		c(numberOfSpaces);
		c(spacesBeforeString)
		for (let i = 0; i < spacesBeforeString; i++){
			space += " ";
		}
		
		if (string.length == LengthLastLine){
			console.log(string)
		}else{
			console.log(space + string);
		}
		space = "";
		string = string + "#";
		num--;
	}
	
	if (num< 0){
		num = Math.sqrt(num*num);
	}
	
	m = (num*2)-1;// length of the lastline
	lengthOfFirstLine = m;
	
	while (num > 0){
		
		
		for (let i = 0; i < lengthOfFirstLine; i++){
			string+= "#";
			
		}
		if (string.length < m){
			numberOfSpaces = m - string.length;
			spacesBeforeString = numberOfSpaces / 2;
		}
		
		for (let i = 0; i < spacesBeforeString; i++ ){
			space += " ";
		}
		if (string.length==m){
			console.log(string)
		}else{
			console.log(space+string);
			
		}

		string = "";
		space = "";
		lengthOfFirstLine = lengthOfFirstLine - 2;
		num--;
				
	}			
	
}

pyramid(-4);
pyramid(4);
			
