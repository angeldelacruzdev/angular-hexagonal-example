import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserModel } from '../../../domain/models/user.model';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { UserImplementationRepositoryMapper } from '../../../domain/mappers/user/user-repository.mapper';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from '../../../domain/entities';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
  userMapper = new UserImplementationRepositoryMapper();

  constructor(private httpClient: HttpClient) {
    super();
  }

  override login(params: {
    userName: string;
    password: string;
  }): Observable<UserModel> {
    return this.httpClient
      .post<UserEntity>(`${environment.apiUrl}/login`, { params })
      .pipe(map(this.userMapper.mapFrom));
  }

  override register(params: {
    phoneNumber: string;
    password: string;
  }): Observable<UserModel> {
    return this.httpClient
      .post<UserEntity>(`${environment.apiUrl}/register`, { params })
      .pipe(map(this.userMapper.mapFrom));
  }

  override getUserProfile(): Observable<UserModel> {
    return this.httpClient
      .get<UserEntity>(`${environment.apiUrl}/user`)
      .pipe(map(this.userMapper.mapFrom));
  }
}
