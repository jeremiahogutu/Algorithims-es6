const sortByHeight = (a) => {

    const tempArray = a.filter(x => x != -1).sort((a,b) => (a - b));

    let arrayIndex = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] != -1) {
            a[i] = tempArray[arrayIndex];
            arrayIndex++
        }
    }

    console.log(tempArray)
};


sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);