import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "app_name": "Text Repeater",
      "nav_repeater": "Repeater",
      "nav_reverser": "Reverser",
      "nav_case": "Case Converter",
      "nav_word": "Word Counter",
      "nav_fancy": "Fancy Text",
      "btn_paste": "Paste",
      "btn_copy": "Copy",
      "btn_clear": "Clear",
      "copied": "Copied!",
      "source_text": "Source Text",
      "result_output": "Result Output",
      "how_it_works": "How it works",
      "repeater_desc": "Repeat your text as many times as you want.",
      "repeat_times": "Repeat Times",
      "separator": "Separator",
      "space": "Space",
      "newline": "New Line",
      "comma": "Comma",
      "none": "None",
      "custom": "Custom...",
      "how_repeater_1": "1. Paste or type the text you want to repeat in the 'Source Text' box.",
      "how_repeater_2": "2. Set the number of times you want the text to be repeated.",
      "how_repeater_3": "3. Choose a separator to be placed between repetitions.",
      "how_repeater_4": "4. Copy the result from the bottom box.",
      "reverser_desc": "Instantly reverse your text or change the order of words.",
      "reverse_mode": "Reverse Mode",
      "reverse_text": "Reverse Entire Text",
      "reverse_words": "Reverse Word Order",
      "how_reverser_1": "1. Enter your text in the input box.",
      "how_reverser_2": "2. Select 'Reverse Entire Text' to flip the characters backwards.",
      "how_reverser_3": "3. Select 'Reverse Word Order' to change the sequence of words.",
      "case_desc": "Convert text between different letter cases.",
      "how_case_1": "1. Enter your standard text.",
      "how_case_2": "2. Click on the desired case format button.",
      "how_case_3": "3. The text will automatically be transformed.",
      "word_desc": "Real-time statistics for your text.",
      "stat_words": "Words",
      "stat_chars": "Characters",
      "stat_chars_nospaces": "Chars (no spaces)",
      "stat_sentences": "Sentences",
      "stat_paragraphs": "Paragraphs",
      "how_word_1": "1. Paste any length of text.",
      "how_word_2": "2. View real-time character, word, sentence, and paragraph counts.",
      "fancy_desc": "Convert your text into cool and stylish Unicode fonts.",
      "fancy_results": "Results",
      "how_fancy_1": "1. Type some plain text into the input field.",
      "how_fancy_2": "2. The tool will generate stylized variants using Unicode.",
      "how_fancy_3": "3. Click the 'Copy' button next to the style you like."
    }
  },
  hi: {
    translation: {
      "app_name": "टेक्स्ट रिपीटर",
      "nav_repeater": "रिपीटर",
      "nav_reverser": "रिवर्सर",
      "nav_case": "केस कन्वर्टर",
      "nav_word": "वर्ड काउंटर",
      "nav_fancy": "फैंसी टेक्स्ट",
      "btn_paste": "पेस्ट",
      "btn_copy": "कॉपी",
      "btn_clear": "साफ़ करें",
      "copied": "कॉपी हो गया!",
      "source_text": "सोर्स टेक्स्ट",
      "result_output": "परिणाम",
      "how_it_works": "यह कैसे काम करता है",
      "repeater_desc": "अपने टेक्स्ट को जितनी बार चाहें रिपीट करें।",
      "repeat_times": "कितनी बार रिपीट करें",
      "separator": "सेपरेटर",
      "space": "स्पेस",
      "newline": "नई लाइन",
      "comma": "अल्पविराम",
      "none": "कुछ नहीं",
      "custom": "कस्टम...",
      "how_repeater_1": "1. टेक्स्ट को 'सोर्स टेक्स्ट' बॉक्स में पेस्ट करें।",
      "how_repeater_2": "2. सेट करें कि कितनी बार रिपीट करना है।",
      "how_repeater_3": "3. रिपीटीशन के बीच सेपरेटर चुनें।",
      "how_repeater_4": "4. परिणाम बॉक्स से टेक्स्ट को कॉपी करें।",
      "reverser_desc": "तुरंत अपना टेक्स्ट उल्टा करें या शब्दों का क्रम बदलें।",
      "reverse_mode": "रिवर्स मोड",
      "reverse_text": "पूरा टेक्स्ट उल्टा करें",
      "reverse_words": "शब्दों का क्रम उल्टा करें",
      "how_reverser_1": "1. अपना टेक्स्ट इनपुट बॉक्स में लिखें।",
      "how_reverser_2": "2. अक्षरों को उल्टा करने के लिए 'पूरा टेक्स्ट उल्टा करें' चुनें।",
      "how_reverser_3": "3. शब्दों का क्रम बदलने के लिए 'शब्दों का क्रम उल्टा करें' चुनें।",
      "case_desc": "अक्षरों के केस बदलें।",
      "how_case_1": "1. अपना टेक्स्ट लिखें।",
      "how_case_2": "2. जिस केस में बदलना है उसके बटन पर क्लिक करें।",
      "how_case_3": "3. आपका टेक्स्ट तुरंत बदल जाएगा।",
      "word_desc": "आपके टेक्स्ट के लिए रियल-टाइम आंकड़े।",
      "stat_words": "शब्द",
      "stat_chars": "अक्षर",
      "stat_chars_nospaces": "अक्षर (बिना स्पेस)",
      "stat_sentences": "वाक्य",
      "stat_paragraphs": "पैराग्राफ",
      "how_word_1": "1. अपना कोई भी टेक्स्ट पेस्ट करें।",
      "how_word_2": "2. तुरंत शब्दों और अक्षरों की गिनती देखें।",
      "fancy_desc": "टेक्स्ट को स्टाइलिश फॉन्ट्स में बदलें।",
      "fancy_results": "परिणाम",
      "how_fancy_1": "1. इनपुट बॉक्स में टेक्स्ट लिखें।",
      "how_fancy_2": "2. टूल कई स्टाइलिश वर्ज़न बना देगा।",
      "how_fancy_3": "3. 'कॉपी' बटन पर क्लिक करें।"
    }
  },
  es: {
    translation: {
      "app_name": "Repetidor de Texto",
      "nav_repeater": "Repetidor",
      "nav_reverser": "Inversor",
      "nav_case": "Mayúsculas/Minúsculas",
      "nav_word": "Contador de Palabras",
      "nav_fancy": "Texto Elegante",
      "btn_paste": "Pegar",
      "btn_copy": "Copiar",
      "btn_clear": "Borrar",
      "copied": "¡Copiado!",
      "source_text": "Texto Fuente",
      "result_output": "Resultado",
      "how_it_works": "Cómo funciona",
      "repeater_desc": "Repite tu texto tantas veces como quieras.",
      "how_repeater_1": "1. Pega o escribe el texto en el cuadro.",
      "how_repeater_2": "2. Establece el número de repeticiones.",
      "how_repeater_3": "3. Elige un separador.",
      "how_repeater_4": "4. Copia el resultado.",
      "reverser_desc": "Invierte tu texto al instante.",
      "how_reverser_1": "1. Introduce tu texto.",
      "how_reverser_2": "2. Selecciona 'Invertir texto entero' para invertir caracteres.",
      "how_reverser_3": "3. Selecciona 'Invertir orden de palabras' para invertir palabras.",
      "case_desc": "Convierte texto entre mayúsculas y minúsculas.",
      "how_case_1": "1. Introduce tu texto.",
      "how_case_2": "2. Haz clic en el formato deseado.",
      "how_case_3": "3. El texto se transformará automáticamente.",
      "word_desc": "Estadísticas en tiempo real.",
      "how_word_1": "1. Pega cualquier texto.",
      "how_word_2": "2. Mira el conteo en tiempo real.",
      "fancy_desc": "Convierte texto a estilos Unicode geniales.",
      "how_fancy_1": "1. Escribe texto.",
      "how_fancy_2": "2. Genera variantes.",
      "how_fancy_3": "3. Copia el estilo que prefieras."
    }
  },
  fr: {
    translation: {
      "app_name": "Répéteur de Texte",
      "how_it_works": "Comment ça marche",
      "nav_repeater": "Répéteur",
      "nav_reverser": "Inverseur",
      "source_text": "Texte source",
      "result_output": "Résultat",
      "btn_paste": "Coller", "btn_copy": "Copier", "btn_clear": "Effacer", "copied": "Copié !"
    }
  },
  de: {
    translation: {
      "app_name": "Text-Wiederholer",
      "how_it_works": "Wie es funktioniert",
      "nav_repeater": "Wiederholer",
      "source_text": "Quelltext",
      "result_output": "Ergebnis",
      "btn_paste": "Einfügen", "btn_copy": "Kopieren", "btn_clear": "Löschen", "copied": "Kopiert!"
    }
  },
  zh: {
    translation: {
      "app_name": "文本中继器",
      "nav_repeater": "中继器",
      "nav_reverser": "反转器",
      "how_it_works": "怎么运行的",
      "source_text": "源文本",
      "result_output": "输出结果",
      "btn_paste": "粘贴", "btn_copy": "复制", "btn_clear": "清除", "copied": "已复制!"
    }
  },
  ja: {
    translation: {
      "app_name": "テキストリピーター",
      "how_it_works": "使い方",
      "source_text": "元のテキスト",
      "result_output": "結果",
      "btn_paste": "貼り付け", "btn_copy": "コピー", "btn_clear": "クリア", "copied": "コピーしました!"
    }
  },
  pt: {
    translation: {
      "app_name": "Repetidor de Texto",
      "how_it_works": "Como funciona",
      "source_text": "Texto Fonte",
      "result_output": "Resultado",
      "btn_paste": "Colar", "btn_copy": "Copiar", "btn_clear": "Limpar", "copied": "Copiado!"
    }
  },
  ru: {
    translation: {
      "app_name": "Повторитель текста",
      "how_it_works": "Как это работает",
      "source_text": "Исходный текст",
      "result_output": "Результат",
      "btn_paste": "Вставить", "btn_copy": "Копировать", "btn_clear": "Очистить", "copied": "Скопировано!"
    }
  },
  ar: {
    translation: {
      "app_name": "مكرر النص",
      "how_it_works": "كيف يعمل",
      "source_text": "النص المصدر",
      "result_output": "النتيجة",
      "btn_paste": "لصق", "btn_copy": "نسخ", "btn_clear": "مسح", "copied": "منسوخ!"
    }
  },
  ko: {
    translation: {
      "app_name": "텍스트 반복기",
      "how_it_works": "작동 방식",
      "source_text": "원본 텍스트",
      "result_output": "결과",
      "btn_paste": "붙여넣기", "btn_copy": "복사", "btn_clear": "지우기", "copied": "복사됨!"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
