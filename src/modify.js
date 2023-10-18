const filterVipUsers = (users, vipUserIdsSet) => {
  const vipUserObjects = [];

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (vipUserIdsSet.has(user.id)) {
      vipUserObjects.push(user);
    }
  }

  return vipUserObjects;
};

const multiplicativeAverage = (nums) => {
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    product *= num;
  }

  return product / nums.length;
};

module.exports = {
  filterVipUsers,
  multiplicativeAverage,
};
