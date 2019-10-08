new Vue({
	el: '#app',
	data: {
		author: {
			name: '山田'
		}
	},
	mounted: function() {
		Vue.set(this.author, 'company', 'WINGSプロジェクト');
		//#app配下にcompanyプロパティの内容が含まれているか
		console.log(this.$el.textContent.includes(this.author.company));
	}
});