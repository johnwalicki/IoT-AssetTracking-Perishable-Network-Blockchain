*Read this in other languages: [English](README.md).*

# IoT 資産トラッカー Perishable Network ブロックチェーン ワークショップ
著者: [@johnwalicki](https://twitter.com/johnwalicki)

# 元となるワークショップは: **https://github.com/johnwalicki/IoT-AssetTracking-Perishable-Network-Blockchain**

私はこのgitリポジトリを **[IBM コードパターン](https://developer.ibm.com/code/)** の [ワークショップ・チュートリアル](README.md) として読むように調整しました。

## Section Overviews

[最初のセクション](../ParticleElectron/README-ja.md) は、**Particle Electron Asset Tracker v2** をセットアップして環境センサーのデータと場所をクラウドに送信する方法を詳しく説明しています。
我々は多数の Particle Electrons を持たないので、私はその代表として所持するものをデモします。ワークショップの最後に、このトラッカーから環境データを読んでいきます。

[2番目のセクション](../Blockchain/README-ja.md) は、[Hyperledger](https://www.hyperledger.org/) Fabric、Hyperledger Composer、Hyperledger Composer REST APIを使用して、IBM Cloud 上の [Kubernetes cluster](https://console.bluemix.net/docs/tutorials/scalable-webapp-kubernetes.html#deploy-a-scalable-web-application-on-kubernetes) で管理された [IBM Cloud Container Service](https://www.ibm.com/cloud/container-service) 上で、**生鮮品のビジネスネットワーク** を実装しています。

[3番目のセクション](../Node-RED/README-ja.md) では、**Where、What、When** のパワーが、ジオロケーションパスや環境センサーデータをプロットするダッシュボードで最もよく視覚化され、トリガーとアラートを制御できることを示します。
IBM Cloud でホストされた Cloud Foundry アプリケーションで稼働する **[Node-RED](https://nodered.org/)** と Node.js サーバーを使用し、IoT 資産追跡データを受信して、Hyperledger Composer REST API 経由で Hyperledgerファブリックに書き込みます。
また、**Node-RED ダッシュボード** を使用して地図上に貨物をプロットします。

* 独自の Particle Electron を購入した場合は、Particle のデバイスIDとアクセストークンを知り、それを Node-RED 初期化フローに設定する必要があります。
* あなたがワークショップに参加している場合、インストラクターは Particle のデバイスIDとアクセストークンを別のスライド (GitHubには含まれません) で共有します。

ワークショップの最後には、食品安全サプライチェーンが導入された Hyperledger ブロックチェーンと、Particle のルートを追跡する Node-RED Map ダッシュボードが用意されています。
