interface UserModel {
   uid: string;
   username: string;
   email: string;
   role: string;
   entries?: any[];
}

interface UserCreateModel {
   username: string;
   email: string;
   role: string;
   uid: string;
}
