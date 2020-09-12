import axios from 'axios'

const API_TOKEN = 'keyEbYaaHT6MgQv8t'

const httpClient = axios.create({
    baseURL: 'https://api.airtable.com/v0/appe9eRK1BsGtd1dt',
    timeout: 10000,
    headers: {
        'Authorization': 'Bearer keyEbYaaHT6MgQv8t'
    }
});

export const fetchBook = (id) => (
    httpClient
        .get(`/Books/${id}`)
        .then(result => result.data)
        .then(_convertFromAirtable)
)


export const fetchData = () => (
    httpClient.get('/Books', {
        params: {
            maxRecords: 5,
            view: 'Grid view'
        }
    }).then(result => result.data)
        .then(_mapFromAirtable)
)


function _mapFromAirtable(data) {
    return data.records.map(_convertFromAirtable)
}

export const fetchAuthors = () => (
    httpClient.get('/Authors', {
        params: {
            maxRecords: 5,
            view: 'Grid view'
        }
    }).then(result => result.data)
        .then(_mapFromAirtableAuthors)
)


function _mapFromAirtableAuthors(data) {
    return data.records.map(
        record => (
            {
                name: record.fields.Name,
                email: record.fields.Email,
                brief: record.fields.Brief,
                id: record.fields.Id,
                avatar: record.fields.Avatar[0].thumbnails.large.url
            }
        ))
}

function _convertFromAirtable(record) {
    return {
        id: record.id,
        Id: record.fields.Id,
        title: record.fields.Title,
        brief: record.fields.Brief,
        page: record.fields.Page,
        lang: record.fields.Lang,
        cover: record.fields.Cover[0].thumbnails.large.url,
        authors: record.fields["Id (from Authors)"],
        minCost: record.fields.MinCost,
        neededCost: record.fields.NeededCost,
        fundedSum: record.fields.FundedSum,
        neededSum: record.fields.NeededSum,
        subscriber: record.fields.Subscriber
    }
}