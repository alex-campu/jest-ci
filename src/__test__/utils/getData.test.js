import getData from "../../utils/getData"

describe('Fecth API', () => {
    beforeEach(()=>{
        fetch.resetMocks()
    })

    test('call API and return data ', () => {
        fetch.mockResponseOnce(JSON.stringify({data:'12345'}))
        getData('https://platzi.com/')
            .then((res)=>{
                expect(res.data).toEqual('12345')
            })
            expect(fetch.mock.calls[0][0]).toEqual('https://platzi.com/');
    });
});