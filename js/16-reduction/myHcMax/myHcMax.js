/*
var input = {
	type: "maximize",
	objective : "x1 + 2x2 - x3",
	constraints : [
		"2x1 + x2 + x3 <= 14",
		"4x1 + 2x2 + 3x3 <= 28",
		"2x1 + 5x2 + 5x3 <= 30"
	]
};
*/
function height(x) {
    let r1 = 2*x[1]+x[2]+x[3]-14
    let r2 = 4*x[1]+x[2]+3*x[3]-28
    let r3 = 2*x[1]+5*x[2]+5*x[3]-30
    let p1 = (r1>0)?r1:0
    let p2 = (r2>0)?r2:0
    let p3 = (r3>0)?r3:0
    return x[1]+2*x[2]-x[3] - 100*(p1+p2+p3)
}