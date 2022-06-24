import {convexHall} from './geometry.js'

var points = [[0,0],[1,0],[1,1],[0,1],[.5,.5],[-1,-1]];
var convex = convexHall(points)
console.log(convex)
