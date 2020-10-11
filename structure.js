// obekti:
// {
//     "audi": {
//         "a1": {
//             "godina nachalo": 2001,

//             "godini": [2001]
//         }
//     }
// }
// masivi:
// [
//     "value",
//     {

//     },
//     123,

//     "value"
// ]
// key = samo text ( "text" )
// value = vsichko ( "text", [], {}, 1000)

const coupes = {
    cabrio: 'cabrio',
    combi: 'combi',
    coupe: 'coupe',
    compact: 'compact',
    hatchback: 'hatchback',
    sedan: 'sedan',
    pickup: 'pickup',
    van: 'van',
    suv: 'suv',
    bus: 'bus'

}

const cars = {
    "AUDI": {
        "A1": {
            "coupe": [coupes.coupe, coupes.hatchback],
            "years": [2010]
        },
        "A2": {
            "coupe": [coupes.hatchback],
            "years": [2000, 2005]
        },
        "А3": {
            "coupe": [coupes.cabrio, coupes.coupe, coupes.hatchback, coupes.sedan],
            "years": [1996]
        },
        "A4": {
            "coupe": [coupes.cabrio, coupes.combi, coupes.coupe, coupes.hatchback, coupes.sedan],
            "years": [1994]
        },
        "A5": {
            "coupe": [coupes.cabrio, coupes.coupe, coupes.sedan],
            "years": [2007]
        },
        "A6": {
            "coupe": [coupes.combi, coupes.sedan],
            "years": [1994]
        },
        "A7": {
            "coupe": [coupes.sedan],
            "years": [2010]
        },
        "A8": {
            "coupe": [coupes.sedan],
            "years": [1994]
        },
        "E-TRON": {
            "coupe": [coupes.hatchback],
            "years": [2018]
        },
        "Q2": {
            "coupe": [],
            "years": [2016]
        },
        "Q3": {
            "coupe": [],
            "years": [2011]
        },
        "Q5": {
            "coupe": [],
            "years": [2008]
        },
        "Q7": {
            "coupe": [],
            "years": [2011]
        },
        "Q8": {
            "coupe": [],
            "years": [2018]
        },
        "80": {
            "coupe": [coupes.combi, coupes.coupe, coupes.sedan],
            "years": [1972, 1996]
        },
        "100": {
            "coupe": [coupes.combi, coupes.coupe, coupes.sedan],
            "years": [1968, 1994]
        }
    },
    "ALFA ROMEO": {
        "33": {
            "coupe": [coupes.combi, coupes.hatchback],
            "years": [1983, 1994]
        },
        "75": {
            "coupe": [coupes.sedan],
            "years": [1985, 1992]
        },
        "145": {
            "coupe": [coupes.coupe, coupes.hatchback],
            "years": [1994, 2001]
        },
        "146": {
            "coupe": [coupes.hatchback],
            "years": [1994, 2001]
        },
        "147": {
            "coupe": [coupes.coupe, coupes.hatchback],
            "years": [2000, 2010]
        },
        "155": {
            "coupe": [coupes.sedan],
            "years": [1992, 1997]
        },
        "156": {
            "coupe": [coupes.combi, coupes.sedan],
            "years": [1997, 2006]
        },
        "159": {
            "coupe": [coupes.combi, coupes.sedan],
            "years": [2005, 2012]
        },
        "164": {
            "coupe": [coupes.sedan],
            "years": [1987, 1998]
        },
        "166": {
            "coupe": [coupes.combi, coupes.sedan],
            "years": [1998, 2007]
        },
        "GIULIETTA": {
            "coupe": [coupes.hatchback,coupes.sedan],
            "years": [1977]
        }
    },
    "BMW": {
        "1 Серия":{
            "coupe": [coupes.coupe, coupes.cabrio, coupes.hatchback ],
            "years": [2006]
        },
        "2 Серия":{
            "coupe": [coupes.hatchback, coupes.sedan, coupes.coupe],
            "years": [2012]
        },
        "3 Серия": {
            "coupe": [coupes.coupe, coupes.cabrio, coupes.compact, coupes.sedan, coupes.combi],
            "years": [1975]
        },
        "5 Серия": {
            "coupe": [coupes.combi, coupes.sedan],
            "years": [1972]
        },
        "7 Серия": {
            "coupe": [coupes.sedan],
            "years": [1977]
        },
        "X1": {
            "coupe": [],
            "years": [2009]
        },
        "X3": {
            "coupe": [],
            "years": [2003]
        },
        "X4": {
            "coupe": [],
            "years": [2013]
        },
        "X5": {
            "coupe": [],
            "years": [2000]
        },
        "X6": {
            "coupe": [],
            "years": [2007]
        },
        "X7": {
            "coupe": [],
            "years": [2019]
        },
    },
    "CHEVROLET": {
        "AVEO": {
            "coupe": [coupes.sedan, coupes.hatchback],
            "years": [2003]
        },
        "KALOS": {
            "coupe": [coupes.sedan, coupes.hatchback],
            "years": [2005]
        },
        "ASTRO": {
            "coupe": [],
            "years": [1985, 2005]
        },
        "AVALANCHE": {
            "coupe": [coupes.pickup],
            "years": [2005, 2013]
        },
        "EPICA": {
            "coupe": [coupes.sedan],
            "years": [2005]
        },
        "EVANDA": {
            "coupe": [coupes.sedan],
            "years": [2005, 2006]
        },
        "CAPTIVA": {
            "coupe": [],
            "years": [2006]
        },
        "CRUZE": {
            "coupe": [coupes.hatchback, coupes.sedan, coupes.combi],
            "years": [2009]
        },
        "LACETTI": {
            "coupe": [coupes.combi, coupes.hatchback],
            "years": [2003]
        },
        "NIVA": {
            "coupe": [],
            "years": [1998]
        },
        "SILVERADO": {
            "coupe": [coupes.pickup],
            "years": [2006, 2007]
        },
        "REZZO": {
            "coupe": [coupes.hatchback],
            "years": [2005]
        },
        "TACUMA":{
            "coupe": [coupes.hatchback],
            "years": [2000, 2011]
        },
        "ORLANDO": {
            "coupe": [],
            "years": [2010]
        },
        "MALIBU": {
            "coupe": [coupes.sedan],
            "years": [2012, 2015]
        },
        "TRAILBLAZER": {
            "coupe": [],
            "years": [2001, 2009]
        },
        "SPARK": {
            "coupe": [coupes.hatchback],
            "years": [2005]
        },
        "TRAX": {
            "coupe": [],
            "years": [2012]
        },
        "VOLT": {
            "coupe": [coupes.hatchback],
            "years": [2011, 2015]
        },
        "VENTURE": {
            "coupe": [],
            "years": [1996, 2005]
        },
        "TRANS SPORT": {
            "coupe": [],
            "years": [1996, 2005]
        }, 
        "LUMINA": {
            "coupe": [],
            "years": [1988, 1996]
        },
    },
    "CHRYSLER": {
        "VOYAGER": {
            "coupe": [],
            "years": [1984, 2008]
        },
        "300C": {
            "coupe": [coupes.sedan],
            "years": [2004]
        }, 
        "300M": {
            "coupe": [coupes.sedan],
            "years": [1998, 2004]
        }, 
        "PT CRUISER": {
            "coupe": [coupes.cabrio, coupes.hatchback],
            "years": [2000, 2010]
        },
        "STRATUS": {
            "coupe": [coupes.sedan, coupes.cabrio],
            "years": [1994, 2001]
        }, 
        "SEBRING": {
            "coupe": [coupes.cabrio, coupes.sedan, coupes.coupe],
            "years": [1995, 2010]
        },
        "PACIFICA": {
            "coupe": [],
            "years": [2003, 2007]
        },
    },
    "CITROEN": {
        "AX": {
            "coupe": [coupes.coupe],
            "years": [1986, 1998]
        }, 
        "BX": {
            "coupe": [coupes.hatchback, coupes.combi],
            "years": [1982, 1994]
        },
        "ZX": {
            "coupe": [coupes.hatchback, coupes.combi],
            "years": [1991, 1999]
        },
        "XM": {
            "coupe": [coupes.sedan, coupes.combi],
            "years": [1989, 2000]
        },
        "BERLINGO": {
            "coupe": [],
            "years": [1996]
        },
        "C-CROSSER": {
            "coupe": [],
            "years": [2007, 2013]
        },
        "C-ELYSEE": {
            "coupe": [coupes.sedan],
            "years": [2012]
        },
        "C1": {
            "coupe": [coupes.hatchback],
            "years": [2005]
        },
        "C2": {
            "coupe": [coupes.hatchback, coupes.coupe],
            "years": [2003, 2009]
        },
        "C3": {
            "coupe": [coupes.coupe, coupes.hatchback, coupes.cabrio],
            "years": [2002]
        },
        "C4": {
            "coupe": [coupes.hatchback, coupes.sedan, coupes.coupe, coupes.suv],
            "years": [2004]
        },
        "C5": {
            "coupe": [coupes.sedan, coupes.combi],
            "years": [2001]
        },
        "C8": {
            "coupe": [coupes.van],
            "years": [2002, 2014]
        },
        "DS3": {
            "coupe": [coupes.coupe, coupes.cabrio],
            "years": [2009, 2015]
        },
        "DS4": {
            "coupe": [coupes.hatchback],
            "years": [2011, 2015]
        },
        "DS5": {
            "coupe": [coupes.hatchback],
            "years": [2011, 2015]
        },
        "JUMPER": {
            "coupe": [coupes.bus],
            "years": [1994]
        },
        "JUMPY": {
            "coupe": [],
            "years": [1994]
        },
        "EVASION": {
            "coupe": [coupes.van],
            "years": [1994, 2002]
        },
        "SAXO": {
            "coupe": [coupes.hatchback],
            "years": [1996, 2003]
        },
        "XSARA": {
            "coupe": [coupes.sedan, coupes.combi, coupes.coupe, coupes.hatchback],
            "years": [1997, 2012]
        },
        "XANTIA": {
            "coupe": [coupes.sedan, coupes.combi],
            "years": [1993, 2003]
        },
    },
    "DACIA": {
        "DOKKER": {
            "coupe": [coupes.van],
            "years": [2012]
        },
        "LOGAN": {
            "coupe": [coupes.van, coupes.sedan, coupes.hatchback, coupes.pickup, coupes.combi],
            "years": [2004]
        },
        "SANDERO": {
            "coupe": [coupes.hatchback],
            "years": [2008]
        },
        "DUSTER": {
            "coupe": [],
            "years": [2010]
        },
        "LODGY": {
            "coupe": [coupes.van],
            "years": [2012]
        },
    },
    "DAEWOO": {
        "ESPERO": {
            "coupe": [coupes.sedan],
            "years": [1991, 1999]
        },
        "LEGANZA": {
            "coupe": [coupes.sedan],
            "years": [1997, 2004]
        },
        "TICO": {
            "coupe": [coupes.hatchback],
            "years": [1995, 2000]
        },
        "MATIZ": {
            "coupe": [coupes.hatchback],
            "years": [1998, 2018]
        },
        "MUSO": {
            "coupe": [coupes.pickup],
            "years": [1998]
        },
        "NEXIA": {
            "coupe": [coupes.sedan],
            "years": [1995, 2008]
        },
        "NUBIRA": {
            "coupe": [coupes.combi, coupes.sedan],
            "years": [1997]
        },
        "LANOS": {
            "coupe": [coupes.sedan],
            "years": [1997, 2004]
        },
        "KALOS": {
            "coupe": [coupes.hatchback, coupes.sedan],
            "years": [2002, 2004]
        },
        "TACUMA": {
            "coupe": [coupes.van],
            "years": [2000, 2008]
        },
    },
    "DAF": {},
    "DAIHATSU": {
        "APLAUSE": {
            "coupe": [coupes.sedan, coupes.hatchback],
            "years": [1989, 2000]
        },
        "CHARADE": {
            "coupe": [coupes.hatchback],
            "years": [1977, 2001]
        },
        "COURE": {
            "coupe": [coupes.hatchback],
            "years": [1980]
        },
        "FEROZA": {
            "coupe": [],
            "years": [1988, 1999]
        },
        "TERIOS": {
            "coupe": [],
            "years": [1997, 2013]
        },
        "SIRION": {
            "coupe": [coupes.hatchback],
            "years": [1998, 1999]
        },
        "MATERIA": {
            "coupe": [coupes.hatchback],
            "years": [2006, 2016]
        },
        "MOVE": {
            "coupe": [coupes.hatchback],
            "years": [1997, 2002]
        },
        "YRV": {
            "coupe": [],
            "years": [2000, 2005]
        },
    },
    "DODGE": {
        "AVANGER": {
            "coupe": [coupes.sedan],
            "years": [2007, 2014]
        },
        "CALIBER": {
            "coupe": [coupes.hatchback],
            "years": [2006, 2012]
        },
        "CARAVAN": {
            "coupe": [coupes.van],
            "years": [1995, 2007]
        },
        "DURANGO": {
            "coupe": [],
            "years": [2003]
        },
        "JOURNEY" : {
            "coupe": [],
            "years": [2008]
        },
        "STRATUS": {
            "coupe": [],
            "years": [1994, 2006]
        },
        "NITRO": {
            "coupe": [],
            "years": [2006, 2012]
        },
        "RAM": {
            "coupe": [coupes.pickup, coupes.van],
            "years": [1985, 2005]
        },
    },
    "FIAT": {
        "500": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "500": {
            "coupe": [coupes.cabrio, coupes.coupe],
            "years": [2007]
        },
        "BRAVO": {
            "coupe": [coupes.coupe, coupes.hatchback],
            "years": [1995, 2014]
        },
        "BRAVA": {
            "coupe": [coupes.hatchback],
            "years": [1995, 2003]
        },
        "MAREA": {
            "coupe": [coupes.combi, coupes.sedan],
            "years": [1996, 2007]
        },
        "CINQECENTO": {
            "coupe": [coupes.coupe],
            "years": [1991, 1999]
        },
        "CROMA": {
            "coupe": [coupes.sedan, coupes.combi],
            "years": [1985, 2011]
        },
        "DUCATO": {
            "coupe": [],
            "years": [1982]
        },
        "DOBLO": {
            "coupe": [coupes.pickup, coupes.van],
            "years": [2001]
        },
        "FIORINO": {
            "coupe": [coupes.van],
            "years": [1977]
        },
        "FREEMONT": {
            "coupe": [],
            "years": [2011, 2016]
        },
        "FULLBACK": {
            "coupe": [coupes.pickup],
            "years": [2016]
        },
        "QUBO": {
            "coupe": [coupes.van],
            "years": [2008]
        },
        "IDEA": {
            "coupe": [coupes.hatchback],
            "years": [2003, 2012]
        },
        "LINEA": {
            "coupe": [coupes.sedan],
            "years": [2006]
        },
        "MULTIPLA": {
            "coupe": [coupes.van],
            "years": [1999, 2010]
        },
        "PANDA": {
            "coupe": [coupes.hatchback],
            "years": [1980]
        },
        "PUNTO": {
            "coupe": [coupes.cabrio, coupes.hatchback],
            "years": [1993]
        },
        "STILO": {
            "coupe": [coupes.combi, coupes.hatchback],
            "years": [2001, 2008]
        },
        "SEDICI": {
            "coupe": [coupes.hatchback],
            "years": [2006, 2014]
        },
        "STRADA": {
            "coupe": [coupes.pickup],
            "years": [1998]
        },
        "PALIO": {
            "coupe": [coupes.combi],
            "years": [1996]
        },
        "ALBEA": {
            "coupe": [coupes.sedan],
            "years": [1993, 2018]
        },
        "SIENA": {
            "coupe": [],
            "years": [1996, 2016]
        },
        "SCUDO": {
            "coupe": [coupes.van],
            "years": [1996, 2016]
        },
        "SIECENTO": {
            "coupe": [coupes.hatchback],
            "years": [1997, 2010]
        },
        "TIPO": {
            "coupe": [coupes.sedan, coupes.hatchback, coupes.combi],
            "years": [1987]
        },
        "TEMPRA": {
            "coupe": [coupes.sedan],
            "years": [1990, 1997]
        },
        "TALENTO": {
            "coupe": [],
            "years": [1989]
        },
        "ULYSSE": {
            "coupe": [coupes.van],
            "years": [1994, 2011]
        },
        "UNO": {
            "coupe": [coupes.hatchback],
            "years": [1983, 2013]
        },
    },
    "FORD": {
        "AEROSTAR": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "ECONOVAN": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "ESCAPE": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "MAVERICK": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "ESCORT": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "EXPLORER": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "EXPEDITION": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "ORION": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "FUSION": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "F-150": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "F-550 ": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "ECOSPORT": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "EDGE": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "B-MAX": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "C-MAX": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "FIESTA": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "FOCUS": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "FOCUS C-MAX": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "GALAXY": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "KUGA": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "KA": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "MONDEO": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "PUMA": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "RANGER": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "SIERRA": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "SCORPIO": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "WINDSTAR": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "TAURUS": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "S-MAX": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "TRANSIT": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "TOURNEO": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "CUSTOM": {
            "coupe": [],
            "years": [1972, 2000]
        },
        "COURIER": {
            "coupe": [],
            "years": [1972, 2000]
        },
    }
}




