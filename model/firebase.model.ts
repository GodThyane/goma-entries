export interface ISignUpResponse {
   idToken: string;
   email: string;
   refreshToken: string;
   expiresIn: string;
   localId: string;
}

export interface ISignInResponse {
   idToken: string;
   email: string;
   refreshToken: string;
   expiresIn: string;
   localId: string;
   registered: boolean;
}
