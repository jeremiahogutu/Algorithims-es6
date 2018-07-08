const convertHTML = (str) => {
    const newStr = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
    return newStr;
};

console.log(convertHTML("Dolce & Gabbana"));