function theBeatlesPlay(arrMusicians, arrInstruments) {
    var newArray = [];
    for (var i = 0; i < arrMusicians.length; i++) {
        newArray[i] = arrMusicians[i] + ' plays ' + arrInstruments[i];
    }
    return newArray;
};

function johnLennonFacts(array) {
    var count = 0;
    while (array.length > 0) {
        array[count] += '!!!';
        count += 1;
    }
    return array;
}
