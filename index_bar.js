let Studio = require('studio');
let StudioCluster = require('studio-cluster');

Studio.use(StudioCluster({rpcPort:10000}));

class Dummy{
  bar(parameter){
    return parameter +' '+ 'bar';
  }
}

Studio.serviceClass(Dummy);
