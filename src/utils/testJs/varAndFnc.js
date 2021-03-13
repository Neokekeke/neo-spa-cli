// 变量和函数提升
// 函数声明提升后始终在变量提升后面

console.log(a); // a()
function a() {
    console.log('函数a');
}
var a = '321';

var b;
for(var b = 1; b < 5; b += 1) {
    console.log(b)
}

var obj = {
    nameaaa: '123',
    getName: () => console.log(this.nameaaa, this)
}

obj.getName();