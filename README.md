# SubPlayer

> SubPlayer is an online subtitle editor

## Deployment
Deployed on Vercel here : [https://sub-player-a-hk.vercel.app/](https://sub-player-a-hk.vercel.app/)

https://user-images.githubusercontent.com/73497800/166067997-88f2faee-2970-4ef4-a56c-b9bef287b08c.mp4

<br>

## Additional Changes made
  - Application had several features that were not immediately obvious to the eye
     - Thus, to make the UX experience better, added a Guided Tour of the application with the help of library `react-joyride`
<br>
    
## Required Changes made

 - Obtained response containing video and captions fron the API using fetch in React

 - Kept only Indian Languages - removed all other languages
    - Languages supported : Bengali (bn), Gujarati (gu), Hindi (hi), Kannada (kn), Malayalam (ml), Marathi (mr),
Nepali (ne), Oriya (or), Panjabi (pa), Sinhala (si), Tamil (ta), Telugu (te), Urdu (ur)

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



## License

MIT © Harvey Zack
