---
title: Linux 常用命令
date: "2020-08-08"
sidebar: "auto"
coverImg: /blog/37.png
description: "Linux 常用命令"
---

# Linux 常用命令

:::tip
Linux 常用命令
:::

## 文件操作命令

### 目录操作

- `cd`：切换到指定目录。
- `pwd`：显示当前工作目录的路径。
- `ls [option] [dirname]`：列出指定目录下的文件和子目录，常用选项：

  - `-l`：使用详细列表模式显示文件信息。
  - `-a`：显示所有文件，包括隐藏文件。
  - `-h`：以人类可读的格式显示文件大小。
  - `-r`：反转排序顺序。
  - `-t`：按照修改时间排序。
  - `-R`：递归列出所有子目录下的文件和目录。

- `mkdir dirname`：创建新目录。
- `rmdir dirname`：删除空目录。
- `rm -rf dirname`：强制删除非空目录。

### 文件操作

- `cp sourcefile targetfile`：将源文件复制到目标文件。
- `mv sourcefile targetfile`：将源文件移动或重命名为目标文件。
- `rm filename`：删除指定文件。
- `touch filename`：创建新文件或更新文件的访问时间。
- `cat filename`：显示文件内容。
- `more filename`：分页显示文件内容。
- `less filename`：更高级的分页显示文件内容。
- `head -n filename`：显示文件前几行的内容。
- `tail -n filename`：显示文件后几行的内容。
- `grep pattern filename`：在文件中搜索指定模式。
- `sed 's/oldstring/newstring/g' filename`：替换文件中的字符串。
- `ln -s sourcefile targetfile`：创建软链接。

### 压缩和解压缩

- `tar -czvf filename.tar.gz dirname/`：将指定目录打包成 tar.gz 格式压缩文件。
- `tar -xzvf filename.tar.gz`：解压缩 tar.gz 格式压缩文件。
- `zip -r filename.zip dirname/`：将指定目录打包成 zip 格式压缩文件。
- `unzip filename.zip`：解压缩 zip 格式压缩文件。

## 系统管理命令

### 系统信息

- `uname -a`：显示当前系统的内核版本和其他基本信息。
- `cat /proc/cpuinfo`：显示 CPU 相关信息。
- `cat /proc/meminfo`：显示内存相关信息。
- `df -h`：显示磁盘空间使用情况。
- `free -m`：显示内存使用情况。

### 用户管理

- `useradd username`：添加新用户。
- `passwd username`：修改用户密码。
- `userdel username`：删除用户。
- `su username`：切换到指定用户身份。
- `whoami`：显示当前登录用户。

### 进程管理

- `ps aux`：显示所有进程的详细信息。
- `kill pid`：结束指定进程。
- `killall processname`：结束指定名称的所有进程。
- `top`：实时显示进程状态。
- `pstree`：以树形结构显示进程及其关系。

### 系统服务

- `systemctl start servicename`：启动系统服务。
- `systemctl stop servicename`：停止系统服务。
- `systemctl restart servicename`：重启系统服务。
- `systemctl enable servicename`：设置系统服务开机自启动。
- `systemctl disable servicename`：取消系统服务开机自启动。

### 系统更新

- `apt-get update`：更新软件包列表。
- `apt-get upgrade`：升级所有已安装的软件包。
- `apt-get dist-upgrade`：升级系统版本。

## 网络管理命令

### 网络配置

- `ifconfig`：显示网络接口信息。
- `ip addr show`：显示网络接口信息（替代 ifconfig）。
- `ping ipaddress`：测试是否能够 ping 通指定 IP 地址。
- `traceroute ipaddress`：显示到指定 IP 地址经过的路由节点。
- `netstat -an`：显示所有网络连接及其状态。
- `ss -ant`：显示所有 TCP 连接及其状态（替代 netstat）。
- `route -n`：显示当前系统的路由表。

### 网络工具

- `wget url`：下载指定 URL 的文件。
- `curl url`：以命令行方式访问指定 URL。
- `scp sourcefile targetuser@targethost:targetdir/`：将本地文件上传到远程主机。
- `ssh username@remotehost`：通过 SSH 协议登录远程主机。
- `ftp ftpserver`：通过 FTP 协议连接 FTP 服务器。

## Shell 编程命令

### Shell 基础

- `echo message`：输出指定消息。
- `read variable`：接收用户输入并赋值给变量。
- 变量：

  - 定义变量：`variable=value`
  - 使用变量：`$variable`

- 运算符：

  - 数值运算：`+`、`-`、`*`、`/`、`%`
  - 字符串运算：`=`、`!=`、`-z`（字符串长度为 0）、`-n`（字符串长度不为 0）
  - 比较运算：`-eq`（等于）、`-ne`（不等于）、`-lt`（小于）、`-gt`（大于）、`-le`（小于等于）、`-ge`（大于等于）
  - 逻辑运算：`&&`（与）、`||`（或）、`!`（非）

- 条件语句：

  ```
  if condition
  then
      command1
      command2
  fi
  ```

- 循环语句：

  - for 循环：

    ```
    for variable in list
    do
        command1
        command2
    done
    ```

  - while 循环：

    ```
    while condition
    do
        command1
        command2
    done
    ```

### Shell 高级

- 函数：

  ```
  functionname()
  {
      command1
      command2
  }
  ```

- 数组：

  - 定义数组：`array=(value1 value2 value3)`
  - 获取数组元素：`${array[index]}`
  - 获取数组所有元素：`${array[@]}`

- 文件操作：

  - 检查文件是否存在：`if [ -f filename ]`
  - 检查目录是否存在：`if [ -d dirname ]`
  - 检查文件是否可读、可写、可执行：`if [ -r filename ]`、`if [ -w filename ]`、`if [ -x filename ]`
  - 创建文件：`touch filename`
  - 删除文件：`rm filename`
  - 复制文件：`cp sourcefile targetfile`
  - 移动或重命名文件：`mv sourcefile targetfile`
