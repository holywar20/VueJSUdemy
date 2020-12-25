new Vue({
	el: '#app',
	data : {
		title: 'wtf!', 
		count: 0,
		link : "https://www.google.com",
		finishedLink: '<a href="http://google.com"></a>'
	}, 
	methods : {
		changeTitle : function(){
			this.count++;
			this.title = event.target.value;
			//return event.target.value
		},
		displayCount : function(){
			return this.count
		}
	}
});