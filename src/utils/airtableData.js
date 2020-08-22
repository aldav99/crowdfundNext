import axios from 'axios'

const API_TOKEN = 'keyEbYaaHT6MgQv8t'

const httpClient = axios.create({
    baseURL: 'https://api.airtable.com/v0/appe9eRK1BsGtd1dt',
    timeout: 5000,
    headers: {
        'Authorization': 'Bearer keyEbYaaHT6MgQv8t'
    }
});

export const fetchData = () => (
    httpClient.get('/Books', {
        params: {
            maxRecords: 3,
            view: 'Grid view'
        }
    }).then(result => result.data)
        .then(_mapFromAirtable)
)


function _mapFromAirtable(data) {
    return data.records.map(
        record => (
            {
                id: record.fields.Id,
                title: record.fields.Title,
                brief: record.fields.Brief,
                page: record.fields.Page,
                lang: record.fields.Lang,
                cover: record.fields.Cover[0].thumbnails.large.url,
                authors: record.fields['Id (from Authors)'],
                minCost: record.fields.MinCost,
                neededCost: record.fields.NeededCost,
                fundedSum: record.fields.FundedSum,
                neededSum: record.fields.NeededSum,
                subscriber: record.fields.Subscriber
            }
        )
    )
}

export const fetchAuthors = () => (
    httpClient.get('/Authors', {
        params: {
            maxRecords: 4,
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