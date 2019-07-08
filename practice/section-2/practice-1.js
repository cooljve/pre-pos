'use strict';

function countSameElements(collection) {
  var res=[];
  var obj={};
  var k=0;
  for(var c of collection){
    if(obj[c]){
      obj[c]++;
    }else{
      obj[c]=1;
    }
  }
  for(var o in obj){
    var n={};
    n['key']=o;
    n['count']=obj[o];
    res[k++]=n;
  }
  return res;
}
