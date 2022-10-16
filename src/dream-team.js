const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members))
  {
    return false;
  }

  console.log(members);

  let answer = "";
  for(let j = 0; j< members.length; j++)
  {
    if(members[j] != null && typeof(members[j]) === 'string')
    {
      members[j] = members[j].trim().toUpperCase();
    }
  }

  members = members.sort();
  for(let i = 0; i < members.length; i++)
  {
    if(members[i] != null && typeof(members[i]) === 'string')
    {
      answer += members[i][0];
    }
  }

  console.log(answer);

  return answer.toUpperCase().trim();
  }

module.exports = {
  createDreamTeam
};
