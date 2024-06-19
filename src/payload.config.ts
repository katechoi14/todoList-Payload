import { buildConfig } from 'payload/config';
import path from 'path';
import Todos from './collections/Todo';
import { BaseDatabaseAdapter } from 'payload/dist/database/types';
import { Payload } from 'payload/dist/payload';

export default buildConfig({
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
    admin: {
        user: '', 
    },
    collections: [Todos],
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
    db: function (args: { payload: Payload; }): BaseDatabaseAdapter {
        throw new Error('Function not implemented.');
    },
    editor: undefined
});
