import { buildConfig } from 'payload/config';
import Todos from './collections/Todos';

export default buildConfig({
    serverURL: 'http://localhost:3000',
    collections: [Todos],
});