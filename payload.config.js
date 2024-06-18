import { buildConfig } from 'payload/config';
import Todos from './collections/Todos';

export default buildConfig({
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
    collections: [Todos],
});