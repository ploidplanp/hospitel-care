export const schema = {
    "models": {
        "Room": {
            "name": "Room",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "room_name": {
                    "name": "room_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "resident_name": {
                    "name": "resident_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "resident_gender": {
                    "name": "resident_gender",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "resident_phone": {
                    "name": "resident_phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "resident_allergyFood": {
                    "name": "resident_allergyFood",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "resident_allergyDrug": {
                    "name": "resident_allergyDrug",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "contact_name": {
                    "name": "contact_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "contact_phone": {
                    "name": "contact_phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "checkin": {
                    "name": "checkin",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Rooms",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "ResidentLog": {
            "name": "ResidentLog",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "resident_name": {
                    "name": "resident_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "resident_gender": {
                    "name": "resident_gender",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "resident_phone": {
                    "name": "resident_phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "checkin": {
                    "name": "checkin",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "checkout": {
                    "name": "checkout",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "ResidentLogs",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "version": "f7c5fcbadae5bd4486eaec3f7d09a2d1"
};