### Server folder

#### Why do we have a Server folder?
#### This is how your web-app/app application in our case a NodeJS Loopback4 Typescript application will
#### communicate and interact with thethe Blockchain network created Previously in Step X.

## First setup a "wallet" in this folder to contain the private and public key pairs for the 2 users our application requires:
1. the admininstrator called `admin`
```shell
node enrollAdmin.js
```

1. the application user named `user1`
```shell
node registerUser.js
```

## Troubleshooting
First be sure to run
```shell
npm install
```

What does the ./wallet directory look like if all worked correctly?  You shoud see the keys for admin and user1 
for example on my laptop I see for example:

``` text
a ./wallet
a ./wallet/admin
a ./wallet/user1
a ./wallet/user1/63b3239bf4d036a60b029e1b0575c5111adab53494dd608122d7e0292897f15b-priv
a ./wallet/user1/user1
a ./wallet/user1/63b3239bf4d036a60b029e1b0575c5111adab53494dd608122d7e0292897f15b-pub
a ./wallet/admin/admin
a ./wallet/admin/921aa3bae24f9e49bae6f1b59edd570b9d43baa62df28972c20d6d4bc78942b2-priv
a ./wallet/admin/63b3239bf4d036a60b029e1b0575c5111adab53494dd608122d7e0292897f15b-priv
a ./wallet/admin/921aa3bae24f9e49bae6f1b59edd570b9d43baa62df28972c20d6d4bc78942b2-pub


```