'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var res=[];
  for(var a of collectionA){
    for(var b of objectB.value){
      if(a.key==b){
        for(var i=parseInt(a.count/3);i>0;i--){
          a.count--;
        }
      }
    }
    res.push(a);
  }
  return res;
}
