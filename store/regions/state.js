export default () => ({
    listregions: [],

    headerregions : [
        {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'nom_region',
        },
        { text: 'Latitude', value: 'latitude' },
        { text: 'Longitude', value: 'longitude' },
        /* { text: 'Status', value: 'status' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailregion :{}
})