interface UserModel {
   uid: string;
   name: string;
   email: string;
   role: string;
   entries?: any[];
}

interface UserCreateModel {
   name: string;
   email: string;
   role: string;
}
