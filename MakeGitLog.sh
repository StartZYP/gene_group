#!/bin/bash
###
 # @Author: StartZyp
 # @Date: 2024-10-21 23:19:39
 # @LastEditors: StartZyp
 # @LastEditTime: 2024-10-21 23:19:39
 # @FilePath: /gene_group/MakeGitLog.sh
 # 
 # Copyright (c) 2024 by StartZyp/Reddrip, All Rights Reserved. 
### 

# 检查是否提供了两个参数
if [ $# -ne 2 ]; then
  echo "用法: $0 <目录名> <文件路径>"
  exit 1
fi

# 定义目录和文件
dir="/data/gene_wiki/gene_group/contents/docs/plugin_doc/$1"
index_file="$dir/index.mdx"
log_file="$2"  # 文件路径作为第二个参数

# 检查目录是否存在
if [ -d "$dir" ]; then
  # 如果存在，读取 index.mdx 文件并替换工作日志部分
  new_log=""

  # 从指定的文件读取内容
  if [ -f "$log_file" ]; then
    log_content=$(cat "$log_file")
  else
    echo "指定的文件不存在: $log_file"
    exit 1
  fi

  new_log+="## 插件工作日志\n\n"
  new_log+="| 提交时间                              | 提交内容                                                                          |\n"
  new_log+="|--------------------------------------|---------------------------------------------------------------------------------|\n"
  new_log+="$log_content\n\n"
  new_log+="---\n"
  new_log+="**插件工作日志**\n"

  # 使用 perl 进行多行替换
  perl -i -pe 'BEGIN{undef $/;} s/## 插件工作日志.*?\*\*插件工作日志\*\*/'"$new_log"'/s' "$index_file"

  echo "索引文件已更新 $index_file"
else
  # 如果不存在，创建目录并写入 index.mdx
  mkdir -p "$dir"
  {
    echo "---"
    echo "title: $1"
    echo "description: $1 插件文档"
    echo 'keywords: ["navigation", "sidebar", "menus", "mdx", "nextjs", "documents"]'
    echo "---"
    echo ""
    echo "## 插件工作日志"
    echo ""
    echo "| 提交时间                              | 提交内容                                                                          |"
    echo "|--------------------------------------|---------------------------------------------------------------------------------|"
    
    # 从指定的文件读取内容
    if [ -f "$log_file" ]; then
      cat "$log_file"
    else
      echo "指定的文件不存在: $log_file"
      exit 1
    fi

    echo ""  # 添加换行
    echo "---"
    echo "**插件工作日志**"
  } > "$index_file"

  echo "索引文件已创建并写入 $index_file"
fi
