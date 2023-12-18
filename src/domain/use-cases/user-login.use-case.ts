import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { UserModel } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';

export class UserLoginUseCase
  implements UseCase<{ userName: string; password: string }, UserModel>
{
  constructor(private userRepository: UserRepository) {}

  execute(params: {
    userName: string;
    password: string;
  }): Observable<UserModel> {
    try {
      return this.userRepository.login(params);
    } catch (error) {
      console.log(error);
      throw new Error('Error al guardar el usuario.');
    }
  }
}
