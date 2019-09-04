const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');


app.use(cors());

app.get("/",async(req,res)=>{
    const user = req.query.name || 'i_rishisundar';
  await fetch(`https://www.instagram.com/${user}/?__a=1`).then((resp) => resp.json()).then(function (data) {
       let{username,edge_followed_by,edge_follow,edge_owner_to_timeline_media,profile_pic_url_hd} = data.graphql.user;
              res.json({
                  response:true,
                  result:{
                      username,"followers":edge_followed_by.count,
                      'following':  edge_follow.count,
                      'posts': edge_owner_to_timeline_media.count,
                      'profilelPic': profile_pic_url_hd
                  }
              });
        });

})

// let fetchIDUrl = 'https://www.instagram.com/' + user + '/?__a=1';



app.listen(3000,()=>{
    console.log('server started')
})