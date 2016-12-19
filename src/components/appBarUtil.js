var mockGlobalAppArr = require('./mockupData.js')

var cachedGlobalList = {}
var featuredApps = []

module.exports = {
  saveLocalFeaturedApp: saveLocalFeaturedApp,
  getFeaturedApps: getFeaturedApps,
  getGlobalListData: getGlobalListData,
  addFeatured: addFeatured,
  removeFeatured: removeFeatured
}

function getGlobalListData () {
  // This data is first passed from back-end, and
  // exist in global space
  cachedGlobalList = {
    dataArr: mockGlobalAppArr,
    visitTypeId: '322323',
    canEdit: true,
    visitTypeName: 'Nurse Department'
  }
  return cachedGlobalList
}

function saveLocalFeaturedApp () {
  localStorage.setItem(cachedGlobalList.visitTypeId, JSON.stringify(featuredApps))
}

function addFeatured (aId) {
  var MAX_APP_COUNT = 6
  if (featuredApps.length === MAX_APP_COUNT) {
    return
  }
  for (var i = 0; i < cachedGlobalList.dataArr.length; i++) {
    if (cachedGlobalList.dataArr[i].aId === aId) {
      featuredApps.push(cachedGlobalList.dataArr[i])
      saveLocalFeaturedApp()
      return
    }
  }
}

function removeFeatured (aId) {
  if (featuredApps.length === 0) {
    return
  }

  for (var i = 0; i < featuredApps.length; i++) {
    if (featuredApps[i].aId === aId) {
      featuredApps.splice(i, 1)
      saveLocalFeaturedApp()
      break
    }
  }
}

function getFeaturedApps (visitTypeId) {
  /* if localstore exist,
   load from local storage,
   else
   load from global list,
  */
  var MAX_APP_COUNT = 6
  if (featuredApps.length > 0) {
    return featuredApps
  }
  var localFeaturedApps = JSON.parse(localStorage.getItem(cachedGlobalList.visitTypeId))
  if (localFeaturedApps && localFeaturedApps.length > 0) {
    // use local storage data
    featuredApps = localFeaturedApps.slice(0, MAX_APP_COUNT)
    return featuredApps
  } else {
    // get it from global list
    var tempArr = []
    cachedGlobalList.dataArr.forEach(function (app) {
      if (app.isDefaultApp === true) {
        tempArr.push(app)
      }
    })
    featuredApps = tempArr.slice(0, MAX_APP_COUNT)
    localStorage.setItem(cachedGlobalList.visitTypeId, JSON.stringify(featuredApps))
    return featuredApps
  }
}
