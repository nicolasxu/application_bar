var mockGlobalAppArr = require('./mockupData.js')

var cachedGlobalList = {}
module.exports = {
  saveLocalFeaturedApp: saveLocalFeaturedApp,
  getFeaturedApps: getFeaturedApps,
  getGlobalList: getGlobalList
}

function getGlobalList () {
  // This data is first passed from back-end, and
  // exist in global space
  cachedGlobalList = {
    dataArr: mockGlobalAppArr,
    visitTypeId: '322323',
    visitTypeName: 'Nurse Department'
  }
  return cachedGlobalList
}

function saveLocalFeaturedApp () {

}

function getFeaturedApps (visitTypeId) {
  /* if localstore exist,
   load from local storage,
   else
   load from global list,
  */
  var MAX_APP_COUNT = 6
  var localFeaturedApps = JSON.parse(localStorage.getItem(cachedGlobalList.visitTypeId))
  if (localFeaturedApps && localFeaturedApps.length > 0) {
    // use local storage data
    return localFeaturedApps.slice(0, MAX_APP_COUNT)
  } else {
    // get it from global list
    var tempArr = []
    cachedGlobalList.dataArr.forEach(function (app) {
      if (app.isDefaultApp === true) {
        tempArr.push(app)
      }
    })
    return tempArr.slice(0, MAX_APP_COUNT)
  }
}
