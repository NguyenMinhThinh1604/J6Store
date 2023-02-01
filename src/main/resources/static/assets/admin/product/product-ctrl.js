app.controller("product-ctrl", function($scope, $http){
	$scope.items = [];
	$scope.cates = [];
	$scope.form = {};
	
	$scope.initialize = function() {
		//Load products
		$http.get("/rest/products").then(resp => {
			$scope.items = resp.data;
			$scope.items.forEach(item => item.createDate = new Date(item.createDate))
		});
		//Load categories
		$http.get("/rest/categories").then(resp => {
			$scope.cates = resp.data;
			
		});
		
	}
	
	//Khởi đầu
	$scope.initialize();
	
	//Xóa form
	$scope.reset = function() {
		
	}
	
	//Hiển thị lên form
	$scope.edit = function(item) {
		$scope.form = angular.copy(item);
		$(".nav-tabs a:eq(0)").tab('show')
	}
	
	//Thêm sản phẩm mới
	$scope.create = function() {
		
	}
	
	//Cập nhật sản phẩm
	$scope.update = function() {
		
	}
	
	//Xóa sản phẩm
	$scope.delete = function(item) {
		
	}
	
	//Upload hình
	$scope.imageChanged = function(files) {
		var data = new FormData();
		data.append('file', files[0]);
		$http.post('/rest/upload/images', data, {
			transformRequest: angular.identity,
			headers:{'Content-Type':undefined}
		}).then(resp => {
			$scope.form.image = resp.data.name;
			
		}).catch(error => {
			alert("Lỗi upload hình");
			console.log("Error", error);
		})
	}
});