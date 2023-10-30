export default () => ({
    listroles: [],
    selectListRoles: [],

    headerroles : [
        {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
            align: ' d-none'
        },
        { text: 'Rôle', value: 'description' },
        { text: 'Permissions', value: 'permissions',sortable: false },
        /* { text: 'Status', value: 'status' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailrole :{}
})