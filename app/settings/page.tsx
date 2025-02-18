import React from 'react'

const page = () => {
  return (
    <div>
      <a
        href={`https://api.imgur.com/oauth2/authorize?client_id=${process.env.IMGUR_CLIENT_ID}&response_type=token&state=imgur`}>imgur</a>
    </div>
  );
}

export default page