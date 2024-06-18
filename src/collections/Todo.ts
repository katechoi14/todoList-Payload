const Todos = {
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
            name: 'CompletionDate',
            type: 'date',
        },
        {
            name: 'status',
            type: 'select',
            options: ['pending', 'completed'],
            defaultValue: 'pending',
        },
    ]
};

export default Todos;