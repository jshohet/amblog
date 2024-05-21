import Link from 'next/link'
import React from 'react'

const SignInButton = () => {
  return (
    <div className='flex justify-center'>
      <p>Please<Link href="/api/auth/signin" className='text-blue-500 hover:underline'> Sign In</Link> to view this page.</p>
    </div>
  );
}

export default SignInButton