const WORDS = [
    {
        word: "SANTRFOR",
        bannedWords: [
            "FUTBOL",
            "OYUNCU",
            "SAHA",
            "FORVET",
            "GOL"
        ]
    },
    {
        word: "MOZAİK",
        bannedWords: [
            "KÜÇÜK",
            "TAŞ",
            "PASTA",
            "DUVAR",
            "PARÇA"
        ]
    },
    {
        word: "SERTİFİKA",
        bannedWords: [
            "BELGE",
            "ALMAK",
            "VERMEK",
            "EĞİTİM",
            "KURS"
        ]
    },
    {
        word: "İNSAN SARRAFI",
        bannedWords: [
            "ANLAMAK",
            "TANIMAK",
            "İYİ",
            "KÖTÜ",
            "BİLMEK"
        ]
    },
    {
        word: "ELİ YATKIN",
        bannedWords: [
            "BECERİKLİ",
            "HAMARAT",
            "İŞ",
            "BİLMEK",
            "ÇALIŞMAK"
        ]
    },
    {
        word: "PİRAMİT",
        bannedWords: [
            "MISIR",
            "ÜÇGEN",
            "ŞEKİL",
            "FİRAVUN",
            "TAŞ"
        ]
    },
    {
        word: "FRENK ÜZÜMÜ",
        bannedWords: [
            "KIRMIZI",
            "ŞURUP",
            "BÖĞÜRTLEN",
            "AHUDUDU",
            "MEYVE"
        ]
    },
    {
        word: "MUTLU SON",
        bannedWords: [
            "HİKAYE",
            "MASAL",
            "FİLM",
            "AŞK",
            "BİTMEK"
        ]
    },
    {
        word: "İŞ KURMAK",
        bannedWords: [
            "DÜKKAN",
            "AÇMAK",
            "PATRON",
            "KENDİ",
            "ŞİRKET"
        ]
    },
    {
        word: "ÖZGÜVEN",
        bannedWords: [
            "SAYGI",
            "KENDİ",
            "İNANMAK",
            "BAŞARMAK",
            "EGO"
        ]
    },
    {
        word: "TİFTİK",
        bannedWords: [
            "KEÇİ",
            "YÜN",
            "KAZAK",
            "YUMUŞAK",
            "KIL"
        ]
    },
    {
        word: "ULVİ",
        bannedWords: [
            "AMAÇ",
            "YÜKSEK",
            "ULU",
            "YÜCE",
            "BENZERSİZ"
        ]
    },
    {
        word: "LAÇKALAŞMAK",
        bannedWords: [
            "GEVŞEMEK",
            "RAHAT",
            "SAMİMİ",
            "ORTAM",
            "ESKİMEK"
        ]
    },
    {
        word: "LARVA",
        bannedWords: [
            "KURTÇUK",
            "KURBAĞA",
            "SİNEK",
            "YUMURTA",
            "YAVRU"
        ]
    },
    {
        word: "KÖPEKBALIĞI",
        bannedWords: [
            "HAYVAN",
            "YÜZGEÇ",
            "JAWS",
            "BALİNA",
            "OKYANUS"
        ]
    },
    {
        word: "LIV TYLER",
        bannedWords: [
            "SİNEMA",
            "OYUNCU",
            "ARWEN",
            "ARAGORN",
            "ELF"
        ]
    },
    {
        word: "FİLETO",
        bannedWords: [
            "ET",
            "KESMEK",
            "İNCE",
            "DİLİM",
            "BALIK"
        ]
    },
    {
        word: "RANDIMAN",
        bannedWords: [
            "VERİM",
            "ÇALIŞMAK",
            "İŞ",
            "SONUÇ",
            "BAŞARI"
        ]
    },
    {
        word: "LAFAZAN",
        bannedWords: [
            "KONUŞMAK",
            "GEVEZE",
            "SÖZ",
            "HAZIRCEVAP",
            "ANLATMAK"
        ]
    },
    {
        word: "DERBEDER",
        bannedWords: [
            "DAĞINIK",
            "TİTİZ",
            "TEMİZ",
            "YAŞAMAK",
            "DÜZENSİZ"
        ]
    },
    {
        word: "MAT ETMEK",
        bannedWords: [
            "SATRANÇ",
            "YENMEK",
            "BİTİRMEK",
            "ŞAH",
            "ALT ETMEK"
        ]
    },
    {
        word: "ÇİĞ BÖREK",
        bannedWords: [
            "YİYECEK",
            "HAMUR",
            "KIZARTMAK",
            "MANTI",
            "PUF BÖREĞİ"
        ]
    },
    {
        word: "MESANE",
        bannedWords: [
            "ŞİŞMEK",
            "İDRAR",
            "TORBA",
            "KESE",
            "ÇİŞ"
        ]
    },
    {
        word: "SUDOKU",
        bannedWords: [
            "BULMACA",
            "SAYI",
            "YERLEŞTİRMEK",
            "KARE",
            "JAPONYA"
        ]
    },
    {
        word: "DİNAR",
        bannedWords: [
            "PARA",
            "BİRİM",
            "IRAK",
            "ARAP",
            "KUVEYT"
        ]
    },
    {
        word: "KALSİYUM",
        bannedWords: [
            "KEMİK",
            "SÜT",
            "PEYNİR",
            "YOĞURT",
            "DİŞ"
        ]
    },
    {
        word: "ORTODONTİ",
        bannedWords: [
            "DİŞ",
            "TIP",
            "DAL",
            "TEL",
            "DOKTOR"
        ]
    },
    {
        word: "KAĞIT HAVLU",
        bannedWords: [
            "SİLMEK",
            "RULO",
            "KURULAMAK",
            "DÖKÜLMEK",
            "MUTFAK"
        ]
    },
    {
        word: "AYNASIZ",
        bannedWords: [
            "POLİS",
            "ARGO",
            "HIRSIZ",
            "FİLM",
            "KOMİSER"
        ]
    },
    {
        word: "PROJEKTÖR",
        bannedWords: [
            "YANSITMAK",
            "SİNEMA",
            "SUNUM",
            "IŞIK",
            "PERDE"
        ]
    },
    {
        word: "ŞEHRAZAT",
        bannedWords: [
            "1001 GECE",
            "MASAL",
            "KAHRAMAN",
            "ANLATMAK",
            "BERGÜZAR KOREL"
        ]
    },
    {
        word: "EVHAM",
        bannedWords: [
            "PANİK",
            "ŞÜPHE",
            "KUŞKU",
            "VESVESE",
            "ENDİŞE"
        ]
    },
    {
        word: "PARMAKLIK",
        bannedWords: [
            "HAPİSHANE",
            "HIRSIZ",
            "PENCERE",
            "DEMİR",
            "TAKMAK"
        ]
    },
    {
        word: "İSHAL",
        bannedWords: [
            "SULU",
            "MİDE",
            "BOZMAK",
            "TUVALET",
            "BAĞIRSAK"
        ]
    },
    {
        word: "LEBİDERYA",
        bannedWords: [
            "DENİZ KENARI",
            "SAHİL",
            "EV",
            "YAZLIK",
            "MANZARA"
        ]
    },
    {
        word: "HELLİM PEYNİRİ",
        bannedWords: [
            "KIBRIS",
            "SALATA",
            "KAŞAR",
            "KIZARTMAK",
            "KAHVALTI"
        ]
    },
    {
        word: "REKOLTE",
        bannedWords: [
            "TARIM",
            "ÜRÜN",
            "YIL",
            "ALMAK",
            "TARLA"
        ]
    },
    {
        word: "DURAK",
        bannedWords: [
            "OTOBÜS",
            "TREN",
            "DOLMUŞ",
            "İNMEK",
            "BİNMEK"
        ]
    },
    {
        word: "LOKAVT",
        bannedWords: [
            "GREV",
            "İŞÇİ",
            "ÇIKARMAK",
            "PATRON",
            "TOPLU"
        ]
    },
    {
        word: "NİŞASTA",
        bannedWords: [
            "ŞEKER",
            "KARBONHİDRAT",
            "YİYECEK",
            "PATATES",
            "MISIR"
        ]
    },
    {
        word: "ŞEBNEM FERAH",
        bannedWords: [
            "ŞARKICI",
            "KADIN",
            "ROCK",
            "VOLVOX",
            "VOKAL"
        ]
    },
    {
        word: "CAN SİMİDİ",
        bannedWords: [
            "DENİZ",
            "YUVARLAK",
            "TAKMAK",
            "BOĞULMAK",
            "VAPUR"
        ]
    },
    {
        word: "KAMP",
        bannedWords: [
            "ÇADIR",
            "ORMAN",
            "ATEŞ",
            "UYKU TULUMU",
            "İZCİ"
        ]
    },
    {
        word: "SONRADAN GÖRME",
        bannedWords: [
            "ZENGİN",
            "FAKİR",
            "GÖSTERİŞ",
            "ÖVÜNMEK",
            "ABARTMAK"
        ]
    },
    {
        word: "KIYASIYA",
        bannedWords: [
            "MÜCADELE",
            "ZORLU",
            "REKABET",
            "ÇEKİŞMELİ",
            "KIRAN KIRANA"
        ]
    },
    {
        word: "KANTİN",
        bannedWords: [
            "OKUL",
            "TOST",
            "KAFETERYA",
            "ÖĞRENCİ",
            "YEMEK"
        ]
    },
    {
        word: "TAKMA DİŞ",
        bannedWords: [
            "AĞIZ",
            "YEMEK",
            "YAŞLI",
            "DÖKÜLMEK",
            "DAMAK"
        ]
    },
    {
        word: "BEKÇİ",
        bannedWords: [
            "DÜDÜK",
            "HIRSIZ",
            "GÜVENLİK",
            "KULÜBE",
            "KORUMAK"
        ]
    },
    {
        word: "FOS ÇIKMAK",
        bannedWords: [
            "GÜVENMEK",
            "GERÇEKLEŞMEK",
            "UMMAK",
            "BOŞ",
            "BEKLEMEK"
        ]
    },
    {
        word: "DANIEL CRAIG",
        bannedWords: [
            "JAMES BOND",
            "AKTÖR",
            "007",
            "SARIŞIN",
            "AJAN"
        ]
    },
    {
        word: "MALTA",
        bannedWords: [
            "ADA",
            "ŞOVALYE",
            "ÜLKE",
            "AKDENİZ",
            "ERİK"
        ]
    },
    {
        word: "FİLE",
        bannedWords: [
            "PAZAR",
            "TORBA",
            "İP",
            "BASKETBOL",
            "TAŞIMAK"
        ]
    },
    {
        word: "ZINEDINE ZIDANE",
        bannedWords: [
            "FUTBOL",
            "JUBİLE",
            "CEZAYİR",
            "FRANSA",
            "REAL MADRİD"
        ]
    },
    {
        word: "MENEMEN",
        bannedWords: [
            "YEMEK",
            "YUMURTA",
            "DOMATES",
            "TAVA",
            "BİBER"
        ]
    },
    {
        word: "TUNİK",
        bannedWords: [
            "GİYSİ",
            "PANTOLON",
            "ETEK",
            "UZUN",
            "ELBİSE"
        ]
    },
    {
        word: "KÖSTEK OLMAK",
        bannedWords: [
            "ENGEL",
            "MANİ",
            "DESTEK",
            "YARDIM",
            "ÖNLEMEK"
        ]
    },
    {
        word: "ÇAPAK",
        bannedWords: [
            "GÖZ",
            "SABAH",
            "KURUMAK",
            "UYKU",
            "KENAR"
        ]
    },
    {
        word: "BOZKIR",
        bannedWords: [
            "BİTKİ",
            "TOPRAK",
            "KIRAÇ",
            "ÇAYIR",
            "ORMAN"
        ]
    },
    {
        word: "VATANDAŞ",
        bannedWords: [
            "ÜLKE",
            "MİLLET",
            "YURTTAŞ",
            "YAŞAMAK",
            "PASAPORT"
        ]
    },
    {
        word: "BADEM EZMESİ",
        bannedWords: [
            "TATLI",
            "ŞEKERLEME",
            "YİYECEK",
            "LOKUM",
            "FISTIK"
        ]
    },
    {
        word: "KARNABAHAR",
        bannedWords: [
            "SEBZE",
            "MEYVE",
            "YEMEK",
            "BEYAZ",
            "BROKOLİ"
        ]
    },
    {
        word: "ÇEKİCİ",
        bannedWords: [
            "KADIN",
            "GÜZEL",
            "SEKSİ",
            "ALIMLI",
            "İTİCİ"
        ]
    },
    {
        word: "CANAN",
        bannedWords: [
            "SEVGİLİ",
            "AŞIK OLMAK",
            "GÖNÜL VERMEK",
            "KADIN",
            "YAR"
        ]
    },
    {
        word: "TUĞRA",
        bannedWords: [
            "OSMANLI",
            "İMZA",
            "PADİŞAH",
            "SEMBOL",
            "İSİM"
        ]
    },
    {
        word: "BLENDER",
        bannedWords: [
            "KARIŞTIRMAK",
            "PARÇALAMAK",
            "MUTFAK",
            "ALET",
            "YEMEK"
        ]
    },
    {
        word: "KROMOZOM",
        bannedWords: [
            "X",
            "Y",
            "GENETİK",
            "DNA",
            "HÜCRE"
        ]
    },
    {
        word: "SİYAH KUŞAK",
        bannedWords: [
            "UZAK DOĞU",
            "JUDO",
            "KARATE",
            "SPOR",
            "AİKİDO"
        ]
    },
    {
        word: "BÜZGÜ",
        bannedWords: [
            "DİKMEK",
            "KUMAŞ",
            "İPLİK",
            "KIVRIM",
            "BOLLUK"
        ]
    },
    {
        word: "NÜFUS SAYIMI",
        bannedWords: [
            "ÜLKE",
            "YAŞAMAK",
            "İNSAN",
            "MEMUR",
            "EV"
        ]
    },
    {
        word: "KETEN",
        bannedWords: [
            "KUMAŞ",
            "PANTOLON",
            "YAZLIK",
            "CEKET",
            "BURUŞMAK"
        ]
    },
    {
        word: "HACI BEKTAŞ-I VELİ",
        bannedWords: [
            "ALEVİ",
            "TASAVVUF",
            "ŞENLİK",
            "MEVLANA",
            "FIKRA"
        ]
    },
    {
        word: "VAZELİN",
        bannedWords: [
            "YUMUŞAK",
            "SÜRMEK",
            "EL",
            "AYAK",
            "KREM"
        ]
    },
    {
        word: "AMONYAK",
        bannedWords: [
            "SULU",
            "TEMİZLİK",
            "KOKU",
            "ARI SOKMASI",
            "SAÇ BOYASI"
        ]
    },
    {
        word: "SOLARYUM",
        bannedWords: [
            "GÜNEŞ",
            "YANMAK",
            "BRONZLAŞMAK",
            "TEN",
            "ESMER"
        ]
    },
    {
        word: "MAKSAT",
        bannedWords: [
            "AMAÇ",
            "AŞMAK",
            "İSTEMEK",
            "NEDEN",
            "SEBEP"
        ]
    },
    {
        word: "GENSORU",
        bannedWords: [
            "TBMM",
            "ÖNERGE",
            "BAKAN",
            "MİLLETVEKİLİ",
            "SORUŞTURMA"
        ]
    },
    {
        word: "MESİRE",
        bannedWords: [
            "YER",
            "PİKNİK",
            "GEZMEK",
            "AĞAÇLIK",
            "DOĞAL"
        ]
    },
    {
        word: "BOA YILANI",
        bannedWords: [
            "HAYVAN",
            "KOBRA",
            "SÜRÜNGEN",
            "UZUN",
            "BÜYÜK"
        ]
    },
    {
        word: "KORNEA",
        bannedWords: [
            "GÖZ",
            "İRİS",
            "GÖRMEK",
            "PARÇA",
            "YIRTMAK"
        ]
    },
    {
        word: "MİZANSEN",
        bannedWords: [
            "YARATMAK",
            "TAKLİT",
            "SİNEMA",
            "DÜZENLEMEK",
            "SAHNE"
        ]
    },
    {
        word: "RANZA",
        bannedWords: [
            "YATAK",
            "İKİ",
            "KAT",
            "KOĞUŞ",
            "UYUMAK"
        ]
    },
    {
        word: "ABİDİN DİNO",
        bannedWords: [
            "RESSAM",
            "NAZIM HİKMET",
            "FRANSA",
            "MUTLULUK",
            "SERGİ"
        ]
    },
    {
        word: "SİNEMASKOP",
        bannedWords: [
            "GENİŞ",
            "SİYAH",
            "BANT",
            "ÇERÇEVE",
            "FİLM"
        ]
    },
    {
        word: "TESLİMAT",
        bannedWords: [
            "POSTA",
            "KARGO",
            "GÖNDERMEK",
            "MEKTUP",
            "ALMAK"
        ]
    },
    {
        word: "BİLMECE",
        bannedWords: [
            "BULMACA",
            "TEKERLEME",
            "GİZLİ",
            "SORMAK",
            "OYUN"
        ]
    },
    {
        word: "BANDANA",
        bannedWords: [
            "SAÇ",
            "TAKMAK",
            "EŞARP",
            "BAĞLAMAK",
            "GÜNEŞ"
        ]
    },
    {
        word: "PÜSKÜRMEK",
        bannedWords: [
            "YANARDAĞ",
            "LAV",
            "SU",
            "ÇIKARMAK",
            "FIŞKIRMAK"
        ]
    },
    {
        word: "ARSIZ",
        bannedWords: [
            "ŞIMARIK",
            "TERBİYESİZ",
            "DAYAK",
            "UTANMAZ",
            "YÜZSÜZ"
        ]
    },
    {
        word: "KORTEJ",
        bannedWords: [
            "TÖREN",
            "KONVOY",
            "ASKER",
            "YÜRÜMEK",
            "SIRA"
        ]
    },
    {
        word: "ANKA KUŞU",
        bannedWords: [
            "HAYALİ",
            "MASAL",
            "EFSANE",
            "KAF DAĞI",
            "KÜL"
        ]
    },
    {
        word: "HAMLET",
        bannedWords: [
            "KAHRAMAN",
            "'OLMAK YADA OLMAMAK'",
            "SHAKESPEARE",
            "TİYATRO",
            "SİNEMA"
        ]
    },
    {
        word: "STEPNE",
        bannedWords: [
            "LASTİK",
            "YEDEK",
            "TEKERLEK",
            "ARABA",
            "PATLATMAK"
        ]
    },
    {
        word: "PANZEHİR",
        bannedWords: [
            "ŞIRINGA",
            "İYİLEŞTİRMEK",
            "MADDE",
            "SOKMAK",
            "YILAN"
        ]
    },
    {
        word: "DEFNE",
        bannedWords: [
            "YAPRAK",
            "AĞAÇ",
            "BALIK",
            "KOKMAK",
            "MİTOLOJİ"
        ]
    },
    {
        word: "CANINA KASDETMEK",
        bannedWords: [
            "TEŞEBBÜS",
            "ÖLDÜRMEK",
            "YARALAMAK",
            "CİNAYET",
            "HAZIRLANMAK"
        ]
    },
    {
        word: "SU TOPLAMAK",
        bannedWords: [
            "YARA",
            "AYAK",
            "YÜRÜMEK",
            "EL",
            "ŞİŞMEK"
        ]
    },
    {
        word: "İSYANKAR",
        bannedWords: [
            "ASİ",
            "GENÇ",
            "DELİKANLI",
            "BAŞKALDIRMAK",
            "KAVGA"
        ]
    },
    {
        word: "PUF",
        bannedWords: [
            "KOLTUK",
            "OTURMAK",
            "MİNDER",
            "YUMUŞAK",
            "ARMUT"
        ]
    },
    {
        word: "SÜTLİMAN",
        bannedWords: [
            "SAKİN",
            "SESSİZ",
            "HUZURLU",
            "DURGUN",
            "OLAY"
        ]
    },
    {
        word: "MİSTİK",
        bannedWords: [
            "FAL",
            "DOĞAÜSTÜ",
            "GÜÇ",
            "GİZEM",
            "ESRARENGİZ"
        ]
    },
    {
        word: "GEBE",
        bannedWords: [
            "HAMİLE",
            "KADIN",
            "BEBEK",
            "DOKUZ AY",
            "KARIN"
        ]
    },
    {
        word: "MAESTRO",
        bannedWords: [
            "ORKESTRA",
            "YÖNETMEN",
            "ŞEF",
            "BESTECİ",
            "KLASİK MÜZİK"
        ]
    },
    {
        word: "KOKOŞ",
        bannedWords: [
            "SÜSLÜ",
            "GİYİNMEK",
            "HAVALI",
            "AŞIRI",
            "TAKIŞTIRMAK"
        ]
    },
    {
        word: "SÖĞÜŞ",
        bannedWords: [
            "DOMATES",
            "SALATALIK",
            "KESMEK",
            "SOĞUK",
            "ET"
        ]
    },
    {
        word: "TON BALIĞI",
        bannedWords: [
            "SANDVİÇ",
            "KONSERVE",
            "ORKİNOS",
            "SALATA",
            "YEMEK"
        ]
    },
    {
        word: "KÜFE",
        bannedWords: [
            "SEPET",
            "TAŞIMAK",
            "HAMAL",
            "YÜK",
            "SIRT"
        ]
    },
    {
        word: "KAYDIRAK",
        bannedWords: [
            "OYUN",
            "PARK",
            "ÇOCUK",
            "SALINCAK",
            "TAHTEREVALLİ"
        ]
    },
    {
        word: "KIŞ UYKUSU",
        bannedWords: [
            "AYI",
            "YATMAK",
            "SOĞUK",
            "SÜRÜNGEN",
            "HAYVAN"
        ]
    },
    {
        word: "MOTİVASYON",
        bannedWords: [
            "TEŞVİK",
            "KIRMAK",
            "İSTEK",
            "MORAL",
            "HEVES"
        ]
    },
    {
        word: "GÖZ KULAK OLMAK",
        bannedWords: [
            "İLGİLENMEK",
            "ÇOCUK",
            "BAKMAK",
            "KORUMAK",
            "BIRAKMAK"
        ]
    },
    {
        word: "SULUBOYA",
        bannedWords: [
            "YAĞLIBOYA",
            "RESİM",
            "FIRÇA",
            "PALET",
            "RENK"
        ]
    },
    {
        word: "BARUT",
        bannedWords: [
            "FIÇI",
            "ATEŞ",
            "PATLAMAK",
            "TOP",
            "SİLAH"
        ]
    },
    {
        word: "AĞIRBAŞLI",
        bannedWords: [
            "CİDDİ",
            "OLGUN",
            "HAREKET",
            "SESSİZ",
            "DAVRANIŞ"
        ]
    },
    {
        word: "ANTİKOR",
        bannedWords: [
            "HASTALIK",
            "ZARAR",
            "MADDE",
            "VÜCUT",
            "ÜRETMEK"
        ]
    },
    {
        word: "OBJEKTİF",
        bannedWords: [
            "FOTOĞRAF",
            "MERCEK",
            "KAMERA",
            "CAM",
            "TARAFSIZ"
        ]
    },
    {
        word: "MAŞALLAH",
        bannedWords: [
            "ALTIN",
            "SÜNNET",
            "NAZAR",
            "GÜZEL",
            "BEĞENMEK"
        ]
    },
    {
        word: "KİLOGRAM",
        bannedWords: [
            "ÖLÇÜ",
            "TARTMAK",
            "LİTRE",
            "AĞIRLIK",
            "BİRİM"
        ]
    },
    {
        word: "PARKE",
        bannedWords: [
            "YER",
            "DÖŞEMEK",
            "LAMİNANT",
            "YÜRÜMEK",
            "AHŞAP"
        ]
    },
    {
        word: "ŞÖLEN",
        bannedWords: [
            "KUTLAMA",
            "YEMEK",
            "İÇMEK",
            "ZİYAFET",
            "EĞLENCE"
        ]
    },
    {
        word: "MUTANT",
        bannedWords: [
            "X-MEN",
            "NİNJA KAPLUMBAĞALAR",
            "İNSAN",
            "DEĞİŞMEK",
            "YARATIK"
        ]
    },
    {
        word: "ÇATALHÖYÜK",
        bannedWords: [
            "ARKEOLOJİ",
            "ANTİK",
            "ANADOLU",
            "ESKİ",
            "KAZI"
        ]
    },
    {
        word: "ANANAS",
        bannedWords: [
            "MEYVE",
            "TROPİKAL",
            "SEBZE",
            "YEMEK",
            "KONSERVE"
        ]
    },
    {
        word: "AŞIK VEYSEL",
        bannedWords: [
            "MÜZİK",
            "TÜRKÜ",
            "TÜRK",
            "OZAN",
            "HALK"
        ]
    },
    {
        word: "MANGA",
        bannedWords: [
            "ÇİZGİ ROMAN",
            "ANİMASYON",
            "JAPON",
            "ASKER",
            "TABUR"
        ]
    },
    {
        word: "FOKURDAMAK",
        bannedWords: [
            "KAYNAMAK",
            "SU",
            "BALONCUK",
            "SES ÇIKARMAK",
            "BUHARLAŞMAK"
        ]
    },
    {
        word: "KOMİ",
        bannedWords: [
            "GARSON",
            "MUTFAK",
            "LOKANTA",
            "RESTORAN",
            "YARDIMCI"
        ]
    },
    {
        word: "MARJ",
        bannedWords: [
            "KAR",
            "PAY",
            "AYIRMAK",
            "FİYAT",
            "BOŞLUK"
        ]
    },
    {
        word: "METEOROLOJİ",
        bannedWords: [
            "HAVA DURUMU",
            "TAHMİN",
            "YAĞMUR",
            "KAR",
            "SICAKLIK"
        ]
    },
    {
        word: "SFENKS",
        bannedWords: [
            "MISIR",
            "PİRAMİT",
            "İNSAN",
            "ASLAN",
            "HEYKEL"
        ]
    },
    {
        word: "SU AYGIRI",
        bannedWords: [
            "HİPOPOTAM",
            "MEMELİ",
            "HAYVAN",
            "İRİ",
            "AFRİKA"
        ]
    },
    {
        word: "BABİL KULESİ",
        bannedWords: [
            "EFSANE",
            "İNŞA ETMEK",
            "TANRI",
            "ULAŞMAK",
            "ESKİ"
        ]
    },
    {
        word: "AHENK",
        bannedWords: [
            "UYUM",
            "ŞİİR",
            "SES",
            "DANS",
            "UZLAŞMA"
        ]
    },
    {
        word: "POKER",
        bannedWords: [
            "KUMAR",
            "İSKAMBİL KAĞIDI",
            "OYUN",
            "FLOŞ",
            "DÖPER"
        ]
    },
    {
        word: "ETÜT",
        bannedWords: [
            "DERS ÇALIŞMAK",
            "ÖĞRETMEN",
            "ÖDEV",
            "OKUL",
            "KALMAK"
        ]
    },
    {
        word: "ŞEHZADE",
        bannedWords: [
            "PADİŞAH",
            "ÇOCUK",
            "SULTAN",
            "PRENS",
            "ERKEK"
        ]
    },
    {
        word: "KAFADAN ATMAK",
        bannedWords: [
            "UYDURMAK",
            "SALLAMAK",
            "BİLMEK",
            "YALLAH",
            "TEST"
        ]
    },
    {
        word: "EFENDİ",
        bannedWords: [
            "BEY",
            "SESLENMEK",
            "KİBAR",
            "AĞIRBAŞLI",
            "NAZİK"
        ]
    },
    {
        word: "AYASOFYA MÜZESİ",
        bannedWords: [
            "KİLİSE",
            "TURİST",
            "SULTANAHMET",
            "TOPKAPI SARAYI",
            "CAMİİ"
        ]
    },
    {
        word: "PARSEL",
        bannedWords: [
            "ARSA",
            "SATMAK",
            "BÖLÜM",
            "TAPU",
            "PARÇA"
        ]
    },
    {
        word: "GÜZELLİK YARIŞMASI",
        bannedWords: [
            "KRALİÇE",
            "MAYO",
            "KAİNAT",
            "JÜRİ",
            "KIZ"
        ]
    },
    {
        word: "POHPOHLAMAK",
        bannedWords: [
            "ÖVMEK",
            "YALAKALIK",
            "YAĞ ÇEKMEK",
            "GAZA GETİRMEK",
            "GÜZEL SÖZ"
        ]
    },
    {
        word: "EŞEKARISI",
        bannedWords: [
            "BÜYÜK",
            "SOKMAK",
            "BAL",
            "KOVAN",
            "İĞNE"
        ]
    },
    {
        word: "ERTUĞRUL ÖZKÖK",
        bannedWords: [
            "GAZETECİ",
            "HÜRRİYET",
            "YAZAR",
            "YÖNETİCİ",
            "YAYIN"
        ]
    },
    {
        word: "BEL BAĞLAMAK",
        bannedWords: [
            "GÜVENMEK",
            "YARDIM",
            "MEDET UMMAK",
            "İNANMAK",
            "ARKADAŞ"
        ]
    },
    {
        word: "KOTA",
        bannedWords: [
            "DOLDURMAK",
            "KONTENJAN",
            "SINIRLAMA",
            "KISITLAMA",
            "SAYI"
        ]
    },
    {
        word: "BUZ DEVRİ",
        bannedWords: [
            "ESKİ ÇAĞ",
            "SOĞUK",
            "ERİMEK",
            "KAR",
            "ÇİZGİ FİLM"
        ]
    },
    {
        word: "İMSAK",
        bannedWords: [
            "İFTAR",
            "ORUÇ",
            "SAHUR",
            "RAMAZAN",
            "EZAN"
        ]
    },
    {
        word: "BAYKUŞ",
        bannedWords: [
            "HAYVAN",
            "KUŞ",
            "GECE",
            "UÇMAK",
            "UĞURSUZ"
        ]
    },
    {
        word: "TARAFTAR",
        bannedWords: [
            "FUTBOL",
            "TAKIM",
            "TUTMAK",
            "FANATİK",
            "TEZAHÜRAT"
        ]
    },
    {
        word: "SU BASKINI",
        bannedWords: [
            "SEL",
            "YAĞMUR",
            "MUSLUK",
            "AÇIK",
            "TAŞMAK"
        ]
    },
    {
        word: "ŞEKERPARE",
        bannedWords: [
            "TATLI",
            "ŞERBET",
            "HAMUR",
            "YUVARLAK",
            "YEMEK"
        ]
    },
    {
        word: "KÖRDÜĞÜM",
        bannedWords: [
            "İP",
            "AÇILMAK",
            "KARIŞIK",
            "ÇÖZMEK",
            "BAĞLAMAK"
        ]
    },
    {
        word: "KADEH",
        bannedWords: [
            "İÇECEK",
            "BARDAK",
            "ŞARAP",
            "CAM",
            "RAKI"
        ]
    },
    {
        word: "KALIBINI BASMAK",
        bannedWords: [
            "SAVUNMAK",
            "İNANMAK",
            "İDDİA",
            "GÜVENMEK",
            "DOĞRU"
        ]
    },
    {
        word: "NEMRUT DAĞI",
        bannedWords: [
            "ADIYAMAN",
            "ARKEOLOJİ",
            "HEYKEL",
            "GÜNBATIMI",
            "TANRI"
        ]
    },
    {
        word: "PALA BIYIK",
        bannedWords: [
            "SAKAL",
            "YÜZ",
            "YANAK",
            "UZUN",
            "KIVRIK"
        ]
    },
    {
        word: "FELAKET TELLALI",
        bannedWords: [
            "KÖTÜMSER",
            "ANLATMAK",
            "SÖYLEMEK",
            "HABER",
            "OLAY"
        ]
    },
    {
        word: "PEKMEZ",
        bannedWords: [
            "TAHİN",
            "ÜZÜM",
            "DUT",
            "TATLI",
            "REÇEL"
        ]
    },
    {
        word: "YOUTUBE",
        bannedWords: [
            "VİDEO",
            "PAYLAŞMAK",
            "YÜKLEMEK",
            "İNTERNET",
            "SİTE"
        ]
    },
    {
        word: "CADI KAZANI",
        bannedWords: [
            "DÜŞMAN",
            "HİLE",
            "KAYNAMAK",
            "DEDİKODU",
            "DÜZEN"
        ]
    },
    {
        word: "ÇAYIR",
        bannedWords: [
            "OTLAMAK",
            "İNEK",
            "YEŞİL",
            "ÇİMEN",
            "PİKNİK"
        ]
    },
    {
        word: "KRAVAT",
        bannedWords: [
            "PAPYON",
            "TAKMAK",
            "GÖMLEK",
            "TAKIM ELBİSE",
            "BOYUN"
        ]
    },
    {
        word: "TÖKEZLEMEK",
        bannedWords: [
            "SENDELEMEK",
            "DÜŞMEK",
            "AYAK",
            "TAKILMAK",
            "TAŞ"
        ]
    },
    {
        word: "LOGO",
        bannedWords: [
            "ŞİRKET",
            "SEMBOL",
            "İSİM",
            "AMBLEM",
            "KURUMSAL"
        ]
    },
    {
        word: "SOLAK",
        bannedWords: [
            "SAĞLAK",
            "EL",
            "YAZMAK",
            "TUTMAK",
            "KULLANMAK"
        ]
    },
    {
        word: "FLORENCE NİGHTİNGALE",
        bannedWords: [
            "HEMŞİRE",
            "HASTANE",
            "KURMAK",
            "SELİMİYE KIŞLASI",
            "DOKTOR"
        ]
    },
    {
        word: "İZDİVAÇ",
        bannedWords: [
            "EVLENMEK",
            "YUVA",
            "GELİN",
            "DAMAT",
            "NİKAH"
        ]
    },
    {
        word: "BENEK",
        bannedWords: [
            "ÇİL",
            "NOKTA",
            "YÜZ",
            "LEKE",
            "KÜÇÜK"
        ]
    },
    {
        word: "KABZA",
        bannedWords: [
            "SİLAH",
            "TABANCA",
            "TUTMAK",
            "SAP",
            "KILIÇ"
        ]
    },
    {
        word: "DOLMABAHÇE SARAYI",
        bannedWords: [
            "OSMANLI",
            "BEŞİKTAŞ",
            "ATATÜRK",
            "PADİŞAH",
            "TOPKAPI"
        ]
    },
    {
        word: "İRMİK",
        bannedWords: [
            "HELVA",
            "TATLI",
            "BUĞDAY",
            "UN",
            "DAĞITMAK"
        ]
    },
    {
        word: "HAZIRCEVAP",
        bannedWords: [
            "SORU",
            "LAF",
            "ÇABUK",
            "BULMAK",
            "HIZLI"
        ]
    },
    {
        word: "UKRAYNA",
        bannedWords: [
            "ÜLKE",
            "RUSYA",
            "KİEV",
            "DOĞALGAZ",
            "KARADENİZ"
        ]
    },
    {
        word: "ÇAR",
        bannedWords: [
            "RUSYA",
            "PETRO",
            "PADİŞAH",
            "KRAL",
            "YÖNETMEK"
        ]
    },
    {
        word: "POST",
        bannedWords: [
            "HAYVAN",
            "DERİ",
            "YÜZMEK",
            "KÜRK",
            "AYI"
        ]
    },
    {
        word: "LİBERO",
        bannedWords: [
            "FUTBOL",
            "TAKIM",
            "MAÇ",
            "DEFANS",
            "ORTA SAHA"
        ]
    },
    {
        word: "DEHLİZ",
        bannedWords: [
            "KORİDOR",
            "YER ALTI",
            "GİZLİ",
            "KARANLIK",
            "GEÇİT"
        ]
    },
    {
        word: "ÇELİK KASA",
        bannedWords: [
            "PARA",
            "DEĞERLİ",
            "MÜCEVHER",
            "EV",
            "SAKLAMAK"
        ]
    },
    {
        word: "MÜJDE AR",
        bannedWords: [
            "SİNEMA",
            "OYUNCU",
            "SEKSİ",
            "AYSEL GÜRSEL",
            "ARABESK"
        ]
    },
    {
        word: "FÖN ÇEKMEK",
        bannedWords: [
            "KUAFÖR",
            "SAÇ",
            "DÜZLEŞTİRMEK",
            "MAKİNE",
            "SICAK"
        ]
    },
    {
        word: "FAVORİ",
        bannedWords: [
            "BİRİNCİ",
            "YARIŞMA",
            "BEĞENMEK",
            "SEVMEK",
            "SAKAL"
        ]
    },
    {
        word: "BABACAN",
        bannedWords: [
            "DAVRANMAK",
            "GÜVENMEK",
            "ADAM",
            "ŞEFKAT",
            "İYİ"
        ]
    },
    {
        word: "ASPENDOS",
        bannedWords: [
            "TİYATRO",
            "ANTİK",
            "ANTALYA",
            "AÇIK HAVA",
            "KONSER"
        ]
    },
    {
        word: "KÜLAH",
        bannedWords: [
            "ŞAPKA",
            "KAĞIT",
            "DONDURMA",
            "DEĞİŞMEK",
            "ANLATMAK"
        ]
    },
    {
        word: "SLALOM",
        bannedWords: [
            "KAYAK",
            "KAR",
            "YARIŞ",
            "BAYRAK",
            "PİST"
        ]
    },
    {
        word: "ANTRENMAN",
        bannedWords: [
            "SPOR",
            "KOŞU",
            "EGZERSİZ",
            "FUTBOLCU",
            "İDMAN"
        ]
    },
    {
        word: "SAİT FAİK ABASIYANIK",
        bannedWords: [
            "EDEBİYAT",
            "YAZAR",
            "HİKAYE",
            "TÜRK",
            "BURGAZADA"
        ]
    },
    {
        word: "ÇİVİ YAZISI",
        bannedWords: [
            "İLKÇAĞ",
            "ESKİ",
            "ASUR",
            "SÜMER",
            "TAŞ"
        ]
    },
    {
        word: "AKROBAT",
        bannedWords: [
            "GÖSTERİ",
            "YETENEK",
            "SİRK",
            "CAMBAZ",
            "ESNEK"
        ]
    },
    {
        word: "KOLONYA",
        bannedWords: [
            "FERAHLIK",
            "SÜRMEK",
            "LİMON",
            "DÖKMEK",
            "MİSAFİR"
        ]
    },
    {
        word: "CANNES",
        bannedWords: [
            "FİLM",
            "FESTİVAL",
            "FRANSA",
            "SAHİL",
            "SİNEMA"
        ]
    },
    {
        word: "ESPRİ YAPMAK",
        bannedWords: [
            "KOMİK",
            "ŞAKA",
            "ANLATMAK",
            "GÜLMEK",
            "KAHKAHA"
        ]
    },
    {
        word: "MAKBUZ",
        bannedWords: [
            "AİDAT",
            "BAĞIŞ",
            "ÖDEME",
            "KAĞIT",
            "FATURA"
        ]
    },
    {
        word: "MÜHİMMAT",
        bannedWords: [
            "DEPO",
            "SAVAŞ",
            "CEPHANE",
            "ORDU",
            "SİLAH"
        ]
    },
    {
        word: "GONG",
        bannedWords: [
            "SES",
            "ZİL",
            "TOKMAK",
            "ÇINLAMAK",
            "VURMAK"
        ]
    },
    {
        word: "SOĞUK ALGINLIĞI",
        bannedWords: [
            "NEZLE",
            "ÜŞÜTMEK",
            "HASTA",
            "BURUN",
            "BOĞAZ"
        ]
    },
    {
        word: "ÇAĞLAYAN",
        bannedWords: [
            "ŞELALE",
            "SU",
            "AKMAK",
            "NEHİR",
            "YÜKSEK"
        ]
    },
    {
        word: "İMAMBAYILDI",
        bannedWords: [
            "YEMEK",
            "PATLICAN",
            "ZEYTİNYAĞLI",
            "KARNIYARIK",
            "DOMATES"
        ]
    },
    {
        word: "MACERA",
        bannedWords: [
            "OLAY",
            "HEYECAN",
            "ADRENALİN",
            "YAŞAMAK",
            "SAKİN"
        ]
    },
    {
        word: "AHMET ÇAKAR",
        bannedWords: [
            "HAKEM",
            "FUTBOL",
            "ERMAN TOROĞLU",
            "YARIŞMA",
            "MAÇ"
        ]
    },
    {
        word: "KALÇA",
        bannedWords: [
            "KADIN",
            "SALLAMAK",
            "VÜCUT",
            "BACAK",
            "JENNİFER LOPEZ"
        ]
    },
    {
        word: "HAKARET ETMEK",
        bannedWords: [
            "KÜFÜR",
            "SÖZ",
            "KÖTÜ",
            "SÖYLEMEK",
            "ÇİRKİN"
        ]
    },
    {
        word: "KONDİSYON BİSİKLETİ",
        bannedWords: [
            "SPOR",
            "EV",
            "ÇEVİRMEK",
            "KOŞU BANDI",
            "ZAYIFLAMAK"
        ]
    },
    {
        word: "PAVURYA",
        bannedWords: [
            "YENGEÇ",
            "İRİ",
            "BÜYÜK",
            "DENİZ",
            "YEMEK"
        ]
    },
    {
        word: "PATENT",
        bannedWords: [
            "ALMAK",
            "TESCİL",
            "BULUŞ",
            "TELİF HAKKI",
            "KANITLAMAK"
        ]
    },
    {
        word: "ŞİŞİRMEK",
        bannedWords: [
            "BALON",
            "LASTİK",
            "ÜFLEMEK",
            "POMPA",
            "HAVA"
        ]
    },
    {
        word: "HAFRİYAT",
        bannedWords: [
            "İNŞAAT",
            "TOPRAK",
            "BİNA",
            "KAZMAK",
            "KAMYON"
        ]
    },
    {
        word: "ASTRONOMİK",
        bannedWords: [
            "RAKAM",
            "YÜKSEK",
            "PAHALI",
            "AŞIRI",
            "GÖKYÜZÜ"
        ]
    },
    {
        word: "KAYKAY",
        bannedWords: [
            "BİNMEK",
            "ÇOCUK",
            "TEKERLEK",
            "TAHTA",
            "PATEN"
        ]
    },
    {
        word: "MAVİ YOLCULUK",
        bannedWords: [
            "EGE",
            "GEZİ",
            "YAT",
            "KİRALAMAK",
            "AKDENİZ"
        ]
    },
    {
        word: "BOŞ BULUNMAK",
        bannedWords: [
            "DİKKATSİZ",
            "DALGIN",
            "DAVRANMAK",
            "SÖYLEMEK",
            "POT KIRMAK"
        ]
    },
    {
        word: "ORHAN GENCEBAY",
        bannedWords: [
            "MÜZİSYEN",
            "ARABESK",
            "FERDİ TAYFUR",
            "MÜSLÜM GÜRSES",
            "BATSIN BU DÜNYA"
        ]
    },
    {
        word: "DIŞLANMAK",
        bannedWords: [
            "ARKADAŞ",
            "KONUŞMAK",
            "ATMAK",
            "ALMAK",
            "ORTAM"
        ]
    },
    {
        word: "NEŞTER",
        bannedWords: [
            "AMELİYAT",
            "BIÇAK",
            "KESMEK",
            "CERRAH",
            "DOKTOR"
        ]
    },
    {
        word: "ŞEBEKE",
        bannedWords: [
            "AĞ",
            "DONANIM",
            "ÖRGÜT",
            "ELEKTRİK",
            "TESİSAT"
        ]
    },
    {
        word: "YAREN",
        bannedWords: [
            "DOST",
            "ARKADAŞ",
            "SEVGİLİ",
            "YAKIN",
            "EŞ"
        ]
    },
    {
        word: "SERE SERPE",
        bannedWords: [
            "GÜNEŞLENMEK",
            "YATMAK",
            "RAHAT",
            "AÇIK SAÇIK",
            "SERBEST"
        ]
    },
    {
        word: "TOKYO",
        bannedWords: [
            "ŞEHİR",
            "JAPONYA",
            "ADA",
            "ASYA",
            "BAŞKENT"
        ]
    },
    {
        word: "İÇİNE DOĞMAK",
        bannedWords: [
            "HİSSETMEK",
            "ÖNCE",
            "BİLMEK",
            "MALUM OLMAK",
            "SEZMEK"
        ]
    },
    {
        word: "BANKO",
        bannedWords: [
            "KESİN",
            "AT YARIŞI",
            "KAZANMAK",
            "BAHİS",
            "GARANTİ"
        ]
    },
    {
        word: "PİSBOĞAZ",
        bannedWords: [
            "OBUR",
            "YEMEK",
            "AÇGÖZLÜ",
            "TOK",
            "DOYMAK"
        ]
    },
    {
        word: "ÇOBANYILDIZI",
        bannedWords: [
            "GÖKYÜZÜ",
            "GECE",
            "YÖN",
            "PARLAK",
            "KUTUP"
        ]
    },
    {
        word: "ALASKA",
        bannedWords: [
            "FRİGO",
            "AMERİKA",
            "SOĞUK",
            "EYALET",
            "RUSYA"
        ]
    },
    {
        word: "BEYZBOL",
        bannedWords: [
            "SPOR",
            "AMERİKA",
            "TOP",
            "VURMAK",
            "SOPA"
        ]
    },
    {
        word: "GÖRGÜ KURALLARI",
        bannedWords: [
            "ADAP",
            "SAYGI",
            "TERBİYE",
            "TOPLUM",
            "UYMAK"
        ]
    },
    {
        word: "ÇİÇEK PASAJI",
        bannedWords: [
            "İSTANBUL",
            "BEYOĞLU",
            "NEVİZADE",
            "YEMEK",
            "İÇMEK"
        ]
    },
    {
        word: "KAĞIT HELVA",
        bannedWords: [
            "YİYECEK",
            "TATLI",
            "YUVARLAK",
            "DONDURMA",
            "KÜLAH"
        ]
    },
    {
        word: "DAMLA",
        bannedWords: [
            "SU",
            "MUSLUK",
            "GÖZ",
            "YAĞMUR",
            "KÜÇÜK"
        ]
    },
    {
        word: "DENEY",
        bannedWords: [
            "KİMYA",
            "LABORATUAR",
            "FARE",
            "BİLİM",
            "TÜP"
        ]
    },
    {
        word: "TUŞ KİLİDİ",
        bannedWords: [
            "TELEFON",
            "AÇIK",
            "KAPALI",
            "BASMAK",
            "ARAMAK"
        ]
    },
    {
        word: "MİLADİ TAKVİM",
        bannedWords: [
            "GÜN",
            "AY",
            "ZAMAN",
            "AJANDA",
            "HİCRİ"
        ]
    },
    {
        word: "KÖŞE BUCAK",
        bannedWords: [
            "KAÇMAK",
            "TEMİZLEMEK",
            "HER YER",
            "SAKLANMAK",
            "DOLAŞMAK"
        ]
    },
    {
        word: "RENGİ ATMAK",
        bannedWords: [
            "KORKMAK",
            "YIKAMAK",
            "SOLMAK",
            "YÜZ",
            "SARARMAK"
        ]
    },
    {
        word: "ALP ARSLAN",
        bannedWords: [
            "SELÇUKLU",
            "HÜKÜMDAR",
            "TÜRK",
            "ANADOLU",
            "MALAZGİRT SAVAŞI"
        ]
    },
    {
        word: "KOLERA",
        bannedWords: [
            "HASTALIK",
            "SALGIN",
            "TİFO",
            "İSHAL",
            "BULAŞICI"
        ]
    },
    {
        word: "EBEVEYN",
        bannedWords: [
            "ANNE",
            "BABA",
            "ÇOCUK",
            "AİLE",
            "İKİLİ"
        ]
    },
    {
        word: "FRAPAN",
        bannedWords: [
            "ELBİSE",
            "GİYSİ",
            "DİKKAT ÇEKİCİ",
            "RÜKÜŞ",
            "HAVALI"
        ]
    },
    {
        word: "KONTAK",
        bannedWords: [
            "KAFA",
            "LENS",
            "ANAHTAR",
            "ARABA",
            "TEMAS"
        ]
    },
    {
        word: "MURATHAN MUNGAN",
        bannedWords: [
            "EDEBİYAT",
            "ŞAİR",
            "ROMAN",
            "YAZAR",
            "KIRK ODA"
        ]
    },
    {
        word: "BACANAK",
        bannedWords: [
            "EŞ",
            "KARDEŞ",
            "BALDIZ",
            "KOCA",
            "KIZ"
        ]
    },
    {
        word: "PSİKOLOJİ",
        bannedWords: [
            "SOSYOLOJİ",
            "PSİKİYATRİ",
            "RUHBİLİM",
            "DEPRESYON",
            "FREUD"
        ]
    },
    {
        word: "RİZİKO",
        bannedWords: [
            "RİSK",
            "ZARAR",
            "TEHLİKE",
            "YARIŞMA",
            "TELEVİZYON"
        ]
    },
    {
        word: "DALGAKIRAN",
        bannedWords: [
            "DENİZ",
            "BETON",
            "KAYA",
            "TEKNE",
            "SET"
        ]
    },
    {
        word: "REHİN VERMEK",
        bannedWords: [
            "KUYUMCU",
            "BORÇ",
            "PARA",
            "MÜCEVHER",
            "ALTIN"
        ]
    },
    {
        word: "ZORUNA GİTMEK",
        bannedWords: [
            "BOZULMAK",
            "ÜZÜLMEK",
            "GÜCÜNE GİTMEK",
            "DOKUNMAK",
            "ONUR"
        ]
    },
    {
        word: "ROKET",
        bannedWords: [
            "FÜZE",
            "ATMAK",
            "SAVAŞ",
            "SİLAH",
            "MENZİL"
        ]
    },
    {
        word: "KARİDES",
        bannedWords: [
            "DENİZ",
            "KABUKLU",
            "JUMBO",
            "ISTAKOZ",
            "GÜVEÇ"
        ]
    },
    {
        word: "DEJENERE",
        bannedWords: [
            "BOZULMAK",
            "GENÇLİK",
            "YOZLAŞMAK",
            "NESİL",
            "TOPLUM"
        ]
    },
    {
        word: "ÇERKEZTAVUĞU",
        bannedWords: [
            "YEMEK",
            "CEVİZ",
            "MEZE",
            "DİDİKLEMEK",
            "ET"
        ]
    },
    {
        word: "İÇERLEMEK",
        bannedWords: [
            "ALINMAK",
            "GÜCENMEK",
            "ÜZÜLMEK",
            "DARILMAK",
            "KIRILMAK"
        ]
    },
    {
        word: "HEYBE",
        bannedWords: [
            "ÇANTA",
            "TORBA",
            "EŞEK",
            "TAŞIMAK",
            "OMUZ"
        ]
    },
    {
        word: "PANSUMAN",
        bannedWords: [
            "YARA",
            "TEMİZLEMEK",
            "BAKMAK",
            "HEMŞİRE",
            "PAMUK"
        ]
    },
    {
        word: "ZAMANE",
        bannedWords: [
            "ÇOCUK",
            "BUGÜN",
            "GENÇ",
            "ŞİMDİ",
            "YAKINMAK"
        ]
    },
    {
        word: "ASMA YAPRAĞI",
        bannedWords: [
            "ÜZÜM",
            "DOLMA",
            "ŞARAP",
            "SARMA",
            "ZEYTİNYAĞI"
        ]
    },
    {
        word: "SEMER",
        bannedWords: [
            "EYER",
            "EŞEK",
            "AT",
            "SIRT",
            "OTURMAK"
        ]
    },
    {
        word: "MUŞMULA",
        bannedWords: [
            "BİTKİ",
            "AĞAÇ",
            "MEYVE",
            "BURUŞUK",
            "SURAT"
        ]
    },
    {
        word: "YAZLIK",
        bannedWords: [
            "EV",
            "OTURMAK",
            "GİTMEK",
            "DENİZ",
            "TATİL"
        ]
    },
    {
        word: "VOKAL",
        bannedWords: [
            "SES",
            "ŞARKI",
            "SÖYLEMEK",
            "MÜZİK",
            "YAPMAK"
        ]
    },
    {
        word: "JAMBON",
        bannedWords: [
            "KAHVALTI",
            "SALAM",
            "ET",
            "SANDVİÇ",
            "DANA"
        ]
    },
    {
        word: "ULTRASON",
        bannedWords: [
            "BAKMAK",
            "BEBEK",
            "HAMİLE",
            "ÇEKTİRMEK",
            "RÖNTGEN"
        ]
    },
    {
        word: "ALYUVAR",
        bannedWords: [
            "KAN",
            "DAMAR",
            "KIRMIZI",
            "HÜCRE",
            "AKYUVAR"
        ]
    },
    {
        word: "TEZKERE",
        bannedWords: [
            "ASKERLİK",
            "BİTİRMEK",
            "BELGE",
            "KAĞIT",
            "ORDU"
        ]
    },
    {
        word: "DÜZ TABAN",
        bannedWords: [
            "ASKERLİK",
            "AYAK",
            "YÜRÜMEK",
            "ORTOPEDİ",
            "TOPUK"
        ]
    },
    {
        word: "KAYMAKAM",
        bannedWords: [
            "VALİ",
            "İLÇE",
            "YÖNETMEK",
            "MEMUR",
            "BELEDİYE"
        ]
    },
    {
        word: "KALAY",
        bannedWords: [
            "BAKIR",
            "TENCERE",
            "KAP KACAK",
            "AZARLAMAK",
            "PARLATMAK"
        ]
    },
    {
        word: "İLMEK",
        bannedWords: [
            "DÜĞÜM",
            "HALI",
            "ÖRMEK",
            "ŞİŞ",
            "TIĞ"
        ]
    },
    {
        word: "KANALİZASYON",
        bannedWords: [
            "LAĞIM",
            "TUVALET",
            "PİS",
            "SU",
            "YER ALTI"
        ]
    },
    {
        word: "MAHSUL",
        bannedWords: [
            "ÜRÜN",
            "TARLA",
            "TOPLAMAK",
            "VERİM",
            "ÇİFTÇİ"
        ]
    },
    {
        word: "BURNUNDAN GETİRMEK",
        bannedWords: [
            "RAHATSIZ ETMEK",
            "FİTİL FİTİL",
            "PİŞMAN ETMEK",
            "BOZMAK",
            "ZEHİR ETMEK"
        ]
    },
    {
        word: "CEZVE",
        bannedWords: [
            "KAHVE",
            "FAL",
            "PİŞİRMEK",
            "SAP",
            "TELVE"
        ]
    },
    {
        word: "BAHANE",
        bannedWords: [
            "ARAMAK",
            "UYDURMAK",
            "YALAN",
            "SEBEP",
            "SÖYLEMEK"
        ]
    },
    {
        word: "KONFETİ",
        bannedWords: [
            "KAĞIT",
            "MAÇ",
            "RENKLİ",
            "ATMAK",
            "DÜĞÜN"
        ]
    },
    {
        word: "GANİMET",
        bannedWords: [
            "SAVAŞ",
            "TOPLAMAK",
            "YAĞMA",
            "KORSAN",
            "ÇALMAK"
        ]
    },
    {
        word: "JOHN LENNON",
        bannedWords: [
            "MÜZİSYEN",
            "BEATLES",
            "YOKO ONO",
            "ŞARKICI",
            "IMAGİNE"
        ]
    },
    {
        word: "FACEBOOK",
        bannedWords: [
            "İNTERNET",
            "ARKADAŞLIK",
            "SİTE",
            "FOTOĞRAF",
            "ÜYE"
        ]
    },
    {
        word: "TEKZİP",
        bannedWords: [
            "YALANLAMAK",
            "GERÇEK",
            "GAZETE",
            "YAYINLAMAK",
            "HABER"
        ]
    },
    {
        word: "ZİGON",
        bannedWords: [
            "MOBİLYA",
            "İÇ İÇE",
            "SEHPA",
            "MİSAFİR",
            "SALON"
        ]
    },
    {
        word: "KOALA",
        bannedWords: [
            "AVUSTRALYA",
            "HAYVAN",
            "AYI",
            "OKALİPTÜS",
            "AĞAÇ"
        ]
    },
    {
        word: "SEÇENEK",
        bannedWords: [
            "ŞIK",
            "SINAV",
            "OPSİYON",
            "ALTERNATİF",
            "BAŞKA"
        ]
    },
    {
        word: "KUBBE",
        bannedWords: [
            "CAMİİ",
            "YUVARLAK",
            "AYASOFYA",
            "KÜRE",
            "ÇATI"
        ]
    },
    {
        word: "HEIDI KLUM",
        bannedWords: [
            "MANKEN",
            "TOP MODEL",
            "SEAL",
            "DEFİLE",
            "ALMAN"
        ]
    },
    {
        word: "ÇEMEN",
        bannedWords: [
            "PASTIRMA",
            "ACI",
            "SOS",
            "SÜRMEK",
            "KOKULU"
        ]
    },
    {
        word: "DENİZKESTANESİ",
        bannedWords: [
            "BATMAK",
            "DİKEN",
            "KABUK",
            "AYAK",
            "YUVARLAK"
        ]
    },
    {
        word: "CASUS",
        bannedWords: [
            "JAMES BOND",
            "GİZLİ",
            "AJAN",
            "MATA HARI",
            "007"
        ]
    },
    {
        word: "KUVAY-I MİLLİYE",
        bannedWords: [
            "KURTULUŞ SAVAŞI",
            "MUSTAFA KEMAL ATATÜRK",
            "ORDU",
            "HALK",
            "İSTİKLAL"
        ]
    },
    {
        word: "SATIR",
        bannedWords: [
            "BIÇAK",
            "ET",
            "DOĞRAMAK",
            "YAZI",
            "KESMEK"
        ]
    },
    {
        word: "LEHİMLEMEK",
        bannedWords: [
            "YAPIŞTIRMAK",
            "TUTTURMAK",
            "METAL",
            "PARÇA",
            "KAYNAK"
        ]
    },
    {
        word: "EĞİLİM",
        bannedWords: [
            "İLGİ",
            "YÖNETMEK",
            "MERAK",
            "MEYİL",
            "İSTEMEK"
        ]
    },
    {
        word: "DİNOZOR",
        bannedWords: [
            "TÜKENMEK",
            "HAYVAN",
            "JURRASIC PARK",
            "FOSİL",
            "T-REX"
        ]
    },
    {
        word: "OKLAVA",
        bannedWords: [
            "HAMUR",
            "AÇMAK",
            "BÖREK",
            "MERDANE",
            "SOPA"
        ]
    },
    {
        word: "KÜLBASTI",
        bannedWords: [
            "ET",
            "PİRZOLA",
            "IZGARA",
            "KEMİKSİZ",
            "DANA"
        ]
    },
    {
        word: "PLANÖR",
        bannedWords: [
            "UÇMAK",
            "HAVA",
            "GÖKYÜZÜ",
            "MOTOR",
            "KANAT"
        ]
    },
    {
        word: "FETHİYE",
        bannedWords: [
            "MUĞLA",
            "ÖLÜDENİZ",
            "TATİL",
            "AKDENİZ",
            "KELEBEKLER VADİSİ"
        ]
    },
    {
        word: "LATİN AMERİKA",
        bannedWords: [
            "GÜNEY",
            "KITA",
            "BREZİLYA",
            "ÜLKE",
            "ARJANTİN"
        ]
    },
    {
        word: "CANLI YAYIN",
        bannedWords: [
            "TELEVİZYON",
            "NAKLEN",
            "HABER",
            "BAĞLANMAK",
            "MAÇ"
        ]
    },
    {
        word: "LCD EKRAN",
        bannedWords: [
            "TELEVİZYON",
            "BİLGİSAYAR",
            "PLAZMA",
            "İNCE",
            "SEYRETMEK"
        ]
    },
    {
        word: "GASTRONOMİ",
        bannedWords: [
            "YEMEK",
            "BİLİM",
            "AŞÇI",
            "MUTFAK",
            "GURME"
        ]
    },
    {
        word: "GOTİK",
        bannedWords: [
            "ORTAÇAĞ",
            "MİMARİ",
            "GENÇLİK",
            "SİYAH",
            "PUNK"
        ]
    },
    {
        word: "ELİŞİ",
        bannedWords: [
            "DANTEL",
            "ÖRGÜ",
            "ÇEYİZ",
            "OKUL",
            "DERS"
        ]
    },
    {
        word: "GELİNLİK",
        bannedWords: [
            "EVLİLİK",
            "DUVAK",
            "GİYMEK",
            "BEYAZ",
            "ELBİSE"
        ]
    },
    {
        word: "KRATER",
        bannedWords: [
            "AY",
            "GÖKTAŞI",
            "ÇUKUR",
            "YANARDAĞ",
            "VOLKAN"
        ]
    },
    {
        word: "NARSİST",
        bannedWords: [
            "HAYRAN",
            "BENCİL",
            "EGOİST",
            "SEVMEK",
            "KENDİ"
        ]
    },
    {
        word: "EKÜRİ",
        bannedWords: [
            "AT",
            "İKİLİ",
            "ARKADAŞ",
            "YARIŞ",
            "ORTAK"
        ]
    },
    {
        word: "HEBA ETMEK",
        bannedWords: [
            "ZARAR",
            "HARCAMAK",
            "ZİYAN ETMEK",
            "YİTİRMEK",
            "KAYBETMEK"
        ]
    },
    {
        word: "TESTERE",
        bannedWords: [
            "FİLM",
            "KORKU",
            "ALET",
            "KESMEK",
            "AĞAÇ"
        ]
    },
    {
        word: "KLİP",
        bannedWords: [
            "MÜZİK",
            "VİDEO",
            "TELEVİZYON",
            "İZLEMEK",
            "ÇEKMEK"
        ]
    },
    {
        word: "TÖREN",
        bannedWords: [
            "BAYRAK",
            "NİKAH",
            "RESMİ",
            "AÇILIŞ",
            "MERASİM"
        ]
    },
    {
        word: "PARMESAN",
        bannedWords: [
            "PEYNİR",
            "SALATA",
            "İTALYAN",
            "MAKARNA",
            "ÜST"
        ]
    },
    {
        word: "AFACAN",
        bannedWords: [
            "YARAMAZ",
            "ÇOCUK",
            "ZEKİ",
            "KARIŞTIRMAK",
            "HAYLAZ"
        ]
    },
    {
        word: "AMBARGO",
        bannedWords: [
            "KOYMAK",
            "ENGELLEMEK",
            "ÜLKE",
            "TİCARET",
            "UYGULAMAK"
        ]
    },
    {
        word: "SANDIK",
        bannedWords: [
            "ÇEYİZ",
            "TAHTA",
            "EŞYA",
            "SEÇİM",
            "OY ATMAK"
        ]
    },
    {
        word: "BEŞAMEL",
        bannedWords: [
            "SOS",
            "ET",
            "TAVUK",
            "UN",
            "SÜT"
        ]
    },
    {
        word: "İÇİ GEÇMEK",
        bannedWords: [
            "UYUMAK",
            "İSTEMEK",
            "YATMAK",
            "İSTEKSİZ",
            "YAŞLI"
        ]
    },
    {
        word: "İSPANYOL PAÇA",
        bannedWords: [
            "PANTOLON",
            "KOT",
            "GENİŞ",
            "UÇ",
            "MODA"
        ]
    },
    {
        word: "SÜLALE",
        bannedWords: [
            "AİLE",
            "AKRABA",
            "SOY",
            "TEYZE",
            "AMCA"
        ]
    },
    {
        word: "SARPA SARMAK",
        bannedWords: [
            "KARIŞMAK",
            "ÇÖZMEK",
            "İŞ",
            "BOZULMAK",
            "ZORLUK"
        ]
    },
    {
        word: "GETTO",
        bannedWords: [
            "MAHALLE",
            "ŞEHİR",
            "AZINLIK",
            "YABANCI",
            "YAŞAMAK"
        ]
    },
    {
        word: "İFLAS ETMEK",
        bannedWords: [
            "HACİZ",
            "BANKA",
            "ŞİRKET",
            "BORÇ",
            "BATMAK"
        ]
    },
    {
        word: "AÇIK FİKİRLİ",
        bannedWords: [
            "ANLAMAK",
            "MODERN",
            "YENİLİK",
            "DÜŞÜNMEK",
            "BAĞNAZ"
        ]
    },
    {
        word: "ÇULLANMAK",
        bannedWords: [
            "ABANMAK",
            "ÜZERİNE GİTMEK",
            "ÜSTÜNE DÜŞMEK",
            "ATLAMAK",
            "ZIPLAMAK"
        ]
    },
    {
        word: "JUSTIN TIMBERLAKE",
        bannedWords: [
            "ŞARKICI",
            "AMERİKA",
            "DANS",
            "ERKEK",
            "BRITNEY SPEARS"
        ]
    },
    {
        word: "KABAKULAK",
        bannedWords: [
            "ÇOCUK",
            "HASTALIK",
            "KIZAMIK",
            "SUÇİÇEĞİ",
            "ŞİŞMEK"
        ]
    },
    {
        word: "GARANTİ BELGESİ",
        bannedWords: [
            "BOZULMAK",
            "TAMİR",
            "YIL",
            "TAAHHÜT",
            "EŞYA"
        ]
    },
    {
        word: "EMRİVAKİ YAPMAK",
        bannedWords: [
            "OLDUBİTTİ",
            "ANİ",
            "ACELE",
            "KARGAŞA",
            "ZORLAMAK"
        ]
    },
    {
        word: "ROKFOR",
        bannedWords: [
            "PEYNİR",
            "KÜF",
            "SÜT",
            "FRANSIZ",
            "BEYAZ"
        ]
    },
    {
        word: "HİLAL",
        bannedWords: [
            "AY",
            "ŞEKİL",
            "DOLUNAY",
            "YILDIZ",
            "BAYRAK"
        ]
    },
    {
        word: "ABONE",
        bannedWords: [
            "DERGİ",
            "AY",
            "GAZETE",
            "GELMEK",
            "YONCA EVCİMİK"
        ]
    },
    {
        word: "SİVİL TOPLUM",
        bannedWords: [
            "ÖRGÜT",
            "DEVLET",
            "BAĞIMSIZ",
            "DERNEK",
            "VAKIF"
        ]
    },
    {
        word: "DONMAK",
        bannedWords: [
            "BUZ",
            "SIFIR",
            "DERECE",
            "SU",
            "KIŞ"
        ]
    },
    {
        word: "KAFA DENGİ",
        bannedWords: [
            "ARKADAŞ",
            "UYUMLU",
            "ANLAŞMAK",
            "AYNI",
            "ZEVK"
        ]
    },
    {
        word: "SÜVARİ",
        bannedWords: [
            "AT",
            "ASKER",
            "BİNMEK",
            "SAVAŞ",
            "PİYADE"
        ]
    },
    {
        word: "SÜKUNET",
        bannedWords: [
            "DURGUN",
            "SESSİZ",
            "HUZURLU",
            "DİNGİN",
            "GÜRÜLTÜLÜ"
        ]
    },
    {
        word: "BAŞI BAĞLI",
        bannedWords: [
            "EVLİ",
            "NİŞANLI",
            "SÖZLÜ",
            "BEKAR",
            "SEVGİLİ"
        ]
    },
    {
        word: "LÜLETAŞI",
        bannedWords: [
            "PİPO",
            "BEYAZ",
            "OYMAK",
            "YUMUŞAK",
            "ESKİŞEHİR"
        ]
    },
    {
        word: "SUSPUS",
        bannedWords: [
            "SİNMEK",
            "KONUŞMAK",
            "SESSİZ",
            "SUÇLU",
            "CEVAP VERMEK"
        ]
    },
    {
        word: "JANT",
        bannedWords: [
            "ARABA",
            "PARÇA",
            "TEKERLEK",
            "LASTİK",
            "ÇELİK"
        ]
    },
    {
        word: "MESULİYET",
        bannedWords: [
            "SORUMLULUK",
            "GÖREV",
            "İLGİ",
            "YÜKLENMEK",
            "ÜSTLENMEK"
        ]
    },
    {
        word: "PASAJ",
        bannedWords: [
            "ÇARŞI",
            "DÜKKAN",
            "BEYOĞLU",
            "ALIŞVERİŞ",
            "KAPALI"
        ]
    },
    {
        word: "NOEL BABA",
        bannedWords: [
            "YILBAŞI",
            "HEDİYE",
            "REN GEYİĞİ",
            "BACA",
            "ARALIK"
        ]
    },
    {
        word: "AT GÖZLÜĞÜ",
        bannedWords: [
            "SABİT FİKİRLİ",
            "DÜŞÜNMEK",
            "BAKMAK",
            "DAR",
            "TUTUCU"
        ]
    },
    {
        word: "BAŞA ÇIKMAK",
        bannedWords: [
            "GÜÇ",
            "YETMEK",
            "BAŞARMAK",
            "ÜSTESİNDEN GELMEK",
            "DERT"
        ]
    },
    {
        word: "LOKAL",
        bannedWords: [
            "ANESTEZİ",
            "ULUSLARARASI",
            "DERNEK",
            "GECE KULÜBÜ",
            "YEREL"
        ]
    },
    {
        word: "PİYON",
        bannedWords: [
            "SATRANÇ",
            "TAŞ",
            "ŞAH",
            "VEZİR",
            "OYUN"
        ]
    },
    {
        word: "ŞAHİN",
        bannedWords: [
            "KARTAL",
            "DOĞAN",
            "KUŞ",
            "YIRTICI",
            "ARABA"
        ]
    },
    {
        word: "FOBİ",
        bannedWords: [
            "KORKU",
            "ÖRÜMCEK",
            "YÜKSEKLİK",
            "AŞIRI",
            "PANİK"
        ]
    },
    {
        word: "VAKIF",
        bannedWords: [
            "HAYIR İŞİ",
            "BAĞIŞ",
            "KURULUŞ",
            "DERNEK",
            "YARDIM"
        ]
    },
    {
        word: "TOLERANS",
        bannedWords: [
            "HOŞGÖRÜ",
            "ANLAYIŞ",
            "GÖSTERMEK",
            "MÜSAMAHA",
            "HATA"
        ]
    },
    {
        word: "RASTGELE",
        bannedWords: [
            "HERHANGİ",
            "GELİŞİGÜZEL",
            "SEÇMEK",
            "SESLENMEK",
            "BALIKÇI"
        ]
    },
    {
        word: "AFİŞ",
        bannedWords: [
            "ASMAK",
            "DUVAR",
            "KONSER",
            "SİNEMA",
            "FİLM"
        ]
    },
    {
        word: "FONDÖTEN",
        bannedWords: [
            "MAKYAJ",
            "SÜRMEK",
            "YÜZ",
            "KAPATICI",
            "PUDRA"
        ]
    },
    {
        word: "TEDBİRLİ",
        bannedWords: [
            "ÖNLEMEK",
            "HAZIRLIKLI",
            "ALMAK",
            "ÖNCE",
            "DÜŞÜNMEK"
        ]
    },
    {
        word: "ÇAKIŞMAK",
        bannedWords: [
            "ÜST ÜSTE",
            "AYNI",
            "ZAMAN",
            "DENK GELMEK",
            "KESİŞMEK"
        ]
    },
    {
        word: "IZGARA",
        bannedWords: [
            "MANGAL",
            "PİŞİRMEK",
            "ET",
            "TAVUK",
            "BARBEKÜ"
        ]
    },
    {
        word: "FENG SHUI",
        bannedWords: [
            "DEKORASYON",
            "TARZ",
            "UZAK DOĞU",
            "MEKAN",
            "EV"
        ]
    },
    {
        word: "ORHAN PAMUK",
        bannedWords: [
            "ROMAN",
            "NOBEL",
            "YAZAR",
            "BENİM ADIM KIRMIZI",
            "MASUMİYET MÜZESİ"
        ]
    },
    {
        word: "HOROZLANMAK",
        bannedWords: [
            "DAYILANMAK",
            "KAFA TUTMAK",
            "DİKLEŞMEK",
            "KAVGA",
            "CESARET"
        ]
    },
    {
        word: "MEKİK ÇEKMEK",
        bannedWords: [
            "KARIN KASI",
            "EGZERSİZ",
            "GÖBEK",
            "SPOR",
            "ŞINAV ÇEKMEK"
        ]
    },
    {
        word: "OYUN HAVASI",
        bannedWords: [
            "GÖBEK",
            "DANS ETMEK",
            "ORYANTAL",
            "MÜZİK",
            "EĞLENMEK"
        ]
    },
    {
        word: "ELİ SIKI",
        bannedWords: [
            "CİMRİ",
            "PARA",
            "HARCAMAK",
            "BİRİKTİRMEK",
            "TUTUMLU"
        ]
    },
    {
        word: "GIDIK",
        bannedWords: [
            "ÖPMEK",
            "BEBEK",
            "ÇENE",
            "GERDAN",
            "ŞİŞMAN"
        ]
    },
    {
        word: "YETİNMEK",
        bannedWords: [
            "AZ",
            "ÇOK",
            "İSTEMEK",
            "İDARE ETMEK",
            "SAHİP OLMAK"
        ]
    },
    {
        word: "MAGMA",
        bannedWords: [
            "YER ALTI",
            "VOLKAN",
            "ERİMEK",
            "YANARDAĞ",
            "LAV"
        ]
    },
    {
        word: "KÖÇEK",
        bannedWords: [
            "DANSÖZ",
            "ORYANTAL",
            "OYNAMAK",
            "DÜĞÜN",
            "ERKEK"
        ]
    },
    {
        word: "JACK SPARROW",
        bannedWords: [
            "JOHNY DEPP",
            "KARAYİP",
            "KORSAN",
            "KAPTAN",
            "FİLM"
        ]
    },
    {
        word: "KISITLI",
        bannedWords: [
            "İMKAN",
            "AZ",
            "SINIRLI",
            "YOKLUK",
            "OLANAK"
        ]
    },
    {
        word: "NEJAT İŞLER",
        bannedWords: [
            "AKTÖR",
            "SİNEMA",
            "DİZİ",
            "BARDA",
            "TELEVİZYON"
        ]
    },
    {
        word: "PAÇANGA BÖREĞİ",
        bannedWords: [
            "PASTIRMA",
            "MEYHANE",
            "MEZE",
            "YEMEK",
            "ARA SICAK"
        ]
    },
    {
        word: "RİMEL",
        bannedWords: [
            "GÖZ",
            "MAKYAJ",
            "KADIN",
            "SÜRMEK",
            "KİRPİK"
        ]
    },
    {
        word: "KÜÇÜK DÜŞÜRMEK",
        bannedWords: [
            "DALGA GEÇMEK",
            "GÜLMEK",
            "ALAY",
            "AŞAĞILAMAK",
            "UTANDIRMAK"
        ]
    },
    {
        word: "HOVARDA",
        bannedWords: [
            "ÇAPKIN",
            "SEVGİLİ",
            "GECE",
            "PARA HARCAMAK",
            "GÖNÜL"
        ]
    },
    {
        word: "TEFLON",
        bannedWords: [
            "EMAYE",
            "TAVA",
            "YAPIŞMAK",
            "ÇELİK",
            "ÇİZMEK"
        ]
    },
    {
        word: "AVUÇ",
        bannedWords: [
            "EL",
            "AÇMAK",
            "DİLENCİ",
            "FAL",
            "AYA"
        ]
    },
    {
        word: "DAYANIKLI",
        bannedWords: [
            "EŞYA",
            "SAĞLAM",
            "KIRILMAK",
            "BOZULMAK",
            "TÜKETİM"
        ]
    },
    {
        word: "AVUCUNU YALAMAK",
        bannedWords: [
            "ALMAK",
            "KALMAK",
            "KAYBETMEK",
            "İSTEMEK",
            "BİTMEK"
        ]
    },
    {
        word: "UZANMAK",
        bannedWords: [
            "YORGUN",
            "HASTA",
            "YATMAK",
            "TV",
            "DİNLENMEK"
        ]
    },
    {
        word: "ENDAMLI",
        bannedWords: [
            "UZUN",
            "GÖSTERİŞLİ",
            "BOYLU POSLU",
            "GÜZEL",
            "ZARAFET"
        ]
    },
    {
        word: "NEON",
        bannedWords: [
            "IŞIK",
            "TABELA",
            "RENKLİ",
            "LAMBA",
            "GAZ"
        ]
    },
    {
        word: "BANLİYÖ",
        bannedWords: [
            "TAŞRA",
            "MERKEZ",
            "UZAK",
            "OTURMAK",
            "TREN"
        ]
    },
    {
        word: "SAF KAN",
        bannedWords: [
            "AT",
            "CİNS",
            "IRK",
            "ÖZELLİK",
            "KARIŞMAK"
        ]
    },
    {
        word: "İPUCU",
        bannedWords: [
            "DEDEKTİF",
            "POLİS",
            "ÇÖZMEK",
            "DELİL",
            "ARAMAK"
        ]
    },
    {
        word: "KÜRE",
        bannedWords: [
            "DAİRE",
            "FAL",
            "DÜNYA",
            "YUVARLAK",
            "ŞEKİL"
        ]
    },
    {
        word: "SAĞANAK",
        bannedWords: [
            "YAĞMUR",
            "HAVA",
            "KAR",
            "BULUT",
            "ŞEMSİYE"
        ]
    },
    {
        word: "LEHÇE",
        bannedWords: [
            "DİL",
            "KONUŞMAK",
            "ŞİVE",
            "AĞIZ",
            "FARKLI"
        ]
    },
    {
        word: "BAHSE GİRMEK",
        bannedWords: [
            "İDDİA",
            "AT YARIŞI",
            "MAÇ",
            "PARA",
            "KUMAR"
        ]
    },
    {
        word: "MAMA SANDALYESİ",
        bannedWords: [
            "BEBEK",
            "YEMEK",
            "OTURMAK",
            "YÜKSEK",
            "ÇOCUK"
        ]
    },
    {
        word: "TAARRUZ",
        bannedWords: [
            "SALDIRI",
            "ESKİ",
            "SAVAŞ",
            "EMRİ",
            "HÜCUM"
        ]
    },
    {
        word: "KULAK ZARI",
        bannedWords: [
            "ORGAN",
            "DUYMAK",
            "PATLAMAK",
            "YÜZ",
            "BURUN"
        ]
    },
    {
        word: "HIMBIL",
        bannedWords: [
            "YAVAŞ",
            "TEMBEL",
            "UYUŞUK",
            "HAREKET",
            "ŞİŞMAN"
        ]
    },
    {
        word: "REKABET",
        bannedWords: [
            "HIRS",
            "ÇEKİŞME",
            "YARIŞMA",
            "RAKİP",
            "SPOR"
        ]
    },
    {
        word: "FEMİNİST",
        bannedWords: [
            "KADIN",
            "HAK",
            "SAVUNMAK",
            "EŞİTLİK",
            "HAREKET"
        ]
    },
    {
        word: "ENDOSKOPİ",
        bannedWords: [
            "AĞIZ",
            "KAMERA",
            "MİDE",
            "BORU",
            "SOKMAK"
        ]
    },
    {
        word: "MİMİK",
        bannedWords: [
            "YÜZ",
            "ANLATMAK",
            "İFADE",
            "HAREKET",
            "DUYGU"
        ]
    },
    {
        word: "AFYON",
        bannedWords: [
            "ŞEHİR",
            "SUCUK",
            "HAŞHAŞ",
            "KAYMAK",
            "PATLAMAK"
        ]
    },
    {
        word: "NAİF",
        bannedWords: [
            "SAF",
            "HASSAS",
            "DUYGUSAL",
            "MASUM",
            "İYİ NİYETLİ"
        ]
    },
    {
        word: "KARBONHİDRAT",
        bannedWords: [
            "KALORİ",
            "EKMEK",
            "DİYET",
            "MAKARNA",
            "PROTEİN"
        ]
    },
    {
        word: "SENDROM",
        bannedWords: [
            "BELİRTİ",
            "HASTALIK",
            "BUNALIM",
            "PAZARTESİ",
            "SIKINTI"
        ]
    },
    {
        word: "KİNAYE",
        bannedWords: [
            "İĞNELEME",
            "DOLAYLI",
            "İMA ETME",
            "ÜSTÜ KAPALI",
            "LAF DOKUNDURMAK"
        ]
    },
    {
        word: "ÇİZMEYİ AŞMAK",
        bannedWords: [
            "İLERİ GİTMEK",
            "HADDİNİ AŞMAK",
            "SINIR",
            "BİLMEK",
            "ÇİZGİ"
        ]
    },
    {
        word: "TAVUKGÖĞSÜ",
        bannedWords: [
            "TATLI",
            "SÜT",
            "MUHALLEBİ",
            "KAZANDİBİ",
            "YEMEK"
        ]
    },
    {
        word: "BUZ DAĞI",
        bannedWords: [
            "ICEBERG",
            "TİTANİK",
            "KUTUP",
            "DENİZ",
            "SOĞUK"
        ]
    },
    {
        word: "DİSKO",
        bannedWords: [
            "DANS",
            "MÜZİK",
            "EĞLENMEK",
            "GECE",
            "KULÜP"
        ]
    },
    {
        word: "YENİYETME",
        bannedWords: [
            "ÇOCUK",
            "DELİKANLI",
            "YAŞLI",
            "GENÇ",
            "YETİŞKİN"
        ]
    },
    {
        word: "HORON",
        bannedWords: [
            "KARADENİZ",
            "LAZ",
            "TULUM",
            "TEPMEK",
            "HALK OYUNU"
        ]
    },
    {
        word: "MÜLAKAT",
        bannedWords: [
            "SORU SORMAK",
            "GÖRÜŞME",
            "İŞE ALMAK",
            "RÖPORTAJ",
            "ÖZGEÇMİŞ"
        ]
    },
    {
        word: "PİŞMANİYE",
        bannedWords: [
            "YİYECEK",
            "TEL TEL",
            "TATLI",
            "İZMİT",
            "YOLCULUK"
        ]
    },
    {
        word: "İMA ETMEK",
        bannedWords: [
            "DOKUNDURMAK",
            "DOĞRUDAN",
            "DOLAYLI",
            "SEZDİRMEK",
            "SÖYLEMEK"
        ]
    },
    {
        word: "STRAPLEZ",
        bannedWords: [
            "BLUZ",
            "ÜST",
            "ASKI",
            "OMUZ",
            "DEKOLTE"
        ]
    },
    {
        word: "AĞIR AKSAK",
        bannedWords: [
            "YAVAŞ",
            "DÜZENSİZ",
            "HIZLI",
            "DÖRTNALA",
            "İLERLEMEK"
        ]
    },
    {
        word: "ISMARLAMAK",
        bannedWords: [
            "İSTEMEK",
            "PARA",
            "YEMEK",
            "SİPARİŞ",
            "ÖDEMEK"
        ]
    },
    {
        word: "YALAP ŞAP",
        bannedWords: [
            "ÜSTÜNKÖRÜ",
            "GELİŞİGÜZEL",
            "TEMİZLİK",
            "İŞ",
            "CEVAPLAMAK"
        ]
    },
    {
        word: "ZONKLAMAK",
        bannedWords: [
            "BAŞ AĞRISI",
            "VURMAK",
            "AĞRIMAK",
            "ŞAKAK",
            "BEYİN"
        ]
    },
    {
        word: "KRİZ MASASI",
        bannedWords: [
            "BELEDİYE",
            "KURUL",
            "FELAKET",
            "DEPREM",
            "OLUŞTURMAK"
        ]
    },
    {
        word: "YIL DÖNÜMÜ",
        bannedWords: [
            "KUTLAMA",
            "EVLİLİK",
            "ÖLÜM",
            "GÜN",
            "KURULUŞ"
        ]
    },
    {
        word: "TANRI MİSAFİRİ",
        bannedWords: [
            "KONUK",
            "EV",
            "GELMEK",
            "BEKLEMEK",
            "ANİDEN"
        ]
    },
    {
        word: "MAHCUP",
        bannedWords: [
            "ÇEKİNGEN",
            "UTANGAÇ",
            "GÜVENSİZ",
            "RAHAT",
            "GİRİŞKEN"
        ]
    },
    {
        word: "ALAKART MÖNÜ",
        bannedWords: [
            "AÇIK BÜFE",
            "FİKS MÖNÜ",
            "SEÇMEK",
            "RESTORAN",
            "YEMEK"
        ]
    },
    {
        word: "KAMAROT",
        bannedWords: [
            "GEMİ",
            "YOLCU",
            "SERVİS",
            "GÖREVLİ",
            "KAPTAN"
        ]
    },
    {
        word: "JÖN TÜRKLER",
        bannedWords: [
            "OSMANLI",
            "MEŞRUTİYET",
            "AYDIN",
            "TOPLULUK",
            "İTTİHAT VE TERAKKİ"
        ]
    },
    {
        word: "EĞİK",
        bannedWords: [
            "DÜZ",
            "ÇİZGİ",
            "DİK",
            "YAMUK",
            "DURMAK"
        ]
    },
    {
        word: "SLOGAN",
        bannedWords: [
            "ATMAK",
            "MİTİNG",
            "PARTİ",
            "PROPAGANDA",
            "SÖZ"
        ]
    },
    {
        word: "KAFA TUTMAK",
        bannedWords: [
            "KAVGA ETMEK",
            "TARTIŞMAK",
            "KARŞI GELMEK",
            "BOYUN EĞMEK",
            "DİKLENMEK"
        ]
    },
    {
        word: "BOĞA",
        bannedWords: [
            "HAYVAN",
            "KIRMIZI",
            "MATADOR",
            "BURÇ",
            "İSPANYA"
        ]
    },
    {
        word: "PASKALYA",
        bannedWords: [
            "BAHAR",
            "ÇÖREK",
            "YUMURTA",
            "HRİSTİYAN",
            "BAYRAM"
        ]
    },
    {
        word: "ABSÜRT",
        bannedWords: [
            "SAÇMA",
            "KOMEDİ",
            "UYUMSUZ",
            "TUTARSIZ",
            "FİLM"
        ]
    },
    {
        word: "ATEŞKES",
        bannedWords: [
            "SAVAŞ",
            "BARIŞ",
            "BİTİRMEK",
            "TESLİM OLMAK",
            "ANLAŞMAK"
        ]
    },
    {
        word: "KÖSE",
        bannedWords: [
            "KILSIZ",
            "BIYIK",
            "SAKAL",
            "TÜY",
            "TRAŞ"
        ]
    },
    {
        word: "AĞAÇKAKAN",
        bannedWords: [
            "HAYVAN",
            "KUŞ",
            "GAGA",
            "OYMAK",
            "DELMEK"
        ]
    },
    {
        word: "KITLAMA",
        bannedWords: [
            "ÇAY",
            "İÇMEK",
            "ŞEKER",
            "ISIRMAK",
            "ERZURUM"
        ]
    },
    {
        word: "REST ÇEKMEK",
        bannedWords: [
            "POKER",
            "HEPSİ",
            "PARA",
            "SON VERMEK",
            "KARŞI ÇIKMAK"
        ]
    },
    {
        word: "KONTRBAS",
        bannedWords: [
            "ENSTRÜMAN",
            "MÜZİK",
            "ALET",
            "KEMAN",
            "YAYLI"
        ]
    },
    {
        word: "WOLVERINE",
        bannedWords: [
            "KURT ADAM",
            "PENÇE",
            "X-MEN",
            "MUTASYON",
            "MARVEL"
        ]
    },
    {
        word: "RACON",
        bannedWords: [
            "KESMEK",
            "KABADAYI",
            "ARGO",
            "FİYAKA",
            "DELİKANLI"
        ]
    },
    {
        word: "TIRSMAK",
        bannedWords: [
            "KORKMAK",
            "ÇEKİNMEK",
            "ÜRKMEK",
            "CESARET",
            "BIRAKMAK"
        ]
    },
    {
        word: "BONO",
        bannedWords: [
            "U2",
            "SOLİST",
            "TAHVİL",
            "KAĞIT",
            "HİSSE SENEDİ"
        ]
    },
    {
        word: "GEORGE LUCAS",
        bannedWords: [
            "YÖNETMEN",
            "SİNEMA",
            "STAR WARS",
            "INDIANA JONES",
            "FİLM"
        ]
    },
    {
        word: "KOLAÇAN ETMEK",
        bannedWords: [
            "DEVRİYE",
            "DOLAŞMAK",
            "ETRAF",
            "BAKMAK",
            "KONTROL"
        ]
    },
    {
        word: "ZULA",
        bannedWords: [
            "SAKLAMAK",
            "GİZLİ",
            "KOYMAK",
            "KAÇAK",
            "MAL"
        ]
    },
    {
        word: "LİNYİT",
        bannedWords: [
            "KÖMÜR",
            "MADEN",
            "ZONGULDAK",
            "SOBA",
            "YANMAN"
        ]
    },
    {
        word: "İHTİMAL",
        bannedWords: [
            "BELKİ",
            "OLASI",
            "VERMEMEK",
            "OLMAK",
            "UMUT"
        ]
    },
    {
        word: "EFOR",
        bannedWords: [
            "GÜÇ",
            "ÇABA",
            "HARCAMAK",
            "KALP",
            "TEST"
        ]
    },
    {
        word: "DOLAP BEYGİRİ",
        bannedWords: [
            "DÖNMEK",
            "BAĞLAMAK",
            "AT",
            "EŞEK",
            "SÜREKLİ"
        ]
    },
    {
        word: "BUFALO",
        bannedWords: [
            "SIĞIR",
            "AMERİKA",
            "SÜRÜ",
            "KOVBOY",
            "BİZON"
        ]
    },
    {
        word: "SIĞINAK",
        bannedWords: [
            "SAVAŞ",
            "BOMBA",
            "SAKLANMAK",
            "KAÇMAK",
            "YER ALTI"
        ]
    },
    {
        word: "ALYANS",
        bannedWords: [
            "EVLİLİK",
            "YÜZÜK",
            "KARI-KOCA",
            "PARMAK",
            "TAKMAK"
        ]
    },
    {
        word: "ALKOLİK",
        bannedWords: [
            "İÇKİ",
            "GÜN",
            "AYYAŞ",
            "ALIŞKANLIK",
            "BAĞIMLI"
        ]
    },
    {
        word: "ATARİ",
        bannedWords: [
            "BİLGİSAYAR",
            "ESKİ",
            "OYUN",
            "BASİT",
            "PROGRAM"
        ]
    },
    {
        word: "MAYTAP",
        bannedWords: [
            "IŞIK",
            "KIVILCIM",
            "PASTA",
            "DOĞUM GÜNÜ",
            "YAKMAK"
        ]
    },
    {
        word: "İŞARET DİLİ",
        bannedWords: [
            "SAĞIR",
            "KONUŞMAK",
            "EL",
            "HAREKET",
            "İLETİŞİM"
        ]
    },
    {
        word: "TAHTAKALE",
        bannedWords: [
            "İSTANBUL",
            "ALIŞVERİŞ",
            "ÇARŞI",
            "UCUZ",
            "EMİNÖNÜ"
        ]
    },
    {
        word: "RÖNTGENCİ",
        bannedWords: [
            "DİKİZ",
            "GÖZETLEMEK",
            "SAPIK",
            "GİZLİ",
            "BAKMAK"
        ]
    },
    {
        word: "KEMAL SUNAL",
        bannedWords: [
            "SİNEMA",
            "KOMİK",
            "OYUNCU",
            "HABABAM SINIFI",
            "İNEK ŞABAN"
        ]
    },
    {
        word: "GÖRGÜ TANIĞI",
        bannedWords: [
            "DELİL",
            "OLAY",
            "MAHKEME",
            "ÇAĞIRMAK",
            "CİNAYET"
        ]
    },
    {
        word: "ULAK",
        bannedWords: [
            "HABER",
            "TAŞIMAK",
            "GÖTÜRMEK",
            "POSTACI",
            "AT"
        ]
    },
    {
        word: "PÖTİBÖR",
        bannedWords: [
            "BİSKÜVİ",
            "DİKDÖRTGEN",
            "ÇAY",
            "TATLI",
            "KURABİYE"
        ]
    },
    {
        word: "KAÇIN KURASI",
        bannedWords: [
            "GÖRMEK",
            "GEÇİRMEK",
            "ALDANMAK",
            "UYANIK",
            "TECRÜBELİ"
        ]
    },
    {
        word: "ZIMBA",
        bannedWords: [
            "TUTTURMAK",
            "KIRTASİYE",
            "TEL",
            "DELGEÇ",
            "KAĞIT"
        ]
    },
    {
        word: "PASPAL",
        bannedWords: [
            "KOKOŞ",
            "DAĞINIK",
            "BAKIMSIZ",
            "ŞIK",
            "GİYİNMEK"
        ]
    },
    {
        word: "ÇİZME",
        bannedWords: [
            "AYAKKABI",
            "UZUN",
            "KADIN",
            "ETEK",
            "BOT"
        ]
    },
    {
        word: "DİDİKLEMEK",
        bannedWords: [
            "İNCELEMEK",
            "ARAMAK",
            "DETAY",
            "SORUŞTURMAK",
            "PARÇALAMAK"
        ]
    },
    {
        word: "PİYAZ",
        bannedWords: [
            "SALATA",
            "KÖFTE",
            "KURU FASULYE",
            "HAŞLAMAK",
            "SOĞAN"
        ]
    },
    {
        word: "TOMBALA",
        bannedWords: [
            "YILBAŞI",
            "OYUN",
            "ÇİNKO",
            "ÇEKMEK",
            "KART"
        ]
    },
    {
        word: "METRES",
        bannedWords: [
            "KARI-KOCA",
            "EVLİ",
            "ALDATMAK",
            "YASAK",
            "İLİŞKİ"
        ]
    },
    {
        word: "KISA FİLM",
        bannedWords: [
            "SİNEMA",
            "UZUN",
            "FESTİVAL",
            "DAKİKA",
            "YÖNETMEN"
        ]
    },
    {
        word: "ÇİFT KAŞARLI",
        bannedWords: [
            "TOST",
            "YEMEK",
            "PEYNİR",
            "UZAMAK",
            "SUCUK"
        ]
    },
    {
        word: "KOSTA RİKA",
        bannedWords: [
            "ÜLKE",
            "AMERİKA",
            "ORTA",
            "PANAMA",
            "OKYANUS"
        ]
    },
    {
        word: "DAZLAK",
        bannedWords: [
            "KEL",
            "SAÇ",
            "DÖKÜLMEK",
            "NEO-NAZİ",
            "KAZITMAK"
        ]
    },
    {
        word: "LODOS",
        bannedWords: [
            "RÜZGAR",
            "POYRAZ",
            "ESMEK",
            "DENİZ",
            "KARAYEL"
        ]
    },
    {
        word: "TAC MAHAL",
        bannedWords: [
            "HİNDİSTAN",
            "TARİHİ",
            "SARAY",
            "BİNA",
            "KUBBE"
        ]
    },
    {
        word: "KOLAJ",
        bannedWords: [
            "RESİM",
            "BİRLEŞTİRMEK",
            "KAĞIT",
            "KESMEK",
            "YAPIŞTIRMAK"
        ]
    },
    {
        word: "MANAVGAT ŞELALESİ",
        bannedWords: [
            "DÖKÜLMEK",
            "ANTALYA",
            "SU",
            "AKMAK",
            "NEHİR"
        ]
    },
    {
        word: "ANTONI GAUDI",
        bannedWords: [
            "MİMAR",
            "İSPANYA",
            "BARCELONA",
            "SAGRADA FAMILIA",
            "TASARIM"
        ]
    },
    {
        word: "KEKLİK",
        bannedWords: [
            "HAYVAN",
            "KUŞ",
            "AVLAMAK",
            "GÜVERCİN",
            "VURMAK"
        ]
    },
    {
        word: "ERZAK",
        bannedWords: [
            "YİYECEK",
            "YOLCULUK",
            "SAKLAMAK",
            "KONSERVE",
            "KİLER"
        ]
    },
    {
        word: "TANTANA",
        bannedWords: [
            "ŞAMATA",
            "GÜRÜLTÜ",
            "OLAY",
            "GÖRKEMLİ",
            "ŞAŞAALI"
        ]
    },
    {
        word: "SELEKTÖR",
        bannedWords: [
            "ARABA",
            "FAR",
            "IŞIK",
            "YAKMAK",
            "UYARMAK"
        ]
    },
    {
        word: "ALIN TERİ",
        bannedWords: [
            "ÇALIŞMAK",
            "EMEK",
            "DÖKMEK",
            "ZAHMET",
            "UĞRAŞMAK"
        ]
    },
    {
        word: "ADAM ASMACA",
        bannedWords: [
            "OYUN",
            "KELİME",
            "BULMAK",
            "ÇİZMEK",
            "HARF"
        ]
    },
    {
        word: "SEMİNER",
        bannedWords: [
            "KONUŞMA",
            "SUNUM",
            "KONFERANS",
            "EĞİTİM",
            "TOPLANTI"
        ]
    },
    {
        word: "ELİPS",
        bannedWords: [
            "ŞEKİL",
            "YUVARLAK",
            "DAİRE",
            "DÜNYA",
            "ÇEMBER"
        ]
    },
    {
        word: "BASAMAK",
        bannedWords: [
            "MERDİVEN",
            "ÇIKMAK",
            "ASANSÖR",
            "KULLANMAK",
            "AŞAMA"
        ]
    },
    {
        word: "KAVŞAK",
        bannedWords: [
            "DÖRT YOL",
            "ARABA",
            "KESİŞMEK",
            "BİRLEŞMEK",
            "DÖNMEK"
        ]
    },
    {
        word: "ALTYAZI",
        bannedWords: [
            "SİNEMA",
            "ÇEVİRİ",
            "FİLM",
            "DUBLAJ",
            "İNGİLİZCE"
        ]
    },
    {
        word: "ALATURKA",
        bannedWords: [
            "ALAFRANGA",
            "MÜZİK",
            "ESKİ",
            "GELENEK",
            "TUVALET"
        ]
    },
    {
        word: "KANAVİÇE",
        bannedWords: [
            "ELİŞİ",
            "KASNAK",
            "İPLİK",
            "İĞNE",
            "BEZ"
        ]
    },
    {
        word: "DİSPANSER",
        bannedWords: [
            "HASTANE",
            "DOKTOR",
            "VEREM",
            "SAĞLIK OCAĞI",
            "POLİKLİNİK"
        ]
    },
    {
        word: "CİNSİYET",
        bannedWords: [
            "KADIN",
            "ERKEK",
            "DİŞİ",
            "DOĞMAK",
            "KİMLİK"
        ]
    },
    {
        word: "LORD",
        bannedWords: [
            "LEYDİ",
            "BARON",
            "UNVAN",
            "İNGİLTERE",
            "ASALET"
        ]
    },
    {
        word: "REZERV",
        bannedWords: [
            "PETROL",
            "SAKLAMAK",
            "YEDEK",
            "BİRİKTİRMEK",
            "DÖVİZ"
        ]
    },
    {
        word: "VİCDAN AZABI",
        bannedWords: [
            "ÇEKMEK",
            "DUYMAK",
            "ÜZÜLMEK",
            "ACI",
            "KÖTÜ"
        ]
    },
    {
        word: "DOMİNO",
        bannedWords: [
            "TAŞ",
            "OYUN",
            "DEVİRMEK",
            "DİKDÖRTGEN",
            "NOKTA"
        ]
    },
    {
        word: "PİLATES",
        bannedWords: [
            "SPOR",
            "EGZERSİZ",
            "TOP",
            "YOGA",
            "ESNETMEK"
        ]
    },
    {
        word: "ZIRH",
        bannedWords: [
            "ŞÖVALYE",
            "KORUMAK",
            "SAVAŞ",
            "METAL",
            "GİYMEK"
        ]
    },
    {
        word: "GO-KART",
        bannedWords: [
            "KÜÇÜK",
            "FORMULA 1",
            "MOTOR",
            "YARIŞ",
            "PİST"
        ]
    },
    {
        word: "SABAN",
        bannedWords: [
            "TARLA",
            "SÜRMEK",
            "ÇİFTÇİ",
            "TARIM",
            "HAYVAN"
        ]
    },
    {
        word: "KAVUK",
        bannedWords: [
            "OSMANLI",
            "SARIK",
            "BAŞLIK",
            "ŞAPKA",
            "PADİŞAH"
        ]
    },
    {
        word: "TIRIS",
        bannedWords: [
            "AT",
            "YÜRÜMEK",
            "DÖRTNALA",
            "HIZLI",
            "VIZ GELMEK"
        ]
    },
    {
        word: "GICIRTI",
        bannedWords: [
            "SES",
            "KAPI",
            "YAĞLAMAK",
            "TAHTA",
            "PAS"
        ]
    },
    {
        word: "KONFORLU",
        bannedWords: [
            "RAHAT",
            "DÖŞEMEK",
            "MOBİLYA",
            "OTEL",
            "EV"
        ]
    },
    {
        word: "AŞAĞI YUKARI",
        bannedWords: [
            "YAKLAŞIK",
            "TAHMİNİ",
            "TAM",
            "İNMEK",
            "ÇIKMAK"
        ]
    }
];


export default WORDS;
