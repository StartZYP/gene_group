/*
 * @Author: StartZyp
 * @Date: 2024-10-14 13:15:44
 * @LastEditors: StartZyp
 * @LastEditTime: 2024-10-14 13:17:47
 * @FilePath: /gene_group/settings/navigation.tsx
 * 
 * Copyright (c) 2024 by StartZyp/Reddrip, All Rights Reserved. 
 */
import { PageRoutes } from "@/lib/pageroutes";

export const Navigations = [
  {
    title: "插件列表",
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: "项目主页",
    href: "https://www.baidu.com/",
    external: true,
  },
  {
    title: "项目进度",
    href: "https://www.baidu.com/",
    external: true,
  }
];

export const GitHubLink = {
  href: "https://www.baidu.com/",
};