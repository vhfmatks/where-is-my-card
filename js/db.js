
// var database = firebase.database();
function writeMerInfo(merNm, merAddr, merPayMthd, x, y, desc , callback){
    var newMerKey = firebase.database().ref().child('merInfo').push().key;

    var position = { 'y' : y, 'x':x}
    // new kakao.maps.LatLng(
    //     result[0].y, result[0].x
    // );
    var merData = {
        // id : newMerKey,
        merNm : merNm,
        merAddr : merAddr,
        merPayMthd : merPayMthd,
        position : position,
        desc : desc 
    };
    var updates = {};
    updates['/merInfo/'+newMerKey] = merData;
    // updates['/merInfo/'] = merData;
    firebase.database().ref().update(updates).then(callback('성공'));
    // callback('성공');
}