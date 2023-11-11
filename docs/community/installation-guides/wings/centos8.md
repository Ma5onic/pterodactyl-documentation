---
slug: /panel/install/centos8
---

# CentOS 8, Rocky Linux 8, AlmaLinux 8
In this guide we will install Pterodactyl's Wings v1.X — including all of it's dependencies — and configure it to use a SSL connection.


:::tip
This guide is based off the [official installation documentation](./../../../documentation/wings/installing.md) but is tailored specifically for Enterprise Linux 8.
:::

## Install Requirements
We will first begin by installing all of the Wings' [required](../../../documentation/wings/installing.md#dependencies) dependencies.

### Docker

```bash
## Install yum tools
dnf install -y dnf-utils device-mapper-persistent-data lvm2

## Add the docker repo
dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo

## Install docker
dnf install -y docker-ce --nobest

## Enable docker service
systemctl enable docker
systemctl start docker
```

### FirewallD Changes
```bash
firewall-cmd --add-port 8080/tcp --permanent
firewall-cmd --add-port 2022/tcp --permanent
firewall-cmd --permanent --zone=trusted --change-interface=pterodactyl0
firewall-cmd --zone=trusted --add-masquerade --permanent
firewall-cmd --reload
```

## Installing Wings
Great, now all of the dependencies and firewall rules have been dealt with. From here follow the [official Wings installation documentation](./../../../documentation/wings/installing.md#enabling-swap).

:::tip
If you have SELinux enforcement enabled and you are getting AVC denials from your containers, try relocating your Wings data directory from `/var/lib/pterodactyl` to `/var/srv/containers/pterodactyl`. That is where the targeted policy expects Docker to read and write data from.
:::
