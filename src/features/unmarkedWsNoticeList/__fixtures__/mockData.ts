import {
  UNMARKED_WINTER_STORAGE_NOTICES,
  UNMARKED_WINTER_STORAGE_NOTICES_winterStorageNotices_edges_node as UNMARKED_WINTER_STORAGE_NOTICES_NODE,
} from '../__generated__/UNMARKED_WINTER_STORAGE_NOTICES';
import { ApplicationStatus, WinterStorageApplicationAreaType } from '../../../@types/__generated__/globalTypes';

export const singleNode: UNMARKED_WINTER_STORAGE_NOTICES_NODE = {
  municipality: 'Helsinki',
  applicationCode: 'code',
  address: 'Katu 1',
  zipCode: '00000',
  id: 'V2ludGVyU3RvcmFnZUFwcGxpY2F0aW9uTm9kZTox',
  status: ApplicationStatus.PENDING,
  createdAt: '2019-05-06T10:54:21.746387+00:00',
  firstName: 'Teppo',
  lastName: 'Tulppu',
  email: 'teppo@example.com',
  boatType: '3',
  boatRegistrationNumber: 'test',
  boatWidth: 1,
  boatLength: 1,
  boatName: 'test',
  boatModel: 'test',
  areaType: WinterStorageApplicationAreaType.UNMARKED,
  lease: null,
  winterStorageAreaChoices: [
    {
      priority: 1,
      winterStorageArea: {
        __typename: 'WinterStorageAreaNode',
        id: 'MOCK-WINTER-STORAGE-AREA-0',
        properties: {
          __typename: 'WinterStorageAreaProperties',
          name: 'Iso-Sarvasto',
        },
      },
      winterStorageSectionIds: ['MOCK-SECTION'],
      __typename: 'WinterStorageAreaChoiceType',
    },
  ],
  __typename: 'WinterStorageApplicationNode',
};

