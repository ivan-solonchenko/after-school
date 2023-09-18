const findShort = (string) => {
    const res = string.split(' ').sort((a, b) => a.length - b.length)[0];

    console.log(res);
};

findShort('The smallest word in sentence'); // 'in'
findShort('Just test string'); // 'Just'
