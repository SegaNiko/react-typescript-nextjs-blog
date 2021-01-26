import React, { FC } from "react";

import BlogWrapStyle from "./styleBlogWrap";

const BlogWrap : FC = ({ children }) => {
  return <BlogWrapStyle>{children}</BlogWrapStyle>;
};
export default BlogWrap;