{
    "ВЕТРОБРАНИ": {
        "GREAT WALL": [],
        "HONDA": [
            "ACCORD (1986-2003)",
            "ACCORD (2003+)",
            "CIVIC (1988-2001)",
            "CIVIC (2001-2006)",
            "CIVIC (2006+)",
            "CITY / ELEMENT",
            "CR-V",
            "FR-V / HR-V",
            "JAZZ",
            "CR-X / CR-Z / CONCERTO",
            "PRELUDE / PASSPORT ",
            "SHUTTLE / STREAM / LOGO"
        ],
        "HUMMER": [],
        "HYUNDAI": [
            "ACCENT",
            "ATOS / EXCEL",
            "ELANTRA",
            "GALLOPER / GETZ / GRANDEUR",
            "H1 / H100 / H200 / H300",
            "I10",
            "i20",
            "i30",
            "i40",
            "iX20 / iX35",
            "IONIQ",
            "KONA",
            "MATRIX / TERRACAN / TRAJET",
            "SONATA",
            "SANTA FE",
            "TUCSON",
            "VELOSTER / PONY"
        ],
        "INFINITY": [],
        "ISUZU": [],
        "IVECO": [],
        "JAGUAR": [],
        "JEEP": [
            "CHEROKEE / LIBERTY",
            "GRAND CHEROKEE",
            "COMMANDER / COMPASS",
            "RENEGADE / PATRIOT / WRANGLER"
        ],
        "KIA": [
            "CARNIVAL",
            "CARENS",
            "CEED",
            "CERATO / CLARUS / JOICE",
            "K2500 / K2700 / PRIDE / PREGIO",
            "MAGENTIS",
            "OPTIMA",
            "OPIRUS / SPECTRA / SEPHIA",
            "SPORTAGE",
            "PICANTO",
            "RIO",
            "SORENTO",
            "SOUL",
            "SPECTRA / RETONA",
            "NIRO / VENGA",
            "STINGER"
        ],
        "LADA": [
            "2101 / 2105 / 2105 / 2107",
            "2110 / 2111 / SAMARA",
            "NIVA"
        ],
        "LANCIA": [
            "DELTA / DEDRA / PHEDRA",
            "KAPPA / THEMA / MUSA",
            "LYBRA / VOYAGER / ZETA",
            "Y / YPSILON"
        ],
        "LAND ROVER": [
            "FREELANDER",
            "DISCOVERY (1990-2009)",
            "DISCOVERY (2009+)",
            "DISCOVERY SPORT",
            "DEFENDER",
            "RANGE ROVER",
            "RANGE ROVER EVOQUE",
            "RANGE ROVER SPORT",
            "RANGE ROVER VOGUE"
        ],
        "LEXUS": [
            "GS / GX",
            "IS / LS",
            "CT / NX",
            "RX",
            "UX"
        ],
        "MAZDA": [
            "2",
            "3",
            "5",
            "6",
            "121",
            "323",
            "626",
            "BT / BUS / DEMIO",
            "PREMACY / MPV / TRIBUTE",
            "CX"
        ],
        "MERCEDES": [
            "A-CLASS / B-CLASS",
            "C-CLASS (1991-2007) W202 / W203",
            "C-CLASS (2007+) W204 / W205",
            "E-CLASS (1982-2003) E190 / W124 / W201 / W210",
            "E-CLASS (2003-2016) W211 / W212",
            "E-CLASS (2016+) W213",
            "S-CLASS (1976-2005) W123 / W140 / W220",
            "S-CLASS (2005+) W221 / W222",
            "ML W163 / W164 / W166",
            "GL / GLS / GLK",
            "GLA / GLC / GLE",
            "G-CLASS / R-CLASS",
            "ACTROS / ATEGO / AXOR / 1838",
            "VITO / VIANO / VANEO / VARIO / 814",
            "SPRINTER",
            "CITAN / MB-100 / 207 / 410"
        ],
        "MG": [],
        "MINI": [],
        "MITSUBISHI": [
            "ASX / CARISMA",
            "COLT",
            "CANTER / ENDEAVOR",
            "GALANT",
            "GRANDIS",
            "L-200 / L-300",
            "LANCER",
            "OUTLANDER",
            "PAJERO",
            "PAJERO SPORT",
            "SIGMA",
            "PAJERO PININ",
            "SPACE RUNNER / SPACE WAGON",
            "SPACE STAR"
        ],
        "NISSAN": [
            "ALMERA",
            "ALMERA TINO / CUBE",
            "ARMADA",
            "ATLEON / CABSTAR / PRIMASTAR / INTERSTAR / KUBISTAR ",
            "BLUEBIRD",
            "JUKE",
            "LEAF",
            "MAXIMA",
            "MICRA",
            "MURANO",
            "NAVARA",
            "NOTE",
            "NV200 / QUEST / SERENA / VANETE ",
            "PATROL",
            "PATHFINDER",
            "PICKUP",
            "PRIMERA",
            "PULSAR",
            "SUNNY",
            "TERRANO",
            "TIIDA",
            "QASHQAI",
            "X-TRAIL"
        ],
        "OPEL": [
            "AGILA / ANTARA / ADAM",
            "ASTRA F (1991-1999)",
            "ASTRA G (1998-2004)",
            "ASTRA H (2004-2009)",
            "ASTRA J (2009-2015)",
            "ASTRA K (2015+)",
            "CAMPO / COMBO",
            "CORSA (1991-2005)",
            "CORSA (2006+)",
            "CROSSLAND",
            "GRANDLAND",
            "FRONTERA",
            "INSIGNIA",
            "KARL",
            "MERIVA",
            "MOVANO / MONTEREY",
            "MOKKA",
            "OMEGA / TIGRA",
            "SIGNUM / SINTRA",
            "VECTRA (1991-2002)",
            "VECTRA (2002+)",
            "VIVARO",
            "ZAFIRA"
        ],
        "PEUGEOT": [
            "106 / 107 / 1007",
            "205 / 206",
            "207",
            "208 / 2008",
            "301 / 305 / 306",
            "307",
            "308",
            "3008",
            "405 / 406",
            "407 / 4007",
            "508",
            "5008",
            "605 / 607",
            "806 / 807",
            "EXPERT / TRAVELLER",
            "BOXER",
            "BIPPER / J-5",
            "PARTNER",
            "RIFTER"
        ],
        "PLYMOUTH": [],
        "POLONEZ": [],
        "PONTIAC": [],
        "PORSCHE": [],
        "RENAULT": [
            "ESPACE (1991-2002)",
            "ESPACE (2002+)",
            "CLIO (1991-2005)",
            "CLIO (2005+)",
            "FLUENCE",
            "CAPTUR",
            "GAMMA",
            "KANGOO",
            "KADJAR",
            "KOLEOS",
            "LAGUNA",
            "LATITUDE",
            "MEGANE (1991-2008)",
            "MEGANE (2008+)",
            "MASTER / MODUS",
            "MIDLUM / MANAGER / MAXITY / PREMIUM / KERAX ",
            "MAGNUM / MAJOR / MESSENGER",
            "R5 / R19 / R21 / R25 / NEVADA / CHAMADE",
            "SCENIC (1991-2009)",
            "SCENIC (2009+)",
            "SAFRAN / VEL SATIS",
            "THALIA",
            "TRAFIC",
            "TWINGO",
            "TALISMAN",
            "ZOE"
        ],
        "ROVER": [
            "45 / 75",
            "25 / 200",
            "400 / 600"
        ],
        "SAAB": [
            "9000",
            "9-3 / 900",
            "9-5"
        ],
        "SCANIA": [],
        "SEAT": [
            "ALHAMBRA",
            "ALTEA",
            "AROSA / ATECA",
            "CORDOBA / INCA",
            "EXEO",
            "IBIZA (1984-2002)",
            "IBIZA (2002-2008)",
            "IBIZA (2008+)",
            "LEON",
            "MARBELLA / MII",
            "TARRACO",
            "TOLEDO"
        ],
        "SMART": [],
        "SKODA": [
            "FABIA",
            "FELICIA / FAVORIT / FORMAN",
            "CITIGO",
            "OCTAVIA",
            "ROOMSTER",
            "RAPID",
            "SUPERB",
            "KAMIQ",
            "KAROQ",
            "KODIAQ",
            "YETI"
        ],
        "SSANGYONG": [
            "ACTYON",
            "KORANDO",
            "KYRON",
            "RODIUS / REXTON",
            "TIVOLI / XLV"
        ],
        "SUBARU": [
            "FORESTER",
            "IMPREZA",
            "LIBERO",
            "LEGACY",
            "OUTBACK",
            "TRIBECA",
            "XV",
            "JUSTY"
        ],
        "SUZUKI": [
            "ALTO",
            "BALENO",
            "CARRY / CELERIO",
            "IGNIS",
            "JIMNY / KIZASHI",
            "LIANA / MARUTI",
            "SWIFT",
            "SX4",
            "SPLASH / SAMURAI",
            "VITARA",
            "GRAND VITARA",
            "WAGON R"
        ],
        "TATA": [],
        "TAVRIA": [],
        "TOYOTA": [
            "AURIS",
            "AVENSIS",
            "AYGO",
            "CAMRY",
            "CARINA",
            "COROLLA (1983-1997)",
            "COROLLA (1997-2002)",
            "COROLLA (2002-2013)",
            "COROLLA (2013+)",
            "COROLLA  VERSO",
            "C-HR",
            "DYNA / PASEO / SIENNA",
            "IQ / HIACE FURGON",
            "FJ CRUISER / TUNDRA STEP SIDE",
            "HILUX (1989-2005)",
            "HILUX (2005+)",
            "HIGHLANDER",
            "LAND CRUISER",
            "MATRIX",
            "PICNIC / PREVIA / PROACE",
            "PRIUS",
            "RAV4 (1994-2005)",
            "RAV4 (2005+)",
            "STARLET",
            "VERSO / VERSO S / YARIS VERSO",
            "YARIS (1999-2005)",
            "YARIS (2005+)"
        ],
        "VOLKSWAGEN": [
            "AMAROK",
            "BORA / BEETLE",
            "CADDY",
            "CORRADO / CRAFTER / FOX",
            "GOLF 2",
            "GOLF 3 / VENTO",
            "GOLF 4",
            "GOLF 5",
            "GOLF 5 PLUS",
            "GOLF 6",
            "GOLF 7",
            "GOLF SPORTSVAN",
            "JETTA",
            "LUPO / LT",
            "PASSAT (1988-1996)",
            "PASSAT (1997-2004)",
            "PASSAT (2005+)",
            "POLO (1994-2001)",
            "POLO (2001+)",
            "SHARAN",
            "T-CROSS",
            "T-ROC",
            "TOUAREG",
            "TOURAN",
            "TIGUAN",
            "TRANSPORTER / CARAVELLE",
            "UP"
        ],
        "VOLVO": [
            "AUTOBUS / FL / FE / FH / NH / SH / FM",
            "460 / 440 / 740 / 760 / 940 / 960",
            "S40",
            "S60",
            "S70 / S80",
            "S90 / C30",
            "F10 / F12 / F16",
            "V40 / V50",
            "V60 / V70",
            "V850 / V90",
            "XC60",
            "XC70",
            "XC90"
        ],
        "WARTBURG": [],
        "ЩИПКИ ЗА ВЕТРОБРАНИ": []
    },
    "СТЕЛКИ": {
        "ALFA ROMEO": [
            "145 / 146",
            "147 / GT",
            "156",
            "159",
            "166",
            "STELVIO",
            "GTV Spider",
            "GIULIA",
            "GIULIETTA",
            "MITO"
        ],
        "AUDI": [
            "A1",
            "A2",
            "A3 (1996-2003)",
            "A3 (2003-2012)",
            "A3 (2012+)",
            "A4 (1995-2001)",
            "A4 (2001-2007)",
            "A4 (2007+)",
            "A5",
            "A6 (1994-2004)",
            "A6 (2004-2011)",
            "A6 (2011+)",
            "A7",
            "A8 (1994-2010)",
            "A8 (2010+)",
            "Q2 / Q3",
            "Q5",
            "Q7 (2006-2014)",
            "Q7 (2014+)",
            "AUDI 80 / 100",
            "AUDI TT"
        ],
        "BMW": [
            "1 SER. E81 / E82 / E87 / F20 (2004+) ",
            "2 SER. F22 / F45 / F46 (2014+)",
            "3 SER E30 (1982–1994)",
            "3 SER. E46 (1997-2005)",
            "3 SER. E36 (1991-1999) ",
            "3 SER. E90 / E91 / E92 / E93 (2005-2011)",
            "3 SER. F30 / F31 / F32 / F34  (2011-2018)",
            "3 SER. G20 (2018+)",
            "4 SER. F32 / F33 / F36 (2013-2018)",
            "5 SER. E34 (1988-1995)",
            "5 SER. E39 (1995-2003)",
            "5 SER. E60 / E61 (2003-2010)",
            "5 SER. F10 / F11 (2010-2017)",
            "5 SER. F07 GRAN TURISMO (2010+)",
            "5 SER. G30 / G31 (2017+)",
            "6 SER. E63 / E63 / F12 / F13 / F06  (2003+)",
            "7 SER. E38  (1994-2001)",
            "7 SER. E65 / E66  (2001-2008)",
            "7 SER. G11 / G12  (2015+)",
            "7 SER. F01 / F02  (2008-2015)",
            "X1 E84 (2009-2015)",
            "X1 F48 (2016+)",
            "X2 F39 (2017+)",
            "X3 E83 (2004-2010)",
            "X3 F25 (2010-2016)",
            "X3 G1 (2017+)",
            "X4 F26 / G02 (2014+)",
            "X5 E53 (1999-2006)",
            "X5 E70 (2007-2012)",
            "X5 F15 (2013-2018)",
            "X5 G05 (2018+)",
            "X6 E71 / E72 / F16 (2008+)",
            "Z3 / Z4",
            "i3"
        ],
        "CADILLAC": [],
        "CHEVROLET": [
            "AVEO",
            "CAPTIVA",
            "CRUZ",
            "EPICA",
            "KALOS",
            "LACETTI",
            "MALIBU",
            "MATIZ",
            "REZZO",
            "SPARK",
            "TRAX",
            "ORLANDO"
        ],
        "CHRYSLER": [],
        "CITROEN": [
            "BERLINGO (1999-2008)",
            "BERLINGO (2008+)",
            "C1",
            "C2",
            "C3 (2002-2009)",
            "C3 / DS3 / PICASSO (2009-2016)",
            "C3 / AIRCROSS (2017+)",
            "C4 / DS4 (2004-2016)",
            "C4 PICASSO",
            "C4 CACTUS (2016+)",
            "C5",
            "C6",
            "C8",
            "C-CROSSER / C-ELYSEE / EVASION",
            "C-ZERO",
            "DS5",
            "DS7",
            "JUMPY",
            "JUMPER / NEMO",
            "XSARA / SAXO",
            "SPACE TOURER"
        ],
        "DACIA": [
            "DUSTER",
            "DOKKER",
            "LODGY",
            "LOGAN",
            "SANDERO"
        ],
        "DAIHATSU": [],
        "DAEWOO": [],
        "DAF": [],
        "DODGE": [],
        "FIAT": [
            "500",
            "ALBEA",
            "BRAVA",
            "BRAVO",
            "CROMA",
            "DOBLO",
            "DUCATO",
            "FIORINO",
            "FREEMONT",
            "FULLBACK",
            "LINEA",
            "MAREA",
            "MULTIPLA",
            "PALIO",
            "PANDA",
            "PUNTO",
            "QUBO",
            "SCUDO",
            "SEDICI",
            "SIECENTO",
            "STILO",
            "TALENTO",
            "TIPO",
            "ULYSSE"
        ],
        "FORD": [
            "B-MAX",
            "ECOSPORT",
            "EDGE",
            "FIESTA (1994-2005)",
            "FIESTA (2005-2008)",
            "FIESTA (2008-2016)",
            "FIESTA (2017+)",
            "FOCUS (1998-2005)",
            "FOCUS (2004-2011)",
            "FOCUS (2011+)",
            "FOCUS C-MAX",
            "FUSION",
            "GALAXY (1995-2005)",
            "GALAXY (2006+)",
            "MONDEO",
            "ESCORT",
            "КА",
            "KUGA",
            "MUSTANG",
            "PUMA",
            "RANGER",
            "S-MAX",
            "TRANSIT",
            "TOURNEO / CUSTOM / COURIER / CONNECT"
        ],
        "GREAT WALL": [],
        "HONDA": [
            "ACCORD (1993-2003)",
            "ACCORD (2003-2008)",
            "ACCORD (2008+)",
            "CIVIC (1992-2000)",
            "CIVIC (2001-2006)",
            "CIVIC (2006-2011)",
            "CIVIC (2012+)",
            "CR-V (1997-2001)",
            "CR-V (2002-2006)",
            "CR-V (2007-2012)",
            "CR-V (2012+)",
            "FR-V",
            "HR-V",
            "JAZZ / CITY",
            "LEGEND / PRELUDE / STREAM"
        ],
        "HUMMER": [],
        "HYUNDAI": [
            "ACCENT",
            "ATOS",
            "COUPE",
            "ELANTRA",
            "GALOOPER",
            "GETZ",
            "H1",
            "i10",
            "i20",
            "i30",
            "i40",
            " ix20",
            "ix35",
            "ix55",
            "IONIQ",
            "KONA",
            "SANTA FE (2001-2006)",
            "SANTA FE (2007-2012)",
            "SANTA FE (2012+)",
            "SONATA / MATRIX",
            "TERRACAN",
            "TRAJET",
            "TUCSON (2002-2010)",
            "TUCSON (2010-2015)",
            "TUCSON (2015+)",
            "VELOSTER"
        ],
        "INFINITY": [],
        "ISUZU": [],
        "IVECO": [],
        "JAGUAR": [],
        "JEEP": [
            "CHEROKEE",
            "GRAND CHEROKEE",
            "COMPAS",
            "COMMANDER / PATRIOT / RENEGADE",
            "WRANGLER"
        ],
        "KIA": [
            "CARENS",
            "CARNIVAL",
            "CEED (2007-2012)",
            "CEED (2012-2017)",
            "CEED (2017+)",
            "CERATO",
            "K2500",
            "MAGENTIS",
            "NIRO",
            "OPTIMA (2012-2015)",
            "OPTIMA (2015+)",
            "PICANTO",
            "RIO",
            "SORENTO (2003-2009)",
            "SORENTO (2010-2015)",
            "SORENTO (2015+)",
            "SPORTAGE (2002-2010)",
            "SPORTAGE (2010-2015)",
            "SPORTAGE (2015+)",
            "SOUL",
            "STINGER",
            "STONIC",
            "VENGA"
        ],
        "LADA": [],
        "LANCIA": [],
        "LEXUS": [],
        "MAN": [],
        "MAZDA": [
            "323 / 626 / BT-50 ",
            "MAZDA 2 (2002-2007)",
            "MAZDA 2 (2007-2015)",
            "MAZDA 2 (2015+)",
            "MAZDA 3 (2003-2013)",
            "MAZDA 3 (2013+)",
            "MAZDA 5",
            "MAZDA 6 (2003-2008)",
            "MAZDA 6 (2008-2013)",
            "MAZDA 6 (2013+)",
            "CX-3",
            "CX-30",
            "CX-5 (2012-2017)",
            "CX-5 (2017+)",
            "CX-7",
            "CX-9",
            "MX-5 / RX-8",
            "MPV",
            "PREMACY",
            "TRIBUTE"
        ],
        "MERCEDES": [
            "ACTROS",
            "ATEGO",
            "AXOR",
            "A-CLASS W168 (1997-2004)",
            "A-CLASS W169 (2004-2012)",
            "A-CLASS W176 (2012-2018)",
            "A-CLASS W177 (2018+)",
            "B-CLASS W245 / T245 (2004-2011)",
            "B-CLASS W246 (2011-2018)",
            "B-CLASS W247 (2018+)",
            "C-CLASS E190 W201 (1982-1993)",
            "C-CLASS W202 (1992-2000)",
            "C-CLASS W203 (2000-2007)",
            "C-CLASS W204 (2007-2014)",
            "C-CLASS W205 (2014+)",
            "CITAN",
            "CL W215 / W216",
            "CLA",
            "CLK",
            "CLS W219 (2002-2010)",
            "CLS W218 (2011+)",
            "E-CLASS W124 (1984-1995)",
            "E-CLASS W210 (1996-2001)",
            "E-CLASS W211 (2001-2009)",
            "E-CLASS W212 (2009-2016)",
            "E-CLASS W213 (2016+)",
            "G-CLASS W461 / W463",
            "GL X164 (2006-2011)",
            "GL X166 (2011+)",
            "GLA",
            "GLC",
            "GLE (2012+)",
            "GLK X204",
            "R-CLASS W251",
            "S-CLASS W140 (1991-1998)",
            "S-CLASS W220  (1998-2005)",
            "S-CLASS W221 (2005-2012)",
            "S-CLASS W222 (2013+)",
            "SL R129 / R230 / R231",
            "SLK R170 / R171",
            "SLS R197",
            "ML W163 (1998-2005)",
            "ML W164 (2005-2011)",
            "ML W166 (2011+)",
            "SPRINTER (1996-2006)",
            "SPRINTER (2006+)",
            "T1",
            "VITO",
            "VANEO",
            "VIANO",
            "V-CLASS",
            "X-CLASS (2017+)"
        ],
        "MINI COOPER": [],
        "MITSUBISHI": [
            "ASX",
            "ECLIPSE",
            "CARISMA",
            "COLT (1996-2008)",
            "COLT (2008+)",
            "GALANT",
            "I-MIEV",
            "L200 (1996-2006)",
            "L200 (2006+)",
            "LANCER",
            "OUTLANDER (2003-2014)",
            "OUTLANDER (2014+)",
            "PAJERO (1991-1999)",
            "PAJERO (2000-2014)",
            "PAJERO PININ",
            "PAJERO SPORT",
            "SPACE STAR / SPACE RUNNER / SPACE WAGON"
        ],
        "NISSAN": [
            "ALMERA",
            "CUBE",
            "JUKE",
            "LEAF",
            "MICRA (1998-2010)",
            "MICRA (2010-2016)",
            "MICRA (2017+)",
            "MURANO",
            "NAVARA",
            "NOTE",
            "NV200",
            "PATHFINDER",
            "PATROL",
            "PIXO",
            "PRIMASTAR",
            "PRIMERA",
            "PULSAR",
            "TERRANO",
            "TIIDA",
            "QASHQAI",
            "X-TRAIL (2001-2007)",
            "X-TRAIL (2007-2014)",
            "X-TRAIL (2014+)"
        ],
        "OPEL": [
            "ADAM",
            "AGILA",
            "ANTARA",
            "ASTRA F (1991-1998)",
            "ASTRA G (1998-2003)",
            "ASTRA H (2003-2009)",
            "ASTRA J (2009-2015)",
            "ASTRA K (2015+)",
            "CALIBRA",
            "COMBO",
            "CORSA B (1993-2000)",
            "CORSA C (2001-2005)",
            "CORSA D (2006-2014)",
            "CORSA E (2014+)",
            "CROSSLAND",
            "FRONTERA",
            "GRANDLAND",
            "INSIGNIA (2008-2017)",
            "INSIGNIA (2017+)",
            "KARL",
            "MERIVA",
            "MOKKA",
            "OMEGA",
            "SINTRA",
            "TIGRA",
            "VECTRA (1996-2001)",
            "VECTRA / SIGNUM (2001+)",
            "VIVARO",
            "ZAFIRA A (1998-2005)",
            "ZAFIRA B (2005-2012)",
            "ZAFIRA C (2012+)",
            "ZAFIRA / LIFE (2019+)"
        ],
        "PEUGEOT": [
            "106 / 107 / 1007 / 108",
            "206 / 207 / 208 / 2008",
            "301 / 306 / 3007 / 3008",
            "307",
            "308",
            "406 / 407",
            "4007 / 408 / 4008",
            "508 / 5008",
            "607 / 806 / 807",
            "BOXER / BIPPER",
            "EXPERT",
            "RCZ",
            "iON",
            "PARTNER"
        ],
        "PORSCHE": [],
        "RENAULT": [
            "ALASKAN",
            "ESPACE",
            "CAPTUR / TWINGO / SAFRANE",
            "CLIO / THALIA / SYMBOL",
            "KANGOO / KADJAR",
            "KOLEOS / FLUENCE / VEL SATIS / TRAFIC",
            "LAGUNA",
            "LATITUDE",
            "MEGANE",
            "MASTER / MAGNUM / MODUS / MIDLUM / PREMIUM / T",
            "SCENIC",
            "TALISMAN",
            "ZOE"
        ],
        "ROVER / LANDROVER": [
            "45 / 75 / 400 / 600 / 620",
            "DISCOVERY",
            "FREELANDER",
            "VOGUE",
            "EVOQUE",
            "SPORT",
            "VELAR"
        ],
        "SAAB": [],
        "SCANIA": [],
        "SEAT": [
            "ALTEA / ALHAMBRA",
            "AROSA / EXEO / ST / INCA",
            "ARONA",
            "ATECA",
            "IBIZA / CORDOBA",
            "LEON / TOLEDO"
        ],
        "SKODA": [
            "FABIA",
            "KAROQ",
            "KODIAQ",
            "OCTAVIA",
            "RAPID / ROOMSTER / SUPERB / YETI",
            "SCALA"
        ],
        "SMART": [],
        "SSANGYONG": [],
        "SUBARU": [
            "FORESTER",
            "IMPREZA",
            "LEGACY / OUTBACK",
            "TRIBECA / JUSTY / WRX / XV"
        ],
        "SUZUKI": [
            "ALTO / BALENO / IGNIS / JIMMY / LIANA",
            "CELERIO",
            "KIZASHI",
            "SWIFT / SX4 / SPLASH / WAGON",
            "VITARA / GRAND VITARA"
        ],
        "TESLA": [],
        "TOYOTA": [
            "AVENSIS",
            "AURIS / AYGO",
            "COROLLA",
            "C-HR / CELICA / CAMRY / HILUX / HILANDER",
            "LAND CRUISER / URBAN CRUISER",
            "PRIUS / PREVIA / VERSO / STARLET",
            "PRO ACE",
            "PRO ACE VERSO",
            "RAV 4",
            "YARIS",
            "IQ"
        ],
        "VOLKSWAGEN": [
            "AMAROK / EOS / LUPO",
            "ARTEON",
            "CADDY",
            "CRAFTER / LT",
            "E-GOLF",
            "GOLF 2 / GOLF 3 / VENTO",
            "GOLF 4 / BORA / BEETLE",
            "GOLF 5 / GOLF 6 / JETTA",
            "GOLF 5 PLUS",
            "GOLF 7",
            "PASSAT (1988-2005)",
            "PASSAT (2005+)",
            "PHAETON / UP",
            "POLO",
            "SHARAN",
            "TIGUAN",
            "TOURAN",
            "TOUAREG",
            "TRANSPORTER",
            "T-CROSS",
            "T-ROC"
        ],
        "VOLVO": [
            "S40 / S60 / S70 / S80",
            "S90 / V90",
            "V40 / V50 / V60 / V70",
            "XC60 / XC70 / XC90",
            "XC40",
            "C30 / C70 / FH12 / FH16 / FM"
        ],
        "УНИВЕРСАЛНИ": [],
        "ЩИПКИ И КОПЧЕТА ЗА СТЕЛКИ": []
    },
    "СТЕЛКИ ЗА БАГАЖНИК": {
        "ALFA ROMEO": [
            "147",
            "156",
            "159",
            "166",
            "BRERA",
            "GIULIA",
            "GIULIETTA",
            "GT",
            "MITO",
            "STELVIO"
        ],
        "AUDI": [
            "A1",
            "А2",
            "A3 (1996-2003)",
            "A3 (2003-2012)",
            "A3 (2012+) ",
            "A4 (1995-2001)",
            "A4 (2001-2007)",
            "A4 (2007-2015)",
            "A4 (2015+)",
            "A5",
            "A6 (1994-2004)",
            "A6 (2004-2011)",
            "A6 (2011+) ",
            "A7",
            "A8",
            "Q2",
            "Q3",
            "Q5",
            "Q7",
            "Q8",
            "80",
            "100",
            "TT"
        ],
        "BMW": [
            "1 SER. E81 / E82 / E87 / F20 (2004+)",
            "2 SER. F22 / F45 / F46 (2014+)",
            "3 SER. E36 (1991-1999) ",
            "3 SER. E46 (1997-2005) ",
            "3 SER. E90 / E91 (2005+) ",
            "3 SER. E92 / E93 (2006+)",
            "3 SER. F30 / F31 / F32 F34 GT (2011+)",
            "3 SER. G20 (2018+)",
            "4 SER. F36 (2014+)",
            "5 SER. E34 (1985-1995) ",
            "5 SER. E39 (1995-2003) ",
            "5 SER. E60 / E61 (2003-2009)",
            "5 SER. F10 / F11 / F07 GT (2010+) ",
            "5 SER. G30 / G31 (2017+)",
            "6 SER. F06 (2014+)",
            "7 SER. E38 (1995-2002) ",
            "7 SER. E65 / E66 / F01 / F02 (2001+)",
            "7 SER. G11 / G12 (2014+)",
            "X1",
            "X2",
            "X3",
            "X4",
            "X5",
            "X6",
            "Z3 / Z4",
            "i3"
        ],
        "CHEVROLET": [
            "AVEO / KALOS (2002-2011)",
            "AVEO (2011+)",
            "CAPTIVA",
            "CRUZE",
            "EPICA",
            "MALIBU",
            " LACETTI / NUBIRA",
            "ORLANDO",
            "REZZO / TACUMA",
            "TRAX",
            "SPARK / MATIZ"
        ],
        "CHRYSLER": [],
        "CITROEN": [
            "AX",
            "BERLINGO",
            "C1",
            "C2",
            "C3 / DS3 / C3 AIRCROSS",
            "C3 PICASSO",
            "C4 / C4 AIRCROSS",
            "C4 CACTUS",
            "C4 GRAND PICASSO",
            "C4 PICASSO",
            "C5 (2001-2008)",
            "C5 (2008+)",
            "C6",
            "C8",
            "C-CROSSER",
            "C-ELYSEE",
            "DS4 / DS5",
            "DS7",
            "NEMO",
            "JUMPY",
            "SAXO",
            "XANTIA",
            "XM",
            "XSARA / PICASSO",
            "ZX"
        ],
        "DACIA": [
            "DOKKER",
            "DUSTER",
            "LODGY",
            "LOGAN",
            "LOGAN MCV",
            "SANDERO / STEPWAY"
        ],
        "DAEWOO": [
            "ESPERO",
            "LANOS",
            "LEGANZA",
            "MATIZ",
            "NEXIA",
            "NUBIRA",
            "POLONEZ",
            "TICO"
        ],
        "DAIHATSU": [],
        "DODGE": [],
        "FIAT": [
            "500 / 500L / 500X",
            "125",
            "BRAVA",
            "BRAVO",
            "CINQUACENTO",
            "CROMA",
            "DOBLO",
            "FIORINO / NEMO / BIPPER TAPEE",
            "FREEMONT / JOURNEY",
            "IDEA",
            "LINEA",
            "MAREA",
            "PANDA",
            "PALIO / ALBEA",
            "PUNTO / GRANDE PUNTO",
            "QUBO",
            "SCUDO / JUMPY / EXPERT",
            "SEDICI / SX4",
            "SEICENTO",
            "SIENA",
            "STILO",
            "TALENTO",
            "TEMPRA",
            "TIPO",
            "ULYSSE",
            "UNO"
        ],
        "FORD": [
            "B-MAX",
            "C-MAX",
            "GRAND C-MAX",
            "ECOSPORT",
            "EDGE",
            "ESCORT",
            "FIESTA",
            "FOCUS (1998-2004)",
            "FOCUS (2004-2011)",
            "FOCUS (2011+)",
            "FUSION",
            "KA",
            "KUGA",
            "GALAXY",
            "MAVERICK",
            "MONDEO (1993-2007)",
            "MONDEO (2007-2014)",
            "MONDEO (2014+)",
            "PUMA",
            "TOURNEO COURIER / CONNECT / CUSTOM",
            "TRANSIT CUSTOM / COURIER",
            "S-MAX",
            "SCORPIO",
            "SIERRA"
        ],
        "HONDA": [
            "ACCORD (1994-2008)",
            "ACCORD (2008+)",
            "CITY",
            "CIVIC (1995-2005)",
            "CIVIC (2005-2012)",
            "CIVIC (2012+)",
            "CR-V",
            "FR-V",
            "HR-V",
            "INSIGHT",
            "JAZZ",
            "LEGEND",
            "LOGO",
            "STREAM"
        ],
        "HYUNDAI": [
            "ACCENT",
            "ATOS",
            "COUPE",
            "ELANTRA",
            "GENESIS",
            "GETZ",
            "i10",
            "i20",
            "i30 (2007 - 2017)",
            "i30 (2017+)",
            "i40",
            "ix20",
            "ix35",
            "ix55",
            "IONIQ",
            "KONA",
            "MATRIX",
            "SANTA FE (2000-2012)",
            "SANTA FE (2012+)",
            "SONATA",
            "TERRACAN",
            "TUCSON",
            "TRAJET",
            "VELOSTER"
        ],
        "ISUZU": [],
        "JAGUAR": [
            "E-PACE",
            "F-PACE",
            "X TYPE",
            "S TYPE",
            "XF",
            "XE",
            "XJ"
        ],
        "JEEP": [
            "CHEROKEE",
            "GRAND CHEROKEE",
            "COMMANDER",
            "COMPASS",
            "RENEGADE"
        ],
        "KIA": [
            "CARENS",
            "CARNIVAL",
            "CERATO",
            "CEED (2007-2012)",
            "CEED (2012+)",
            "CLARUS",
            "MAGENTIS",
            "NIRO",
            "OPTIMA",
            "PICANTO",
            "PRIDE",
            "PRO CEED",
            "RIO (2000-2011)",
            "RIO (2011+)",
            "SEPHIA",
            "SHUMA",
            "SPORTAGE (1991-2010)",
            "SPORTAGE (2010+)",
            "SORENTO",
            "SOUL",
            "STINGER",
            "STONIC",
            "VENGA",
            "XCEED"
        ],
        "LADA": [],
        "LANCIA": [],
        "LEXUS": [
            "CT",
            "GS",
            "LS",
            "NX",
            "RX",
            "IS",
            "UX"
        ],
        "MAZDA": [
            "121",
            "323",
            "626",
            "CX-3",
            "CX-5",
            "CX-7",
            "CX-9",
            "DEMIO",
            "MAZDA 2",
            "MAZDA 3 (2003-2009)",
            "MAZDA 3 (2009-2013)",
            "MAZDA 3 (2013+)",
            "MAZDA 5",
            "MAZDA 6 (2002-2008)",
            "MAZDA 6 (2008-2012)",
            "MAZDA 6 (2012+)",
            "MPV",
            "PREMACY"
        ],
        "MERCEDES": [
            "A-CLASS W168 / W169 (1998 - 2013)",
            "A-CLASS W176 (2013 - 2018)",
            "B-CLASS W245 (2005 - 2011)",
            "B-CLASS W246 (2011+)",
            "C-CLASS W202 (1993 - 2000)",
            "C-CLASS W203 (2000 - 2007)",
            "C-CLASS W204 (2007 - 2014)",
            "C-CLASS W205 (2014+)",
            "CITAN W415 (2012+)",
            "CLA-CLASS C117 (2013 - 2019)",
            "CLA-CLASS C118 (2019+)",
            "CLS-CLASS W218 / W219 (2004 - 2018)",
            " E-CLASS W201 (1982 - 1993)",
            "E-CLASS W124 (1985 - 1996)",
            "E-CLASS W210 (1996 - 2002)",
            "E-CLASS W211 (2001 - 2009)",
            "E-CLASS W212 / W207 (2009+) ",
            "E-CLASS W213 / C238 (2016+)",
            "ML-CLASS W163 (1997 - 2005)",
            "ML-CLASS W164 (2005 – 2011)",
            "ML-CLASS W166 / GLE (2011 - 2019)",
            "G-CLASS W461 / W462 / W463 (1990 - 2018)",
            "GL-CLASS X164 / X166 (2007+)",
            "GLA-CLASS X156 (2014+)",
            "GLC-CLASS X253 / C253 (2015+)",
            "GLE CLASS (2015+)",
            "GLK-CLASS X204 (2008 - 2015)",
            "R-CLASS (2005-2013)",
            "S-CLASS W140 (1991 - 1998) ",
            "S-CLASS W220 (1998 - 2005)",
            "S-CLASS W221 (2005 - 2012)",
            "S-CLASS W222 (2013+)",
            "VANEO W414 (2002 - 2005)",
            "VIANO (2003 - 2014)",
            "VITO (1997+)"
        ],
        "MITSUBISHI": [
            "ASX",
            "CARISMA",
            "COLT",
            "ECLIPSE",
            "GALANT",
            "GRANDIS",
            "LANCER",
            "OUTLANDER (2004 - 2012)",
            "OUTLANDER (2012+)",
            "PAJERO",
            "PAJERO PININ",
            "PAJERO SPORT",
            "SPACE STAR",
            "SPACE WAGON"
        ],
        "MINI COOPER": [
            "CLUBMAN",
            "COUNTRYMAN",
            "COOPER"
        ],
        "NISSAN": [
            "ALMERA",
            "CUBE",
            "JUKE",
            "LEAF",
            "MAXIMA",
            "MICRA",
            "NOTE",
            "NV200",
            "MURANO",
            "PATHFINDER",
            "PATROL",
            "PIXO",
            "PRIMERA (1991 - 2001)",
            "PRIMERA (2001 – 2008)",
            "PULSAR",
            "SUNNY",
            "QASHQAI",
            "TERRANO",
            "TIIDA",
            "X-TRAIL"
        ],
        "OPEL": [
            "AGILA",
            "ADAM",
            "ANTARA",
            "ASTRA F",
            "ASTRA G",
            "ASTRA H",
            "ASTRA J",
            "ASTRA K",
            "COMBO",
            "CORSA",
            "CROSSLAND X",
            "FRONTERA",
            "GRANDLAND",
            "INSIGNIA A (2008 - 2017)",
            "INSIGNIA B (2017+)",
            "KARL",
            "MERIVA",
            "MOKKA",
            "MONTEREY",
            "OMEGA",
            "SIGNUM",
            "VECTRA B (1995 - 2002)",
            "VECTRA C (2002 - 2008)",
            "VIVARO",
            "ZAFIRA"
        ],
        "PEUGEOT": [
            "106",
            "107",
            "108",
            "206",
            "207",
            "208",
            "301",
            "306",
            "307",
            "308 (2008 - 2013)",
            "308 (2013+)",
            "406",
            "407",
            "508",
            "605",
            "607",
            "807",
            "1007",
            "2008",
            "3008",
            "4007",
            "4008",
            "5008",
            "EXPERT",
            "PARTNER",
            "RIFTER"
        ],
        "PORSCHE": [
            "CAYENNE (2002-2010)",
            "CAYENNE (2010+)",
            "MACAN",
            "PANAMERA"
        ],
        "RENAULT": [
            "CAPTUR",
            "CLIO (1998 - 2012)",
            "CLIO (2012 - 2019)",
            "ESPACE / GRAND ESPACE",
            "FLUENCE",
            "KADJAR",
            "KANGOO",
            "KOLEOS",
            "LAGUNA (1994 - 2007)",
            "LAGUNA (2007 - 2015)",
            "LATITUDE",
            "MEGANE I (1995 - 2002)",
            "MEGANE II (2002 - 2009)",
            "MEGANE III (2008 - 2016)",
            "MEGANE IV (2016+)",
            "MODUS",
            "SAFRANE",
            "SCENIC (1996 - 2009)",
            "SCENIC (2009 - 2016)",
            "SCENIC (2016+)",
            "TALISMAN",
            "THALIA",
            "TRAFIC",
            "TWINGO",
            "VEL SATIS"
        ],
        "ROVER / RANGE ROVER / LAND ROVER": [
            "25 / 200",
            "75",
            "DISCOVERY",
            "FREELANDER",
            "RANGE ROVER II / III / IV (1994+)",
            "RANGE ROVER EVOQUE",
            "RANGE ROVER SPORT",
            "RANGE ROVER VELAR",
            "RANGE ROVER VOGUE"
        ],
        "SAAB": [],
        "SEAT": [
            "ALTEA / ALTEA XL",
            "ALHAMBRA",
            "ARONA",
            "ATECA",
            "AROSA",
            "CORDOBA",
            "EXEO",
            "IBIZA (1993 - 2017)",
            "IBIZA (2017+)",
            "INCA",
            "LEON (1999 - 2012)",
            "LEON (2012+)",
            "MII",
            "TOLEDO",
            "TARRACO"
        ],
        "SKODA": [
            "CITIGO",
            "FABIA (1999 - 2007)",
            "FABIA (2007 - 2014)",
            "FABIA (2015+)",
            "FAVORIT / FELICIA / FORMAN",
            "KAROQ",
            "KODIAQ",
            "OCTAVIA I (1996 – 2010)",
            "OCTAVIA II (2004 - 2013)",
            "OCTAVIA III (2013+)",
            "RAPID",
            "ROOMSTER",
            "SCALA",
            "SUPERB (2002 - 2015)",
            "SUPERB (2015+)",
            "YETI"
        ],
        "SSANGYONG": [
            "ACTYON",
            "KORANDO",
            "KYRON",
            "REXTON",
            "TIVOLI",
            "XLV"
        ],
        "SUBARU": [
            "FORESTER",
            "IMPREZA",
            "JUSTY",
            "LEGACY",
            "LEVORG",
            "OUTBACK",
            "TRIBECA",
            "XV",
            "WRX STI"
        ],
        "SUZUKI": [
            "ALTO",
            "BALENO",
            "CELERIO",
            "IGNIS",
            "JIMNY",
            "KIZASHI",
            "LIANA",
            "SPLASH",
            "SWIFT (1994 - 2010)",
            "SWIFT (2010+)",
            "SX4",
            "VITARA",
            "GRAND VITARA",
            "WAGON"
        ],
        "TOYOTA": [
            "4 RUNNER",
            "AURIS (2006 - 2012)",
            "AURIS (2012+)",
            "AVENSIS (1997 - 2003)",
            "AVENSIS (2003 - 2008)",
            "AVENSIS (2009+)",
            "AVENSIS VERSO",
            "AYGO",
            "CAMRY",
            "CARINA",
            "CH-R",
            "COROLLA (1993 - 2001)",
            "COROLLA (2001 - 2008)",
            "COROLLA (2007+)",
            "COROLLA VERSO",
            "LAND CRUISER J90 / J100 / J120",
            "LAND CRUISER J150 (2009+)",
            "LAND CRUISER J200 (2008+)",
            "PRIUS",
            " PRO ACE",
            "RAV4 (2000 - 2012)",
            "RAV4 (2012+)",
            "VERSO",
            "URBAN CRUISER",
            "YARIS XP10 / XP90 (1999 - 2013)",
            "YARIS XP130 / XP150 (2011+)",
            "YARIS VERSO"
        ],
        "TESLA": [],
        "VW": [
            "ARTEON",
            "BEETLE",
            "BORA",
            "CADDY",
            "CADDY LIFE",
            "CADDY MAXI",
            "FOX",
            "GOLF II",
            "GOLF III",
            "GOLF IV",
            "GOLF V / GOLF VI",
            "GOLF V PLUS / GOLF VI PLUS",
            "GOLF VII",
            "JETTA",
            "PASSAT B3 / B4 (1988 - 1997)",
            "PASSAT B5 / B5.5 (1996 - 2005)",
            "PASSAT B6 / B7 (2005 - 2014)",
            "PASSAT B8 (2014+)",
            "PASSAT CC (2008+)",
            "POLO III / IV (1994 - 2009)",
            "POLO V (2009 - 2017)",
            "POLO VI (2017+)",
            "SCIROCCO",
            "SHARAN (1995 - 2010)",
            "SHARAN (2010+)",
            "TRANSPORTER T5 / T6",
            "TIGUAN I (2007 - 2016)",
            "TIGUAN II (2016+)",
            "TOUAREG",
            "TOURAN",
            "UP",
            " T-CROSS",
            "T-ROC",
            "VENTO"
        ],
        "VOLVO": [
            "440",
            "850",
            "940 / 960",
            "C30",
            "S40",
            "S60",
            "S70",
            "S80",
            "S90",
            "V40",
            "V50",
            "V60",
            "V70",
            "V90",
            "XC40",
            "XC60",
            "XC70",
            "XC90"
        ],
        "УНИВЕРСАЛНИ ЗА БАГАЖНИК": []
    },
    "КСЕНОН": {
        "КСЕНОНИ И ЛУПИ": [
            "\n\t\tКСЕНОНИ И ЛУПИ\n\t"
        ]
    },
    "СВЕТЛИНИ": {
        "ДНЕВНИ СВЕТЛИНИ И ДИОДНИ КРУШКИ": [
            "\n\t\tДНЕВНИ СВЕТЛИНИ И ДИОДНИ КРУШКИ\n\t"
        ]
    },
    "ЕЛЕКТРОНИКА": {
        "ПАРКТРОНИЦИ И АЛАРМИ": [
            "\n\t\tПАРКТРОНИЦИ И АЛАРМИ\n\t"
        ]
    },
    "ИНТЕРИОР": {
        "РИНГОВЕ ЗА ТАБЛО": [
            "\n\t\tРИНГОВЕ ЗА ТАБЛО\n\t"
        ]
    },
    "ЕКСТЕРИОР": {
        "ВЕЖДИ ЗА ФАРОВЕ": [
            "\n\t\tВЕЖДИ ЗА ФАРОВЕ\n\t"
        ]
    },
    "ОКАЧВАНЕ": {
        "СПОРТНО ОКАЧВАНЕ": [
            "\n\t\tСПОРТНО ОКАЧВАНЕ\n\t"
        ]
    },
    "АВТОАКСЕСОАРИ": {
        "ФОЛИО": [
            "\n\t\tФОЛИО\n\t"
        ],
        "ЛОГО ПРОЕКТОРИ": [
            "\n\t\tЛОГО ПРОЕКТОРИ\n\t"
        ]
    },
    "ВСИЧКИ КАТЕГОРИИ": {
        "ВЕТРОБРАНИ HEKO": [
            "ДЕФЛЕКТОРИ ЗА ПРЕДЕН КАПАК",
            "AUDI",
            "ALFA ROMEO",
            "BMW",
            "CADILLAC",
            "CHEVROLET",
            "CHRYSLER",
            "CITROEN",
            "DACIA",
            "DAEWOO",
            "DAF",
            "DAIHATSU",
            "DODGE",
            "FIAT",
            "FORD",
            "GREAT WALL",
            "HONDA",
            "HUMMER",
            "HYUNDAI",
            "INFINITY",
            "ISUZU",
            "IVECO",
            "JAGUAR",
            "JEEP",
            "KIA",
            "LADA",
            "LANCIA",
            "LAND ROVER",
            "LEXUS",
            "MASERATI",
            "MAN",
            "MAZDA",
            "MERCEDES",
            "MG",
            "MINI",
            "MITSUBISHI",
            "NISSAN",
            "OPEL",
            "PEUGEOT",
            "PLYMOUTH",
            "POLONEZ",
            "PONTIAC",
            "PORSCHE",
            "RENAULT",
            "ROVER",
            "SAAB",
            "SCANIA",
            "SEAT",
            "SMART",
            "SKODA",
            "SSANGYONG",
            "SUBARU",
            "SUZUKI",
            "TATA",
            "TAVRIA",
            "TOYOTA",
            "VOLKSWAGEN",
            "VOLVO",
            "WARTBURG",
            "ЩИПКИ ЗА ВЕТРОБРАНИ"
        ],
        "СТЕЛКИ ЗА КОЛА": [
            "ALFA ROMEO",
            "AUDI",
            "BMW",
            "CADILLAC",
            "CHEVROLET",
            "CHRYSLER",
            "CITROEN",
            "DACIA",
            "DAIHATSU",
            "DAEWOO",
            "DAF",
            "DODGE",
            "FIAT",
            "FORD",
            "GREAT WALL",
            "HONDA",
            "HUMMER",
            "HYUNDAI",
            "INFINITY",
            "ISUZU",
            "IVECO",
            "JAGUAR",
            "JEEP",
            "KIA",
            "LADA",
            "LANCIA",
            "LEXUS",
            "MAN",
            "MAZDA",
            "MERCEDES",
            "MINI COOPER",
            "MITSUBISHI",
            "NISSAN",
            "OPEL",
            "PEUGEOT",
            "PORSCHE",
            "RENAULT",
            "ROVER / LANDROVER",
            "SAAB",
            "SCANIA",
            "SEAT",
            "SKODA",
            "SMART",
            "SSANGYONG",
            "SUBARU",
            "SUZUKI",
            "TESLA",
            "TOYOTA",
            "VOLKSWAGEN",
            "VOLVO",
            "УНИВЕРСАЛНИ",
            "ЩИПКИ И КОПЧЕТА ЗА СТЕЛКИ"
        ],
        "СТЕЛКИ ЗА БАГАЖНИК": [
            "ALFA ROMEO",
            "AUDI",
            "BMW",
            "CHEVROLET",
            "CHRYSLER",
            "CITROEN",
            "DACIA",
            "DAEWOO",
            "DAIHATSU",
            "DODGE",
            "FIAT",
            "FORD",
            "HONDA",
            "HYUNDAI",
            "ISUZU",
            "JAGUAR",
            "JEEP",
            "KIA",
            "LADA",
            "LANCIA",
            "LEXUS",
            "MAZDA",
            "MERCEDES",
            "MITSUBISHI",
            "MINI COOPER",
            "NISSAN",
            "OPEL",
            "PEUGEOT",
            "PORSCHE",
            "RENAULT",
            "ROVER / RANGE ROVER / LAND ROVER",
            "SAAB",
            "SEAT",
            "SKODA",
            "SSANGYONG",
            "SUBARU",
            "SUZUKI",
            "TOYOTA",
            "TESLA",
            "VW",
            "VOLVO",
            "УНИВЕРСАЛНИ ЗА БАГАЖНИК"
        ],
        "КСЕНОН": [
            "КСЕНОН СИСТЕМИ И ЛУПИ ЗА ВГРАЖДАНЕ",
            "КСЕНОН КРУШКИ",
            "КСЕНОН БАЛАСТИ",
            "КСЕНОН ПРИСТАВКИ И МОДУЛИ"
        ],
        "СВЕТЛИНИ": [
            "ДИОДНИ КРУШКИ И ДНЕВНИ СВЕТЛИНИ",
            "АНГЕЛСКИ ОЧИ",
            "ТУНИНГ ФАРОВЕ И СТОПОВЕ",
            "ТУНИНГ МИГАЧИ",
            "ДИОДНИ ПЛАФОНИ ЗА НОМЕР",
            "ХАЛОГЕНИ"
        ],
        "ЕЛЕКТРОНИКА": [
            "ПАРКТРОНИЦИ И АЛАРМИ",
            "MP3 CHANGER / USB AUDIO INTERFACE",
            "КАМЕРИ ЗА ЗАДНО ВИЖДАНЕ",
            "ВИДЕОРЕГИСТРАТОРИ, CAR VIDEO, DVD & GPS",
            "МОДУЛИ",
            "MP3 CHANGER"
        ],
        "ИНТЕРИОР": [
            "РИНГОВЕ ЗА ТАБЛО",
            "ИЗМЕРВАТЕЛНИ УРЕДИ",
            "ПОСТАВКИ ЗА ЧАШИ",
            "ТАПИЦЕРИИ",
            "ПЛАЗМЕНИ ЦИФЕРБЛАТИ"
        ],
        "ЕКСТЕРИОР": [
            "ВЕЖДИ ЗА ФАРОВЕ",
            "БРОНИ / ПРАГОВЕ / ДОБАВКИ",
            "СТЕПЕНКИ И РОЛБАРИ",
            "СПОЙЛЕРИ И АНТИКРИЛА",
            "ТУНИНГ РЕШЕТКИ",
            "ДРУГИ",
            "Брони"
        ],
        "ОКАЧВАНЕ": [
            "СПОРТНИ ОКАЧВАНИЯ",
            "РАЗПЪНКИ ЗА МАКФЕРСОНИТЕ"
        ],
        "АВТОАКСЕСОАРИ": [
            "ФОЛИО",
            "ДЕТСКИ СТОЛЧЕТА",
            "ПОКРИВАЛА",
            "ТАСОВЕ",
            "ДРУГИ",
            "ЛОГО ПРОЕКТОРИ",
            "БАГАЖНИЦИ",
            "КЛЮЧОДЪРЖАТЕЛИ И АКСЕСОАРИ ЗА ТЕЛЕФОН"
        ],
        "AUDI": [
            "АКСЕСОАРИ ЗА АУДИ",
            "AUDI 80 B3/B4",
            "AUDI 100",
            "AUDI A1",
            "AUDI A2",
            "AUDI A3 до 2003г.",
            "AUDI A3 след 2003г.",
            "AUDI A4 до 2001г.",
            "AUDI A4 след 2001г.",
            "AUDI A6 до 2004г.",
            "AUDI A6 след 2004",
            "AUDI A8",
            "AUDI TT",
            "AUDI Q5 / Q7"
        ],
        "ALFA ROMEO": [],
        "BMW": [
            "АКСЕСОАРИ ЗА БМВ",
            "1 SER. E81 / E82 / E87 / F20 (2004+)",
            "3 SER. E30 (1983-1991)",
            "3 SER. E36 (1991-1999)",
            "3 SER. E46 (1997-2005)",
            "3 SER. E90 / E91 (2005+)",
            "3 SER. E92 / E93 (2006+)",
            "3 SER. F30 / F31 / F32 (2011+)",
            "5 SER. E34 (1885-1995)",
            "5 SER. E39 (1995-2003)",
            "5 SER. E60 / E61 (2003-2009)",
            "5 SER. F10 / F11 (2010+)",
            "5 SER. G30 / G31 (2017+)",
            "7 SER. E32 (1885-1994)",
            "7 SER. E38 (1995-2002)",
            "7 SER. E65 / E66 / F01 / F02 (2001+)",
            "X1 / X3 / X5 / X6",
            "Z3 / Z4"
        ],
        "CITROEN": [
            "C2",
            "C3",
            "C4",
            "SAXO",
            "XSARA",
            "XANTIA"
        ],
        "CHEVROLET": [],
        "CHRYSLER": [],
        "DACIA": [],
        "DAEWOO": [],
        "FIAT": [],
        "FORD": [
            "ESCORT",
            "COUGAR",
            "FIESTA",
            "FOCUS",
            "GALAXY",
            "KA",
            "MONDEO",
            "PUMA",
            "PROBE",
            "MUSTANG"
        ],
        "HONDA": [
            "ACCORD",
            "CIVIC (87-91)",
            "CIVIC (92-95)",
            "CIVIC (96-01)",
            "CIVIC (95-00) UK",
            "CIVIC (01-05)",
            "CIVIC (2005+)",
            "CRV",
            "CRX",
            "CBR",
            "DEL SOL",
            "PRELUDE",
            "FRV",
            "JAZZ"
        ],
        "HYUNDAI": [],
        "JEEP": [],
        "KIA": [],
        "LEXUS": [],
        "MAZDA": [],
        "MERCEDES": [
            "АКСЕСОАРИ ЗА MERCEDES",
            "W124 / W126 E-Class",
            "W140 S-Class",
            "W163 /  W164 / W166 ML",
            "A-CLASS / B-CLASS",
            "W201 190E",
            "W202 C-Class",
            "W203 / C203 C-Class",
            "W204 C-Class",
            "W205 C-CLASS (2014+)",
            "W208 CLK",
            "W209 CLK",
            "W210 E-Class",
            "W211 E-Class",
            "W212 E-Class",
            "W213 E-CLASS (2016+)",
            "W220 S-Class",
            "W221 S-Class (2005-2013)",
            "W222 S-Class (2013+)",
            "W461 / W463 G-CLASS",
            "W219 / W218 CLS",
            "R129 / R230 SL",
            "R170 SLK",
            "R171 SLK",
            "X164 GL",
            "X204 GLK",
            "X253 GLC (2015+)",
            "SMART",
            "VITO",
            "CLA",
            "GLE"
        ],
        "MINI COOPER": [],
        "MITSUBISHI": [],
        "NISSAN": [
            "АКСЕСОАРИ ЗА NISSAN"
        ],
        "OPEL": [
            "ASTRA F (91-98)",
            "ASTRA G (98-04)",
            "ASTRA H (04-09)",
            "ASTRA J (2009+)",
            "CALIBRA",
            "CORSA до 2001г.",
            "CORSA след 2001г.",
            "OMEGA",
            "TIGRA",
            "VECTRA до 2001г.",
            "VECTRA след 2001г.",
            "ZAFIRA",
            "MERIVA",
            "INSIGNIA"
        ],
        "PEUGEOT": [
            "АКСЕСОАРИ ЗА PEUGEOT",
            "106",
            "107",
            "205",
            "206",
            "207",
            "306",
            "307",
            "406",
            "407"
        ],
        "PORSCHE": [],
        "RENAULT": [
            "CLIO I (1990-1998)",
            "CLIO II (1998-2005)",
            "CLIO III (2005+)",
            "LAGUNA",
            "MEGANE",
            "SCENIC",
            "TWINGO",
            "КЛЮЧОДЪРЖАТЕЛИ ЗА RENAULT"
        ],
        "ROVER / LAND / RANGE": [],
        "SAAB": [],
        "SEAT": [
            "ALHAMBRA",
            "ALTEA",
            "AROSA",
            "CORDOBA",
            "IBIZA",
            "LEON",
            "TOLEDO"
        ],
        "SKODA": [
            "FABIA",
            "OCTAVIA",
            "SUPERB"
        ],
        "SUBARU": [
            "КЛЮЧОДЪРЖАТЕЛИ ЗА SUBARU"
        ],
        "SUZUKI": [],
        "TOYOTA": [],
        "VOLVO": [],
        "VOLKSWAGEN": [
            "АКСЕСОАРИ ЗА VW",
            "BORA",
            "BEETLE",
            "CADDY",
            "CORRADO",
            "JETTA",
            "GOLF I / II",
            "GOLF III",
            "GOLF IV",
            "GOLF V",
            "GOLF VI",
            "GOLF VII",
            "LUPO",
            "PASSAT до 2001",
            "PASSAT след 2001",
            "POLO преди 2001г",
            "POLO след 2001г",
            "SCIROCCO",
            "SHARAN",
            "TRANSPORTER",
            "TOURAN",
            "TOUAREG",
            "TIGUAN",
            "VENTO"
        ],
        " ": [],
        "  ": []
    },
    "КОНТАКТИ": {
        "Адрес": [
            "Адрес"
        ]
    }
}