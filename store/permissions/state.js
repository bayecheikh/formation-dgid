export default () => ({
    listpermissions: [],

    headerpermissions : [
        {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
            align: ' d-none'
        },
        { text: 'Permission', value: 'description' },
        /* { text: 'Status', value: 'status' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailpermission :{}
})