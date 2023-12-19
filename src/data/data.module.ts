import { NgModule } from '@angular/core';
import {
  getUserProfileUseCaseProvider,
  userLoginUseCaseProvider,
  userRegisterUseCaseProvider,
} from './providers';
import { UserRepository } from '../domain/repositories/user.repository';
import { UserImplementationRepository } from './repositories/user/user-implementation.repository';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  providers: [
    userLoginUseCaseProvider,
    userRegisterUseCaseProvider,
    getUserProfileUseCaseProvider,
    {
      provide: UserRepository,
      useClass: UserImplementationRepository,
    },
  ],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule {}
