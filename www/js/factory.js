angular.module('factor',['ngResource'])

.factory('Movie', function($resource){
  return $resource('http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id',
    { id : '@_id'},
    {update:{
      method:'PUT'
    }
  });
})
.factory('AccessService_Factory', function($resource){
	return $resource('http://199.180.186.183/rest/access/initialData',{ },{
	//return $resource('http://192.168.34.21/Modipay/rest/access/initialData', { }, {
		update: {
			method:'GET',
			headers: {'Authorization':'Basic MzcyNDI4OnZhbGxlMTIzNA=='}
 			}
 });
});