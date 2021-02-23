import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";

class UserController {
  async create(request: Request, response: Response) {
    const { body } = request;
    const { name, email } = body;

    const usersRepository = getRepository(User);
    const newUser = usersRepository.create({ name, email });

    try {
      await usersRepository.save(newUser);
    } catch {
      return response.status(400).json({ error: "Usuário já existe" });
    }

    return response.json(newUser);
  }
}

export { UserController };
