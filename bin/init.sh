#!/bin/bash
# 生成 keyfile
mkdir -p config/.mongoReplSet/keyfile
openssl rand -base64 745 > config/.mongoReplSet/keyfile/mongoReplSet-keyfile
chmod 600 config/.mongoReplSet/keyfile/mongoReplSet-keyfile
