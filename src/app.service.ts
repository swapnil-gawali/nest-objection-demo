import { Inject, Injectable } from '@nestjs/common';
import { UserModel } from './database/model/user.model';

@Injectable()
export class AppService {

    constructor(@Inject(UserModel) private readonly userModel: typeof UserModel) {
    }

    async getHello(): Promise<string> {
        return "hello World";
    }
}
