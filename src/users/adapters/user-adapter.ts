import { User } from "../models/user";
import { UserDTO } from "../models/user-dto";

export class UserAdapter {
    static toUser(userDTO: UserDTO): User {
        const user = new User();
        user.id = userDTO.id;
        user.name = userDTO.name;
        user.email = userDTO.email;
        user.city = userDTO.address.city;
        user.companyName = userDTO.company.name;
        return user;
    }
}
