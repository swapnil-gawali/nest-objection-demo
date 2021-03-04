import { Module } from '@nestjs/common';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import { knexSnakeCaseMappers } from "objection";
import { UserModel } from './model/user.model';
import * as knexConfig from './knexfile'

@Module({
    imports: [
        ObjectionModule.register({
            // You can specify a custom BaseModel
            // If none is provided, the default Model will be used
            // https://vincit.github.io/objection.js/#models
            config: knexConfig,
        }),

        //Register your objection models so it can be provided when needed.
        ObjectionModule.forFeature([UserModel]),
    ],
    exports: [ObjectionModule],
})
export class DatabaseModule {}
