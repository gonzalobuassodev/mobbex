import dotenv from 'dotenv';
import { Server } from './Server';

dotenv.config();

try {
  const PORT = process.env.PORT || 3000;
  new Server(PORT as string).listen();
} catch (error) {
  console.log(error);
}
