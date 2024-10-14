/*
 * @Author: StartZyp
 * @Date: 2024-10-14 12:45:24
 * @LastEditors: StartZyp
 * @LastEditTime: 2024-10-14 12:45:24
 * @FilePath: /gene_group/app/page.tsx
 * 
 * Copyright (c) 2024 by StartZyp/Reddrip, All Rights Reserved. 
 */
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { PageRoutes } from "@/lib/pageroutes";

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8">
      <h1 className="text-4xl font-bold mb-4 sm:text-7xl">
        宿命重载
      </h1>
      <p className="max-w-[600px] text-foreground mb-8 sm:text-base">
        Gene插件文档大全. 仅限内部团队成员使用&apos;.
      </p>
      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          快速开始
        </Link>
      </div>
    </div>
  );
}