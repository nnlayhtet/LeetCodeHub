/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    
    // Create arrays for rows and cols that contain a zero
    const zeroRows = new Array(m).fill(false); // O(m)
    const zeroCols = new Array(n).fill(false); // O(n)
    
    //1st pass: For each element, find occurring zeroes in rows and cols
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (matrix[r][c] === 0) {
                zeroRows[r] = true;
                zeroCols[c] = true;
            }
        }
    }    
    
    //2nd pass: Modify matrix and change elements to zero
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (zeroRows[r] || zeroCols[c]) {
                matrix[r][c] = 0;
            }
        }
    } 
    
};