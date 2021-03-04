import { Model } from 'objection';

export class UserModel extends Model {
    static tableName = 'user';

    id: number;
    name: string;
}
