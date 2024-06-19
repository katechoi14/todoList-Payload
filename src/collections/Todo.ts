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
            name: 'date',
            type: 'date',
        },
    ]
};

export default Todos;