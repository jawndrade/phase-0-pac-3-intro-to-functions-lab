function shout(string){
    // todo
};
function shout(string){
    return string.toUpperCase();
};
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log('HELLO')
    return string.toUpperCase();
}
function logWhisper(string){
    console.log('hello')
    return string.toLowerCase();
}
function sayHiToHeadphonedRoommate(salutation){
    let didNotHear = "I can't hear you!";
    let enthusiasticYes = "YES INDEED!";
    let moderateYes = "I would love to!";
    if (salutation.toLowerCase(salutation) === salutation) {
        return didNotHear;
    } else if (salutation.toUpperCase(salutation) === salutation) {
        return enthusiasticYes;
    } else if ("Let's have dinner together!" === salutation) {
        return moderateYes
    }
}