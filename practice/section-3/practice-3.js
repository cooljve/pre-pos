'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC=[];
  var obj={};
  var k=0;
  for(var a of collectionA){
    if(obj[a]){
      obj[a]++;
    }else{
      obj[a]=1;
    }
  }
  for(var o in obj){
    var n={};
    n['key']=o;
    n['count']=obj[o];
    collectionC.push(n);
  }
  var res=[];
  for(var c of collectionC){
    for(var b of objectB.value){
      if(c.key==b){
        for(var i=parseInt(c.count/3);i>0;i--){
          c.count--;
        }
      }
    }
    res.push(c);
  }
  return res;
}
