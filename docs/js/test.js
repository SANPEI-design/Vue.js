new Vue({
	el: '#app',
	data: {
		current: new Date().toLocaleString()
	},
	computed: {
		//算出プロパティで乱数取得
		randomSanshutsu: function() {
			return Math.random();
		}
	},
	methods: {
		//クリック時に処理
		onclick: function() {
			this.current = new Date().toLocaleString();
		},
		randomMethod: function() {
			return Math.random();
		}
	},
});