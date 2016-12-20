var globalList = []

var appItem = {
  aId: '',
  name: 'Outlook',
  description: 'Outlook Description',
  category: 'general',
  imgUrl: '/abc/abc/img1.png',
  isDefaultApp: false,
  url: 'https://mail.google.com'
}

for (var i = 0; i < 30; i++) {
  globalList.push(JSON.parse(JSON.stringify(appItem))) // copy item and push to array
  globalList[i].name = globalList[i].name + i
  globalList[i].aId = 1000 + i
  globalList[i].category = globalList[i].category + i % 6
}

globalList[3].isDefaultApp = true
globalList[6].isDefaultApp = true
globalList[9].isDefaultApp = true
globalList[12].isDefaultApp = true
globalList[15].isDefaultApp = true
globalList[18].isDefaultApp = true

module.exports = globalList
