let Studio = require('studio');

let services = Studio.services();

class Dummy{
  foo(){
    return services.Dummy.bar('foo').then((result)=>{
      console.log('SUCCESS');
      console.log(result);
    }).catch((err)=>{
      console.log('ERROR');
      console.log(err);
    });
  }
  bar(parameter){
    return parameter +' '+ 'bar';
  }
}

Studio.serviceClass(Dummy);
setInterval(()=>{
  services.Dummy.foo();
},1000);
