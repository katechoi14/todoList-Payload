import { buildConfig } from 'payload/config';
import Todos from './collections/Todo';

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