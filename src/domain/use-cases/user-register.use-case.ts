import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { UserModel } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';

export class UserRegisterUseCase
  implements UseCase<{ phoneNumber: string; password: string }, UserModel>
{
  constructor(private userRepository: UserRepository) {}

  execute(params: {
    phoneNumber: string;
    password: string;
  }): Observable<UserModel> {
    try {
      return this.userRepository.register(params);
    } catch (error) {
      throw new Error(
        'Method not implemented. [UserRegisterUseCase]: Error al registrarse.'
      );
    }
  }
}
