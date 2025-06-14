const populate = async (value, Currency) => {
    let myStr = ""
    // url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_bKRQ9RGKMU7xd7QTvZD2FBKdz3V9yH4WJNiArpGP" + Currency;
    // let response  = await fetch(url)
    // let rJson = await response.json()
    // document.querySelector(".output").style.display = "block";
    let rJson = JSON.parse(`{
  "meta": {
    "last_updated_at": "2024-12-14T23:59:59Z"
  },
  "data": {
    "ADA": {
      "code": "ADA",
      "value": 0.94226058
    },
    "AED": {
      "code": "AED",
      "value": 3.671760529
    },
    "AFN": {
      "code": "AFN",
      "value": 70.0198181437
    },
    "ALL": {
      "code": "ALL",
      "value": 93.6146740655
    },
    "AMD": {
      "code": "AMD",
      "value": 394.3912112123
    },
    "ANG": {
      "code": "ANG",
      "value": 1.7866902243
    },
    "AOA": {
      "code": "AOA",
      "value": 915.4591551855
    },
    "ARB": {
      "code": "ARB",
      "value": 1.0149858815
    },
    "ARS": {
      "code": "ARS",
      "value": 1017.3916327067
    },
    "AUD": {
      "code": "AUD",
      "value": 1.5714502159
    },
    "AVAX": {
      "code": "AVAX",
      "value": 0.020047898
    },
    "AWG": {
      "code": "AWG",
      "value": 1.79
    },
    "AZN": {
      "code": "AZN",
      "value": 1.7
    },
    "BAM": {
      "code": "BAM",
      "value": 1.861490226
    },
    "BBD": {
      "code": "BBD",
      "value": 2
    },
    "BDT": {
      "code": "BDT",
      "value": 119.9990668783
    },
    "BGN": {
      "code": "BGN",
      "value": 1.8549702936
    },
    "BHD": {
      "code": "BHD",
      "value": 0.376
    },
    "BIF": {
      "code": "BIF",
      "value": 2904.3194406005
    },
    "BMD": {
      "code": "BMD",
      "value": 1
    },
    "BNB": {
      "code": "BNB",
      "value": 0.0013939813
    },
    "BND": {
      "code": "BND",
      "value": 1.3475502389
    },
    "BOB": {
      "code": "BOB",
      "value": 6.9077012871
    },
    "BRL": {
      "code": "BRL",
      "value": 6.0451910473
    },
    "BSD": {
      "code": "BSD",
      "value": 1
    },
    "BTC": {
      "code": "BTC",
      "value": 0.0000098571
    },
    "BTN": {
      "code": "BTN",
      "value": 84.4007453863
    },
    "BWP": {
      "code": "BWP",
      "value": 13.5971518583
    },
    "BYN": {
      "code": "BYN",
      "value": 3.2749955031
    },
    "BYR": {
      "code": "BYR",
      "value": 32749.968901371
    },
    "BZD": {
      "code": "BZD",
      "value": 2
    },
    "CAD": {
      "code": "CAD",
      "value": 1.4233302356
    },
    "CDF": {
      "code": "CDF",
      "value": 2806.9349765859
    },
    "CHF": {
      "code": "CHF",
      "value": 0.8924300965
    },
    "CLF": {
      "code": "CLF",
      "value": 0.0253500043
    },
    "CLP": {
      "code": "CLP",
      "value": 986.2929675506
    },
    "CNY": {
      "code": "CNY",
      "value": 7.275370749
    },
    "COP": {
      "code": "COP",
      "value": 4314.505623077
    },
    "CRC": {
      "code": "CRC",
      "value": 506.6474908064
    },
    "CUC": {
      "code": "CUC",
      "value": 1
    },
    "CUP": {
      "code": "CUP",
      "value": 24
    },
    "CVE": {
      "code": "CVE",
      "value": 104.9845221865
    },
    "CZK": {
      "code": "CZK",
      "value": 23.7852530659
    },
    "DAI": {
      "code": "DAI",
      "value": 0.9997594571
    },
    "DJF": {
      "code": "DJF",
      "value": 177.721
    },
    "DKK": {
      "code": "DKK",
      "value": 7.0991113755
    },
    "DOP": {
      "code": "DOP",
      "value": 60.6536778404
    },
    "DOT": {
      "code": "DOT",
      "value": 0.1168582164
    },
    "DZD": {
      "code": "DZD",
      "value": 134.0953017278
    },
    "EGP": {
      "code": "EGP",
      "value": 50.8139567024
    },
    "ERN": {
      "code": "ERN",
      "value": 15
    },
    "ETB": {
      "code": "ETB",
      "value": 127.215559163
    },
    "ETH": {
      "code": "ETH",
      "value": 0.0002583738
    },
    "EUR": {
      "code": "EUR",
      "value": 0.9517100978
    },
    "FJD": {
      "code": "FJD",
      "value": 2.3273003548
    },
    "FKP": {
      "code": "FKP",
      "value": 0.7922379384
    },
    "GBP": {
      "code": "GBP",
      "value": 0.7923201186
    },
    "GEL": {
      "code": "GEL",
      "value": 2.8431304445
    },
    "GGP": {
      "code": "GGP",
      "value": 0.7922373513
    },
    "GHS": {
      "code": "GHS",
      "value": 14.6531617915
    },
    "GIP": {
      "code": "GIP",
      "value": 0.7922379647
    },
    "GMD": {
      "code": "GMD",
      "value": 58.6906913626
    },
    "GNF": {
      "code": "GNF",
      "value": 8628.8057521132
    },
    "GTQ": {
      "code": "GTQ",
      "value": 7.6901215178
    },
    "GYD": {
      "code": "GYD",
      "value": 208.8891146616
    },
    "HKD": {
      "code": "HKD",
      "value": 7.7734715525
    },
    "HNL": {
      "code": "HNL",
      "value": 24.3033533143
    },
    "HRK": {
      "code": "HRK",
      "value": 6.7074109747
    },
    "HTG": {
      "code": "HTG",
      "value": 132.753898282
    },
    "HUF": {
      "code": "HUF",
      "value": 388.6397363387
    },
    "IDR": {
      "code": "IDR",
      "value": 15972.61949733
    },
    "ILS": {
      "code": "ILS",
      "value": 3.6031105285
    },
    "IMP": {
      "code": "IMP",
      "value": 0.7922375607
    },
    "INR": {
      "code": "INR",
      "value": 84.758076917
    },
    "IQD": {
      "code": "IQD",
      "value": 1307.9527016074
    },
    "IRR": {
      "code": "IRR",
      "value": 41996.425966693
    },
    "ISK": {
      "code": "ISK",
      "value": 138.6384967714
    },
    "JEP": {
      "code": "JEP",
      "value": 0.7922378729
    },
    "JMD": {
      "code": "JMD",
      "value": 155.9301693009
    },
    "JOD": {
      "code": "JOD",
      "value": 0.71
    },
    "JPY": {
      "code": "JPY",
      "value": 153.7599953253
    },
    "KES": {
      "code": "KES",
      "value": 129.5712787829
    },
    "KGS": {
      "code": "KGS",
      "value": 87.1001830212
    },
    "KHR": {
      "code": "KHR",
      "value": 4012.4798871597
    },
    "KMF": {
      "code": "KMF",
      "value": 469.0138781207
    },
    "KPW": {
      "code": "KPW",
      "value": 900.0014204406
    },
    "KRW": {
      "code": "KRW",
      "value": 1432.220869734
    },
    "KWD": {
      "code": "KWD",
      "value": 0.3074900596
    },
    "KYD": {
      "code": "KYD",
      "value": 0.83333
    },
    "KZT": {
      "code": "KZT",
      "value": 524.3814689051
    },
    "LAK": {
      "code": "LAK",
      "value": 21819.655325936
    },
    "LBP": {
      "code": "LBP",
      "value": 89545.29732856
    },
    "LKR": {
      "code": "LKR",
      "value": 290.4319325763
    },
    "LRD": {
      "code": "LRD",
      "value": 181.040511919
    },
    "LSL": {
      "code": "LSL",
      "value": 17.9321932563
    },
    "LTC": {
      "code": "LTC",
      "value": 0.0084544318
    },
    "LTL": {
      "code": "LTL",
      "value": 3.2876211003
    },
    "LVL": {
      "code": "LVL",
      "value": 0.6691788048
    },
    "LYD": {
      "code": "LYD",
      "value": 4.8810206853
    },
    "MAD": {
      "code": "MAD",
      "value": 9.9588015129
    },
    "MATIC": {
      "code": "MATIC",
      "value": 1.6642651379
    },
    "MDL": {
      "code": "MDL",
      "value": 18.1977831893
    },
    "MGA": {
      "code": "MGA",
      "value": 4699.4328359271
    },
    "MKD": {
      "code": "MKD",
      "value": 58.6509176392
    },
    "MMK": {
      "code": "MMK",
      "value": 2098.0741529318
    },
    "MNT": {
      "code": "MNT",
      "value": 3422.4089803594
    },
    "MOP": {
      "code": "MOP",
      "value": 8.0054009964
    },
    "MRO": {
      "code": "MRO",
      "value": 356.999828
    },
    "MRU": {
      "code": "MRU",
      "value": 39.9201522884
    },
    "MUR": {
      "code": "MUR",
      "value": 47.1161090363
    },
    "MVR": {
      "code": "MVR",
      "value": 15.4484226596
    },
    "MWK": {
      "code": "MWK",
      "value": 1733.7161044258
    },
    "MXN": {
      "code": "MXN",
      "value": 20.1160028637
    },
    "MYR": {
      "code": "MYR",
      "value": 4.4487104713
    },
    "MZN": {
      "code": "MZN",
      "value": 63.5730724409
    },
    "NAD": {
      "code": "NAD",
      "value": 17.8220630572
    },
    "NGN": {
      "code": "NGN",
      "value": 1534.0820382944
    },
    "NIO": {
      "code": "NIO",
      "value": 36.6243544955
    },
    "NOK": {
      "code": "NOK",
      "value": 11.1404714991
    },
    "NPR": {
      "code": "NPR",
      "value": 135.7916727054
    },
    "NZD": {
      "code": "NZD",
      "value": 1.7348103303
    },
    "OMR": {
      "code": "OMR",
      "value": 0.3840900466
    },
    "OP": {
      "code": "OP",
      "value": 0.4099004241
    },
    "PAB": {
      "code": "PAB",
      "value": 0.998840161
    },
    "PEN": {
      "code": "PEN",
      "value": 3.7380906349
    },
    "PGK": {
      "code": "PGK",
      "value": 3.9900606931
    },
    "PHP": {
      "code": "PHP",
      "value": 58.6480703915
    },
    "PKR": {
      "code": "PKR",
      "value": 277.9789839907
    },
    "PLN": {
      "code": "PLN",
      "value": 4.056620654
    },
    "PYG": {
      "code": "PYG",
      "value": 7849.4279059507
    },
    "QAR": {
      "code": "QAR",
      "value": 3.6400205589
    },
    "RON": {
      "code": "RON",
      "value": 4.7329508047
    },
    "RSD": {
      "code": "RSD",
      "value": 111.36748646
    },
    "RUB": {
      "code": "RUB",
      "value": 104.5455783805
    },
    "RWF": {
      "code": "RWF",
      "value": 1373.0738706992
    },
    "SAR": {
      "code": "SAR",
      "value": 3.7506206476
    },
    "SBD": {
      "code": "SBD",
      "value": 8.3717184717
    },
    "SCR": {
      "code": "SCR",
      "value": 15.0745227638
    },
    "SDG": {
      "code": "SDG",
      "value": 601.5
    },
    "SEK": {
      "code": "SEK",
      "value": 10.9706021202
    },
    "SGD": {
      "code": "SGD",
      "value": 1.3470601522
    },
    "SHP": {
      "code": "SHP",
      "value": 0.7923200924
    },
    "SLL": {
      "code": "SLL",
      "value": 22740.493840582
    },
    "SOL": {
      "code": "SOL",
      "value": 0.0045465199
    },
    "SOS": {
      "code": "SOS",
      "value": 571.1444190778
    },
    "SRD": {
      "code": "SRD",
      "value": 34.9555154681
    },
    "STD": {
      "code": "STD",
      "value": 23350.448581554
    },
    "STN": {
      "code": "STN",
      "value": 23.3504489463
    },
    "SVC": {
      "code": "SVC",
      "value": 8.75
    },
    "SYP": {
      "code": "SYP",
      "value": 13001.875054196
    },
    "SZL": {
      "code": "SZL",
      "value": 17.833072353
    },
    "THB": {
      "code": "THB",
      "value": 34.0471952908
    },
    "TJS": {
      "code": "TJS",
      "value": 10.9690114186
    },
    "TMT": {
      "code": "TMT",
      "value": 3.5
    },
    "TND": {
      "code": "TND",
      "value": 3.155760519
    },
    "TOP": {
      "code": "TOP",
      "value": 2.3781404087
    },
    "TRY": {
      "code": "TRY",
      "value": 34.9323868935
    },
    "TTD": {
      "code": "TTD",
      "value": 6.796260773
    },
    "TWD": {
      "code": "TWD",
      "value": 32.5359146331
    },
    "TZS": {
      "code": "TZS",
      "value": 2332.4990489625
    },
    "UAH": {
      "code": "UAH",
      "value": 41.7847968994
    },
    "UGX": {
      "code": "UGX",
      "value": 3651.0374483635
    },
    "USD": {
      "code": "USD",
      "value": 1
    },
    "USDC": {
      "code": "USDC",
      "value": 0.9999636752
    },
    "USDT": {
      "code": "USDT",
      "value": 0.9997335019
    },
    "UYU": {
      "code": "UYU",
      "value": 44.3214976945
    },
    "UZS": {
      "code": "UZS",
      "value": 12922.646740141
    },
    "VEF": {
      "code": "VEF",
      "value": 5026738.5467076
    },
    "VES": {
      "code": "VES",
      "value": 50.267394788
    },
    "VND": {
      "code": "VND",
      "value": 25396.125117177
    },
    "VUV": {
      "code": "VUV",
      "value": 123.1515851819
    },
    "WST": {
      "code": "WST",
      "value": 2.8011146297
    },
    "XAF": {
      "code": "XAF",
      "value": 624.4495968575
    },
    "XAG": {
      "code": "XAG",
      "value": 0.0327219428
    },
    "XAU": {
      "code": "XAU",
      "value": 0.0003775156
    },
    "XCD": {
      "code": "XCD",
      "value": 2.7
    },
    "XDR": {
      "code": "XDR",
      "value": 0.7622801519
    },
    "XOF": {
      "code": "XOF",
      "value": 624.4496292999
    },
    "XPD": {
      "code": "XPD",
      "value": 0.0010416679
    },
    "XPF": {
      "code": "XPF",
      "value": 113.508342705
    },
    "XPT": {
      "code": "XPT",
      "value": 0.0010801269
    },
    "XRP": {
      "code": "XRP",
      "value": 0.4164027204
    },
    "YER": {
      "code": "YER",
      "value": 249.2136512231
    },
    "ZAR": {
      "code": "ZAR",
      "value": 17.8692829145
    },
    "ZMK": {
      "code": "ZMK",
      "value": 9001.2
    },
    "ZMW": {
      "code": "ZMW",
      "value": 27.7082043822
    },
    "ZWL": {
      "code": "ZWL",
      "value": 63654.858486647
    }
  }
}`)
    console.log(rJson)

    for (let key of Object.keys(rJson["data"])) {
        console.log(key)
        key, rJson["data"][key]["code"], rJson["data"][key]["value"];
        myStr += `
        <tr>
            <td>${key}</td>
            <td>${rJson["data"][key]["code"]}</td>
            <td>${rJson["data"][key]["value"] * value}</td>
        </tr>
        `
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;
}

const btn = document.querySelector('.btn')
btn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("button is Clicked")
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const Currency = document.querySelector("select[name='Currency']").value
    populate(value, Currency);
})