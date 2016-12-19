var globalList = []

var appItem = {
  aId: '',
  name: 'Outlook',
  description: 'Outlook Description',
  category: 'general',
  imgUrl: '/abc/abc/img.png',
  isDefaultApp: false,
  link: 'https://gmail.com'
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
/*
var appBarGlobalData = {
  dataArr: [appBarItem, appBarItem],
  visitTypeId: '322323',
  visitTypeName: 'Nurse Department'
}

var local_app_store = {
  typeId: '33333',
  featuredApps: []
}
*/