export const unmarkedWinterStorageNoticeMockData: UNMARKED_WINTER_STORAGE_NOTICES = {
  winterStorageNotices: {
    count: 83,
    edges: [
      {
        node: singleNode,
        __typename: 'WinterStorageApplicationNodeEdge',
      },
      {
        node: {
          id: 'V2ludGVyU3RvcmFnZUFwcGxpY2F0aW9uTm9kZToy',
          status: ApplicationStatus.PENDING,
          createdAt: '2019-05-06T12:30:10.157726+00:00',
          applicationCode: '',
          municipality: 'Helsinki',
          address: 'Katu 1',
          zipCode: '00000',
          firstName: 'Aku',
          lastName: 'Ankka',
          email: 'aku@example.com',
          boatType: '4',
          boatRegistrationNumber: 'test',
          boatWidth: 1,
          boatLength: 1,
          boatName: 'test',
          boatModel: 'test',
          areaType: WinterStorageApplicationAreaType.UNMARKED,
          lease: null,
          winterStorageAreaChoices: [
            {
              priority: 1,
              winterStorageArea: {
                __typename: 'WinterStorageAreaNode',
                id: 'MOCK-WINTER-STORAGE-AREA-1',
                properties: {
                  __typename: 'WinterStorageAreaProperties',
                  name: 'Iso-Sarvasto',
                },
              },
              winterStorageSectionIds: ['MOCK-SECTION'],
              __typename: 'WinterStorageAreaChoiceType',
            },
          ],
          __typename: 'WinterStorageApplicationNode',
        },
        __typename: 'WinterStorageApplicationNodeEdge',
      },
      {
        node: {
          id: 'V2ludGVyU3RvcmFnZUFwcGxpY2F0aW9uTm9kZToz',
          status: ApplicationStatus.PENDING,
          createdAt: '2019-05-06T12:30:27.609740+00:00',
          applicationCode: 'code',
          municipality: 'Helsinki',
          address: 'Katu 1',
          zipCode: '00000',
          firstName: 'Hannu',
          lastName: 'Hanhi',
          email: 'hannu@example.com',
          boatType: '4',
          boatRegistrationNumber: 'test',
          boatWidth: 1,
          boatLength: 1,
          boatName: 'test',
          boatModel: 'test',
          areaType: WinterStorageApplicationAreaType.UNMARKED,
          lease: null,
          winterStorageAreaChoices: [
            {
              priority: 1,
              winterStorageArea: {
                __typename: 'WinterStorageAreaNode',
                id: 'MOCK-WINTER-STORAGE-AREA-2',
                properties: {
                  __typename: 'WinterStorageAreaProperties',
                  name: 'Iso-Sarvasto',
                },
              },
              winterStorageSectionIds: ['MOCK-SECTION'],
              __typename: 'WinterStorageAreaChoiceType',
            },
          ],
          __typename: 'WinterStorageApplicationNode',
        },
        __typename: 'WinterStorageApplicationNodeEdge',
      },
      {
        node: {
          id: 'V2ludGVyU3RvcmFnZUFwcGxpY2F0aW9uTm9kZTo1',
          status: ApplicationStatus.PENDING,
          createdAt: '2019-05-06T13:07:28.521970+00:00',
          applicationCode: '',
          municipality: 'Helsinki',
          address: 'Katu 1',
          zipCode: '00000',
          firstName: 'Milla',
          lastName: 'Magia',
          email: 'milla@example.com',
          boatType: '1',
          boatRegistrationNumber: 'test',
          boatWidth: 1,
          boatLength: 1,
          boatName: 'test',
          boatModel: 'test',
          areaType: WinterStorageApplicationAreaType.UNMARKED,
          lease: null,
          winterStorageAreaChoices: [
            {
              priority: 1,
              winterStorageArea: {
                __typename: 'WinterStorageAreaNode',
                id: 'MOCK-WINTER-STORAGE-AREA-3',
                properties: {
                  __typename: 'WinterStorageAreaProperties',
                  name: 'Iso-Sarvasto',
                },
              },
              winterStorageSectionIds: ['MOCK-SECTION'],
              __typename: 'WinterStorageAreaChoiceType',
            },
          ],
          __typename: 'WinterStorageApplicationNode',
        },
        __typename: 'WinterStorageApplicationNodeEdge',
      },
      {
        node: {
          id: 'V2ludGVyU3RvcmFnZUFwcGxpY2F0aW9uTm9kZTo2',
          status: ApplicationStatus.PENDING,
          createdAt: '2019-05-06T13:08:28.383257+00:00',
          applicationCode: '',
          municipality: 'Helsinki',
          address: 'Katu 1',
          zipCode: '00000',
          firstName: 'Iines',
          lastName: 'Ankka',
          email: 'iines@example.com',
          boatType: '1',
          boatRegistrationNumber: 'test',
          boatWidth: 1,
          boatLength: 1,
          boatName: 'test',
          boatModel: 'test',
          areaType: WinterStorageApplicationAreaType.UNMARKED,
          lease: null,
          winterStorageAreaChoices: [
            {
              priority: 1,
              winterStorageArea: {
                __typename: 'WinterStorageAreaNode',
                id: 'MOCK-WINTER-STORAGE-AREA-4',
                properties: {
                  __typename: 'WinterStorageAreaProperties',
                  name: 'Iso-Sarvasto',
                },
              },
              winterStorageSectionIds: ['MOCK-SECTION'],
              __typename: 'WinterStorageAreaChoiceType',
            },
          ],
          __typename: 'WinterStorageApplicationNode',
        },
        __typename: 'WinterStorageApplicationNodeEdge',
      },
      {
        node: {
          id: 'V2ludGVyU3RvcmFnZUFwcGxpY2F0aW9uTm9kZTo3',
          status: ApplicationStatus.PENDING,
          createdAt: '2019-05-06T13:08:38.133569+00:00',
          applicationCode: '',
          municipality: 'Helsinki',
          address: 'Katu 1',
          zipCode: '00000',
          firstName: 'Mikki',
          lastName: 'Hiiri',
          email: 'mikki@example.com',
          boatType: '1',
          boatRegistrationNumber: 'test',
          boatWidth: 1,
          boatLength: 1,
          boatName: 'test',
          boatModel: 'test',
          areaType: WinterStorageApplicationAreaType.UNMARKED,
          lease: null,
          winterStorageAreaChoices: [
            {
              priority: 1,
              winterStorageArea: {
                __typename: 'WinterStorageAreaNode',
                id: 'MOCK-WINTER-STORAGE-AREA-5',
                properties: {
                  __typename: 'WinterStorageAreaProperties',
                  name: 'Iso-Sarvasto',
                },
              },
              winterStorageSectionIds: ['MOCK-SECTION'],
              __typename: 'WinterStorageAreaChoiceType',
            },
          ],
          __typename: 'WinterStorageApplicationNode',
        },
        __typename: 'WinterStorageApplicationNodeEdge',
      },
      {
        node: {
          id: 'V2ludGVyU3RvcmFnZUFwcGxpY2F0aW9uTm9kZTo4',
          status: ApplicationStatus.PENDING,
          createdAt: '2019-05-06T13:09:44.953722+00:00',
          applicationCode: '',
          municipality: 'Helsinki',
          address: 'Katu 1',
          zipCode: '00000',
          firstName: 'Roope',
          lastName: 'Ankka',
          email: 'roope@example.com',
          boatType: '1',
          boatRegistrationNumber: 'test',
          boatWidth: 1,
          boatLength: 1,
          boatName: 'test',
          boatModel: 'test',
          areaType: WinterStorageApplicationAreaType.UNMARKED,
          lease: null,
          winterStorageAreaChoices: [
            {
              priority: 1,
              winterStorageArea: {
                __typename: 'WinterStorageAreaNode',
                id: 'MOCK-WINTER-STORAGE-AREA-6',
                properties: {
                  __typename: 'WinterStorageAreaProperties',
                  name: 'Iso-Sarvasto',
                },
              },
              winterStorageSectionIds: ['MOCK-SECTION'],
              __typename: 'WinterStorageAreaChoiceType',
            },
          ],
          __typename: 'WinterStorageApplicationNode',
        },
        __typename: 'WinterStorageApplicationNodeEdge',
      },
      {
        node: {
          id: 'V2ludGVyU3RvcmFnZUFwcGxpY2F0aW9uTm9kZTo5',
          status: ApplicationStatus.PENDING,
          createdAt: '2019-05-06T13:09:56.820368+00:00',
          applicationCode: '',
          municipality: 'Helsinki',
          address: 'Katu 1',
          zipCode: '00000',
          firstName: 'Kulta-Into',
          lastName: 'Pii',
          email: 'kulta-into@example.com',
          boatType: '1',
          boatRegistrationNumber: 'test',
          boatWidth: 1,
          boatLength: 1,
          boatName: 'test',
          boatModel: 'test',
          areaType: WinterStorageApplicationAreaType.UNMARKED,
          lease: null,
          winterStorageAreaChoices: [
            {
              priority: 1,
              winterStorageArea: {
                __typename: 'WinterStorageAreaNode',
                id: 'MOCK-WINTER-STORAGE-AREA-7',
                properties: {
                  __typename: 'WinterStorageAreaProperties',
                  name: 'Iso-Sarvasto',
                },
              },
              winterStorageSectionIds: ['MOCK-SECTION'],
              __typename: 'WinterStorageAreaChoiceType',
            },
          ],
          __typename: 'WinterStorageApplicationNode',
        },
        __typename: 'WinterStorageApplicationNodeEdge',
      },
      {
        node: {
          id: 'V2ludGVyU3RvcmFnZUFwcGxpY2F0aW9uTm9kZToxMA==',
          status: ApplicationStatus.PENDING,
          createdAt: '2019-05-06T13:12:02.766890+00:00',
          applicationCode: '',
          municipality: 'Helsinki',
          address: 'Katu 1',
          zipCode: '00000',
          firstName: 'Hansu',
          lastName: 'Hanhi',
          email: 'hansu@example.com',
          boatType: '1',
          boatRegistrationNumber: 'test',
          boatWidth: 1,
          boatLength: 1,
          boatName: 'test',
          boatModel: 'test',
          areaType: WinterStorageApplicationAreaType.UNMARKED,
          lease: null,
          winterStorageAreaChoices: [
            {
              priority: 1,
              winterStorageArea: {
                __typename: 'WinterStorageAreaNode',
                id: 'MOCK-WINTER-STORAGE-AREA-8',
                properties: {
                  __typename: 'WinterStorageAreaProperties',
                  name: 'Iso-Sarvasto',
                },
              },
              winterStorageSectionIds: ['MOCK-SECTION'],
              __typename: 'WinterStorageAreaChoiceType',
            },
          ],
          __typename: 'WinterStorageApplicationNode',
        },
        __typename: 'WinterStorageApplicationNodeEdge',
      },
      {
        node: {
          id: 'V2ludGVyU3RvcmFnZUFwcGxpY2F0aW9uTm9kZToxMQ==',
          status: ApplicationStatus.PENDING,
          createdAt: '2019-05-07T18:29:18.066260+00:00',
          applicationCode: '',
          municipality: 'Helsinki',
          address: 'Katu 1',
          zipCode: '00000',
          firstName: 'Hessu',
          lastName: 'Hopo',
          email: 'hessu@example.com',
          boatType: '1',
          boatRegistrationNumber: 'test',
          boatWidth: 1,
          boatLength: 1,
          boatName: 'test',
          boatModel: 'test',
          areaType: WinterStorageApplicationAreaType.UNMARKED,
          lease: null,
          winterStorageAreaChoices: [
            {
              priority: 1,
              winterStorageArea: {
                __typename: 'WinterStorageAreaNode',
                id: 'MOCK-WINTER-STORAGE-AREA-9',
                properties: {
                  __typename: 'WinterStorageAreaProperties',
                  name: 'Iso-Sarvasto',
                },
              },
              winterStorageSectionIds: ['MOCK-SECTION'],
              __typename: 'WinterStorageAreaChoiceType',
            },
          ],
          __typename: 'WinterStorageApplicationNode',
        },
        __typename: 'WinterStorageApplicationNodeEdge',
      },
    ],
    __typename: 'WinterStorageApplicationNodeConnection',
  },
  boatTypes: [
    {
      id: '1',
      name: 'Jollavene',
      __typename: 'BoatTypeType',
    },
    {
      id: '2',
      name: 'Soutuvene',
      __typename: 'BoatTypeType',
    },
    {
      id: '3',
      name: 'Perämoottorivene',
      __typename: 'BoatTypeType',
    },
    {
      id: '4',
      name: 'Sisäperämoottorivene',
      __typename: 'BoatTypeType',
    },
    {
      id: '5',
      name: 'Keskimoottorivene',
      __typename: 'BoatTypeType',
    },
    {
      id: '6',
      name: 'Purjevene / moottoripursi',
      __typename: 'BoatTypeType',
    },
    {
      id: '7',
      name: 'Troolari',
      __typename: 'BoatTypeType',
    },
    {
      id: '8',
      name: 'Suuri alus (yli 20t)',
      __typename: 'BoatTypeType',
    },
  ],
};
