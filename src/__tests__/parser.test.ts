import { parseEntities, parseIntent } from "../parser"

const howManyBaguettes = {
    "id": 0,
    "contextId": "a6808902-4ce5-485f-9460-9d77bf3234bd",
    "isFinal": true,
    "words": [
        {
            "value": "HOW",
            "index": 2,
            "startTimestamp": 720,
            "endTimestamp": 960,
            "isFinal": true
        },
        {
            "value": "MANY",
            "index": 3,
            "startTimestamp": 960,
            "endTimestamp": 1200,
            "isFinal": true
        },
        {
            "value": "BAGUETTE",
            "index": 4,
            "startTimestamp": 1200,
            "endTimestamp": 1740,
            "isFinal": true
        },
        {
            "value": "DOES",
            "index": 5,
            "startTimestamp": 1740,
            "endTimestamp": 1980,
            "isFinal": true
        },
        {
            "value": "NOVO",
            "index": 6,
            "startTimestamp": 1980,
            "endTimestamp": 2340,
            "isFinal": true
        },
        {
            "value": "GET",
            "index": 7,
            "startTimestamp": 2340,
            "endTimestamp": 2520,
            "isFinal": true
        },
        {
            "value": "TOMORROW",
            "index": 8,
            "startTimestamp": 2520,
            "endTimestamp": 2880,
            "isFinal": true
        }
    ],
    "entities": [
        {
            "type": "prodName",
            "value": "bag",
            "startPosition": 4,
            "endPosition": 5,
            "isFinal": true
        },
        {
            "type": "custName",
            "value": "novo",
            "startPosition": 6,
            "endPosition": 7,
            "isFinal": true
        },
        {
            "type": "delivDate",
            "value": "2022-01-24",
            "startPosition": 8,
            "endPosition": 9,
            "isFinal": true
        }
    ],
    "intent": {
        "intent": "check_prod_order",
        "isFinal": true
    }
}

const howManyBaguetteResponse = [
    {
        "type": "prodName",
        "value": "bag"
    },
    {
        "type": "custName",
        "value": "novo"
    },
    {
        "type": "delivDate",
        "value": "2022-01-24"
    }
]



describe("Test Parser", () => {
    test("Test parser for intent", () => {
        const entry1 = howManyBaguettes
        const expected1 = "check_prod_order"
        const actualValue1  = parseIntent(entry1)
       
        expect(actualValue1).toEqual(expected1)
    })

    test("Test parser for entities", () => {
        const entry1 = howManyBaguettes
        const expected1 = howManyBaguetteResponse
        const actualValue1  = parseEntities(entry1)
       
        expect(actualValue1).toEqual(expected1)
    })

    
    
})