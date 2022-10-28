import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { URLSearchParams } from 'url';
import { firstValueFrom } from 'rxjs'


@Injectable()
export class AuthService {
  constructor(private http: HttpService) { }

  async login(username: string, password: string) {
    const {data} = await firstValueFrom(this.http.post('http://localhost:8080/auth/realms/Server-local/protocol/openid-connect/token', new URLSearchParams({
        client_id: 'nest',
        client_secret: '9c236374-e4de-43b5-a6d4-1f73940e77e2',
        grant_type: 'password',
        username,
        password
     }),
    ),
   );
   return data;
  }
}


