import AboutComponent from "../components/about/About";
import { StyleSheet, View } from 'react-native';

export default function AboutPage() {

    return (
        <View style={styles.container}>
            <AboutComponent styles={styles} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    image: {
        width: '10rem',
        height: '10rem',
        resizeMode: 'contain',
        margin: 10,
    },
    textContainer: {
        fontSize: 20,
        margin: 12,
        textAlign: 'justify'
    },

});

// final json

// {
//     "data": {
//         "bookingKey": "ODEyMTQ4OTAhTTRROE5MIWZhbHNl",
//         "recordLocator": "M4Q8NL",
//         "currencyCode": "INR",
//         "systemCode": null,
//         "groupName": null,
//         "locators": {
//             "numericRecordLocator": "252633342723",
//             "parentRecordLocator": null,
//             "parentId": 0,
//             "recordLocators": [
//                 {
//                     "recordLocatorKey": "NzU5MTE3NjUhU0c-",
//                     "recordCode": "75911765",
//                     "systemDomainCode": null,
//                     "owningSystemCode": "SG",
//                     "bookingSystemCode": "SG",
//                     "interactionPurpose": null,
//                     "hostedCarrierCode": null
//                 }
//             ]
//         },
//         "info": {
//             "status": 2,
//             "paidStatus": 1,
//             "priceStatus": 2,
//             "profileStatus": 1,
//             "bookingType": null,
//             "channelType": 2,
//             "bookedDate": "2024-04-16T10:09:32.78Z",
//             "createdDate": "2024-04-16T10:09:32.78Z",
//             "expirationDate": "2024-04-28T00:40:00Z",
//             "modifiedDate": "2024-04-16T10:10:06.623Z",
//             "modifiedAgentId": 2636203,
//             "createdAgentId": 2636203,
//             "owningCarrierCode": "SG",
//             "changeAllowed": true
//         },
//         "sales": {
//             "created": {
//                 "agentCode": "NEWWEBSITE",
//                 "domainCode": "WW2",
//                 "locationCode": "WWW",
//                 "organizationCode": "SG"
//             },
//             "source": {
//                 "isoCountryCode": null,
//                 "sourceSystemCode": null,
//                 "agentCode": "NEWWEBSITE",
//                 "domainCode": "WW2",
//                 "locationCode": "WWW",
//                 "organizationCode": "SG"
//             },
//             "modified": null
//         },
//         "typeOfSale": {
//             "residentCountry": "IN",
//             "promotionCode": null,
//             "fareTypes": []
//         },
//         "hold": null,
//         "breakdown": {
//             "balanceDue": 0,
//             "pointsBalanceDue": 0,
//             "authorizedBalanceDue": 0,
//             "totalAmount": 3592,
//             "totalPoints": 0,
//             "totalToCollect": 3592,
//             "totalPointsToCollect": 0,
//             "totalCharged": 3592,
//             "passengerTotals": {
//                 "services": null,
//                 "specialServices": null,
//                 "seats": null,
//                 "upgrades": null,
//                 "spoilage": null,
//                 "nameChanges": null,
//                 "convenience": null,
//                 "infant": null
//             },
//             "passengers": {
//                 "MCFBRFQ-": {
//                     "passengerKey": "MCFBRFQ-",
//                     "services": null,
//                     "specialServices": null,
//                     "seats": null,
//                     "upgrades": null,
//                     "spoilage": null,
//                     "nameChanges": null,
//                     "convenience": null,
//                     "infant": null
//                 }
//             },
//             "journeyTotals": {
//                 "totalAmount": 1999,
//                 "totalPoints": 0,
//                 "totalTax": 1243,
//                 "totalDiscount": 0
//             },
//             "journeys": {
//                 "U0d_ODE1N34gfn5ERUx_MDQvMjcvMjAyNCAwNjoxMH5CT01_MDQvMjcvMjAyNCAwODoyMH5_": {
//                     "journeyKey": "U0d_ODE1N34gfn5ERUx_MDQvMjcvMjAyNCAwNjoxMH5CT01_MDQvMjcvMjAyNCAwODoyMH5_",
//                     "totalAmount": 1999,
//                     "totalPoints": 0,
//                     "totalTax": 1243,
//                     "totalDiscount": 0
//                 }
//             },
//             "addOnTotals": {
//                 "car": null,
//                 "hotel": null,
//                 "activities": null
//             }
//         },
//         "receivedBy": {
//             "receivedBy": "N-INET",
//             "latestReceivedBy": null,
//             "receivedReference": null,
//             "latestReceivedReference": null,
//             "referralCode": null
//         },
//         "contacts": {
//             "P": {
//                 "contactTypeCode": "P",
//                 "phoneNumbers": [
//                     {
//                         "type": 1,
//                         "number": "+919575270756",
//                         "countryCode": "91",
//                         "mobileNumberWithoutCC": "9575270756",
//                         "countryDetails": {
//                             "name": "India",
//                             "dial_code": "+91",
//                             "code": "IN",
//                             "flag": "🇮🇳",
//                             "regex": "^[6|7|8|9]{1}[0-9]{9}$"
//                         }
//                     }
//                 ],
//                 "cultureCode": "en-GB",
//                 "address": {
//                     "lineOne": null,
//                     "lineTwo": null,
//                     "lineThree": null,
//                     "countryCode": "IN",
//                     "provinceState": null,
//                     "city": "Dens",
//                     "postalCode": null
//                 },
//                 "emailAddress": "dczsc@djcsndkcsd.com",
//                 "customerNumber": null,
//                 "sourceOrganization": null,
//                 "distributionOption": 2,
//                 "notificationPreference": 1,
//                 "companyName": null,
//                 "name": {
//                     "first": "Zubaida",
//                     "middle": null,
//                     "last": "Naaz",
//                     "title": "MR",
//                     "suffix": null
//                 }
//             }
//         },
//         "passengers": {
//             "MCFBRFQ-": {
//                 "passengerKey": "MCFBRFQ-",
//                 "passengerAlternateKey": "MTI4MjEzMTE0",
//                 "customerNumber": null,
//                 "fees": [
//                     {
//                         "type": 4,
//                         "ssrCode": null,
//                         "ssrNumber": 0,
//                         "paymentNumber": 1,
//                         "isConfirmed": true,
//                         "code": "CTF",
//                         "detail": null,
//                         "passengerFeeKey": "MCEwITQ-",
//                         "override": false,
//                         "flightReference": null,
//                         "note": null,
//                         "createdDate": "2024-04-16T10:10:06.623Z",
//                         "isProtected": false,
//                         "serviceCharges": [
//                             {
//                                 "amount": 350,
//                                 "code": "CTF",
//                                 "detail": "Convenienc",
//                                 "type": 6,
//                                 "collectType": 0,
//                                 "currencyCode": "INR",
//                                 "foreignCurrencyCode": "INR",
//                                 "foreignAmount": 350,
//                                 "ticketCode": "CTF"
//                             },
//                             {
//                                 "amount": 8,
//                                 "code": "CGST07",
//                                 "detail": "DEL-BOM",
//                                 "type": 3,
//                                 "collectType": 0,
//                                 "currencyCode": "INR",
//                                 "foreignCurrencyCode": "INR",
//                                 "foreignAmount": 8,
//                                 "ticketCode": "CST"
//                             },
//                             {
//                                 "amount": 8,
//                                 "code": "SGST07",
//                                 "detail": "DEL-BOM",
//                                 "type": 3,
//                                 "collectType": 0,
//                                 "currencyCode": "INR",
//                                 "foreignCurrencyCode": "INR",
//                                 "foreignAmount": 8,
//                                 "ticketCode": "SST"
//                             }
//                         ]
//                     }
//                 ],
//                 "name": {
//                     "first": "Zubaida",
//                     "middle": null,
//                     "last": "Naaz",
//                     "title": "MR",
//                     "suffix": null
//                 },
//                 "passengerTypeCode": "ADT",
//                 "discountCode": null,
//                 "bags": [],
//                 "program": null,
//                 "infant": null,
//                 "info": {
//                     "nationality": null,
//                     "residentCountry": null,
//                     "gender": 1,
//                     "dateOfBirth": null,
//                     "familyNumber": null
//                 },
//                 "travelDocuments": [],
//                 "addresses": [],
//                 "weightCategory": 1
//             }
//         },
//         "journeys": [
//             {
//                 "flightType": 1,
//                 "stops": 0,
//                 "designator": {
//                     "destination": "BOM",
//                     "origin": "DEL",
//                     "arrival": "2024-04-27T08:20:00",
//                     "departure": "2024-04-27T06:10:00"
//                 },
//                 "move": null,
//                 "segments": [
//                     {
//                         "isStandby": false,
//                         "isConfirming": false,
//                         "isConfirmingExternal": false,
//                         "isBlocked": false,
//                         "isHosted": true,
//                         "isChangeOfGauge": false,
//                         "designator": {
//                             "destination": "BOM",
//                             "origin": "DEL",
//                             "arrival": "2024-04-27T08:20:00",
//                             "departure": "2024-04-27T06:10:00"
//                         },
//                         "isSeatmapViewable": true,
//                         "fares": [
//                             {
//                                 "isGoverning": true,
//                                 "downgradeAvailable": false,
//                                 "carrierCode": "SG",
//                                 "fareKey": "MH5QMX4gflNHflAxU0FMRX4xMzQ2fn4wfjB_flg-",
//                                 "classOfService": "P1",
//                                 "classType": null,
//                                 "fareApplicationType": 0,
//                                 "fareClassOfService": "P1",
//                                 "fareBasisCode": "P1SALE",
//                                 "fareSequence": 0,
//                                 "inboundOutBound": 0,
//                                 "fareStatus": 0,
//                                 "isAllotmentMarketFare": false,
//                                 "originalClassOfService": "P1",
//                                 "ruleNumber": "1346",
//                                 "productClass": "SS",
//                                 "ruleTariff": null,
//                                 "travelClassCode": "Y",
//                                 "crossReferenceClassOfService": null,
//                                 "passengerFares": [
//                                     {
//                                         "serviceCharges": [
//                                             {
//                                                 "amount": 1999,
//                                                 "code": null,
//                                                 "detail": null,
//                                                 "type": 0,
//                                                 "collectType": 0,
//                                                 "currencyCode": "INR",
//                                                 "foreignCurrencyCode": "INR",
//                                                 "foreignAmount": 1999,
//                                                 "ticketCode": null
//                                             },
//                                             {
//                                                 "amount": 50,
//                                                 "code": "RCS",
//                                                 "detail": "DEL-BOM",
//                                                 "type": 4,
//                                                 "collectType": 0,
//                                                 "currencyCode": "INR",
//                                                 "foreignCurrencyCode": "INR",
//                                                 "foreignAmount": 50,
//                                                 "ticketCode": "RCS"
//                                             },
//                                             {
//                                                 "amount": 65,
//                                                 "code": "TRF",
//                                                 "detail": "DEL-BOM",
//                                                 "type": 4,
//                                                 "collectType": 0,
//                                                 "currencyCode": "INR",
//                                                 "foreignCurrencyCode": "INR",
//                                                 "foreignAmount": 65,
//                                                 "ticketCode": "TRF"
//                                             },
//                                             {
//                                                 "amount": 900,
//                                                 "code": "YQ",
//                                                 "detail": "DEL-BOM",
//                                                 "type": 4,
//                                                 "collectType": 0,
//                                                 "currencyCode": "INR",
//                                                 "foreignCurrencyCode": "INR",
//                                                 "foreignAmount": 900,
//                                                 "ticketCode": "YQ"
//                                             },
//                                             {
//                                                 "amount": 12,
//                                                 "code": "UDF",
//                                                 "detail": "DEL-BOM",
//                                                 "type": 4,
//                                                 "collectType": 0,
//                                                 "currencyCode": "INR",
//                                                 "foreignCurrencyCode": "INR",
//                                                 "foreignAmount": 12,
//                                                 "ticketCode": "UDF"
//                                             },
//                                             {
//                                                 "amount": 91,
//                                                 "code": "PSF",
//                                                 "detail": "DEL-BOM",
//                                                 "type": 4,
//                                                 "collectType": 0,
//                                                 "currencyCode": "INR",
//                                                 "foreignCurrencyCode": "INR",
//                                                 "foreignAmount": 91,
//                                                 "ticketCode": "PSF"
//                                             },
//                                             {
//                                                 "amount": 50,
//                                                 "code": "CGST07",
//                                                 "detail": "DEL-BOM",
//                                                 "type": 5,
//                                                 "collectType": 0,
//                                                 "currencyCode": "INR",
//                                                 "foreignCurrencyCode": "INR",
//                                                 "foreignAmount": 50,
//                                                 "ticketCode": "CST"
//                                             },
//                                             {
//                                                 "amount": 25,
//                                                 "code": "SGST07",
//                                                 "detail": "DEL-BOM",
//                                                 "type": 5,
//                                                 "collectType": 0,
//                                                 "currencyCode": "INR",
//                                                 "foreignCurrencyCode": "INR",
//                                                 "foreignAmount": 25,
//                                                 "ticketCode": "SST"
//                                             },
//                                             {
//                                                 "amount": 50,
//                                                 "code": "SGST07",
//                                                 "detail": "DEL-BOM",
//                                                 "type": 5,
//                                                 "collectType": 0,
//                                                 "currencyCode": "INR",
//                                                 "foreignCurrencyCode": "INR",
//                                                 "foreignAmount": 50,
//                                                 "ticketCode": "SST"
//                                             }
//                                         ],
//                                         "discountCode": null,
//                                         "fareDiscountCode": null,
//                                         "passengerType": "ADT"
//                                     }
//                                 ],
//                                 "fareLink": 0
//                             }
//                         ],
//                         "segmentKey": "U0d_ODE1N34gfn5ERUx_MDQvMjcvMjAyNCAwNjoxMH5CT01_MDQvMjcvMjAyNCAwODoyMH5_",
//                         "identifier": {
//                             "identifier": "8157",
//                             "carrierCode": "SG",
//                             "opSuffix": null
//                         },
//                         "passengerSegment": {
//                             "MCFBRFQ-": {
//                                 "seats": [],
//                                 "passengerKey": "MCFBRFQ-",
//                                 "activityDate": "2024-04-16T10:09:32.78Z",
//                                 "baggageAllowanceUsed": false,
//                                 "baggageAllowanceWeight": 15,
//                                 "baggageAllowanceWeightType": 2,
//                                 "boardingSequence": "0",
//                                 "createdDate": "2024-04-16T10:09:32.78Z",
//                                 "liftStatus": 0,
//                                 "modifiedDate": "2024-04-16T10:09:32.78Z",
//                                 "overBookIndicator": 0,
//                                 "priorityDate": "2024-04-16T10:09:32.787Z",
//                                 "timeChanged": false,
//                                 "verifiedTravelDocs": null,
//                                 "sourcePointOfSale": {
//                                     "agentCode": "NEWWEBSITE",
//                                     "domainCode": "WW2",
//                                     "locationCode": "WWW",
//                                     "organizationCode": "SG"
//                                 },
//                                 "pointOfSale": {
//                                     "agentCode": "NEWWEBSITE",
//                                     "domainCode": "WW2",
//                                     "locationCode": "WWW",
//                                     "organizationCode": "SG"
//                                 },
//                                 "ssrs": [
//                                     {
//                                         "isConfirmed": true,
//                                         "isConfirmingUnheld": false,
//                                         "note": null,
//                                         "ssrDuration": 2,
//                                         "ssrKey": "MCFNQ0ZCUkZRLSFTQ0FSITEhQk9NIVNHITYzODQ5Nzk1MDAwMDAwMDAwMCFERUwhODE1NyEg",
//                                         "count": 1,
//                                         "ssrCode": "SCAR",
//                                         "feeCode": null,
//                                         "inBundle": false,
//                                         "passengerKey": "MCFBRFQ-",
//                                         "ssrDetail": null,
//                                         "ssrNumber": 1,
//                                         "market": {
//                                             "identifier": {
//                                                 "identifier": "8157",
//                                                 "carrierCode": "SG",
//                                                 "opSuffix": null
//                                             },
//                                             "destination": "BOM",
//                                             "origin": "DEL",
//                                             "departureDate": "2024-04-27T06:10:00"
//                                         },
//                                         "isAddedInStateRebook": true
//                                     }
//                                 ],
//                                 "tickets": [],
//                                 "bags": [],
//                                 "scores": [],
//                                 "boardingPassDetail": null,
//                                 "hasInfant": false,
//                                 "seatPreferences": {
//                                     "seat": 0,
//                                     "travelClass": 0,
//                                     "advancedPreferences": []
//                                 },
//                                 "bundleCode": null,
//                                 "verifiedTravelDocuments": null
//                             }
//                         },
//                         "channelType": 2,
//                         "cabinOfService": "Y",
//                         "externalIdentifier": null,
//                         "priorityCode": null,
//                         "changeReasonCode": 0,
//                         "segmentType": 0,
//                         "salesDate": "2024-04-16T10:09:32.78Z",
//                         "international": false,
//                         "flightReference": "20240427 SG8157 DELBOM",
//                         "legs": [
//                             {
//                                 "legKey": "NjM4NDk3OTUwMDAwMDAwMDAwIVNHITgxNTchICFERUwhQk9NITI3NTcwMDc-",
//                                 "operationsInfo": null,
//                                 "designator": {
//                                     "destination": "BOM",
//                                     "origin": "DEL",
//                                     "arrival": "2024-04-27T08:20:00",
//                                     "departure": "2024-04-27T06:10:00"
//                                 },
//                                 "legInfo": {
//                                     "departureTimeUtc": "2024-04-27T00:40:00Z",
//                                     "arrivalTimeUtc": "2024-04-27T02:50:00Z",
//                                     "adjustedCapacity": 189,
//                                     "arrivalTerminal": "1",
//                                     "arrivalTimeVariant": 330,
//                                     "backMoveDays": 0,
//                                     "capacity": 189,
//                                     "changeOfDirection": false,
//                                     "codeShareIndicator": 0,
//                                     "departureTerminal": "3",
//                                     "departureTimeVariant": 330,
//                                     "equipmentType": "737",
//                                     "equipmentTypeSuffix": "A01",
//                                     "eTicket": false,
//                                     "irop": false,
//                                     "lid": 189,
//                                     "marketingCode": null,
//                                     "marketingOverride": false,
//                                     "onTime": null,
//                                     "operatedByText": null,
//                                     "operatingCarrier": null,
//                                     "operatingFlightNumber": null,
//                                     "operatingOpSuffix": null,
//                                     "outMoveDays": 0,
//                                     "arrivalTime": "2024-04-27T08:20:00",
//                                     "departureTime": "2024-04-27T06:10:00",
//                                     "prbcCode": "737A01",
//                                     "scheduleServiceType": null,
//                                     "sold": 55,
//                                     "status": 0,
//                                     "subjectToGovtApproval": false
//                                 },
//                                 "nests": [],
//                                 "ssrs": [],
//                                 "seatmapReference": "U0chODE1NyEgITYzODQ5Nzk1MDAwMDAwMDAwMCFERUwhQk9N",
//                                 "flightReference": "20240427 SG8157 DELBOM"
//                             }
//                         ],
//                         "isCheckinable": true
//                     }
//                 ],
//                 "journeyKey": "U0d_ODE1N34gfn5ERUx_MDQvMjcvMjAyNCAwNjoxMH5CT01_MDQvMjcvMjAyNCAwODoyMH5_",
//                 "notForGeneralUser": false
//             }
//         ],
//         "comments": [
//             {
//                 "type": 0,
//                 "text": "BOOKING CREATED",
//                 "createdDate": "2024-04-16T10:10:07.867Z",
//                 "pointOfSale": {
//                     "agentCode": "NEWWEBSITE",
//                     "domainCode": "WW2",
//                     "locationCode": "WWW",
//                     "organizationCode": "SG"
//                 },
//                 "commentKey": "MTg4Njk4NTEw"
//             }
//         ],
//         "queues": [],
//         "history": [],
//         "payments": [
//             {
//                 "paymentKey": "MTAxNjcxOTM5ITEhSlAhODEyMTQ4OTA-",
//                 "code": "JP",
//                 "approvalDate": "2024-04-16T10:10:06.67Z",
//                 "details": {
//                     "accountNumberId": 0,
//                     "parentPaymentId": null,
//                     "accountName": null,
//                     "accountNumber": "XXXXXXXXXX4242",
//                     "expirationDate": null,
//                     "text": null,
//                     "installments": 0,
//                     "binRange": 0,
//                     "fields": {
//                         "AUTHCD": "spicejet-P85W7FV3-1",
//                         "GATEWAY": "CCAVENUE_V2:CARD:VISA",
//                         "ORDERID": "P85W7FV3",
//                         "PAYMENTCODE": "VI",
//                         "TXNUMBER": "313011308406"
//                     }
//                 },
//                 "amounts": {
//                     "amount": 3592,
//                     "currencyCode": "INR",
//                     "collected": 3592,
//                     "collectedCurrencyCode": "INR",
//                     "quoted": 3592,
//                     "quotedCurrencyCode": "INR"
//                 },
//                 "authorizationCode": null,
//                 "authorizationStatus": 4,
//                 "fundedDate": "1800-01-01T00:00:00Z",
//                 "transactionCode": null,
//                 "dcc": null,
//                 "threeDSecure": null,
//                 "attachments": [],
//                 "createdDate": "2024-04-16T10:10:06.623Z",
//                 "modifiedDate": "2024-04-16T10:10:06.623Z",
//                 "type": 1,
//                 "status": 3,
//                 "transferred": false,
//                 "channelType": 2,
//                 "pointOfSale": {
//                     "agentCode": "NEWWEBSITE",
//                     "domainCode": "WW2",
//                     "locationCode": "WWW",
//                     "organizationCode": "SG"
//                 },
//                 "sourcePointOfSale": {
//                     "agentCode": "NEWWEBSITE",
//                     "domainCode": "WW2",
//                     "locationCode": "WWW",
//                     "organizationCode": "SG"
//                 },
//                 "deposit": false,
//                 "accountId": 0,
//                 "voucher": null,
//                 "addedToState": true,
//                 "createdAgentId": 2636203,
//                 "modifiedAgentId": 2636203,
//                 "reference": 101671939
//             }
//         ],
//         "addOns": {},
//         "primaryPassengerKey": "MCFBRFQ-",
//         "stationsFullName": {
//             "DEL": "Delhi",
//             "BOM": "Mumbai"
//         },
//         "stationCodeTimeZoneOffsets": {
//             "DEL": 330,
//             "BOM": 330
//         },
//         "isFareBreakupHidden": false,
//         "flags": {
//             "isBookingModifiable": true,
//             "isBookingCancellable": true,
//             "isAddonAllowed": true,
//             "isEditContact": true,
//             "isCheckinable": true,
//             "isCheckedin": false,
//             "isInternational": {
//                 "booking": false,
//                 "origin": false,
//                 "destination": false
//             },
//             "DepartingIndia": {
//                 "U0d_ODE1N34gfn5ERUx_MDQvMjcvMjAyNCAwNjoxMH5CT01_MDQvMjcvMjAyNCAwODoyMH5_": {
//                     "origin": true
//                 }
//             }
//         },
//         "onScreenInfos": {},
//         "convenienceFeeCodes": [
//             "CTF",
//             "IBTF"
//         ]
//     },
//     "metadata": {
//         "documentation_url": "http://developer.navitaire.com/documentation/dotrezapi/booking"
//     }
// }