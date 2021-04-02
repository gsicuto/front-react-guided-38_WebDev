import axios from 'axios';

class Api {

  constructor() {

    this.api = axios.create({
      baseURL: 'https://fupprojects.herokuapp.com/api'
    });

    this.api.interceptors.request.use(
      config => {
        const token = localStorage.getItem('token');
        if(token) {
          config.headers = {
            Authorization: `Bearer ${token}`
          };
        };
        return config;
      },
      error => console.log(error)
    )

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        // console.log(error.statusCode)
        localStorage.removeItem('token');
        window.location = "/login"
      }
    )
  }

  login = async (payload) => {
    try {
      const { data } = await this.api.post('/auth/login', payload);
      const { token } = data;
      localStorage.setItem('token', token);
    } catch (error) {
      console.error(error);
      throw new Error(error)
    }
  }

  getAllProjects = async () => {
    try {
      const { data } = await this.api.get('/projects/list')
      console.log(data);
      return data
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  getAllStudents = async () => {
    try {
      const { data } = await this.api.get('/students/list')
      return data
    }catch(error){
      throw new Error(error);
    }
  }

  createStudent = async (payload) => {
    try {
      const { data } = await this.api.post('/students', payload);
      return data
    } catch (error) {
      throw new Error(error);
    }
  }

}
export default new Api()