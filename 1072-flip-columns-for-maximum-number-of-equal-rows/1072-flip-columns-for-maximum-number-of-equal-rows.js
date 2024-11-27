/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
  const numCols = matrix[0].length;
  let maxRows = 0;
  
  for (let currRow of matrix) {
      // Create flipped row
      const flippedRow = [];
      let identicalRowCt = 0;
      
      for (let el of currRow) {
          flippedRow.push(1 - el);
      }
      
      // Iterate through all rows in matrix again 
      // and compare each to currRow and flippedRow
      for (let compareRow of matrix) {
          // compareRow <-> currRow 
          let sameMatch = true;
          for (let i=0; i<numCols; i++) {
              if (currRow[i] !== compareRow[i]) {
                  sameMatch = false;
                  break;
              }
          }
          
          // compareRow <-> flippedRow
          let flipMatch = true;
          for (let j=0; j<numCols; j++) {
              if (flippedRow[j] !== compareRow[j]) {
                  flipMatch = false;
                  break;
              } 
          }
          if (sameMatch || flipMatch) identicalRowCt++;
      }
      
      // update maxIdenticalRows
      maxRows = Math.max(maxRows, identicalRowCt);
  }
  
  return maxRows;
};