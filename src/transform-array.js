const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr) {
  if(!Array.isArray(arr))
  {
    throw Error("\'arr\' parameter must be an instance of the Array!");
  }

let array = arr;

  for(let i = 0; i< array.length; i++)
  {
    switch(array[i])
    {
      case '--discard-prev':
        if(i === 0)
        {
          array.splice(i,1);
          continue;
        }
        array.splice((i - 1),1);
        array.splice(i,1);
        i = 0;
        break;
      case '--discard-next':
        if(i === array.length - 1)
        {
          array.splice(i,1);
          continue;
        }
        array.splice((i + 1),1);
        array.splice(i,1);
        i= 0;
        break;
      case '--double-next':
        if(i === array.length - 1)
        {
          array.splice(i,1);
          continue;
        }
        array.splice(i,1, array[i + 1]);
        i = 0;
        break;
      case '--double-prev':
        if(i === 0)
        {
          arr.splice(i,1);
          continue;
        }
        arr.splice(i,1, arr[i - 1]);
        i = 0;
        break;
      default:
        break;
    }
  }
  
  return arr;
}

module.exports = {
  transform
};
