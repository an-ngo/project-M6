export class JwtResponse {
  name: string;
  username: string;
  token: string;
  avatar: string;
  roles: string[];

  constructor(name: string, username: string, token: string, avatar: string, roles: string[]) {
    this.name = name;
    this.username = username;
    this.token = token;
    this.avatar = avatar;
    this.roles = roles;
  }
}
