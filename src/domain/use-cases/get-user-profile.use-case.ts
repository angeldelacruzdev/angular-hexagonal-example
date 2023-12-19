import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { UserModel } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';

export class GetUserProfileUseCase implements UseCase<void, UserModel> {
  constructor(private readonly userRepository: UserRepository) {}
  execute(): Observable<UserModel> {
    try {
      return this.userRepository.getUserProfile();
    } catch (error) {
      throw new Error(
        'Method not implemented. [GetUserProfileUseCase]: Error al optener los datos del usuario.'
      );
    }
  }
}
