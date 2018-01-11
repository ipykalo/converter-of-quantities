window.onload = function(){

	var sel1 = document.getElementById('sel1');
	var sel2 = document.getElementById('sel2');
	var disp1 = document.getElementById('disp1');
	var disp2 = document.getElementById('disp2');


	sel1.onclick = function(){
		switch(sel1.value){
			case 'hour':
				disp1.innerHTML = '1';
				sel2.value = 'minute';
				disp2.innerHTML = '60';
				break;
			case 'minute': 
				disp1.innerHTML = '1';
				sel2.value = 'second';
				disp2.innerHTML = '60';
				break;
			case 'second':
				disp1.innerHTML = '1';
				sel2.value = 'milisecond';
				disp2.innerHTML = '60';
				break;
		};
	};









};