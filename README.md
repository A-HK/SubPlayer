# SubPlayer

> SubPlayer is an online subtitle editor

![Screenshot 2022-04-30 003055](https://user-images.githubusercontent.com/73497800/166009273-3192509f-04b7-4f07-9612-b58b898d7112.png)

## Changes made

 - Obtained response containing video and captions fron the API using fetch in React

 - Kept only Indian Languages - removed all other languages

 - Cleaned up the UI
    - Replaced the default Japanese video and captions with an English alternative and captions in JSON format
    - Removed Chinese advertisement on the right 

<br> 

## To set up on local environment
1. Clone the repository
```
git clone https://github.com/A-HK/SubPlayer.git
```
2. Navigate into the project directory
```
cd SubPlayer
```
3. Install all the necessary node modules
```
yarn install
```
4. Use `start` for development environments and `build` for production environments
```
yarn start || yarn build
```



## Deployment
Deployed on Vercel here : [https://sub-player-a-hk.vercel.app/](https://sub-player-a-hk.vercel.app/)

## License

MIT © Harvey Zack
