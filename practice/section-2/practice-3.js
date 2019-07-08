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
    }else if(c.indexOf(':')!=-1){
      var strs1=c.split(':');
      var k1=strs1[0];
      var v1=parseInt(strs1[1]);
      if(obj[k1]){
        obj[k1]+=v1;
      }else{
        obj[k1]=v1;
      }
    }else if(c.indexOf('[')!=-1){
      var k2=c.charAt(0);
      var v2=parseInt(c.substring(c.indexOf('[')+1,c.indexOf(']')));
      if(obj[k2]){
        obj[k2]+=v2;
      }else{
        obj[k2]=v2;
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
    n['name']=o;
    n['summary']=obj[o];
    res.push(n);
  }
  return res;
}
