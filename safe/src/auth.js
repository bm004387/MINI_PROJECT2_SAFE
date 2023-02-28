import axios from 'axios'
const api = 'http://localhost:3000' // api 주소 지정
//const api = 'http://192.168.0.185:3000' // api 주소 지정
// 핸드폰으로 접속할때는 공유기를 통하기 때문에 localhost:3000 에서는 로그인이 제대로 동작하지 않는다
// 아이피로 공유기에서 받은 IP를 정확하게 지정해주면 로그인 동작이 정상적으로 작동합니다.

// 기본 리턴
export default {
	loggedIn: false, // 로그인 여부
	name: null, // 사용자명

  logout() { this.loggedIn = false; localStorage.clear() }, // 로그아웃 기능
	default() { axios.defaults.baseURL = api }, // axios의 기본 url 변경
	chkAuth() {
		axios.defaults.baseURL = api // axios의 기본 url 변경

		const token = localStorage.getItem('token') // 토근을 로컬스토리지에서 읽어옴
		const name = localStorage.getItem('name') // 이름을 로컬스토리지에서 읽어옴
		if(!token) return // 없는경우 리턴

		this.loggedIn = true // 로그인 체크
		this.name = name // 이름 변경

		// 토큰정보를 요청 시 포함하도록 업데이트
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
		axios.defaults.headers.post['Authorization'] = 'Bearer ' + token
		axios.defaults.headers.get['Authorization'] = 'Bearer ' + token
		axios.defaults.headers.delete['Authorization'] = 'Bearer ' + token
	},
	setAuth(data) {
		this.loggedIn = true // 로그인
		this.name = data.name // 이름 설정

		localStorage.setItem('name', data.name) // 로컬스토리지 데이터 설정
		localStorage.setItem('token', data.token) // 로컬스토리지 데이터 설정

		// 토큰정보를 요청 시 포함하도록 업데이트
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token
		axios.defaults.headers.post['Authorization'] = 'Bearer ' + data.token
		axios.defaults.headers.get['Authorization'] = 'Bearer ' + data.token
		axios.defaults.headers.delete['Authorization'] = 'Bearer ' + data.token
	}
}