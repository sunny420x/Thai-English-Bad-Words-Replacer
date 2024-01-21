function DetectBadWord(text) {
    thai_badwords = new RegExp(/(?!หีบ|สัสดี)\B(ไอ้|มึง|กู|เหี้ย|สัส|ควย|หี|ควาย|กระหรี่|ตาย|ฆ่า|ห่า|เย็ด)\B/gm)
    english_badwords = new RegExp(/(Fuck|Bitch|Shit|Asshole|Bastard|Bullshit|Pussy|Dick|Kill|Motherfucker|Nigga|Nigger|Twat|Whore|Wanker|Slut|Blowjob|Retard)/gmi)
    text = text.replace(thai_badwords, "****")
    text = text.replace(english_badwords, "****")
    return text
}