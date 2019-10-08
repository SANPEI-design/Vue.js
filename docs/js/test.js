new Vue({
	el: '#app',
	data: {
		author: {
			name: '山田'
		}
	},
	mounted: function() {
		let that = this;
		Vue.set(this.author, 'company', 'WINGSプロジェクト');
		this.$nextTick().then(function() {
			//#app配下にcompanyプロパティの内容が含まれているか、ビューへの反映を待ってから確認
			console.log(that.$el.textContent.includes(that.author.company));
		})
	}
});
