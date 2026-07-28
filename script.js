// ==============================
// 英検5級 Balloon Quest
// 100語の単語データ
// ==============================


const questions = [
  
  { word: "abandon", answer: "捨てる", ruby: "すてる", type: "verb" },
  { word: "ability", answer: "能力", ruby: "のうりょく", type: "noun" },
  { word: "absence", answer: "不在", ruby: "ふざい", type: "noun" },
  { word: "priority", answer: "優先", ruby: "ゆうせん", type: "noun" },
  { word: "absorb", answer: "吸収する", ruby: "きゅうしゅうする", type: "verb" },
  { word: "accept", answer: "受け入れる", ruby: "うけいれる", type: "verb" },
  { word: "accidentally", answer: "偶然に", ruby: "ぐうぜんに", type: "adverb" },
  { word: "accomplish", answer: "達成する", ruby: "たっせいする", type: "verb" },
  { word: "accurate", answer: "正確な", ruby: "せいかくな", type: "adjective" },
  { word: "achieve", answer: "成し遂げる", ruby: "なしとげる", type: "verb" },
  { word: "activity", answer: "活動", ruby: "かつどう", type: "noun" },
  { word: "admire", answer: "感心する", ruby: "かんしんする", type: "verb" },
  { word: "admit", answer: "認める", ruby: "みとめる", type: "verb" },
  { word: "adopt", answer: "採用する", ruby: "さいようする", type: "verb" },
  { word: "advantage", answer: "有利な点", ruby: "ゆうりなてん", type: "noun" },
  { word: "advertise", answer: "宣伝する", ruby: "せんでんする", type: "verb" },
  { word: "affect", answer: "影響を与える", ruby: "えいきょうをあたえる", type: "verb" },
  { word: "afford", answer: "余裕がある", ruby: "よゆうがある", type: "verb" },
  { word: "agreement", answer: "合意", ruby: "ごうい", type: "noun" },
  { word: "agriculture", answer: "農業", ruby: "のうぎょう", type: "noun" },
  { word: "aim", answer: "目指す", ruby: "めざす", type: "verb" },
  { word: "alert", answer: "警告", ruby: "けいこく", type: "noun" },
  { word: "allowance", answer: "小遣い", ruby: "こづかい", type: "noun" },
  { word: "alter", answer: "変える", ruby: "かえる", type: "verb" },
  { word: "alternative", answer: "代わり", ruby: "かわり", type: "noun" },
  { word: "ambition", answer: "野心", ruby: "やしん", type: "noun" },
  { word: "amount", answer: "量", ruby: "りょう", type: "noun" },
  { word: "ancient", answer: "古代の", ruby: "こだいの", type: "adjective" },
  { word: "annoy", answer: "いらいらさせる", ruby: "いらいらさせる", type: "verb" },
  { word: "anxious", answer: "心配して", ruby: "しんぱいして", type: "adjective" },
  { word: "apologize", answer: "謝る", ruby: "あやまる", type: "verb" },
  { word: "apparent", answer: "明らかな", ruby: "あきらかな", type: "adjective" },
  { word: "appeal", answer: "訴える", ruby: "うったえる", type: "verb" },
  { word: "applicant", answer: "応募者", ruby: "おうぼしゃ", type: "noun" },
  { word: "appoint", answer: "任命する", ruby: "にんめいする", type: "verb" },
  { word: "appreciate", answer: "感謝する", ruby: "かんしゃする", type: "verb" },
  { word: "approach", answer: "近づく", ruby: "ちかづく", type: "verb" },
  { word: "approve", answer: "承認する", ruby: "しょうにんする", type: "verb" },
  { word: "architect", answer: "建築家", ruby: "けんちくか", type: "noun" },
  { word: "argument", answer: "議論", ruby: "ぎろん", type: "noun" },
  { word: "arrange", answer: "手配する", ruby: "てはいする", type: "verb" },
  { word: "artifact", answer: "工芸品", ruby: "こうげいひん", type: "noun" },
  { word: "artificial", answer: "人工の", ruby: "じんこうの", type: "adjective" },
  { word: "ashamed", answer: "恥じて", ruby: "はじて", type: "adjective" },
  { word: "aspect", answer: "側面", ruby: "そくめん", type: "noun" },
  { word: "assign", answer: "割り当てる", ruby: "わりあてる", type: "verb" },
  { word: "assist", answer: "手伝う", ruby: "てつだう", type: "verb" },
  { word: "associate", answer: "連想する", ruby: "れんそうする", type: "verb" },
  { word: "assume", answer: "仮定する", ruby: "かていする", type: "verb" },
  { word: "assure", answer: "保証する", ruby: "ほしょうする", type: "verb" },
  { word: "attach", answer: "取り付ける", ruby: "とりつける", type: "verb" },
  { word: "attempt", answer: "試みる", ruby: "こころみる", type: "verb" },
  { word: "attend", answer: "出席する", ruby: "しゅっせきする", type: "verb" },
  { word: "attitude", answer: "態度", ruby: "たいど", type: "noun" },
  { word: "attract", answer: "引きつける", ruby: "ひきつける", type: "verb" },
  { word: "audience", answer: "観客", ruby: "かんきゃく", type: "noun" },
  { word: "author", answer: "著者", ruby: "ちょしゃ", type: "noun" },
  { word: "authority", answer: "権威", ruby: "けんい", type: "noun" },
  { word: "available", answer: "利用可能", ruby: "りようかのう", type: "adjective" },
  { word: "avoid", answer: "避ける", ruby: "さける", type: "verb" },
  { word: "award", answer: "賞", ruby: "しょう", type: "noun" },
  { word: "aware", answer: "気づいて", ruby: "きづいて", type: "adjective" },
  { word: "background", answer: "背景", ruby: "はいけい", type: "noun" },
  { word: "behavior", answer: "行動", ruby: "こうどう", type: "noun" },
  { word: "belief", answer: "信仰", ruby: "しんこう", type: "noun" },
  { word: "benefit", answer: "利益", ruby: "りえき", type: "noun" },
  { word: "border", answer: "国境", ruby: "こっきょう", type: "noun" },
  { word: "bother", answer: "悩ます", ruby: "なやます", type: "verb" },
  { word: "brief", answer: "短時間の", ruby: "たんじかんの", type: "adjective" },
  { word: "broad", answer: "広い", ruby: "ひろい", type: "adjective" },
  { word: "budget", answer: "予算", ruby: "よさん", type: "noun" },
  { word: "burden", answer: "重荷", ruby: "おもに", type: "noun" },
  { word: "calculate", answer: "計算する", ruby: "けいさんする", type: "verb" },
  { word: "cancel", answer: "取り消す", ruby: "とりけす", type: "verb" },
  { word: "candidate", answer: "候補者", ruby: "こうほしゃ", type: "noun" },
  { word: "capacity", answer: "能力", ruby: "のうりょく", type: "noun" },
  { word: "cause", answer: "引き起こす", ruby: "ひきおこす", type: "verb" },
  { word: "cautious", answer: "慎重な", ruby: "しんちょうな", type: "adjective" },
  { word: "celebrate", answer: "祝う", ruby: "いわう", type: "verb" },
  { word: "ceremony", answer: "式典", ruby: "しきてん", type: "noun" },
  { word: "certainly", answer: "確実", ruby: "たしかに", type: "adverb" },
  { word: "challenge", answer: "挑戦", ruby: "ちょうせん", type: "noun" },
  { word: "character", answer: "性格", ruby: "せいかく", type: "noun" },
  { word: "charity", answer: "慈善事業", ruby: "じぜんじぎょう", type: "noun" },
  { word: "chemical", answer: "化学物質", ruby: "かがくぶっしつ", type: "noun" },
  { word: "climate", answer: "気候", ruby: "きこう", type: "noun" },
  { word: "combine", answer: "組み合わせる", ruby: "くみあわせる", type: "verb" },
  { word: "comfortable", answer: "快適な", ruby: "かいてきな", type: "adjective" },
  { word: "command", answer: "命令する", ruby: "めいれいする", type: "verb" },
  { word: "commercial", answer: "商業の", ruby: "しょうぎょうの", type: "adjective" },
  { word: "commit", answer: "犯す", ruby: "おかす", type: "verb" },
  { word: "committee", answer: "委員会", ruby: "いいんかい", type: "noun" },
  { word: "common", answer: "共通の", ruby: "きょうつうの", type: "adjective" },
  { word: "community", answer: "地域社会", ruby: "ちいきしゃかい", type: "noun" },
  { word: "companion", answer: "仲間", ruby: "なかま", type: "noun" },
  { word: "company", answer: "会社", ruby: "かいしゃ", type: "noun" },
  { word: "compare", answer: "比較する", ruby: "ひかくする", type: "verb" },
  { word: "compete", answer: "競い合う", ruby: "きそいあう", type: "verb" },
  { word: "complain", answer: "不平を言う", ruby: "ふへいをいう", type: "verb" },
  { word: "complex", answer: "複雑な", ruby: "ふくざつな", type: "adjective" },
  { word: "concentrate", answer: "集中する", ruby: "しゅうちゅうする", type: "verb" },
  { word: "concern", answer: "懸念", ruby: "けねん", type: "noun" },
  { word: "conclude", answer: "結論づける", ruby: "けつろんづける", type: "verb" },
  { word: "condition", answer: "状態", ruby: "じょうたい", type: "noun" },
  { word: "conduct", answer: "実施する", ruby: "じっしする", type: "verb" },
  { word: "confident", answer: "自信がある", ruby: "じしんがある", type: "adjective" },
  { word: "confirm", answer: "確認する", ruby: "かくにんする", type: "verb" },
  { word: "confuse", answer: "混乱させる", ruby: "こんらんさせる", type: "verb" },
  { word: "congratulate", answer: "祝う", ruby: "いわう", type: "verb" },
  { word: "connect", answer: "つなぐ", ruby: "つなぐ", type: "verb" },
  { word: "conscious", answer: "意識している", ruby: "いしきしている", type: "adjective" },
  { word: "consequence", answer: "結果", ruby: "けっか", type: "noun" },
  { word: "consider", answer: "考慮する", ruby: "こうりょする", type: "verb" },
  { word: "considerable", answer: "かなりの", ruby: "かなりの", type: "adjective" },
  { word: "consist", answer: "構成される", ruby: "こうせいされる", type: "verb" },
  { word: "constant", answer: "絶え間ない", ruby: "たえまない", type: "adjective" },
  { word: "construct", answer: "建設する", ruby: "けんせつする", type: "verb" },
  { word: "consume", answer: "消費する", ruby: "しょうひする", type: "verb" },
  { word: "contain", answer: "含む", ruby: "ふくむ", type: "verb" },
  { word: "content", answer: "満足して", ruby: "まんぞくして", type: "adjective" },
  { word: "continue", answer: "続ける", ruby: "つづける", type: "verb" },
  { word: "contribute", answer: "貢献する", ruby: "こうけんする", type: "verb" },
  { word: "convenient", answer: "便利な", ruby: "べんりな", type: "adjective" },
  { word: "convince", answer: "納得させる", ruby: "なっとくさせる", type: "verb" },
  { word: "cooperate", answer: "協力する", ruby: "きょうりょくする", type: "verb" },
  { word: "courage", answer: "勇気", ruby: "ゆうき", type: "noun" },
  { word: "create", answer: "創り出す", ruby: "つくりだす", type: "verb" },
  { word: "crucial", answer: "決定的な", ruby: "けっていてきな", type: "adjective" },
  { word: "cultural", answer: "文化の", ruby: "ぶんかの", type: "adjective" },
  { word: "cure", answer: "治療する", ruby: "ちりょうする", type: "verb" },
  { word: "curious", answer: "好奇心が強い", ruby: "こうきしんがつよい", type: "adjective" },
  { word: "currently", answer: "現在は", ruby: "げんざいは", type: "adverb" },
  { word: "damage", answer: "損害", ruby: "そんがい", type: "noun" },
  { word: "decade", answer: "10年間", ruby: "じゅうねんかん", type: "noun" },
  { word: "decline", answer: "減少する", ruby: "げんしょうする", type: "verb" },
  { word: "decrease", answer: "減る", ruby: "へる", type: "verb" },
  { word: "defeat", answer: "打ち負かす", ruby: "うちまかす", type: "verb" },
  { word: "defend", answer: "防衛する", ruby: "ぼうえいする", type: "verb" },
  { word: "definite", answer: "明確な", ruby: "めいかくな", type: "adjective" },
  { word: "delay", answer: "遅らせる", ruby: "おくらせる", type: "verb" },
  { word: "delicate", answer: "繊細な", ruby: "せんさいな", type: "adjective" },
  { word: "delighted", answer: "大喜びした", ruby: "おおよろこびした", type: "adjective" },
  { word: "deliver", answer: "配達する", ruby: "はいたつする", type: "verb" },
  { word: "demand", answer: "要求する", ruby: "ようきゅうする", type: "verb" },
  { word: "deny", answer: "否定する", ruby: "ひていする", type: "verb" },
  { word: "depend", answer: "依存する", ruby: "いぞんする", type: "verb" },
  { word: "deposit", answer: "預金する", ruby: "よきんする", type: "verb" },
  { word: "describe", answer: "描写する", ruby: "びょうしゃする", type: "verb" },
  { word: "deserve", answer: "値する", ruby: "あたいする", type: "verb" },
  { word: "desire", answer: "望む", ruby: "のぞむ", type: "verb" },
  { word: "desperate", answer: "必死の", ruby: "ひっしの", type: "adjective" },
  { word: "despite", answer: "にもかかわらず", ruby: "", type: "preposition" },
  { word: "destroy", answer: "破壊する", ruby: "はかいする", type: "verb" },
  { word: "detail", answer: "詳細", ruby: "しょうさい", type: "noun" },
  { word: "determine", answer: "決定する", ruby: "けっていする", type: "verb" },
  { word: "develop", answer: "発達する", ruby: "はったつする", type: "verb" },
  { word: "device", answer: "装置", ruby: "そうち", type: "noun" },
  { word: "disappear", answer: "消える", ruby: "きえる", type: "verb" },
  { word: "disappoint", answer: "失望させる", ruby: "しつぼうさせる", type: "verb" },
  { word: "disaster", answer: "災害", ruby: "さいがい", type: "noun" },
  { word: "discover", answer: "発見する", ruby: "はっけんする", type: "verb" },
  { word: "discuss", answer: "議論する", ruby: "ぎろんする", type: "verb" },
  { word: "disease", answer: "病気", ruby: "びょうき", type: "noun" },
  { word: "dismiss", answer: "解雇する", ruby: "かいこする", type: "verb" },
  { word: "display", answer: "展示する", ruby: "てんじする", type: "verb" },
  { word: "distant", answer: "遠い", ruby: "とおい", type: "adjective" },
  { word: "distribute", answer: "分配する", ruby: "ぶんぱいする", type: "verb" },
  { word: "district", answer: "地区", ruby: "ちく", type: "noun" },
  { word: "disturb", answer: "邪魔する", ruby: "じゃまする", type: "verb" },
  { word: "donate", answer: "寄付する", ruby: "きふする", type: "verb" },
  { word: "dramatically", answer: "劇的に", ruby: "げきてきに", type: "adverb" },
  { word: "dull", answer: "退屈な", ruby: "たいくつな", type: "adjective" },
  { word: "eager", answer: "熱望して", ruby: "ねつぼうして", type: "adjective" },
  { word: "earn", answer: "稼ぐ", ruby: "かせぐ", type: "verb" },
  { word: "economy", answer: "経済", ruby: "けいざい", type: "noun" },
  { word: "edge", answer: "端", ruby: "はし", type: "noun" },
  { word: "educate", answer: "教育する", ruby: "きょういくする", type: "verb" },
  { word: "effective", answer: "効果的な", ruby: "こうかてきな", type: "adjective" },
  { word: "efficient", answer: "効率的な", ruby: "こうりつてきな", type: "adjective" },
  { word: "effort", answer: "努力", ruby: "どりょく", type: "noun" },
  { word: "elderly", answer: "年配の", ruby: "ねんぱいの", type: "adjective" },
  { word: "embarrass", answer: "恥ずかしい", ruby: "はずかしい", type: "verb" },
  { word: "emerge", answer: "現れる", ruby: "あらわれる", type: "verb" },
  { word: "emergency", answer: "緊急事態", ruby: "きんきゅうじたい", type: "noun" },
  { word: "emotion", answer: "感情", ruby: "かんじょう", type: "noun" },
  { word: "emphasize", answer: "強調する", ruby: "きょうちょうする", type: "verb" },
  { word: "employ", answer: "雇う", ruby: "やとう", type: "verb" },
  { word: "enable", answer: "可能にする", ruby: "かのうにする", type: "verb" },
  { word: "encourage", answer: "励ます", ruby: "はげます", type: "verb" },
  { word: "entire", answer: "全体の", ruby: "ぜんたいの", type: "adjective" },
  { word: "environment", answer: "環境", ruby: "かんきょう", type: "noun" },
  { word: "equipment", answer: "設備", ruby: "せつび", type: "noun" },
  { word: "essential", answer: "不可欠な", ruby: "ふかけつな", type: "adjective" },
  { word: "establish", answer: "設立する", ruby: "せつりつする", type: "verb" },
  { word: "estimate", answer: "見積もる", ruby: "みつもる", type: "verb" },
  { word: "eventually", answer: "結局は", ruby: "けっきょくは", type: "adverb" },
  { word: "evidence", answer: "証拠", ruby: "しょうこ", type: "noun" },
  { word: "exact", answer: "正確な", ruby: "せいかくな", type: "adjective" },
  { word: "examine", answer: "調査する", ruby: "ちょうさする", type: "verb" },
  { word: "excellent", answer: "素晴らしい", ruby: "すばらしい", type: "adjective" },
  { word: "exchange", answer: "交換する", ruby: "こうかんする", type: "verb" },
  { word: "executive", answer: "幹部", ruby: "かんぶ", type: "noun" },
  { word: "expand", answer: "拡大する", ruby: "かくだいする", type: "verb" },
  { word: "expect", answer: "予期する", ruby: "よきする", type: "verb" },
  { word: "expense", answer: "費用", ruby: "ひよう", type: "noun" },
  { word: "expensive", answer: "高価な", ruby: "こうかな", type: "adjective" },
  { word: "experience", answer: "経験", ruby: "けいけん", type: "noun" },
  { word: "experiment", answer: "実験", ruby: "じっけん", type: "noun" },
  { word: "expert", answer: "専門家", ruby: "せんもんか", type: "noun" },
  { word: "explain", answer: "説明する", ruby: "せつめいする", type: "verb" },
  { word: "explore", answer: "探検する", ruby: "たんけんする", type: "verb" },
  { word: "export", answer: "輸出する", ruby: "ゆしゅつする", type: "verb" },
  { word: "express", answer: "表現する", ruby: "ひょうげんする", type: "verb" },
  { word: "extend", answer: "延長する", ruby: "えんちょうする", type: "verb" },
  { word: "extraordinary", answer: "並外れた", ruby: "なみはずれた", type: "adjective" },
  { word: "extreme", answer: "極端な", ruby: "きょくたんな", type: "adjective" },
  { word: "facility", answer: "施設", ruby: "しせつ", type: "noun" },
  { word: "failure", answer: "失敗", ruby: "しっぱい", type: "noun" },
  { word: "familiar", answer: "よく知られた", ruby: "よくしられた", type: "adjective" },
  { word: "fascinating", answer: "魅力的な", ruby: "みりょくてきな", type: "adjective" },
  { word: "fault", answer: "責任", ruby: "せきにん", type: "noun" },
  { word: "favorable", answer: "好都合な", ruby: "こうつごうな", type: "adjective" },
  { word: "feature", answer: "特徴", ruby: "とくちょう", type: "noun" },
  { word: "figure", answer: "数字", ruby: "すうじ", type: "noun" },
  { word: "financial", answer: "財政の", ruby: "ざいせいの", type: "adjective" },
  { word: "flexible", answer: "柔軟な", ruby: "じゅうなんな", type: "adjective" },
  { word: "flour", answer: "小麦粉", ruby: "こむぎこ", type: "noun" },
  { word: "fluently", answer: "流暢に", ruby: "りゅうちょうに", type: "adverb" },
  { word: "forecast", answer: "予測する", ruby: "よそくする", type: "verb" },
  { word: "foreign", answer: "外国の", ruby: "がいこくの", type: "adjective" },
  { word: "formal", answer: "正式な", ruby: "せいしきな", type: "adjective" },
  { word: "former", answer: "前の", ruby: "まえの", type: "adjective" },
  { word: "fortunate", answer: "幸運な", ruby: "こううんな", type: "adjective" },
  { word: "foundation", answer: "基礎", ruby: "きそ", type: "noun" },
  { word: "frequent", answer: "頻繁な", ruby: "ひんぱんな", type: "adjective" },
  { word: "frighten", answer: "怯えさせる", ruby: "おびえさせる", type: "verb" },
  { word: "fuel", answer: "燃料", ruby: "ねんりょう", type: "noun" },
  { word: "fulfill", answer: "果たす", ruby: "はたす", type: "verb" },
  { word: "function", answer: "機能", ruby: "きのう", type: "noun" },
  { word: "fundamental", answer: "基本的な", ruby: "きほんてきな", type: "adjective" },
  { word: "furniture", answer: "家具", ruby: "かぐ", type: "noun" },
  { word: "further", answer: "さらなる", ruby: "さらなる", type: "adjective" },
  { word: "gather", answer: "集める", ruby: "あつめる", type: "verb" },
  { word: "generous", answer: "気前の良い", ruby: "きまえのよい", type: "adjective" },
  { word: "gentle", answer: "優しい", ruby: "やさしい", type: "adjective" },
  { word: "genuine", answer: "本物の", ruby: "ほんものの", type: "adjective" },
  { word: "gradual", answer: "徐々の", ruby: "じょじょの", type: "adjective" },
  { word: "grant", answer: "与える", ruby: "あたえる", type: "verb" },
  { word: "guarantee", answer: "保証する", ruby: "ほしょうする", type: "verb" },
  { word: "hesitate", answer: "躊躇する", ruby: "ちゅうちょする", type: "verb" }
];

