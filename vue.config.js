module.exports = {
  devServer: {
		port: 9999,
		proxy: {
		  '/soso': {
		    target: 'https://c.y.qq.com',
		    changeOrigin: true
		  },
		}
	}
}