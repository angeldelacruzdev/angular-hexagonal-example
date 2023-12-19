export interface UserEntity {
  id: string;
  fullName: string;
  userName: string;
  phoneNumber: string;
  userPicture?: string;
  activationStatus: boolean;
}
