exports.handler = async(event, context) => {
    
    data = {
      HostCount: 9,
      HostList: [
        { id: 1, name: 'Lord Farquad' },
        { id: 2, name: 'Donkey' },
        { id: 3, name: 'Shrek' },
        { id: 4, name: 'Fiona' },
        { id: 5, name: 'Puss N\' Boots' },
        { id: 6, name: 'Humpty Dumpty' },
        { id: 7, name: 'Robin Hood' },
        { id: 8, name: 'Dragon' },
        { id: 9, name: 'Gingerbread Man' }
      ],
      NextHostDate: '2020-04-27'
    }
 
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}