// ==============================
// ゲーム設定
// ==============================

let score = 0;
let lives = 3;
let currentQuestion = null;
let usedWords = [];
let gameFinished = false;

// HTMLの部品を見つける
const wordElement =
  document.querySelector("#word") ||
  document.querySelector("#english-word");

const scoreElement =
  document.querySelector("#score");

const livesElement =
  document.querySelector("#lives");

const resultElement =
  document.querySelector("#result") ||
  document.querySelector("#message");

const speakButton =
  document.querySelector("#speak-button") ||
  document.querySelector("#speak-btn") ||
  document.querySelector("#pronunciation-button") ||
  document.querySelector(".speak-button") ||
  document.querySelector(".speak-btn") ||
  [...document.querySelectorAll("button")].find(button =>
    button.textContent.includes("発音")
  );

let answerButtons = document.querySelectorAll(
  "button.balloon, .answer-btn, .choice"
);

// 上の方法で見つからなかった場合
if (answerButtons.length === 0) {
  answerButtons = document.querySelectorAll("#answers button");
}
let popAudioContext;
const popSound = new Audio("pop.mp3.mp3");
const wrongSound = new Audio("wrong.mp3.mp3");
const clearSound = new Audio("clear.mp3.mp3");
function playPopSound() {
  popSound.currentTime = 0;
  popSound.play();
}

