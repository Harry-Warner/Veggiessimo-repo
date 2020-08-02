// Import built-in types for API routes
// import { NextApiRequest, NextApiResponse } from "next";
import { SitemapStream, streamToPromise, EnumChangefreq } from "sitemap";
import { createGzip } from "zlib";
import client from "../../client";
import groq from "groq";

export default async (req, res) => {
  if (!res) return {};
  try {
    // Set response header
    res.setHeader("content-type", "application/xml");
    res.setHeader("Content-Encoding", "gzip");

    // A Transform for turning a Readable stream of either SitemapItemOptions or url strings into a Sitemap.
    // The readable stream it transforms must be in object mode.
    const smStream = new SitemapStream({
      hostname: "https://veggiessimo.com.au",
    });

    const pipeline = smStream.pipe(createGzip());
    // Add any static entries here
    smStream.write({
      url: "/",
      changefreq: EnumChangefreq.WEEKLY,
    });
    smStream.write({
      url: "/about",
      changefreq: EnumChangefreq.MONTHLY,
    });
    smStream.write({
      url: "/contact",
      changefreq: EnumChangefreq.MONTHLY,
    });
    smStream.write({
      url: "/recipes",
      changefreq: EnumChangefreq.WEEKLY,
    });
    smStream.write({
      url: "/community",
      changefreq: EnumChangefreq.WEEKLY,
    });
    // E.g. we create a sitemap.xml for articles
    // Set articles change frequencey is weekly
    const posts = await client.fetch(
      groq`*[_type == "recipePost" || _type == "communityPost"]{_type, slug, _updatedAt}`
    );
    posts
      .filter((post) => post._type === "recipePost")
      .map((post) => {
        return smStream.write({
          url: `/post/recipes/${post.slug.current}`,
          lastmod: post._updatedAt,
          changefreq: EnumChangefreq.WEEKLY,
        });
      });
    posts
      .filter((post) => post._type === "communityPost")
      .map((post) => {
        return smStream.write({
          url: `/post/community/${post.slug.current}`,
          lastmod: post._updatedAt,
          changefreq: EnumChangefreq.WEEKLY,
        });
      });
    smStream.end();

    // cache the response
    // streamToPromise.then(sm => sitemap = sm)
    streamToPromise(pipeline);
    // stream the response
    pipeline.pipe(res).on("error", (e) => {
      throw e;
    });
  } catch (e) {
    res.status(500).end();
  }
};
