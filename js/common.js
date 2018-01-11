window.onload = function(){

	var quantity = document.getElementById('quantity');
	var selTime1 = document.getElementById('selTime1');
	var selTime2 = document.getElementById('selTime2');
	var selDistance1 = document.getElementById('selDistance1');
	var selDistance2 = document.getElementById('selDistance2');
	var dispTime1 = document.getElementById('dispTime1');
	var dispTime2 = document.getElementById('dispTime2');
	var dispDistance1 = document.getElementById('dispDistance1');
	var dispDistance2 = document.getElementById('dispDistance2');
	var time = document.getElementById('block-time');
	var distance = document.getElementById('block-distance');

	quantity.onclick = function(){
		if(quantity.value == 'time'){
			distance.style.display = 'none';
			time.style.display = 'block';
		}
		else if(quantity.value == 'distance'){
			time.style.display = 'none';
			distance.style.display = 'block';
		}
		else{
			distance.style.display = 'none';
			time.style.display = 'none';
		}

	};

	selTime1.onclick = function(){
		switch(selTime1.value){
			case 'hour':
				dispTime1.innerHTML = '1';
				selTime2.value = 'minute';
				dispTime2.innerHTML = '60';
				break;
			case 'minute': 
				dispTime1.innerHTML = '1';
				selTime2.value = 'second';
				dispTime2.innerHTML = '60';
				break;
			case 'second':
				dispTime1.innerHTML = '1';
				selTime2.value = 'milisecond';
				dispTime2.innerHTML = '60';
				break;
			default:
				dispTime1.innerHTML = '';
				selTime2.value = '';
				dispTime2.innerHTML = '';
		};
	};

	selDistance1.onclick = function(){
		switch(selDistance1.value){
			case 'kilometer':
				dispDistance1.innerHTML = '1';
				selDistance2.value = 'meter';
				dispDistance2.innerHTML = '1000';
				break;
			case 'meter': 
				dispDistance1.innerHTML = '1';
				selDistance2.value = 'centimeter';
				dispDistance2.innerHTML = '100';
				break;
			case 'centimeter':
				dispDistance1.innerHTML = '1';
				selDistance2.value = 'millimetre';
				dispDistance2.innerHTML = '10';
				break;
			default:
				dispDistance1.innerHTML = '';
				selDistance2.value = '';
				dispDistance2.innerHTML = '';
		};
	};









};