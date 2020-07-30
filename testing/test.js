// Задача №2
function drawRating(vote) {
	if (vote >= 0 && vote <= 20) {
    	return '★☆☆☆☆';
	}
	else if (vote > 20 && vote <= 40) {
		return '★★☆☆☆';
	}
	else if (vote > 40 && vote <= 60) {
		return '★★★☆☆';
	}
	else if (vote > 60 && vote <= 80) {
		return '★★★★☆';
	}
	else if (vote > 80 && vote <= 100) {
		return '★★★★★';
	}
}
function myDrawRating(vote){
    let a = '★'.repeat(vote);//+ '☆'.repeat());
    return a;
}

console.log(`---------------------------`)

// Проверка работы результата
//for (let i = 0; i <= 100; i++) {    console.log(myDrawRating(i));}

console.log(drawRating(0) ); // ★☆☆☆☆
console.log(drawRating(1) ); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★
console.log('newline_____')
console.log(myDrawRating(0) ); // ★☆☆☆☆
console.log(myDrawRating(1) ); // ★☆☆☆☆
console.log(myDrawRating(50)); // ★★★☆☆
console.log(myDrawRating(99)); // ★★★★★

/*
Что можно улучшить? Как бы вы переписали функцию drawRating при условии что на вход функции drawRating должна приходить переменная vote, содержащая значение от 0 до 100. Интересует именно логика реализации функции, не визуальное отображение звезд.
*/