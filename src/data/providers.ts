import { Provider } from '@angular/core';
import { UserRepository } from '../domain/repositories/user.repository';
import { UserLoginUseCase } from '../domain/use-cases/user-login.use-case';
import { UserRegisterUseCase } from '../domain/use-cases/user-register.use-case';
import { GetUserProfileUseCase } from '../domain/use-cases/get-user-profile.use-case';

const userLoginUseCaseFactory = (userRepo: UserRepository) =>
  new UserLoginUseCase(userRepo);

export const userLoginUseCaseProvider: Provider = {
  provide: UserLoginUseCase,
  useFactory: userLoginUseCaseFactory,
  deps: [UserRepository],
};

const userRegisterUserCaseFactory = (userRepo: UserRepository) =>
  new UserLoginUseCase(userRepo);

export const userRegisterUseCaseProvider: Provider = {
  provide: UserRegisterUseCase,
  useFactory: userRegisterUserCaseFactory,
  deps: [UserRepository],
};

const getUserProfileUseCaseFactory = (userRepo: UserRepository) =>
  new GetUserProfileUseCase(userRepo);

export const getUserProfileUseCaseProvider: Provider = {
  provide: GetUserProfileUseCase,
  useFactory: getUserProfileUseCaseFactory,
  deps: [UserRepository],
};
