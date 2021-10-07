# Caliper安装步骤 （本文使用的是docker容器的方式）

1. 本文所需相关资料见https://github.com/zouyip/caliper-benchmarks-demo 。
2. 注意事项：

   - config.yaml文件中的配置：需要绑定fabric
   - network-config.yaml文件配置中：client的配置，如果不需要注册用户，那么client直接配置使用Admin@org1.example.com 管理员用户即可。（详见demo中的network-config_1.4.yaml配置文件）
   - 如果现有fabric环境中使用的不是fabric-ca-server管理用户身份的话，则需要吧CA的相关配置注释掉。（详见demo中的network-config_1.4.yaml配置文件）
   - 注意.env文件中的COMPOSE_PROJECT_NAME的值需要和现有fabrci网络环境中的.env文件的一致。
   - 根据将要测试的智能合约的逻辑编写相应的open.js等测试回调文件。
