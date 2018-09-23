import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('register', credentials)
    }
}

//Example of how to call:
//authenticationService.register({
//    email: 'testing@gmail.com',
//    password: '123456'
//})
