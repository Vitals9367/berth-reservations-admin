import { getHarbor, mapValuesToMutation } from '../utils';

describe('HarborForm utils', () => {
  describe('getHarbor', () => {
    it('should return "undefined" if no data', () => {
      expect(getHarbor(undefined)).toEqual(undefined);
      expect(getHarbor({ harbor: null })).toEqual(undefined);
      expect(
        getHarbor({
          harbor: {
            __typename: 'HarborNode',
            id: 'test',
            properties: null,
          },
        })
      ).toEqual(undefined);
    });

    it('should map empty fields correctly', () => {
      expect(
        getHarbor({
          harbor: {
            __typename: 'HarborNode',
            id: 'test',
            properties: {
              __typename: 'HarborProperties',
              imageFile: null,
              maps: [null],
              municipality: null,
              name: null,
              streetAddress: null,
              wwwUrl: 'https://hel.fi',
              zipCode: '00210',
            },
          },
        })
      ).toEqual({
        imageFile: undefined,
        maps: [],
        municipality: '',
        name: '',
        streetAddress: '',
        wwwUrl: 'https://hel.fi',
        zipCode: '00210',
      });
    });

    it('should map existing "imageFile" and "maps" to correctly', () => {
      expect(
        getHarbor({
          harbor: {
            __typename: 'HarborNode',
            id: 'test',
            properties: {
              __typename: 'HarborProperties',
              imageFile: 'https://hel.fi',
              maps: [
                {
                  __typename: 'HarborMapType',
                  id: 'testMap',
                  url: 'testMap.pdf',
                },
              ],
              municipality: 'Helsinki',
              name: 'Pajalahden venesatama (Meripuistotie) / Venesatama',
              streetAddress: 'Meripuistotie 1a',
              wwwUrl: 'https://hel.fi',
              zipCode: '00210',
            },
          },
        })
      ).toEqual({
        imageFile: {
          markedForDeletion: false,
          name: 'https://hel.fi',
        },
        maps: [
          {
            id: 'testMap',
            markedForDeletion: false,
            name: 'testMap.pdf',
          },
        ],
        municipality: 'Helsinki',
        name: 'Pajalahden venesatama (Meripuistotie) / Venesatama',
        streetAddress: 'Meripuistotie 1a',
        wwwUrl: 'https://hel.fi',
        zipCode: '00210',
      });
    });
  });

  describe('mapValuesToMutation', () => {
    it('should map empty "imageFile" and "maps" correctly', () => {
      expect(
        mapValuesToMutation('test', {
          imageFile: undefined,
          maps: [],
          municipality: 'Helsinki',
          name: 'Pajalahden venesatama (Meripuistotie) / Venesatama',
          streetAddress: 'Meripuistotie 1a',
          wwwUrl: 'https://hel.fi',
          zipCode: '00210',
        })
      ).toEqual({
        id: 'test',
        municipalityId: 'helsinki',
        name: 'Pajalahden venesatama (Meripuistotie) / Venesatama',
        streetAddress: 'Meripuistotie 1a',
        wwwUrl: 'https://hel.fi',
        zipCode: '00210',
      });
    });

    it('should map empty "imageFile" and "maps" correctly', () => {
      const testImage = new File([], 'testImage.jpg');
      const testMap = new File([], 'testMap.pdf');
      expect(
        mapValuesToMutation('test', {
          imageFile: {
            name: 'testImage.jpg',
            data: testImage,
          },
          maps: [
            {
              name: 'untouchedMap.pdf',
              id: 'untouchedMap',
              markedForDeletion: false,
            },
            {
              name: 'addedMap.pdf',
              data: testMap,
            },
            {
              name: 'deletedMap.pdf',
              id: 'deletedMap',
              markedForDeletion: true,
            },
          ],
          municipality: 'Helsinki',
          name: 'Pajalahden venesatama (Meripuistotie) / Venesatama',
          streetAddress: 'Meripuistotie 1a',
          wwwUrl: 'https://hel.fi',
          zipCode: '00210',
        })
      ).toEqual({
        addMapFiles: [testMap],
        id: 'test',
        imageFile: testImage,
        municipalityId: 'helsinki',
        name: 'Pajalahden venesatama (Meripuistotie) / Venesatama',
        removeMapFiles: ['deletedMap'],
        streetAddress: 'Meripuistotie 1a',
        wwwUrl: 'https://hel.fi',
        zipCode: '00210',
      });
    });
  });
});
