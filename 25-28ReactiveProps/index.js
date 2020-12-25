new Vue({
	el: "#app",
	data : {
		name : "Max",
		counter : 0
	},
	computed : {
		output: function(){
			return this.counter > 5 ? 'Greater 5' : 'Less 5'
		}
	},
	watch: { // React to changes on specific properties
		counter: function( value ){
			var vm = this;
			setTimeout( function(){
				vm.counter = 0;
			});
		}
	},
	methods: { // Execute methods
		result(){
			return this.counter > 5 ? 'Greater 5' : 'Less 5'
		}
	}
});