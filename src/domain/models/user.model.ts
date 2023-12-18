export interface UserModel {
  id: string;
  fullName: string;
  userName: string;
  email?: string;
  phoneNumber: string;
  createdAt?: Date;
  profilePicture?: string;
  activationStatus: boolean;
}
