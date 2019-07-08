'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var res=[];
  var k=0;
  for(var a of collectionA){
    for(var b of objectB.value){
      if(a.key==b){
        a.count--;
      }
    }
    res.push(a);
  }
  return res;
}
