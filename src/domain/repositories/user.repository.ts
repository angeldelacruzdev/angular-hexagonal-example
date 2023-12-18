import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

export abstract class UserRepository {
  abstract login(params: {
    userName: string;
    password: string;
  }): Observable<UserModel>;
  abstract register(params: {
    phoneNumber: string;
    password: string;
  }): Observable<UserModel>;
  abstract getUserProfile(): Observable<UserModel>;
}
