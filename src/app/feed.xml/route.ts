import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://duhitta.com'
  
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Duhitta - Where Modern Meets Tradition</title>
  <description>Duhitta is a fashion brand made for women by women, offering modern yet ethnic and traditional wear that celebrates cultural heritage with contemporary style.</description>
  <link>${baseUrl}</link>
  <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
  <language>en-US</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <item>
    <title>Welcome to Duhitta - Modern Ethnic Fashion</title>
    <description>Discover Duhitta's collection of modern ethnic and traditional wear designed for women by women.</description>
    <link>${baseUrl}</link>
    <guid>${baseUrl}</guid>
    <pubDate>${new Date().toUTCString()}</pubDate>
  </item>
  <item>
    <title>New Arrivals - Latest Ethnic Fashion</title>
    <description>Explore our latest collection of modern ethnic wear and traditional dresses.</description>
    <link>${baseUrl}/new-arrivals</link>
    <guid>${baseUrl}/new-arrivals</guid>
    <pubDate>${new Date().toUTCString()}</pubDate>
  </item>
  <item>
    <title>Ethnic Wear Collection</title>
    <description>Discover our curated collection of ethnic wear that blends tradition with contemporary style.</description>
    <link>${baseUrl}/ethnic-wear</link>
    <guid>${baseUrl}/ethnic-wear</guid>
    <pubDate>${new Date().toUTCString()}</pubDate>
  </item>
</channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 