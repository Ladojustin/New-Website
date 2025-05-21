export default class User{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }
    static fromJson(json) {
    return new User(json.username, json.password);
  }

  validateCredentials(username, password) {
    return this.username === username && this.password === password;
  }
}