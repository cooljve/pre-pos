'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC=[];
  var obj={};
  for(var a of collectionA){
    if(a.indexOf('-')!=-1){
      var strs=a.split('-');
      var k=strs[0];
      var v=parseInt(strs[1]);
      if(obj[k]){
        obj[k]+=v;
      }else{
        obj[k]=v;
      }
    }else{
      if(obj[a]){
        obj[a]++;
      }else{
        obj[a]=1;
      }
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