function playWrongSound() {
  wrongSound.currentTime = 0;
  wrongSound.play();
}

function playClearSound() {
  clearSound.currentTime = 0;
  clearSound.play();
}
// ==============================
// 配列をランダムに並べ替える
// ==============================

function shuffle(array) {
  const copiedArray = [...array];

  for (let i = copiedArray.length - 1; i > 0; i--) {
    const randomNumber = Math.floor(Math.random() * (i + 1));

    [copiedArray[i], copiedArray[randomNumber]] =
      [copiedArray[randomNumber], copiedArray[i]];
  }

  return copiedArray;
}

// ==============================
// 次の問題を選ぶ
// ==============================

function getNextQuestion() {
  let availableQuestions = questions.filter(
    question => !usedWords.includes(question.word)
  );

  // 100語すべて出題したら、最初から使えるようにする
  if (availableQuestions.length === 0) {
    usedWords = [];
    availableQuestions = [...questions];
  }

  const randomIndex = Math.floor(
    Math.random() * availableQuestions.length
  );

  const selectedQuestion = availableQuestions[randomIndex];

  usedWords.push(selectedQuestion.word);

  return selectedQuestion;
}

// ==============================
// 4つの選択肢を自動で作る
// ==============================

function makeChoices(question) {
  // 正解と同じ品詞の単語を使う
  const sameTypeQuestions = questions.filter(item =>
    item.type === question.type &&
    item.word !== question.word &&
    item.answer !== question.answer
  );

  const wrongAnswers = shuffle(sameTypeQuestions)
    .slice(0, 3)
    .map(item => item.answer);

  const choices = [question.answer, ...wrongAnswers];

  return shuffle(choices);
}

