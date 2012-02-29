todo.stores.pages = new Ext.data.Store({
 
    model: Ext.regModel('', {
        fields: [
            {name:'id', type:'int'},
            {name:'title', type:'string'},
            {name:'completed', type:'boolean'}
        ]
    }),
 
    data: [
        {id: 1, title: 'Plant a tree', completed: false},
        {id: 2, title: 'Write a book', completed: false},
        {id: 3, title: 'Have a son', completed: false}
    ]

});