export const navigation = [
  {
    text: "系统设置",
    //path: '/admin/rbac',
    icon: "preferences",
    items: [
      { text: "组织管理", path: "/rcxh/admin/page/Wings.Projects.Rcxh.DVO.Rbac.OrgManage", icon: "group" },
      { text: "用户管理", path: "/rcxh/admin/page/Wings.Projects.Rcxh.DVO.Rbac.UserManage", icon: 'user' },
      { text: "菜单管理", path: "/rcxh/admin/page/Wings.Projects.Rcxh.DVO.Rbac.MenuManage", icon: "menu" },
      { text: "角色管理", path: "/rcxh/admin/page/Wings.Projects.Rcxh.DVO.Rbac.RoleManage", icon: 'card' },
    ]

  },
  {
    text: "代办",
    icon: "home",
    items: [
      { text: "项目经理申请", path: "/admin/task/verify-project-manage-apply" },
      { text: "分类", path: "/admin/blog/post-cate" },
      { text: "标签", path: "/admin/blog/post-tag" }
    ]
  }




];
