var appBarItem = {
  name: 'Outlook',
  imgUrl: '/abc/abc/img.png',
  isDefaultApp: true,
  link:'https://gmail.com'
}

var nh_app_bar_global_list = [appBarItem, appBarItem]; 
// unlimited, received from server side

var nh_featured_app_list = [appBarItem]; // 6 max

var local_app_store = {
  'routeId': [appBarItem,appBarItem]
}