import { Module } from '@nestjs/common';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import { knexSnakeCaseMappers } from "objection";
import { UserModel } from './model/user.model';

@Module({
    imports: [
        ObjectionModule.register({
            // You can specify a custom BaseModel
            // If none is provided, the default Model will be used
            // https://vincit.github.io/objection.js/#models
            config: {
                client: 'postgresql',
                connection: {
                    host: '127.0.0.1',
                    user: 'postgres',
                    password: 'swapnil',
                    database: 'test'
                },
                pool: {
                    min: 2,
                    max: 10
                },
                ...knexSnakeCaseMappers()
            }
        }),

        //Register your objection models so it can be provided when needed.
        ObjectionModule.forFeature([UserModel]),
    ],
    exports: [ObjectionModule],
})
export class DatabaseModule {
}

