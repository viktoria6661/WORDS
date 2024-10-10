function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

let words = ['аб(о/А)жур', '(о/А)в(о/А)нгард', 'агр(О/а)ном', 'акк(О/а)мпанемент', 'акр(О/а)бат', '(А/о)льпинист', 'ан(Н)(О/а)тация', 'артил(Л)ерия', 'ар(О/а)мат', 'апл(О/а)дировать', 'багр(а/Я)ный', 'б(А/о)гряный', 'б(А/о)гровый', 'б(А/о)калея', 'б(А/о)ллада', 'б(А/о)лкон', 'б(А/о)ррикада', 'б(А/о)тарея', 'б(А/о)тальон', 'б(е/И)дон', 'б(Е/и)тон', 'б(а/О)йкот', 'б(а/О)рдюр', 'бр(а/О)ш(у/Ю)ра', 'в(А/о)кансия', 'в(и/Е)ранда', 'вет(и/Е)ран', 'в(и/Е)ница', 'в(и/Е)рнисаж', 'вест(И/е)бюль', 'ветч(е/И)на', 'в(е/И)н(Е/и)грет', 'викт(О/а)рина', 'в(е/И)трина', 'в(а/О)кзал', 'г(А/о)л(и/Е)рея', 'г(А/о)лант(Е/э)рея', 'г(А/о)рдероб', 'г(А/о)рмония', 'г(А/о)рнизон', 'ген(е/И)альный', 'г(Е/и)рбарий', 'г(Е/и)рань', 'г(Е/и)ен(Н)а (ад)', 'г(И/е)на (животное)', 'г(е/И)рлянда', 'дез(и/Е)ртир', 'д(Е/и)кл(о/А)мировать', 'дел(Е/и)гация', 'д(Е/и)сант', 'дем(а/О)нстрация', 'д(е/И)версия', 'д(е/И)зия', 'д(е/И)р(е/И)жер', 'дрес(С)(И/е)ровка', 'д(а/О)ск(О/а)нально', 'ид(Е/и)ал', 'ижд(И/е)венец', 'иллюм(И/е)нация', 'ин(Е/и)й', 'инж(и/Е)нер', 'инт(и/Е)ллект', 'интелл(е/И)гентный', 'инц(е/И)дент', 'ист(а/Я)зать', 'к(А/о)валерия', 'к(о/А)вычки', 'к(о/А)л(Л)играфия', 'к(о/А)мпания (мероприятние)', 'к(О/а)мпания (общество)', 'к9о/А)нонада', 'к(А/о)рикатура', 'к(О/а)ллектив', 'к(О/а)мод', 'к(О/а)мплимент', 'к(О/а)мп(О/а)зитор', 'к(а/О)нопляН(н)ик', 'к(О/а)нтрабанда', ' кр(а/О)потливый', 'лаб(И/е)ринт', 'лаб(О/а)ратория', 'лаз(о/А)рет', 'лак(О/а)ничный', 'л(о/А)уреат', 'л(А/о)чуга', 'леле(е/Я)ть', 'л(е/И)ловый', 'л(е/И)монад', 'л(е/И)нол(Е/и)ум', 'л(а/О)скут', 'л(О/а)терея', 'м(А/о)вз(а/О)лей', 'маг(е/И)страль', "м(о/А)нера", 'м(о/А)нифест', 'м(и/Е)муары', 'мер(е/И)диан', 'м(Е/и)ц(Е/и)нат', 'мини(о/А)тюра', 'м(а/О)раль' ] 
let vowels = 'уеыаоэяию'
let len = 0
let mistakes = []
let corect = []
words = shuffleArray(words)

for(i = 0; i < words.length; i++){
    console.log(words[i])
    let word = words[i]
    let word_div = document.createElement('div')
    word_div.className = 'word'
    word_div.id = String(i)
    document.getElementsByTagName('main')[0].append(word_div)

    for(j = 0; j < word.length; j++){
        let letter = word[j]
        let letter_obj = document.createElement('button')
        letter_obj.innerText = letter.toUpperCase()
        let id = String(i) + '_' + String(j)
        letter_obj.id = id


        if(letter == letter.toUpperCase()){
            letter_obj.className = 'stressed'
            letter_obj.addEventListener('click', () => correct(id))
        }else if(vowels.includes(letter)){
            letter_obj.className = 'vowel'
            letter_obj.addEventListener('click', () => incorrect(id))

        }
        
        document.getElementById(String(i)).append(letter_obj)
    }
}

function correct(id){
    word_id = id.split('_')[0]
    document.getElementById(id).style.backgroundColor = 'rgb(63, 229, 63)'
    if(mistakes.includes(word_id) == false && corect.includes(word_id) == false){
        corect.push(word_id)
        len += 1
        document.getElementById('mistakes_coun').innerText = 'Верно: ' + String(corect.length) + ' / ' + String(len)
    }
}

function incorrect(id){
    document.getElementById(id).style.backgroundColor = 'red'
    word_id = id.split('_')[0]
    if(mistakes.includes(word_id) == false && corect.includes(word_id) == false){
        mistakes.push(word_id)
        len += 1
        console.log(mistakes)
        document.getElementById('mistakes_coun').innerText = 'Верно: ' + String(corect.length) + ' / ' + String(len)
    }
    
}
