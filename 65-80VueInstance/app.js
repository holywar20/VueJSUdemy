Vue.component("legion" , {
	template : "<h1>We are Legion</h1>"
});

let vm1 = new Vue({
	el: '#app',
	data: {
		title: 'The VueJS Instance',
		showParagraph: false
	},
	methods: {
		show: function() {
			this.showParagraph = true;
			this.updateTitle('The VueJS Instance (Updated)');
		},
			updateTitle: function(title) {
			this.title = title;
		}
	},
	computed: {
		lowercaseTitle: function() {
			return this.title.toLowerCase();
		}
	},
	watch: {
		title: function(value) {
			alert('Title changed, new value: ' + value);
		}
	}
});

console.log( vm1.$refs );// Access refrences

// Vue can have templates instead
let vm2 = new Vue({
	el : `#app2`,
	template : "<h1>{{title}}</h1>",
	data : {
		title : "The third Instance"
	}
});

// Mounting a template manually ( Not common but possible)
// Note we can only mount something to a single element. Need components if you want multiple things
vm2.$mount();
document.getElementById('app3').appendChild(vm2.$el);


let lifeCycleHooks = new Vue({
	el : "#lifecycle",
	data : {
		title : 'test'
	},
	/* Life cylce */
	beforeCreate : function(){ console.log("beforeCreate") },
	created : function(){ console.log("created") },
	beforeMount : function(){ console.log("beforeMount") },
	mounted : function(){ console.log("mounted") },
	
	beforeUpdate : function(){ console.log("beforeUpdate") },
	updated : function(){ console.log("updated") },

	beforeDestroy: function(){ console.log("beforeDestroyed") },
	destroyed: function(){ console.log("destroyed") },

	methods : {
		destroy : function(){
			this.$destroy();
		}
	}
});