'use strict';

function countSameElements(collection) {
  var res=[];
  var obj={};
  for(var c of collection){
    if(c.indexOf('-')!=-1){
      var strs=c.split('-');
      var k=strs[0];
      var v=parseInt(strs[1]);
      if(obj[k]){
        obj[k]+=v;
      }else{
        obj[k]=v;
      }
    }else{
      if(obj[c]){
        obj[c]++;
      }else{
        obj[c]=1;
      }
    }
  }
  for(var o in obj){
    var n={};
    n['key']=o;
    n['count']=obj[o];
    res.push(n);
  }
  return res;
}