// ==============================
// 問題を表示する
// ==============================

function showQuestion() {
  if (gameFinished) {
    return;
  }

  currentQuestion = getNextQuestion();
  const choices = makeChoices(currentQuestion);

  wordElement.textContent = currentQuestion.word;
  resultElement.textContent = "";

  answerButtons.forEach((button, index) => {
        const item = questions.find(q => q.answer === choices[index]);

if (item && item.ruby) {
    button.innerHTML = `<ruby>${item.answer}<rt>${item.ruby}</rt></ruby>`;

    } else {
    button.textContent = choices[index];
}

button.dataset.answer = choices[index];

button.disabled = false;

    // 前の問題の色を元に戻す
    
button.classList.remove("correct-answer");
button.classList.remove("wrong-answer");
button.classList.remove("pop-animation");
  });

  updateDisplay();
}

// ==============================
// 答えを確認する
// ==============================

function checkAnswer(event) {
  if (gameFinished) {
    return;
  }

  const selectedButton = event.currentTarget;
  const selectedAnswer = selectedButton.dataset.answer;

  if (selectedAnswer === currentQuestion.answer) {
    score++;
playPopSound();
    resultElement.textContent = "せいかい！🎉";
    selectedButton.classList.add("correct-answer");
    selectedButton.animate(
    [
        { scale: 1, opacity: 1 },
        { scale: 1.3, opacity: 1, offset: 0.35 },
        { scale: 0.6, opacity: 0.5, offset: 0.7 },
        { scale: 0, opacity: 0 }
    ],
    {
        duration: 700,
        easing: "ease-out",
        fill: "none"
    }
);
    answerButtons.forEach(button => {
      button.disabled = true;
    });

    updateDisplay();

    // 10問正解でクリア
    if (score >= 10) {
      clearGame();
      return;
    }

    setTimeout(showQuestion, 900);
  } else {
    lives--;
    playWrongSound();
    resultElement.textContent = "おしい！もう一度考えてみよう";
    selectedButton.classList.add("wrong-answer");
    selectedButton.disabled = true;

    updateDisplay();

    if (lives <= 0) {
      gameOver();
    }
  }
}

