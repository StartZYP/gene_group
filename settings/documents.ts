/*
 * @Author: StartZyp
 * @Date: 2024-10-14 13:10:12
 * @LastEditors: StartZyp
 * @LastEditTime: 2024-10-14 13:10:12
 * @FilePath: /gene_group/settings/documents.ts
 * 
 * Copyright (c) 2024 by StartZyp/Reddrip, All Rights Reserved. 
 */
import { Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
    {
      title: "PluginDoc",
      href: "/plugin_doc",
      heading: "宿命重载插件文档",
      items: [
          {
              title: "[数据同步]Gene_PlayerDataCache",
              href: "/Gene_PlayerDataCache",
          },
          {
              title: "[角色系统]Gene_Roles",
              href: "/Gene_Roles",
          },
          {
              title: "[组队模块]Gene_BungeeTeam",
              href: "/Gene_BungeeTeam",
          },
          {
              title: "[跨服模块]Gene_ServerMiddleSystem",
              href: "/Gene_ServerMiddleSystem",
          },
          {
              title: "[组队副本桥]Gene_DungeonBridgeTeam",
              href: "/Gene_DungeonBridgeTeam",
          },
          {
            title: "[背包模块]Gene_Inventory",
            href: "/Gene_Inventory",
          },
          {
              title: "[副本附属]Gene_Dplus",
              href: "/Gene_Dplus",
          },
          {
            title: "[物品管理模块]Gene_ItemPlant",
            href: "/Gene_ItemPlant",
          },
          {
              title: "[宝箱模块]Gene_TreasureBox",
              href: "/Gene_TreasureBox",
          },
          {
              title: "[角色模块]Gene_Roles",
              href: "/Gene_Roles",
          },
          {
              title: "[背包保持模块]Gene_KeepInventory",
              href: "/Gene_KeepInventory",
          },
          {
              title: "[扩展背包模块]Gene_Inventory",
              href: "/Gene_Inventory",
          },
          {
              title: "[黑市商店]GeneBlackMarket",
              href: "/GeneBlackMarket",
          },
      ],
    },
    {
        spacer: true,
    },
];