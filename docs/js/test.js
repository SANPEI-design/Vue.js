new Vue({
		el: '#app',
		data: {
				email: 'sanpei@exmaple.com'
		},
		computed: {
			localEmail: function() {
				return this.email.split('@')[0].toLowerCase();
				console.log('いたずら');
			}
		}
});
