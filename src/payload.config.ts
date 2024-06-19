import { buildConfig } from 'payload/config';
import { BaseDatabaseAdapter } from 'payload/dist/database/types';
import Todos from './collections/Todo'

type DatabaseAdapter = (args: { payload: Payload}) => BaseDatabaseAdapter;

export default buildConfig({
    serverURL: 'http://localhost:3001',
    collections: [Todos],
    admin: {
        user: 'users',
    },
    db: {
        url: process.env.MONGODB_URI || 'mongodb://localhost:27017/mydb',
    },
    editor: {
        basePath: '/admin',
    },
});