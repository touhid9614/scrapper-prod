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
            name: 'sawyerschevy',
            postData: null,
            proxyConfig: 'default',
            referrer: null,
            retryCount: 2,
            retryInterval: 120,
            useProxy: true,
        },
    ],
    config: {
        name: 'sawyerschevy',
        active: true,
        organization: {
            id: 3,
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
                url: 'https://www.sawyerschevy.com/searchnew.aspx',
                requiredParams: null,
                productType: ProductType.CAR,
                type: EntryPoint_Type.HTML,
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
                url: 'https://www.sawyerschevy.com/searchused.aspx',
                requiredParams: null,
                productType: ProductType.CAR,
                type: EntryPoint_Type.HTML,
            },
        ],
        fields: [
            {
                type: Field_Type.TOTAL_PRODUCT,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'srp-results-count[^>]*>\\s<strong>(?<total_product>\\d*)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.NEXT_PAGE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: "<a\\s*href='(?<next_page>[^']+)'\\s*class=\"stat\\-arrow\\-next\"\\s*",
                        active: true,
                    },
                    {
                        type: Extractor_Type.PREPEND_STRING,
                        pageType: PageType.LIST,
                        order: 2,
                        value: 'https://www.sawyerschevy.com',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.SPLITTER,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.SPLIT_AND_TAKE_ONE,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '<div class="col-md-9 sidebar-oncanvas">|<div class="row srpDisclaimer"<take>1',
                        active: true,
                    },
                    {
                        type: Extractor_Type.SPLIT,
                        pageType: PageType.LIST,
                        order: 2,
                        value: 'data-vehicle-information',
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
                        value: 'hero-carousel__item--viewvehicle"\\s*href="(?<url>[^"]+)',
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
                        value: 'data-make="(?<make>[^"]+)',
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
                        value: 'data-model="(?<model>[^"]+)',
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
                        value: 'data-year="(?<year>[^"]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.TRIM,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'data-trim="(?<trim>[^"]+)',
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
                        value: 'data-price="(?<price>[^"]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.STOCK_TYPE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'hero-carousel__item--viewvehicle"\\s*href="https:\\/\\/www.sawyerschevy.com\\/(?<stock_type>used|new)',
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
                        value: 'Stock #:\\s*</span>\\s*[^>]+>(?<stock_number>[^<]+)',
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
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'data-bodystyle="(?<body_style>[^"]+)',
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
                        value: 'Mileage[^>]+>[^>]+>(?<odometer>[\\d,]+)',
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
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'data-extcolor="(?<exterior_color>[^"]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.INTERIOR_COLOR,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'data-intcolor="(?<interior_color>[^"]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.TRANSMISSION,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'data-trans="(?<transmission>[^"]+)',
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
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'data-vin="(?<vin>[^"]+)',
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
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'data-engine="(?<engine_type>[^"]+)',
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
                        value: '<img src="(?<images>[^"]+)',
                        active: true,
                    },
                ],
            },
        ],
    },
};
