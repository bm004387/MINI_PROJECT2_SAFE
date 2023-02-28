import React from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

import axios from 'axios'
import auth from '../auth' // 인증

export default class Loginout extends React.Component {
	constructor(props) {
		super(props)

		auth.default() // 기본 url 업데이트
		this.state = {
			id: null,
			password: null,
			loggedIn: false,
		}
	}
	
	login = async (event) => {
		//event.preventDefault() // form 이벤트 멈추기
		//const { id, password } = this.state // 데이터 불러옴
		
		
				auth.logout() // 인증정보 저장
				this.setState({ id:null,password:null,loggedIn: false }) // 로그인정보 업데이트
			

	}

	render() {
		const { loggedIn } = this.state // 로그인정보 불러옴
		// 로그인 시 /로 리다이렉트
		if(loggedIn) return <Redirect to='/'/>
		// 아닐경우 폼 렌더링
		return (<>
			<Form onSubmit={this.login}>
			

				<Button type='submit'>로그인</Button>
			</Form>
		</>)
	}
}