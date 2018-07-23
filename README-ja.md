*Read this in other languages: [English](README.md).*

# Hyperledger ブロックチェーンを使用した IoT 資産追跡アプリの開発

## イントロダクション

このリポジトリには **IoT資産追跡デバイス**、**Hyperledger ブロックチェーン**、**Node-RED ダッシュボード** を組み立てる3つのセクションがあり、生鮮品のネットワークサプライチェーンを実装します。

温度、湿度、振動、または時間に影響されやすい生鮮品 (食品サプライ・チェーン、冷却保管された医薬品、園芸植物など) の配送に関連する環境条件を追跡するには、このコード・パターンを使用できます。貨物を安全な環境パラメーターの範囲内で安全な時間内に配送しなければならないとしたら、環境センサーを結合した IoT 資産追跡デバイスを使用して、GPS、三角測量、またはビーコンによって現在位置を計算して、その位置をセルラー、5G、Sub1GHz、SigFox、または WiFi のネットワークを介して報告することには極めて大きな価値があります。安全な配送と貨物の決済に、農場、製造業者、処理工場、トラック、港湾、船、流通センター、消費者向け小売店などの複数の参加者が関与する場合、Hyperledger ブロックチェーンを使用すれば、IoT 資産追跡デバイスから報告される配送の進捗を、不変のトランザクションとして記録することができます。

## ワークショップ

私はこのgitリポジトリに関して **[IBM コードパターン](https://developer.ibm.com/jp/)** の [ワークショップ・チュートリアル](Workshop/README-ja.md) にまとめました。
この手順に従って、自分でビルドする方法を学んでください！

## セクションの概要

[最初のセクション](ParticleElectron/README-ja.md) は、**Particle Electron Asset Tracker v2** をセットアップして環境センサーのデータと場所をクラウドに送信する方法を詳しく説明しています。
この実装では、[Particle Electron](https://docs.particle.io/datasheets/kits-and-accessories/particle-shields/#electron-asset-tracker-v2) を使用しますが、他の多くの IoT 資産追跡デバイスでも、場所とデータを送信できるものであれば、同様の結果を得ることができます。
このワークショップチュートリアルのその後の改訂では、他の IoT 資産追跡ボードが追加される予定ですので、今後もチェックしてください。

[2番目のセクション](Blockchain/README-ja.md) は、[Hyperledger](https://www.hyperledger.org/) Fabric、Hyperledger Composer、Hyperledger Composer REST APIを使用して、IBM Cloud 上の [Kubernetes cluster](https://console.bluemix.net/docs/tutorials/scalable-webapp-kubernetes.html#deploy-a-scalable-web-application-on-kubernetes) で管理された [IBM Cloud Container Service](https://www.ibm.com/cloud/container-service) 上で、**生鮮品のビジネスネットワーク** を実装しています。

[3番目のセクション](Node-RED/README-ja.md) では、**Where、What、When** のパワーが、ジオロケーションパスや環境センサーデータをプロットするダッシュボードで最もよく視覚化され、トリガーとアラートを制御できることを示します。
IBM Cloud でホストされた Cloud Foundry アプリケーションで稼働する **[Node-RED](https://nodered.org/)** と Node.js サーバーを使用し、IoT 資産追跡データを受信して、Hyperledger Composer REST API 経由で Hyperledgerファブリックに書き込みます。
また、**Node-RED ダッシュボード** を使用して地図上に貨物をプロットします。

楽しくやりましょう！
このチュートリアルを改善する提案がある場合は、私にフィードバックしてください。

# ライセンス

[Apache 2.0](LICENSE)
