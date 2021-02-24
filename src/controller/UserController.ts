import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UserController {
  async create(request: Request, response: Response) {
    const { body } = request;
    const { name, email } = body;

    const usersRepository = getCustomRepository(UsersRepository);
    const newUser = usersRepository.create({ name, email });

    try {
      await usersRepository.save(newUser);
    } catch {
      return response.status(400).json({ error: "Usuário já existe" });
    }

    return response.status(201).json(newUser);
  }
}

export { UserController };
