const orbitalPeriod = (arr) => {
    let GM = 398600.4418;
    let earthRadius = 6367.4447;
    return arr.reduce((acc, obj) => {
        let orbPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius+obj.avgAlt,3)/GM));
        acc.push({name: obj.name, orbitalPeriod: orbPeriod});
        return acc;
    }, []);
};

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);