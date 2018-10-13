import Items from '../src/Items'

describe('Items', function () {
    
    it('should return the first item', function () {
        expect(Items.getFirstItem()).toBe('Item 1')
    })

})