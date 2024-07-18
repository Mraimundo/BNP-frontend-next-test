/**
 * @api {get} /api/users/create Create User
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que registre um usuário no array users
 * - A request deve receber apenas o método POST
 * - A request deve receber um body com os dados do usuário
 * - O body vai seguir a interface IUserCreate, removendo o id
 * - Você deve corrigir a interface IUserCreate em src/types/user.d.ts
 */

import { NextApiRequest, NextApiResponse } from 'next/types';
import { IUser, IUserCreate } from '@/types/create-user';

const users: IUser[] = [];

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email }: IUserCreate = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const newUser: IUser = {
      id: users.length + 1,
      name,
      email
    };

    users.push(newUser);

    return res.status(201).json(newUser);
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};
