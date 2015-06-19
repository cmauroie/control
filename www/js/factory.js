angular.module('factor',['ngResource'])

.factory('Movie', function($resource){
  return $resource('http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id',
  
    { id : '@_id'},
    {update:{
      method:'PUT'
    }
  });
})
.config(function($httpProvider){ 
     //   $httpProvider.defaults.withCredentials = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With']; 

    })
.factory('AccessService_Factory', function($resource){
//	return $resource('http://199.180.186.183/rest/access/initialData',{ },{
	//return $resource('http://192.168.34.21/Modipay/rest/access/initialData/', { }, {
    console.log("AccessService_Factory");
    //return $resource('http://200.91.204.38:8080/servlet/center?data=flight', { }, {
    //return $resource('http://192.168.34.21/Modipay/rest/access/initialData', { }, {
      http://192.168.35.95:8080/servlet/
      return $resource('http://192.168.35.95:8080/servlet/center?data=flight', { }, {
  //  return $resource('http://192.168.34.21/servlet/center?data=flight', { }, {
		get: {
			method:'GET',
      //withCredentials:false, 
			headers:{
               //'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept, Authorization',
               //'Access-Control-Allow-Origin':'true',
               // 'Access-Control-Allow-Methods':'GET, POST PUT, DELETE, OPTIONS',
               // 'Access-Control-Allow-Credentials':'true',
               'Accept':'application/json',  
               'Cache-Control':'no-cache, no-store, must-revalidate',
               'Content-Type':'application/json',
               'Authorization':'12345'
             }
 			}
 }
 );
});

/*
'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      'Access-Control-Allow-Origin':'Context.Request.Headers["Origin"]',
      'Access-Control-Allow-Methods':'GET, POST PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Credentials':'true',



.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
}])


*/