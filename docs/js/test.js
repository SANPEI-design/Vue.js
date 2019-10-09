new Vue({
	el: '#app',
	data: {
		// 入力値
		name: '',
		// 表示する名前
		upperName: ''
	},
	// 遅延処理用のdelayFuncメソッドを準備
	created: function() {
		this.delayFunc = _.debounce(this.getUpper, 2000);
	},
	// nameプロパティが変化した時にdelayFuncメソッドを呼び出し
	computed: {
		upperName: function() {
			return this.name.toUpperCase();
		}
	},
	// nameの値を大文字に変換したものをupperNameプロパティに設定
	methods: {
		getUpper: function() {
			this.upperName = this.name.toUpperCase();
		}
	}
});