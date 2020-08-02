// import React from "react";
// import groq from "groq";
// import client from "../client";

// const post_url = groq`*[_type == "recipePost"]{slug}`;

// const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//         ${posts
//           .map(({ slug }) => {
//             return `
//                     <url>
//                         <loc>/post/recipes/${slug.current}</loc>
//                     </url>
//                 `;
//           })
//           .join("")}
//     </urlset>
//     `;

// const Sitemap = ({ posts }) => {
//   res.setHeader("Content-Type", "text/xml");
//   res.write(createSitemap(posts));
//   res.end();
//   return res;
// };

// // class Sitemap extends React.Component {
// //   static async getServerSideProps({ res }) {
// //     const posts = await client.fetch(post_url);

// //     res.setHeader("Content-Type", "text/xml");
// //     res.write(createSitemap(posts));
// //     res.end();
// //   }
// // }

// Sitemap.getInitialProps = async () => {
//   const posts = await client.fetch(post_url);
//   return { posts };
// };

// export default Sitemap;
