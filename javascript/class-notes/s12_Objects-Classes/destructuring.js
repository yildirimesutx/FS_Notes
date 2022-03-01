//  Destructuring:
let settings = {
    userName :"loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "clarusway.com",
};

// console.log(settings) 

// console.log(userName) bu şekilde içerideki property i çağıramadık
 
// object içindeki blgilerin tek seferde çıkarılması

// let newName = settings.userName
// console.log(newName) tek olarak ulaştık

// let {userName, password, isActive, ip, serverName} = settings
// console.log(settings)   
// console.log(userName)

// let {userName: newUser, password:pass, isActive, ip, serverName} = settings  keylerin isimlerini bu şekilde değiştirebiliyoruz

// console.log(newUser,pass, isActive, ip, serverName)
// console.log(settings)

// console.log(newUser)

// console.log(pass)


// object içindeki bazı bilgilerin çıkarılması

// let {userName: userName2, password:password2, isActive: isActive2,  ...newSettigns} = settings

// console.log(userName2, password2, isActive2, newSettigns)

// console.log(newSettigns)

// object destructuring ile kopyalanması

let settings2 = {...settings }

settings2.userName = "Değişen Bilgi"
console.log("settings", settings)
console.log("settings2", settings2)

let score = [100, 200 , 300, 400]

let [score1, score2, ...otherScore] = score

console.log(score1, score2, otherScore)


// object kopyalama ile aynı
let copyOfScore = [...score]

console.log(copyOfScore)


// https://medium.com/@emrahday/javascriptde-destructuring-hikayesi-bf5884ed1fa5

