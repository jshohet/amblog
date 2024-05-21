'use client'

import {createContext, useContext} from 'react';
import {IPostsProps, Post} from '../types/PostType'



export const PostContext = createContext<IPostsProps>({
    posts: [],
    setPosts: ():Post[] => []
});

