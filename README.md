# MongoDB副本集群搭建

> 需要在部署机器上生成 openssl 的 keyfile

```bash
# 初始化环境
./bin/init.sh

# 启动docker-compose-dev
./bin/start.sh

# 进入docker容器
docker exec -it mongo1 /bin/bash

# 连接mongo
mongo -u <username> -p <password>

# 初始化
rs.initiate(
  {
    _id : 'rs0',
    members: [
      { _id : 0, host : "mongo1:27017" },
      { _id : 1, host : "mongo2:27017" },
      { _id : 2, host : "mongo3:27017" }
    ]
  }
)

# 查看状态
rs.status()
```

docker-compose exec mongo mongo --eval "rs.initiate({_id: 'rs0', members: [{_id: 0, host: 'mongo:27017'}]});"
