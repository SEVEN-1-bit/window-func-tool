const {
  GetSysListViewPosition,
  GetSysListViewIconRect,
  GetSysTaskbarState,
  ShowDesktopIcon,
  QueryUserState
} = require("./");

console.log(GetSysListViewPosition());
console.log(GetSysListViewIconRect());
console.log(GetSysTaskbarState());
console.log(ShowDesktopIcon());
console.log(QueryUserState());
