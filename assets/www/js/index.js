var displayPic = function(){}

displayPic.prototype = {

		busyTime: 1000,
		splashTime:3000,


		initialize: function() {
			console.log("Application Initialized");
			this.bindEvents();
			this.initPageEvents();
		},

		bindEvents: function() {
			var self = this;
			console.log("Bind Events");
			document.addEventListener("deviceready", this.onDeviceReady, false);
		},

		onDeviceReady: function(){
			console.log("Device is Ready");
		},

		initPageEvents: function(){
			var self = this;
			console.log("init Page Events");
			window.setTimeout(function () {
				self.initHome.call(this,self);
			}, this.splashTime);
		},

		initHome : function(self,e){
			if (!self.login) {
				$.mobile.changePage("#home", { transition: "flip" });
			}
		},

		fauxAjax : function fauxAjax(func, text, thisObj) {
			$.mobile.loading('show', { theme: 'a', textVisible: true, text:text });
			window.setTimeout(function () {
				$.mobile.loading('hide');
				func();

			}, this.busyTime);
		},


		/*handleLogOn : function (ff, success) {
		var self = this;
		if (success) {
			_ffNum = ff;
			$.mobile.changePage('#home', { transition: 'slide' });
			//self.getDataforFF(_ffNum,self.handleDataForFF);
		}
	},*/

		/*getDataforFF : function(id, callback) {
		var self = this;
		self.fauxAjax(function () {
			callback(ffInfo);
		}, 'getting your data ...', self);
	},*/

		/*handleDataForFF : function () {
		 $.mobile.changePage('#home', { transition: 'flip' });
	 }*/


}




