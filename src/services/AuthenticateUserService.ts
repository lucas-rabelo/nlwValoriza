import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthenticationRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticationRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        // Verificar se email existe
        const user = await usersRepository.findOne({
            email
        });

        if(!user) {
            throw new Error("Email/Password incorrect");
        }

        // Verificar se password está correta
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }
        // Gerar token
        const token = sign({
            email: user.email,
        }, "484a7c311864834e9827a313e78cf575", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export { AuthenticateUserService }