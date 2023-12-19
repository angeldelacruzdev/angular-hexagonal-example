import { Mapper } from '../../../base/utils/mapper';
import { UserEntity } from '../../entities';
import { UserModel } from '../../models/user.model';

export class UserImplementationRepositoryMapper extends Mapper<
  UserEntity,
  UserModel
> {
  override mapFrom(param: UserEntity): UserModel {
    try {
      return {
        id: param.id,
        fullName: param.fullName,
        userName: param.userName,
        phoneNumber: param.phoneNumber,
        profilePicture: param.userPicture,
        activationStatus: param.activationStatus,
      };
    } catch (error) {
      throw new Error(
        'Method not implemented.[UserImplementationRepositoryMapper]: mapFrom'
      );
    }
  }

  override mapTo(param: UserModel): UserEntity {
    try {
      return {
        id: param.id,
        fullName: param.fullName,
        userName: param.userName,
        phoneNumber: param.phoneNumber,
        userPicture: param.profilePicture,
        activationStatus: param.activationStatus,
      };
    } catch (error) {
      throw new Error(
        'Method not implemented.[UserImplementationRepositoryMapper]: mapTo'
      );
    }
  }
}
