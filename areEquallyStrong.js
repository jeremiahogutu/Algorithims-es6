const areEquallyStrong = (yourLeft, yourRight, friendsLeft, friendsRight) => {
    const yourStrongest = Math.max(yourLeft, yourRight);
    const yourWeakest = Math.min(yourLeft, yourRight);
    const friendStrongest = Math.max(friendsLeft, friendsRight);
    const friendWeakest = Math.min(friendsRight, friendsLeft);

    return yourStrongest===friendStrongest && yourWeakest===friendWeakest;
};

console.log(areEquallyStrong(15,10,15,9));