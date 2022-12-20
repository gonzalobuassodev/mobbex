import express from 'express';
import cors from 'cors';
import { route } from './checkout/infrastructure/driving-adapters/routes';

export class Server {
  private readonly _port: string;
  private readonly _app: express.Express;
  private _server: any;

  constructor(port: string) {
    this._port = port;
    this._app = express();
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: false }));
    this._app.use(cors());
    this._app.use(route);
    this._server;
  }

  async listen(): Promise<void> {
    this._server = await this._app.listen(this._port);
    console.log(`Server listening on port ${this._port}`);
  }

  async close(): Promise<void> {
    this._server.close();
    console.log(`Server closed`);
  }
}
