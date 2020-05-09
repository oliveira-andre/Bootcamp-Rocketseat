import jwt from 'jsonwebtoken';
import User from '../models/User';

class SessionsController {
  async store(req, res) {
    const { email, password } = req.body;
  }
};
