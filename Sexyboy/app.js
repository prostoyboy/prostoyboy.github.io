String.prototype.replaceAll=function(a,b){return this.split(a).join(b)};
    var translite_lat = {
        А: "A", а: "a",
        Ә: "Ä", ә: "ä",
        Б: "B", б: "b",
        Д: "D", д: "d",
        Е: "E", е: "e",
        Ф: "F", ф: "f",
        "Ғ": "Ğ", "ғ": "ğ",
        Г: "G", г: "g",
        Х: "H", х: "h",
        І: "I", i: "ı",
        И: "İ", и: "i",
        Й: "İ", й: "i",
        H: "H", h: "h",
        Ж: "J", ж: "j",
        К: "K", к: "k",
        Л: "L", л: "l",
        М: "M", м: "m",
        Н: "N", н: "n",
        Ң: "Ŋ", ң: "ŋ",
        О: "O", о: "o",
        Ө: "Ö", ө: "ö",
        П: "P", п: "p",
        Қ: "Q", қ: "q",
        Р: "R", р: "r",
        Ш: "Ş", ш: "ş",
        С: "S", с: "s",
        Т: "T", т: "t",
        Ұ: "Ū", ұ: "ū",
        Ү: "Ü", ү: "ü",
        В: "V", в: "v",
        Ы: "Y", ы: "y",
        У: "U", у: "u",
        З: "Z", з: "z",
        Ч: "Ch", ч: "ch",
        Э:"E",  э:"e",
        Щ: "", щ: "",
        Я: "YA", я: "ya",
        ь: '',
        ъ:'',

    };

    var translite_kaz = {
        "Ä":"Ә" ,   "ä":"ә" ,
        "A" :"А" ,   "a" :"а" ,
        "B" :"Б" ,   "b" :"б" ,
        "D" :"Д" ,   "d" :"д" ,
        "E" :"Е" ,   "e" :"е" ,
        "F" :"Ф" ,   "f" :"ф" ,
        "Ğ":"Ғ" ,   "ğ":"ғ" ,
        "G" :"Г" ,   "g" :"г" ,
        "H" :"Х" ,   "h" :"х" ,
        "I" :"І" ,   "ı" :"i" ,
        "İ":"И" ,   "i":"и" ,
        "H" :"H" ,   "h" :"h" ,
        "J" :"Ж" ,   "j" :"ж" ,
        "K" :"К" ,   "k" :"к" ,
        "L" :"Л" ,   "l" :"л" ,
        "M" :"М" ,   "m" :"м" ,
        "Ŋ":"Ң" ,   "ŋ":"ң" ,
        "N" :"Н" ,   "n" :"н" ,
        "Ö":"Ө" ,   "ö":"ө" ,
        "O" :"О" ,   "o" :"о" ,
        "P" :"П" ,   "p" :"п" ,
        "Q" :"Қ" ,   "q" :"қ" ,
        "R" :"Р" ,   "r" :"р" ,
        "Ş":"Ш" ,   "ş":"ш" ,
        "S" :"С" ,   "s" :"с" ,
        "T" :"Т" ,   "t" :"т" ,
        "Ü":"Ү" ,   "ü":"ү" ,
        "Ū" :"Ұ" ,   "ū" :"ұ" ,
        "V" :"В" ,   "v" :"в" ,
        "U":"У" ,   "u":"у" ,
        "Z" :"З" ,   "z" :"з" ,
        "Ch":"Ч" ,   "ch":"ч" ,
        "Y" :"Ы" ,   "y" :"ы"

    };

    var _translate_kaz = {
        "İä":"Иә",   "iä":"иә" ,
    };
    var _translate_lat = {
        Ю: "",ю: "",
        Ц: "S", ц: "s"

    };

    var convert_to_lat = function (text) {
        for (var key in _translate_lat) {
            text = text.replaceAll(key.toString(), _translate_lat[key]);
        }

        for (key in translite_lat) {
            text = text.replaceAll(key.toString(), translite_lat[key]);
        }

        return text;
    };

    var convert_to_kaz = function (text) {
        for (var key in _translate_kaz) {
            text = text.replaceAll(key.toString(), _translate_kaz[key]);
        }

        for (key in translite_kaz) {
            text = text.replaceAll(key.toString(), translite_kaz[key]);
        }

        return text;
    };