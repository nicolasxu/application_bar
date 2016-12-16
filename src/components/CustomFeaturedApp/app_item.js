var appBarItem = {
  name: 'Outlook',
  imgUrl: '/abc/abc/img.png',
  isDefaultApp: true,
  link:'https://gmail.com'
}

var nhAppBarGlobalData = {
  dataArr: [appBarItem, appBarItem],
  visitTypeId: '322323',
  visitTypeName: 'Nurse Department'
}

// unlimited, received from server side

var nh_featured_app_list = [appBarItem]; // 6 max

var local_app_store = {
  typeId: '33333',
  featuredApps: []
}