'use strict';

function collectSameElements(collectionA, objectB) {
  var res=[];
  var k=0;
  for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<objectB.value.length;j++){
      if(collectionA[i].key==(objectB.value[j])){
        res[k++]=collectionA[i].key;
      }
    }
  }
  return res;
}
