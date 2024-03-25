import {
    CreatePluginRequestDto,
    CreateRequestSettingRequestDto,
    CreateScraperConfigRequestDto,
} from '@smedia/shared/api/data-access/dto/scraper';
import { RequestSetting_Method } from '@smedia/shared/api/data-access/proto-ts/scraper/request_setting_messages';
import {
    EntryPoint_Type,
    Extractor_Type,
    Field_Type,
    PageType,
    ProductType,
} from '@smedia/shared/api/data-access/proto-ts/scraper/scraper_definition';

export const data: {
    plugins: CreatePluginRequestDto[];
    request: CreateRequestSettingRequestDto[];
    config: CreateScraperConfigRequestDto;
} = {
    plugins: [],
    request: [
        {
            active: true,
            additionalHeader: [],
            contentType: null,
            method: RequestSetting_Method.GET,
            name: 'mcgovernsrv',
            postData: null,
            proxyConfig: 'default',
            referrer: null,
            retryCount: 2,
            retryInterval: 120,
            useProxy: true,
        },
    ],
    config: {
        name: 'mcgovernsrv',
        active: true,
        organization: {
            id: 2,
        },
        entryPoints: [
            {
                active: true,
                initRequestSetting: null,
                pdpRequestSetting: null,
                requestSetting: {
                    id: 1,
                },
                runInterval: {
                    id: 1,
                },
                url: 'https://www.mcgovernsrv.com/default.asp?page=inventory&condition=new&category=trailer&sz=50',
                requiredParams: null,
                type: EntryPoint_Type.HTML,
                productType: ProductType.CAR,
            },
            {
                active: true,
                initRequestSetting: null,
                pdpRequestSetting: null,
                requestSetting: {
                    id: 1,
                },
                runInterval: {
                    id: 1,
                },
                url: 'https://www.mcgovernsrv.com/default.asp?page=inventory&condition=new&category=trailer&sz=50&pg=2',
                requiredParams: null,
                type: EntryPoint_Type.HTML,
                productType: ProductType.CAR,
            },
            {
                active: true,
                initRequestSetting: null,
                pdpRequestSetting: null,
                requestSetting: {
                    id: 1,
                },
                runInterval: {
                    id: 1,
                },
                url: 'https://www.mcgovernsrv.com/default.asp?page=inventory&condition=pre-owned&category=motorhome&category=trailer&sz=50',
                requiredParams: null,
                type: EntryPoint_Type.HTML,
                productType: ProductType.CAR,
            },
        ],
        fields: [


            {
                type: Field_Type.SPLITTER,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.SPLIT,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '<li class="v7list-results__item"',
                        active: true,
                    },

                ],
            },
            {
                type: Field_Type.URL,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'vehicle-heading__link" href="(?<url>[^"]+)',
                        active: true,
                    },
                    {
                        type: Extractor_Type.PREPEND_STRING,
                        pageType: PageType.LIST,
                        order: 2,
                        value: 'https://www.mcgovernsrv.com',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.MAKE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'vehicle-heading__name">(?<make>[^<]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.MODEL,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'vehicle-heading__model">(?<model>[^<]+)',
                        active: true,
                    },

                ],
            },
            {
                type: Field_Type.YEAR,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '<span class="vehicle-heading__year">(?<year>[^<]+)',
                        active: true,
                    },
                ],
            },

            {
                type: Field_Type.PRICE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'Our Price[^>]+>[^>]+>(?<price>[^<]+)',
                        active: true,
                    },

                ],
            },
            {
                type: Field_Type.DESCRIPTION,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: '<meta name="description" content="(?<description>[^"]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.STOCK_NUMBER,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: 'Stock Number<\/label>\s*[^>]+>(?<stock_number>[^\<]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.BODY_STYLE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP ,
                        order: 1,
                        value: 'Body Style<\/label>\s*[^>]+>(?<body_style>[^\<]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.ODOMETER,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: 'Odometer<\/label>\s*[^>]+>(?<odometer>[^\s*]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.EXTERIOR_COLOR,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: 'Color<\/label>\s*[^>]+>(?<exterior_color>[^\<]+)',
                        active: true,
                    },
                ],
            },

            {
                type: Field_Type.VIN,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: 'Stock Number<\/label>\s*[^>]+>(?<vin>[^<]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.ENGINE_TYPE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: 'Engine<\/label>\s*[^>]+>(?<engine>[^\<]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.IMAGES,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: '<div class="lS-image-wrapper">\s*<img src="(?<IMAGES>[^"]+)',
                        active: true,
                    },
                ],
            },
        ],
    },
};
