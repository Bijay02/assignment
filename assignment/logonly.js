var psum = 0;
var ssum = 0;
matrix = [[1,-1,-1],[-1,1,-1],[-1,-1,1]];
for (let i =0; i<matrix.length;i++){
    
     psum += matrix[i][i];
     ssum += matrix[i][matrix.length-1-i];
    

}
console.log(psum);
console.log(ssum);