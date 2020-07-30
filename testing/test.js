/*
		Практические задачи
Задача №1
Реализуйте функцию parseUrl(string), которая будет парсить URL строку и возвращать объект с распарсенными данными. Пример:
*/
let a = parseUrl('http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo')

// Вернет объект, в котором будут следующие свойства:
/*
console.log( a.href == "http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo" )
console.log( a.hash == "#foo" )
console.log( a.port == "8080" )
console.log( a.host == "tutu.ru:8080" )
console.log( a.protocol == "http:" )
console.log( a.hostname == "tutu.ru" )
console.log( a.pathname == "/do/any.php" )
console.log( a.origin == "http://tutu.ru:8080" )
*/
/*
Желательно задачу решить как можно меньшим числом строк кода и затратив на реализацию минимум времени.
*/
function parseUrl(string){
	function a(string){
		this.href = string;
		this.hash = string.match(/#[a-z]*$/)[0];
		this.port = string.match(/:[0-9]{2,4}\//)[0];
	}
	var x = new a(string);
	return x;
}
let my = parseUrl('http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo');
console.log(`new lineee________________`)
console.log(my.href);
console.log(my.hash);
console.log(my.port);