// ==============================
// 得点とライフを表示する
// ==============================

function updateDisplay() {
  if (scoreElement) {
    scoreElement.textContent = `${score} / 10 点`;
  }

  if (livesElement) {
    livesElement.textContent = "❤️".repeat(lives);
  }
}

// ==============================
// 10問正解したとき
// ==============================

function clearGame() {
    playClearSound();
    gameFinished = true;

    wordElement.textContent = "CLEAR!";
    resultElement.textContent = "10問正解！おめでとう！";

    answerButtons.forEach(button => {
        button.disabled = true;
    });

    setTimeout(() => {
    const playAgain = confirm("🎉 CLEAR!\n\nもう一度遊びますか？");

    if (playAgain) {
        location.reload();
    } else {
        wordElement.textContent = "Thank you!";
        resultElement.textContent = "Thanks for playing Balloon Quest!";
    }
}, 3000);
}

// ==============================
// ライフがなくなったとき
// ==============================

function gameOver() {
  gameFinished = true;

  wordElement.textContent = "GAME OVER";
  resultElement.textContent = "もう一度挑戦してね！";

  answerButtons.forEach(button => {
    button.disabled = true;
  });

  // 少し待ってから自動で最初に戻る
  setTimeout(() => {
    score = 0;
    lives = 3;
    usedWords = [];
    gameFinished = false;
    showQuestion();
  }, 2000);
}

// ==============================
// 英単語を発音する
// ==============================

function speakWord() {
  if (!currentQuestion || gameFinished) {
    return;
  }

  if (!("speechSynthesis" in window)) {
    alert("このブラウザでは発音機能を利用できません。");
    return;
  }

  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(currentQuestion.word);
  speech.lang = "en-US";
  speech.rate = 0.75;
  speech.pitch = 1;

  setTimeout(() => {
    window.speechSynthesis.speak(speech);
  }, 100);
}

// ==============================
// ボタンを動かす
// ==============================

answerButtons.forEach(button => {
  button.addEventListener("click", checkAnswer);
});

if (speakButton) {
  speakButton.addEventListener("click", speakWord);
}

// 最初の問題を表示
showQuestion();
