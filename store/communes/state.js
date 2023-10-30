export default () => ({
    listcommunes: [],

    headercommunes : [
        {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'nom_commune',
        },
        /* { text: 'Status', value: 'status' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailcommune :{}
})