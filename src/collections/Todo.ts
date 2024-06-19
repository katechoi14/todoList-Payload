import { CollectionConfig } from 'payload/types';

const Todos: CollectionConfig = {
    slug: 'todos',
    fields: [
        {
            name: 'taskName', 
            type: 'text',
            required: true,
        },
        {
            name: 'username',
            type: 'text',
            required: true,
        },
        {
            name: 'date',
            type: 'date',
        },
        {
            name: 'completed',
            type: 'checkbox',
        },
    ],
};

export default Todos;