module.exports = {
	secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'backend!@',
	db: {
		user: 'mini_admin',
		password: 'mini_admin',
		connectSttring: 'localhost/orcl'
	}
}
